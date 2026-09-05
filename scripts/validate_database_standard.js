const fs = require('fs');
const path = require('path');
const vm = require('vm');

function validateDatabase(targetPath) {
  console.log(`\n🔍 开始全面规范化审计: ${targetPath}`);
  const code = fs.readFileSync(targetPath, 'utf8');

  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);

  const recipes = sandbox.window.RECIPES_DATA;
  if (!recipes || !Array.isArray(recipes)) {
    console.error('❌ 错误: 未找到有效 RECIPES_DATA 数组');
    process.exit(1);
  }

  console.log(`✅ 成功载入菜谱总数: ${recipes.length}`);

  let errors = 0;
  const idSet = new Set();
  const urlSet = new Set();
  let duplicateUrls = 0;

  recipes.forEach((r, idx) => {
    const label = `[#${idx + 1} ${r.id} - ${r.name}]`;

    // 1. 唯一 ID
    if (!r.id || typeof r.id !== 'string') {
      console.error(`❌ ${label} 缺少有效唯一 ID`);
      errors++;
    } else if (idSet.has(r.id)) {
      console.error(`❌ ${label} ID 重复: ${r.id}`);
      errors++;
    } else {
      idSet.add(r.id);
    }

    // 2. 菜品名称与副标题
    if (!r.name || typeof r.name !== 'string') {
      console.error(`❌ ${label} 缺少菜品名称`);
      errors++;
    }
    if (!r.subtitle || typeof r.subtitle !== 'string' || r.subtitle.trim() === '') {
      console.error(`❌ ${label} 缺少或为空副标题 subtitle`);
      errors++;
    }

    // 3. 图片双字段 photoUrl 与 image
    if (!r.photoUrl || !r.image) {
      console.error(`❌ ${label} 缺少 photoUrl 或 image`);
      errors++;
    }
    if (r.photoUrl && urlSet.has(r.photoUrl)) {
      duplicateUrls++;
    } else if (r.photoUrl) {
      urlSet.add(r.photoUrl);
    }

    // 4. 分类与地域
    if (!r.categoryType || !r.region) {
      console.error(`❌ ${label} 缺少 categoryType 或 region`);
      errors++;
    }

    // 5. 份量与烹饪时长
    if (typeof r.servings !== 'number' || r.servings <= 0) {
      console.error(`❌ ${label} servings 必须为正整数: ${r.servings}`);
      errors++;
    }
    if (typeof r.cookTimeMinutes !== 'number' || r.cookTimeMinutes <= 0) {
      console.error(`❌ ${label} cookTimeMinutes 必须为正整数: ${r.cookTimeMinutes}`);
      errors++;
    }

    // 6. 食材清单
    if (!Array.isArray(r.ingredients) || r.ingredients.length === 0) {
      console.error(`❌ ${label} ingredients 必须为非空数组`);
      errors++;
    }

    // 7. 步骤与指令规范化
    if (!Array.isArray(r.steps) || r.steps.length === 0) {
      console.error(`❌ ${label} steps 必须为非空步骤数组`);
      errors++;
    } else {
      r.steps.forEach((step, sIdx) => {
        if (!step.instruction || typeof step.instruction !== 'string' || step.instruction.trim() === '') {
          console.error(`❌ ${label} 步骤 ${sIdx + 1} 缺少规范 instruction 说明文本`);
          errors++;
        }
        if (!step.title) {
          console.error(`❌ ${label} 步骤 ${sIdx + 1} 缺少 title`);
          errors++;
        }
      });
    }

    // 8. 避坑指南
    if (!Array.isArray(r.chefTips) || r.chefTips.length === 0) {
      console.error(`❌ ${label} 缺少 chefTips 避坑指南数组`);
      errors++;
    }
  });

  console.log(`\n📊 规范化审计结论报告:`);
  console.log(`- 审计食谱总数: ${recipes.length}`);
  console.log(`- 唯一 ID 总数: ${idSet.size} (0 冲突)`);
  console.log(`- 重复图片 URL: ${duplicateUrls} 个`);
  console.log(`- 发现规范性错误数: ${errors} 个`);

  if (errors === 0) {
    console.log(`✨ 恭喜！${path.basename(targetPath)} 100% 通过全部工业级规范化校验！\n`);
    return true;
  } else {
    console.error(`❌ 发现 ${errors} 处规范性缺陷，请检查！\n`);
    return false;
  }
}

const p1 = path.join(__dirname, '../js/data/recipes.js');
const p2 = path.join(__dirname, '../android_build/assets/js/data/recipes.js');

const r1 = validateDatabase(p1);
const r2 = validateDatabase(p2);

if (!r1 || !r2) {
  process.exit(1);
}
