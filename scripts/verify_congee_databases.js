const fs = require('fs');
const path = require('path');
const vm = require('vm');

['../js/data/recipes.js', '../android_build/assets/js/data/recipes.js'].forEach(relPath => {
  const filePath = path.join(__dirname, relPath);
  const content = fs.readFileSync(filePath, 'utf8');
  const sandbox = { window: {} };
  sandbox.window = sandbox;
  vm.runInNewContext(content, sandbox);
  const list = sandbox.RECIPES_DATA || sandbox.window.RECIPES_DATA || [];
  
  const congees = list.filter(r => r.id && r.id.startsWith('rec_congee_'));
  const images = new Set();
  let duplicateCount = 0;
  list.forEach(r => {
    if (images.has(r.image)) duplicateCount++;
    else images.add(r.image);
  });

  console.log(`\nChecking: ${relPath}`);
  console.log(`- Total recipes: ${list.length}`);
  console.log(`- Total congee recipes: ${congees.length}`);
  console.log(`- Duplicate image URLs: ${duplicateCount}`);
  
  // Spot check 3 dishes
  const sampleIds = ['rec_congee_35', 'rec_congee_37', 'rec_congee_75'];
  sampleIds.forEach(id => {
    const dish = congees.find(c => c.id === id);
    if (dish) {
      console.log(`\n  [Spot Check: ${dish.id} - ${dish.name}]`);
      console.log(`  Ingredients: ${dish.ingredients.map(i => `${i.name}(${i.amount}${i.unit||''})`).join(', ')}`);
      console.log(`  Steps count: ${dish.steps.length}`);
      dish.steps.slice(0, 2).forEach(s => {
        console.log(`    - 步骤${s.stepIndex}【${s.title}】(${s.timerSeconds}s): ${s.instruction.slice(0, 35)}...`);
        console.log(`      ⚠️ 防翻车: ${s.chefTip}`);
      });
    }
  });
});
