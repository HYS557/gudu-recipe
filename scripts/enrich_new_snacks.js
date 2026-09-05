const fs = require('fs');
const path = require('path');

function enrichRecipes(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const fn = new Function('window', code + '\nreturn window.RECIPES_DATA;');
  const recipes = fn({});

  recipes.forEach(r => {
    if (r.id && r.id.startsWith('rec_snack_')) {
      // Ensure seasonings exists
      if (!r.seasonings || r.seasonings.length === 0) {
        // extract seasonings from ingredients if category === '调料'
        const seasonings = [];
        (r.ingredients || []).forEach(ing => {
          if (ing.category === '调料' || ing.category === '干货香料') {
            const amountNum = parseFloat(ing.amount) || 1;
            const unit = ing.amount.replace(/[\d\.]/g, '').trim() || '适量';
            seasonings.push({
              name: ing.name,
              baseAmount: amountNum,
              unit: unit
            });
          }
        });
        if (seasonings.length === 0) {
          seasonings.push({ name: '食用油', baseAmount: 20, unit: 'ml' });
          seasonings.push({ name: '盐', baseAmount: 3, unit: 'g' });
        }
        r.seasonings = seasonings;
      }

      // Ensure steps are structured
      if (r.steps && typeof r.steps[0] === 'string') {
        const tips = r.tips;
        r.steps = r.steps.map((st, idx) => ({
          stepIndex: idx + 1,
          title: st.slice(0, 10).replace(/[，。、]/g, ''),
          instruction: st,
          timerSeconds: idx === 0 ? 300 : (idx === r.steps.length - 1 ? 180 : 240),
          chefTip: (idx === r.steps.length - 1 && tips) ? tips : null
        }));
      }

      r.score = r.score || '4.9';
      r.cookedCount = r.cookedCount || 1580;
    }
  });

  const newContent = `/**\n * 咕嘟食谱 - ${recipes.length}道全域中华与环球精选食谱数据库\n */\nwindow.RECIPES_DATA = ${JSON.stringify(recipes, null, 2)};\n`;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Enriched ${filePath}`);
}

enrichRecipes(path.join(__dirname, '../js/data/recipes.js'));
const androidFile = path.join(__dirname, '../android_build/assets/js/data/recipes.js');
if (fs.existsSync(androidFile)) {
  enrichRecipes(androidFile);
}
