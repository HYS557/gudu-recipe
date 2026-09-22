const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'js', 'data', 'recipes-canonical.js');
const dataDir = path.join(root, 'js', 'data');
const shardDir = path.join(dataDir, 'recipe-shards');
const shardCount = 32;
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(source, 'utf8'), sandbox, { filename: source });
const recipes = sandbox.window.RECIPES_DATA;
if (!Array.isArray(recipes) || !recipes.length) throw new Error('Canonical recipes are unavailable');

const listingKeys = [
  'id', 'name', 'subtitle', 'photoUrl', 'image', 'region', 'cuisineCategory', 'categoryType',
  'flavor', 'cookingMethod', 'difficulty', 'prepTimeMinutes', 'cookTimeMinutes', 'servings',
  'calories', 'caloriePerServing', 'calorieLevel', 'calorieBurnTip', 'tags', 'rating',
  'favoriteCount', 'season', 'primarySeason', 'seasonBadge', 'isGrandBanquets',
  'isDrinkingSnack', 'isFatLossFriendly', 'isSeafood', 'isGrandBanquet'
];
const shards = Array.from({ length: shardCount }, () => []);
const listing = recipes.map((recipe, index) => {
  const shard = index % shardCount;
  shards[shard].push(recipe);
  const item = { _detailShard: String(shard).padStart(2, '0') };
  for (const key of listingKeys) if (recipe[key] !== undefined) item[key] = recipe[key];
  item.ingredients = (recipe.ingredients || []).map(ingredient => ({ name: ingredient.name }));
  return item;
});

fs.mkdirSync(shardDir, { recursive: true });
fs.writeFileSync(path.join(dataDir, 'recipes-index.js'), `window.RECIPES_DATA=${JSON.stringify(listing)};\n`, 'utf8');
shards.forEach((recipesInShard, index) => {
  const name = String(index).padStart(2, '0');
  fs.writeFileSync(path.join(shardDir, `${name}.json`), JSON.stringify(recipesInShard), 'utf8');
});
console.log(JSON.stringify({ recipes: recipes.length, shards: shardCount }));
