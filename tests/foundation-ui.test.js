const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('all six approved categories have navigation and strict filtering', () => {
  const root = path.resolve(__dirname, '..');
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
  for (const category of ['sauce', 'pickle', 'stock', 'marinade', 'filling', 'brine']) {
    assert.match(html, new RegExp(`data-cat=["']${category}["']`));
  }
  assert.match(app, /foundationCategories\.includes\(this\.activeCategory\)/);
});
