const fs = require('fs');

let content = fs.readFileSync('scripts/mega_expansion.js', 'utf8');

// Fix unescaped quotes inside strings like "关火浸泡更入味，是本帮菜"焖卤"精髓"
// Also fix name:=
content = content.replace(/name:=/g, 'name: ');

// Replace nested quotes in chefTip or instruction
// e.g. "焖卤" -> '焖卤', "三刷" -> '三刷', "淋勺(Basting)" -> '淋勺(Basting)'
// We can find all occurrences of chinese double quotes or quotes inside double quoted string
content = content.replace(/chefTip:\s*"([^"\r\n]*)"([^"\r\n]+)"([^"\r\n]*)"/g, 'chefTip: "$1\'$2\'$3"');
content = content.replace(/instruction:\s*"([^"\r\n]*)"([^"\r\n]+)"([^"\r\n]*)"/g, 'instruction: "$1\'$2\'$3"');
// Repeat once more in case multiple quotes
content = content.replace(/chefTip:\s*"([^"\r\n]*)"([^"\r\n]+)"([^"\r\n]*)"/g, 'chefTip: "$1\'$2\'$3"');
content = content.replace(/instruction:\s*"([^"\r\n]*)"([^"\r\n]+)"([^"\r\n]*)"/g, 'instruction: "$1\'$2\'$3"');

fs.writeFileSync('scripts/mega_expansion.js', content, 'utf8');

try {
  require('./mega_expansion.js');
  console.log('mega_expansion.js loaded successfully! Total dishes:', Object.keys(require('./mega_expansion.js').MEGA_DISHES).length);
} catch (e) {
  console.error('Error loading mega_expansion.js:', e);
}
