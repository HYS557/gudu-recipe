(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.RecipeDetails = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  const supported = [1, 2, 4, 6];
  const processRe = /炸制|煎炸|焯水|煮面水|清水|高汤|卤水|水淀粉|勾芡|宽油/;
  const gentleRe = /盐|酱油|生抽|老抽|蚝油|糖|醋|辣椒|胡椒|花椒|香料|孜然|味精|鸡精|料酒|味醂/;

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }
  function baseAmount(item) {
    const raw = item.amount ?? item.baseAmount;
    if (Number.isFinite(Number(raw))) return Number(raw);
    const match = String(raw ?? item.amountText ?? '').match(/\d+(?:\.\d+)?/);
    if (match) return Number(match[0]);
    if (/半/.test(String(raw ?? item.amountText ?? ''))) return 0.5;
    return null;
  }
  function rule(item) {
    const text = `${item.name || ''} ${item.amountText || ''}`;
    return processRe.test(text) ? 'process' : gentleRe.test(text) ? 'gentle' : 'linear';
  }
  function scaleItem(item, ratio) {
    const base = baseAmount(item);
    if (base === null) return { ...item, displayAmount: item.amountText || item.amount || '按口味调整' };
    const kind = rule(item);
    const factor = kind === 'gentle' ? Math.pow(ratio, 0.75) : kind === 'process' ? Math.min(1.5, Math.max(0.75, Math.sqrt(ratio))) : ratio;
    let amount = base * factor;
    amount = /个|枚|只|颗|朵|根|片|张/.test(item.unit || '') ? Math.round(amount * 2) / 2 : amount < 10 ? Math.round(amount * 10) / 10 : Math.round(amount);
    return { ...item, amount, displayAmount: `${amount}${item.unit || ''}`, scalingRule: kind };
  }
  function scale(recipe, servings) {
    if (!supported.includes(servings)) throw new Error(`unsupported servings: ${servings}`);
    const ratio = servings / (Number(recipe.servings) || 2);
    return { servings, ingredients: (recipe.ingredients || []).map(item => scaleItem(item, ratio)), seasonings: (recipe.seasonings || []).map(item => scaleItem(item, ratio)) };
  }
  function section(title, content) {
    if (!content) return '';
    return `<details class="recipe-info-section"><summary>${escapeHtml(title)}</summary><div class="recipe-info-content">${content}</div></details>`;
  }
  function renderNutrition(recipe, servings) {
    const n = recipe.nutrition;
    if (!n) return '';
    const factor = servings / n.servings;
    const total = Object.fromEntries(Object.entries(n.total).map(([key, value]) => [key, key === 'caloriesKcal' ? Math.round(value * factor) : Math.round(value * factor * 10) / 10]));
    const content = `<div class="nutrition-grid"><span>本次用量<strong>${total.caloriesKcal} kcal</strong></span><span>每份<strong>${n.perServing.caloriesKcal} kcal</strong></span><span>每100克<strong>${n.per100g.caloriesKcal} kcal</strong></span><span>每份重量<strong>${n.servingWeightG}克</strong></span><span>蛋白质<strong>${total.proteinG}克</strong></span><span>脂肪<strong>${total.fatG}克</strong></span><span>碳水<strong>${total.carbsG}克</strong></span></div><p class="recipe-info-note">${n.assumptions.map(escapeHtml).join('；')}</p>`;
    return section('营养与份量', content);
  }
  function renderTimes(recipe) {
    const t = recipe.timeBreakdown;
    if (!t) return '';
    const phases = [['主动操作', t.activeMinutes], ['备料', t.prepMinutes], ['烹饪', t.cookMinutes], ['浸泡', t.soakMinutes], ['腌制', t.marinateMinutes], ['发酵', t.fermentMinutes], ['静置', t.restMinutes], ['冷却', t.coolMinutes]].filter(([, value]) => value > 0);
    const variants = (t.applianceVariants || []).map(item => `<li><strong>${escapeHtml(item.label)}</strong>：约${item.cookMinutes}分钟，${escapeHtml(item.note)}</li>`).join('');
    return section('时间明细', `<div class="time-chip-row">${phases.map(([label, value]) => `<span>${label} ${value}分钟</span>`).join('')}</div><p>总耗时约<strong>${t.totalElapsedMinutes}分钟</strong></p>${variants ? `<ul>${variants}</ul>` : ''}`);
  }
  function renderAlternatives(recipe) {
    const a = recipe.alternatives;
    if (!a) return '';
    const swaps = (a.ingredientSwaps || []).map(item => `<li><strong>${escapeHtml(item.ingredient)}</strong> → ${escapeHtml(item.substitute)}（${escapeHtml(item.ratio)}）；${escapeHtml(item.effect)}</li>`).join('');
    const labels = { lessOil: '少油版', lowSodium: '低盐版', mild: '不辣版', vegetarian: '素食版' };
    const variants = Object.entries(a.dietaryVariants || {}).filter(([, value]) => value).map(([key, value]) => `<li><strong>${labels[key] || escapeHtml(key)}</strong>：${escapeHtml(value)}</li>`).join('');
    if (!swaps && !variants) return '';
    return section('食材替换与饮食调整', `<ul>${swaps}${variants}</ul>`);
  }
  function renderStorage(recipe) {
    const s = recipe.storage;
    if (!s) return '';
    const facts = [`常温最多${s.roomTemperatureMinutes ?? '不建议'}分钟`, `冷藏${s.refrigeratedDays ?? '不建议'}天`, s.freezeRecommended ? `可冷冻${s.frozenDays}天` : '不建议冷冻', s.overnightRecommended ? '可隔夜保存' : '不建议隔夜'].map(escapeHtml).join(' · ');
    const methods = (s.reheatingMethods || []).map(item => `<li><strong>${escapeHtml(item.device)}</strong> ${item.minutes[0]}–${item.minutes[1]}分钟：${escapeHtml(item.instruction)}</li>`).join('');
    return section('保存与复热', `<p>${facts}</p>${methods ? `<ul>${methods}</ul>` : ''}<p class="recipe-info-note">${(s.notes || []).map(escapeHtml).join('；')}</p>`);
  }
  return { escapeHtml, scale, renderNutrition, renderTimes, renderAlternatives, renderStorage };
});
