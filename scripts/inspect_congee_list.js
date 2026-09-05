const fs = require('fs');
const path = require('path');
const vm = require('vm');

const content = fs.readFileSync(path.join(__dirname, '../js/data/recipes.js'), 'utf8');
const sandbox = { window: {} };
sandbox.window = sandbox;
vm.runInNewContext(content, sandbox);
const recipes = sandbox.RECIPES_DATA || sandbox.window.RECIPES_DATA || [];
const congeeList = recipes.filter(r => r.id && r.id.startsWith('rec_congee_'));

console.log('Total congee in recipes.js:', congeeList.length);
congeeList.forEach((r, idx) => {
  console.log(`${idx + 1}. [${r.id}] ${r.name} (${r.tags ? r.tags.join(',') : ''})`);
});
