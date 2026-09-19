const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function numericVersion(name) {
  const match = name.match(/-v(\d+)\.js$/);
  return match ? Number(match[1]) : 0;
}

function versionedFiles(dataDir, pattern) {
  return fs.readdirSync(dataDir)
    .filter(name => pattern.test(name))
    .sort((left, right) => numericVersion(left) - numericVersion(right));
}

function loadResolvedRecipes(rootDir) {
  const dataDir = path.join(rootDir, 'js', 'data');
  const groups = [
    ['recipe-corrections', /^recipe-corrections-v\d+\.js$/],
    ['recipe-metadata-corrections', /^recipe-metadata-corrections-v\d+\.js$/],
    ['recipe-allergens', /^recipe-allergens-v\d+\.js$/],
    ['recipe-nutrition-corrections', /^recipe-nutrition-corrections-v\d+\.js$/]
  ];
  const loadedFiles = ['recipes.js'];
  for (const [, pattern] of groups) loadedFiles.push(...versionedFiles(dataDir, pattern));

  const sandbox = { window: {} };
  vm.createContext(sandbox);
  for (const file of loadedFiles) {
    vm.runInContext(fs.readFileSync(path.join(dataDir, file), 'utf8'), sandbox, { filename: file });
  }

  if (!Array.isArray(sandbox.window.RECIPES_DATA)) {
    throw new Error('Recipe files did not create window.RECIPES_DATA');
  }
  return {
    recipes: JSON.parse(JSON.stringify(sandbox.window.RECIPES_DATA)),
    loadedFiles
  };
}

module.exports = { loadResolvedRecipes };
