function recipeText(recipe) {
  return `${recipe.name || ''} ${(recipe.ingredients || []).map(item => item.name).join(' ')} ${(recipe.seasonings || []).map(item => item.name).join(' ')}`;
}

function buildAlternatives(recipe, rules, override = {}) {
  const text = recipeText(recipe);
  const swaps = [];
  for (const item of recipe.ingredients || []) for (const substitute of item.substitutes || []) {
    swaps.push({
      ingredient: item.name,
      substitute,
      ratio: '等重量替换',
      effect: '风味和质地会略有变化',
      timeImpact: '按替代食材大小和含水量微调时间',
      allergenNote: (recipe.allergens || []).length ? '替换后仍需重新核对包装标注和过敏原' : '替换后请核对过敏原'
    });
  }
  if (Array.isArray(override.ingredientSwaps)) swaps.push(...override.ingredientSwaps);
  const containsMeat = /猪|牛|羊|鸡|鸭|鹅|鱼|虾|蟹|贝|肉|肠|腊味|蛋|奶|海鲜/.test(text);
  return {
    ingredientSwaps: swaps,
    dietaryVariants: {
      lessOil: /油|炸|煎|炒/.test(text) ? '烹调油先减少约三分之一，必要时用少量水或不粘锅辅助烹调；热量会相应降低。' : null,
      lowSodium: '盐和含钠酱料先减少约三分之一，利用葱姜蒜、醋和天然香辛料补充风味。',
      mild: /辣|椒|麻/.test(text) ? '减少鲜辣椒、辣椒粉或辣油，用甜椒补充色泽和体积。' : null,
      vegetarian: containsMeat ? null : '保持植物性主料，复合调味料需确认不含动物来源配料。',
      ...(override.dietaryVariants || {})
    }
  };
}

function selectStorageRule(recipe, rules) {
  const text = recipeText(recipe);
  if (/生腌|刺身|凉拌.*海鲜|凉菜.*海鲜|沙拉|冷盘/.test(text)) return { key: 'highRisk', value: rules.highRisk };
  if (/米饭|炒饭|焖饭|饭团|粥/.test(text)) return { key: 'rice', value: rules.rice };
  if (/炸|酥|脆/.test(text)) return { key: 'fried', value: rules.fried };
  if (/汤|羹|炖|煲/.test(text)) return { key: 'soup', value: rules.soup };
  return { key: 'default', value: rules.default };
}

function buildStorage(recipe, rules, override = {}) {
  const selected = selectStorageRule(recipe, rules);
  const base = { ...selected.value, ...override };
  let reheatingMethods = override.reheatingMethods;
  if (!Array.isArray(reheatingMethods)) {
    reheatingMethods = selected.key === 'highRisk' ? [] : [
      { device: '微波炉', minutes: [1, 3], instruction: '加盖留缝，中途翻动或搅拌一次；按份量调整。' },
      { device: '蒸锅', minutes: [5, 10], instruction: '水开后加盖复热，避免长时间反复加热。' }
    ];
  }
  return {
    roomTemperatureMinutes: base.roomTemperatureMinutes ?? null,
    refrigeratedDays: base.refrigeratedDays ?? null,
    frozenDays: base.frozenDays ?? null,
    freezeRecommended: Boolean(base.freezeRecommended),
    overnightRecommended: Boolean(base.overnightRecommended),
    reheatingMethods,
    notes: override.notes || [
      '成品不再冒热气后尽快分装冷藏，避免在室温长时间放置。',
      selected.key === 'highRisk' ? '建议现做现吃，不建议隔夜或冷冻。' : '只复热计划食用的份量，避免反复冷却和加热。'
    ]
  };
}

function validateGuidanceCoverage(recipes) {
  const errors = [];
  for (const recipe of recipes) {
    const storage = recipe.storage;
    if (!storage || typeof storage.freezeRecommended !== 'boolean' || typeof storage.overnightRecommended !== 'boolean') errors.push(`${recipe.id}: missing storage decisions`);
    for (const method of storage?.reheatingMethods || []) if (!method.device || !Array.isArray(method.minutes) || method.minutes.length !== 2 || !method.instruction) errors.push(`${recipe.id}: malformed reheating method`);
    for (const swap of recipe.alternatives?.ingredientSwaps || []) if (!swap.ingredient || !swap.substitute || !swap.ratio || !swap.effect || !swap.timeImpact) errors.push(`${recipe.id}: incomplete swap`);
  }
  return errors;
}

module.exports = { buildAlternatives, buildStorage, validateGuidanceCoverage };
