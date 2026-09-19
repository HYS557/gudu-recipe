const DEFAULT_UNIT_GRAMS = {
  '勺': 15, '大勺': 15, '汤匙': 15, '瓷汤勺': 15,
  '茶匙': 5, '小勺': 5, '瓣': 5, '枚': 50, '个': 50,
  '颗': 8, '粒': 2, '根': 12, '片': 10, '张': 50,
  '只': 100, '条': 100, '块': 50, '朵': 10, '滴': 0.05,
  '棵': 80, '枝': 2, '件': 50, '套': 100, '大片': 20, '大叶': 20, '对': 150,
  '碗': 300, '大碗': 300, '份': 10, '包': 100, '盒': 250
};

const KEYWORDS = [
  ['oil', /油|猪油|黄油|酥油/],
  ['water', /水|汤|冰块/],
  ['sugar', /糖|蜂蜜|糖浆/],
  ['starch', /淀粉|生粉|藕粉|澄粉/],
  ['rice', /米|糯米|小米|燕麦|青稞|谷物/],
  ['flour', /面粉|面条|面皮|粉条|粉丝|河粉|米粉|馒头|面包|饺子皮/],
  ['egg', /蛋/],
  ['dairy', /奶|芝士|乳酪|酸奶|炼乳/],
  ['fish', /鱼|虾|蟹|贝|蚝|蛤|螺|鳝|蛏|鳗|海参|鱿|墨鱼|章鱼/],
  ['pork', /五花|肥肉|猪油渣/],
  ['leanMeat', /猪|牛|羊|鸡|鸭|鹅|肉|排骨|火腿|腊肠|叉烧|培根|内脏|肝|肚/],
  ['beans', /豆|花生|芝麻|坚果|腐竹|杏仁|松子|腰果/],
  ['sauce', /酱油|生抽|老抽|蚝油|豆瓣|酱|醋|酒|腐乳|味醂|捞汁|出汁/],
  ['spice', /盐|胡椒|花椒|八角|桂皮|香叶|孜然|辣椒粉|香料|十三香|咖喱|酵母|泡打粉|小苏打|食用碱/],
  ['fruit', /苹果|梨|桃|橙|柠檬|青柠|芒果|草莓|蓝莓|葡萄|西瓜|菠萝|椰|枣|桂圆|荔枝|百香果|西柚|番石榴|芭乐/],
  ['vegetable', /葱|姜|蒜|椒|菜|笋|菇|蘑|萝卜|瓜|茄|藕|薯|芋|玉米|香菜|芹菜|韭|芽|叶|花|木耳|海带|荸荠|马蹄|罗勒|百里香|迷迭香|欧芹|茶/]
];

function normalizeIngredientName(name, aliases = {}) {
  if (aliases[name]) return aliases[name];
  const cleaned = String(name || '').replace(/[（(].*?[）)]/g, '').trim();
  if (aliases[cleaned]) return aliases[cleaned];
  const found = KEYWORDS.find(([, pattern]) => pattern.test(cleaned));
  return found ? found[0] : (cleaned ? 'composite' : null);
}

function firstNumber(text) {
  const source = String(text ?? '');
  if (/半/.test(source)) return 0.5;
  const match = source.match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function inferAmbiguousGrams(item, kind) {
  const text = `${item.name || ''} ${item.amount || ''} ${item.amountText || ''}`;
  if (/水|汤/.test(text)) return 200;
  if (/煎炸|炸制/.test(text) && /油/.test(text)) return 20;
  if (/裹粉|淀粉|生粉/.test(text)) return 30;
  if (/糖/.test(text)) return 15;
  if (/酵母|酵头/.test(text)) return 3;
  if (/酱/.test(text)) return 5;
  if (/油|酱油|生抽|老抽|蚝油|醋|料酒/.test(text)) return 10;
  if (/盐|胡椒|花椒|香料|八角|桂皮|香叶|孜然/.test(text)) return 3;
  if (/葱|姜|蒜|香菜|芝麻|枸杞/.test(text)) return 5;
  if (/蛋/.test(text)) return 25;
  if (/面包.*片/.test(text)) return 60;
  if (/米饭.*碗/.test(text)) return 300;
  if (kind === 'seasonings' && /适量|少许|微量|按口味|数滴/.test(text)) return 3;
  return null;
}

function amountInGrams(item, kind, quantityAssumptions = {}) {
  const assumptionKey = `${kind}:${item.name}`;
  if (Number.isFinite(quantityAssumptions[assumptionKey])) return quantityAssumptions[assumptionKey];
  const raw = item.amount ?? item.baseAmount ?? item.amountText;
  const value = Number.isFinite(Number(raw)) ? Number(raw) : firstNumber(raw);
  const unitText = String(item.unit || raw || '').trim();
  if (value !== null) {
    if (/千克|公斤|kg/i.test(unitText)) return value * 1000;
    if (/克|\bg\b/i.test(unitText)) return value;
    if (/毫升|ml/i.test(unitText)) return value;
    const unit = Object.keys(DEFAULT_UNIT_GRAMS).find(key => unitText.includes(key));
    if (unit) return value * DEFAULT_UNIT_GRAMS[unit];
    if (typeof raw === 'string' && /克|g/i.test(raw)) return value;
  }
  return inferAmbiguousGrams(item, kind);
}

function round1(value) { return Math.round(value * 10) / 10; }

function fallbackMacroShares(recipe) {
  const text = `${recipe.name || ''} ${(recipe.tags || []).join(' ')}`;
  if (/甜|糖|糕|饼|饮品|奶茶|果/.test(text)) return { protein: 0.08, fat: 0.22, carbs: 0.70 };
  if (/肉|鱼|虾|蟹|鸡|鸭|牛|羊|蛋/.test(text)) return { protein: 0.24, fat: 0.46, carbs: 0.30 };
  if (/粥|饭|面|粉|馒头|包子|饺/.test(text)) return { protein: 0.12, fat: 0.20, carbs: 0.68 };
  return { protein: 0.16, fat: 0.32, carbs: 0.52 };
}

function calculateNutrition(recipe, refs, aliases, override = {}) {
  const assumptions = ['营养为配方估算值'];
  const quantityAssumptions = override.quantityAssumptions || {};
  let rawProtein = 0, rawFat = 0, rawCarbs = 0, inputWeight = 0;
  for (const kind of ['ingredients', 'seasonings']) {
    for (const item of recipe[kind] || []) {
      let grams = amountInGrams(item, kind, quantityAssumptions);
      if (!Number.isFinite(grams)) continue;
      const key = normalizeIngredientName(item.name, aliases);
      const ref = refs[key];
      if (!ref) continue;
      if (key === 'composite' && !assumptions.includes('复合食材按类别平均值估算')) assumptions.push('复合食材按类别平均值估算');
      if (key === 'oil' && Number.isFinite(override.retainedOilG)) grams = Math.min(grams, override.retainedOilG);
      if (key === 'water' && Number.isFinite(override.consumedLiquidRatio)) grams *= override.consumedLiquidRatio;
      const edible = grams * (Number.isFinite(ref.edibleFraction) ? ref.edibleFraction : 1);
      inputWeight += edible;
      rawProtein += edible * ref.proteinG / 100;
      rawFat += edible * ref.fatG / 100;
      rawCarbs += edible * ref.carbsG / 100;
    }
  }
  if (Number.isFinite(override.retainedOilG)) assumptions.push(`吸油量按${override.retainedOilG}克计`);
  if (Number.isFinite(override.consumedLiquidRatio)) assumptions.push(`液体按${Math.round(override.consumedLiquidRatio * 100)}%计入成品`);
  if (Number.isFinite(override.hydrationGainG)) assumptions.push(`吸水增重按${override.hydrationGainG}克计`);

  const calories = Math.max(1, Math.round(Number(recipe.calories) || Number(recipe.caloriePerServing) * Number(recipe.servings || 1) || 1));
  const rawEnergy = rawProtein * 4 + rawFat * 9 + rawCarbs * 4;
  let protein, fat, carbs;
  if (rawEnergy > 0) {
    const factor = calories / rawEnergy;
    protein = rawProtein * factor; fat = rawFat * factor; carbs = rawCarbs * factor;
  } else {
    const shares = fallbackMacroShares(recipe);
    protein = calories * shares.protein / 4;
    fat = calories * shares.fat / 9;
    carbs = calories * shares.carbs / 4;
    assumptions.push('三大营养素按菜品结构估算');
  }
  const servings = Math.max(1, Number(recipe.servings) || 2);
  const finishedWeightG = Math.max(1, Math.round(Number(override.yieldWeightG) || inputWeight + Number(override.hydrationGainG || 0) || calories / 1.5));
  const total = { caloriesKcal: calories, proteinG: round1(protein), fatG: round1(fat), carbsG: round1(carbs) };
  const divide = divisor => ({
    caloriesKcal: Math.round(calories / divisor),
    proteinG: round1(protein / divisor), fatG: round1(fat / divisor), carbsG: round1(carbs / divisor)
  });
  return {
    finishedWeightG,
    servingWeightG: Math.round(finishedWeightG / servings),
    servings,
    total,
    perServing: divide(servings),
    per100g: divide(finishedWeightG / 100),
    assumptions
  };
}

function findUnresolvedNutritionInputs(recipes, refs, aliases, overrides = {}) {
  const unresolved = [];
  for (const recipe of recipes) {
    const override = overrides[recipe.id] || {};
    for (const kind of ['ingredients', 'seasonings']) {
      for (const item of recipe[kind] || []) {
        const grams = amountInGrams(item, kind, override.quantityAssumptions || {});
        const key = normalizeIngredientName(item.name, aliases);
        if (!Number.isFinite(grams) || !key || !refs[key]) unresolved.push({ recipeId: recipe.id, kind, name: item.name, amount: item.amount ?? item.baseAmount ?? item.amountText, unit: item.unit || null, reason: !Number.isFinite(grams) ? 'quantity' : 'reference' });
      }
    }
  }
  return unresolved;
}

module.exports = { normalizeIngredientName, calculateNutrition, findUnresolvedNutritionInputs, amountInGrams };
