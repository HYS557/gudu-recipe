const { SUPPORTED_SERVINGS } = require('./recipe-schema');

const PROCESS_RE = /炸制|煎炸|焯水|煮面水|清水|高汤|卤水|水淀粉|勾芡|宽油/;
const GENTLE_RE = /盐|酱油|生抽|老抽|蚝油|糖|醋|辣椒|胡椒|花椒|香料|孜然|味精|鸡精|料酒|味醂/;

function classifyScalingRule(item) {
  const text = `${item.name || ''} ${item.amountText || ''} ${item.unit || ''}`;
  if (PROCESS_RE.test(text)) return 'process';
  if (GENTLE_RE.test(text)) return 'gentle';
  return 'linear';
}

function numericAmount(item) {
  const raw = item.amount ?? item.baseAmount;
  if (Number.isFinite(Number(raw))) return Number(raw);
  const match = String(raw ?? item.amountText ?? '').match(/\d+(?:\.\d+)?/);
  if (match) return Number(match[0]);
  if (/半/.test(String(raw ?? item.amountText ?? ''))) return 0.5;
  const text = `${item.name || ''} ${raw || ''} ${item.amountText || ''}`;
  if (/水|汤/.test(text)) return 200;
  if (/炸制|煎炸/.test(text) && /油/.test(text)) return 500;
  if (/裹粉|淀粉|生粉/.test(text)) return 30;
  if (/酱油|生抽|老抽|蚝油|醋|料酒|油/.test(text)) return 1;
  if (/盐|胡椒|花椒|香料|孜然|八角|桂皮|香叶|草果|香草精/.test(text)) return 0.5;
  if (/糖/.test(text)) return 1;
  if (/柠檬汁/.test(text)) return 1;
  if (/面包.*片/.test(text)) return 3;
  if (/米饭.*碗|满碗/.test(text)) return 1;
  if (/葱|姜|蒜|香菜|芝麻|枸杞|酵母|酱/.test(text)) return 1;
  return null;
}

function roundKitchen(value, unit) {
  if (/个|枚|只|颗|朵|根|片|张/.test(unit || '')) return Math.round(value * 2) / 2;
  if (value < 10) return Math.round(value * 10) / 10;
  return Math.round(value);
}

function formatAmount(amount, unit) {
  return `${Number.isInteger(amount) ? amount : amount.toFixed(1).replace(/\.0$/, '')}${unit || ''}`;
}

function scaleItem(item, ratio) {
  const base = numericAmount(item);
  if (base === null) return { ...item, scalingNote: '按口味和锅具调整' };
  const rule = classifyScalingRule(item);
  let factor = ratio;
  if (rule === 'gentle') factor = Math.pow(ratio, 0.75);
  if (rule === 'process') factor = Math.min(1.5, Math.max(0.75, Math.sqrt(ratio)));
  const amount = roundKitchen(base * factor, item.unit);
  return { ...item, amount, displayAmount: formatAmount(amount, item.unit), scalingRule: rule };
}

function scaleRecipeAmounts(recipe, targetServings) {
  if (!SUPPORTED_SERVINGS.includes(targetServings)) throw new Error(`unsupported servings: ${targetServings}`);
  const baseServings = Math.max(1, Number(recipe.servings) || 2);
  const ratio = targetServings / baseServings;
  return {
    ingredients: (recipe.ingredients || []).map(item => scaleItem(item, ratio)),
    seasonings: (recipe.seasonings || []).map(item => scaleItem(item, ratio)),
    notice: '调味料已采用缓增换算，请先少量调味，出锅前尝味调整。'
  };
}

function buildScalingMetadata(recipe, override = {}) {
  const ingredientRules = {};
  const seasoningRules = {};
  (recipe.ingredients || []).forEach((item, index) => { ingredientRules[`${index}:${item.name}`] = override.ingredientRules?.[`${index}:${item.name}`] || classifyScalingRule(item); });
  (recipe.seasonings || []).forEach((item, index) => { seasoningRules[`${index}:${item.name}`] = override.seasoningRules?.[`${index}:${item.name}`] || classifyScalingRule(item); });
  return { baseServings: Math.max(1, Number(recipe.servings) || 2), supportedServings: [...SUPPORTED_SERVINGS], ingredientRules, seasoningRules };
}

module.exports = { classifyScalingRule, scaleRecipeAmounts, buildScalingMetadata };
