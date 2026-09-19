const PHASES = ['prepMinutes', 'cookMinutes', 'soakMinutes', 'marinateMinutes', 'fermentMinutes', 'restMinutes', 'coolMinutes'];

function nonNegative(value) { return Math.max(0, Number(value) || 0); }

function defaultCongeeVariants(cookMinutes) {
  const stovetop = Math.max(30, cookMinutes || 45);
  return [
    { key: 'stovetop', label: '普通锅', cookMinutes: stovetop, note: '浸泡后小火熬煮，期间搅拌防粘底' },
    { key: 'riceCooker', label: '电饭煲', cookMinutes: Math.max(50, Math.round(stovetop * 1.2)), note: '使用煮粥程序，结束后焖10分钟' },
    { key: 'pressureCooker', label: '压力锅', cookMinutes: Math.max(18, Math.round(stovetop * 0.5)), note: '按设备说明自然泄压' }
  ];
}

function deriveTimeBreakdown(recipe, override = {}) {
  const prepMinutes = nonNegative(override.prepMinutes ?? recipe.prepTimeMinutes);
  const cookMinutes = nonNegative(override.cookMinutes ?? recipe.cookTimeMinutes);
  const result = {
    activeMinutes: nonNegative(override.activeMinutes ?? (recipe.steps || []).reduce((sum, step) => sum + nonNegative(step.timerSeconds) / 60, 0)),
    prepMinutes,
    cookMinutes,
    soakMinutes: nonNegative(override.soakMinutes),
    marinateMinutes: nonNegative(override.marinateMinutes),
    fermentMinutes: nonNegative(override.fermentMinutes),
    restMinutes: nonNegative(override.restMinutes),
    coolMinutes: nonNegative(override.coolMinutes),
    totalElapsedMinutes: 0,
    applianceVariants: Array.isArray(override.applianceVariants) ? override.applianceVariants : []
  };
  let elapsed = PHASES.reduce((sum, field) => sum + result[field], 0);
  for (const group of override.parallelGroups || []) {
    const fields = group.filter(field => PHASES.includes(field));
    if (fields.length > 1) elapsed -= fields.reduce((sum, field) => sum + result[field], 0) - Math.max(...fields.map(field => result[field]));
  }
  result.totalElapsedMinutes = Math.max(nonNegative(override.totalElapsedMinutes), Math.round(elapsed));
  if (!result.applianceVariants.length && (recipe.categoryType === 'congee' || /粥/.test(recipe.name || ''))) result.applianceVariants = defaultCongeeVariants(cookMinutes);
  return result;
}

module.exports = { deriveTimeBreakdown };
