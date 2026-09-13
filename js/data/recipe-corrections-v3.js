/**
 * 第三批：15道导入损坏菜谱的文本恢复。
 * 只恢复被拼接的 instruction/chefTip 和可从正文直接读取的计时，
 * 不把机械清理冒充为来源核验。
 */
(function () {
  const targetIds = new Set([
    'rec_gudu_0056', 'rec_gudu_0129',
    'rec_gudu_0201', 'rec_gudu_0202', 'rec_gudu_0203', 'rec_gudu_0204',
    'rec_gudu_0205', 'rec_gudu_0206', 'rec_gudu_0207', 'rec_gudu_0208',
    'rec_gudu_0209', 'rec_gudu_0210', 'rec_gudu_0211', 'rec_gudu_0212',
    'rec_gudu_0213'
  ]);

  function recover(text) {
    const raw = String(text || '').trim();
    const marker = /['"]?\s*,\s*chefTip\s*:\s*['"]/i;
    const match = marker.exec(raw);
    if (!match) return { instruction: raw, tip: '' };
    const instruction = raw.slice(0, match.index).trim().replace(/[,'"]+$/, '').trim();
    const tip = raw.slice(match.index + match[0].length).trim().replace(/['",;]+$/, '').trim();
    return { instruction, tip };
  }

  function explicitSeconds(text) {
    const values = [];
    for (const m of String(text).matchAll(/(\d+)\s*(?:-|至|~)\s*(\d+)\s*分钟/g)) values.push(Number(m[2]) * 60);
    for (const m of String(text).matchAll(/(?<![-至~\d])(\d+)\s*分钟/g)) values.push(Number(m[1]) * 60);
    for (const m of String(text).matchAll(/(\d+)\s*秒/g)) values.push(Number(m[1]));
    return values.length ? values.reduce((a, b) => a + b, 0) : null;
  }

  if (!Array.isArray(window.RECIPES_DATA)) return;
  window.RECIPES_DATA.forEach(recipe => {
    if (!targetIds.has(recipe.id)) return;
    let timedSeconds = 0;
    recipe.steps = (recipe.steps || []).map((step, index) => {
      const recovered = recover(step.instruction || step.detail || '');
      const seconds = explicitSeconds(recovered.instruction);
      if (seconds) timedSeconds += seconds;
      return Object.assign({}, step, {
        stepIndex: index + 1,
        instruction: recovered.instruction,
        detail: recovered.instruction,
        timerSeconds: seconds,
        chefTip: recovered.tip || step.chefTip || '按食材实际状态判断熟度和火候。'
      });
    });
    const declaredTotal = Number(recipe.prepTimeMinutes || 0) + Number(recipe.cookTimeMinutes || 0);
    const timedMinutes = Math.ceil(timedSeconds / 60);
    if (timedMinutes > declaredTotal) {
      recipe.cookTimeMinutes = Math.max(Number(recipe.cookTimeMinutes || 0), timedMinutes - Number(recipe.prepTimeMinutes || 0));
    }
    recipe.contentReviewStatus = 'text-repaired-needs-source-review';
    recipe.contentReviewVersion = '2026-09-08-v3';
    recipe.dataRepairNotes = ['已拆除误拼入步骤的程序字段', '已恢复原厨师提示', '仍需多来源核验配方与技法'];
  });
})();
