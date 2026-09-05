const fs = require('fs');
const path = require('path');

global.window = {};
require('../js/data/recipes.js');
const all = window.RECIPES_DATA;

const authenticFixes = {
  '西安酸汤水饺': {
    subtitle: '古城西安早夜市招牌，现包牛肉馅水饺沉浮于红亮酸汤中，油泼辣子香而不燥，酸爽开胃透骨',
    ingredients: [
      { name: '现包水饺皮或手工面团', amount: '300克', type: 'main' },
      { name: '鲜嫩牛肉大葱馅 (肥瘦适中)', amount: '250克', type: 'main' },
      { name: '陕西秦椒秘制油泼辣子', amount: '2大勺', type: 'secondary' },
      { name: '特级陈醋/岐山香醋', amount: '2.5大勺', type: 'secondary' },
      { name: '生抽、紫菜碎与淡干虾皮', amount: '20克', type: 'secondary' },
      { name: '新鲜香菜碎与熟白芝麻', amount: '15克', type: 'secondary' }
    ]
  },
  '开封多汁灌汤包': {
    subtitle: '中原开封传统名点，皮薄如纸提起像灯笼放下似菊花，吸吮金黄鲜美汤汁，肉馅细嫩醇香',
    ingredients: [
      { name: '特制高筋灌汤包面皮', amount: '250克', type: 'main' },
      { name: '新鲜优质猪前腿肉馅', amount: '200克', type: 'main' },
      { name: '老母鸡高汤鲜猪皮冻 (融化成鲜浓包汁)', amount: '150克', type: 'main' },
      { name: '老生姜葱水', amount: '30克', type: 'secondary' },
      { name: '镇江香醋配嫩姜丝 (佐餐搭档)', amount: '25克', type: 'secondary' }
    ]
  },
  '内蒙羊杂碎汤': {
    subtitle: '塞外草原清晨第一缕热气，羊心羊肝羊肚羊肺慢火熬煮，汤白肉嫩配羊油辣子，暖身驱寒',
    ingredients: [
      { name: '新鲜熟羊肚/羊肠/羊肺/羊肝', amount: '350克', type: 'main' },
      { name: '慢熬浓白羊骨原汤', amount: '800毫升', type: 'main' },
      { name: '内蒙传统红亮羊油辣子', amount: '1.5勺', type: 'secondary' },
      { name: '新鲜香菜段与青蒜碎', amount: '25克', type: 'secondary' },
      { name: '老生姜与花椒水', amount: '15克', type: 'secondary' }
    ]
  },
  '老火靓汤霸王花排骨': {
    subtitle: '广府经典养生老火靓汤，干霸王花与新鲜猪肋排慢炖，清心润肺，汤水甘甜滑润',
    ingredients: [
      { name: '新鲜精选猪肋排块 (焯水去腥)', amount: '400克', type: 'main' },
      { name: '肇庆干霸王花 (提前温水泡软洗净)', amount: '40克', type: 'main' },
      { name: '广东南杏仁与北杏仁', amount: '15克', type: 'secondary' },
      { name: '广东蜜枣', amount: '2枚', type: 'secondary' },
      { name: '老生姜片', amount: '15克', type: 'secondary' }
    ]
  },
  '韩式辣白菜豆腐五花肉汤': {
    subtitle: '首尔街头冬日治愈暖锅，熟透酸爽辣白菜与五花肉煸出油脂，慢煨嫩豆腐，热辣酸爽开胃',
    ingredients: [
      { name: '传统老坛熟成韩式辣白菜', amount: '200克', type: 'main' },
      { name: '优质嫩豆腐/大豆水豆腐', amount: '250克', type: 'main' },
      { name: '新鲜农家五花肉片', amount: '120克', type: 'main' },
      { name: '鲜洋葱丝与青红尖椒圈', amount: '40克', type: 'secondary' },
      { name: '传统韩式粗辣椒粉与大酱', amount: '1.5勺', type: 'secondary' }
    ]
  },
  '韩式大酱汤': {
    subtitle: '韩国家庭日常灵魂汤物，传统黄豆古法大酱浓香扑鼻，配西葫芦白玉菇豆腐，鲜美醇正',
    ingredients: [
      { name: '韩国古法大酱(黄豆大酱)', amount: '2.5大勺', type: 'main' },
      { name: '嫩豆腐切方块', amount: '200克', type: 'main' },
      { name: '新鲜鲜嫩西葫芦片', amount: '100克', type: 'main' },
      { name: '白玉菇/金针菇与鲜蛤蜊肉', amount: '80克', type: 'secondary' },
      { name: '淘米水或鳀鱼昆布高汤', amount: '500毫升', type: 'main' }
    ]
  },
  '法式香浓奶油蘑菇汤': {
    subtitle: '法式西餐第一道经典暖胃前菜，新鲜口蘑片经黄油煸透，与浓醇淡奶油牛奶丝滑交融',
    ingredients: [
      { name: '新鲜特级口蘑/白蘑菇 (切薄片)', amount: '250克', type: 'main' },
      { name: '法式无盐黄油', amount: '35克', type: 'main' },
      { name: '纯正动物淡奶油', amount: '120毫升', type: 'main' },
      { name: '纯牛奶与高汤', amount: '250毫升', type: 'main' },
      { name: '洋葱细碎与紫皮蒜末', amount: '30克', type: 'secondary' }
    ]
  },
  '法式经典罗宋汤': {
    subtitle: '欧洲经典酸甜暖胃汤，牛腩块小火慢炖，融合番茄膏酸甜与卷心菜洋葱清甜，奶香微酸',
    ingredients: [
      { name: '新鲜牛腩肉块 (焯水切厚丁)', amount: '250克', type: 'main' },
      { name: '成熟番茄块与纯番茄膏', amount: '200克', type: 'main' },
      { name: '新鲜卷心菜与洋葱块', amount: '120克', type: 'secondary' },
      { name: '红萝卜与土豆滚刀块', amount: '100克', type: 'secondary' },
      { name: '法式黄油炒面粉 (起稠灵魂)', amount: '20克', type: 'secondary' }
    ]
  },
  '红烧肉沫茄子煲': {
    subtitle: '砂锅家常下饭顶流，紫茄子过油吸满蒜香肉沫与生抽浓汁，软烂糯口，连汤汁都能拌下三碗饭',
    ingredients: [
      { name: '新鲜优质紫皮长茄子', amount: '350克 (切滚刀条)', type: 'main' },
      { name: '农家猪前腿肉末 (肥三瘦七)', amount: '120克', type: 'main' },
      { name: '紫皮大蒜瓣碎与老姜末', amount: '30克', type: 'secondary' },
      { name: '郫县豆瓣酱与特级生抽', amount: '2勺', type: 'secondary' },
      { name: '青红尖椒圈与小香葱花', amount: '20克', type: 'secondary' }
    ]
  },
  '家常玉米胡萝卜排骨汤': {
    subtitle: '老少皆宜的国民家常清润排骨汤，甜水果玉米与胡萝卜慢炖肋排，汤清见底，甘甜不油腻',
    ingredients: [
      { name: '新鲜精选猪肋排 (斩段焯水)', amount: '450克', type: 'main' },
      { name: '甜水果玉米段', amount: '200克', type: 'main' },
      { name: '清甜红萝卜滚刀块', amount: '150克', type: 'main' },
      { name: '老生姜厚片与大葱结', amount: '20克', type: 'secondary' },
      { name: '宁夏中宁红枸杞', amount: '5克', type: 'secondary' }
    ]
  }
};

let fixedCount = 0;
all.forEach(r => {
  if (authenticFixes[r.name]) {
    r.subtitle = authenticFixes[r.name].subtitle;
    r.ingredients = authenticFixes[r.name].ingredients;
    fixedCount++;
  }
});
console.log('Fixed authentic ingredients for dishes:', fixedCount);

const content = '/**\n * 咕嘟食谱 - 全菜谱精细数据库 (已核验配方、主辅料真实配比与高清实物摄影)\n */\nwindow.RECIPES_DATA = ' + JSON.stringify(all, null, 2) + ';\n';

fs.writeFileSync(path.join(__dirname, '../js/data/recipes.js'), content, 'utf8');
fs.writeFileSync(path.join(__dirname, '../android_build/assets/js/data/recipes.js'), content, 'utf8');
console.log('Successfully written updated recipes database!');
