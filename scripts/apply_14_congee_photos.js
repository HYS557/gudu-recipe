const fs = require('fs');
const path = require('path');

const targetMapping = {
  'rec_congee_35': {
    name: '鲜活泥鳅老姜枸杞砂锅温阳粥',
    url: 'https://i2.chuimg.com/fdf01333c8e64fb5bdd38a15818fa8c4_912w_684h.jpg'
  },
  'rec_congee_37': {
    name: '手打虾滑鲜贝双鲜生滚砂锅粥',
    url: 'https://i2.chuimg.com/46157bf853424e9b88637d3550b58b81_2668w_2668h.jpg'
  },
  'rec_congee_47': {
    name: '芡实茯苓薏米赤小豆健脾去湿粥',
    url: 'https://i2.chuimg.com/4a66eb981dda4dcb8835bda5a1794c7c_4032w_3024h.jpg'
  },
  'rec_congee_55': {
    name: '莲子心绿豆清心安神败火夏粥',
    url: 'https://i2.chuimg.com/72675ac05a6145748e8f6ab1d2ff8aa8_1280w_1706h.jpg'
  },
  'rec_congee_56': {
    name: '麦仁红薯老南瓜粗粮农家甜粥',
    url: 'https://i2.chuimg.com/e197261d91f0468986cb8f8f4fccc247_2000w_2668h.jpg'
  },
  'rec_congee_62': {
    name: '闽南泉州高汤干贝海蛎咸稀饭',
    url: 'https://i2.chuimg.com/48ac463684a911e6a9a10242ac110002_1280w_960h.jpg'
  },
  'rec_congee_68': {
    name: '四川香辣牛肉末皮蛋特色风味粥',
    url: 'https://i2.chuimg.com/08212ed68f5643dca600577567864188_3072w_2304h.jpg'
  },
  'rec_congee_71': {
    name: '云南松茸鲜火腿生滚山珍香米粥',
    url: 'https://i2.chuimg.com/285ca1bb156c49d5ae4c267cd352a6af_6240w_4160h.jpg'
  },
  'rec_congee_70': {
    name: '陕北延安糜子米红枣稠饭米汤',
    url: 'https://i2.chuimg.com/d4d6db28889411e6b87c0242ac110003_640w_566h.jpg'
  },
  'rec_congee_72': {
    name: '贵州苗家酸汤鲜鱼片开胃生滚粥',
    url: 'https://i2.chuimg.com/57597e42d7db42299d24bbec59e313de_1179w_1087h.jpg'
  },
  'rec_congee_75': {
    name: '银鱼碎菠菜嫩豆腐泥婴幼辅食补钙粥',
    url: 'https://i2.chuimg.com/b7ec031e843e4cfaa26212cc787717ea_750w_750h.jpg'
  },
  'rec_congee_77': {
    name: '鸡胸肉芦笋荷兰豆高蛋白低卡减脂粥',
    url: 'https://i2.chuimg.com/72e72da151214848b7b22415c44152c3_1451w_1160h.jpg'
  },
  'rec_congee_79': {
    name: '荷叶冬瓜生滚里脊去水肿排毒轻润粥',
    url: 'https://i2.chuimg.com/9fcbf8f3a0a945e2aef7d55bed479b2e_1280w_960h.jpg'
  },
  'rec_congee_80': {
    name: '白萝卜丝生姜鲜肉丝化痰止咳暖身粥',
    url: 'https://i2.chuimg.com/a9b43c71faf7446f80534ed77744a551_1280w_960h.jpg'
  }
};

// 1. 读取 recipes.js
global.window = global;
require('../js/data/recipes.js');
let all = [...window.RECIPES_DATA];
console.log(`载入全库食谱数: ${all.length}`);

let updatedCount = 0;
all = all.map(r => {
  if (targetMapping[r.id]) {
    updatedCount++;
    console.log(`[精准替换] ${r.id}: ${r.name}`);
    console.log(`   旧图: ${r.image}`);
    console.log(`   新图: ${targetMapping[r.id].url}`);
    return {
      ...r,
      image: targetMapping[r.id].url,
      photoUrl: targetMapping[r.id].url
    };
  }
  return r;
});

console.log(`替换完成，总计更新: ${updatedCount} 道菜`);
if (updatedCount !== 14) {
  console.error(`警告：期望替换 14 道，实际替换了 ${updatedCount} 道！`);
  process.exit(1);
}

// 2. 校验 ID 与 URL 唯一性（全库无重复）
const ids = new Set(all.map(r => r.id));
const urls = new Set(all.map(r => r.image));
console.log(`全库总食谱数: ${all.length}`);
console.log(`唯一ID数: ${ids.size}`);
console.log(`唯一URL数: ${urls.size}`);

if (ids.size !== all.length) {
  console.error('发现重复ID！');
  process.exit(1);
}
if (urls.size !== all.length) {
  console.error('发现重复图片URL！');
  process.exit(1);
}

// 3. 写入 Web 端
const webPath = path.join(__dirname, '..', 'js', 'data', 'recipes.js');
const fileHeader = `// 咕嘟食谱全量大数据库 (全库 961 道精选好味，含 80 道全派系滋补养生粥品大典)
window.RECIPES_DATA = `;
fs.writeFileSync(webPath, fileHeader + JSON.stringify(all, null, 2) + ';\n', 'utf8');
console.log(`已更新 Web 端: ${webPath}`);

// 4. 写入 Android 端
const androidPath = path.join(__dirname, '..', 'android_build', 'assets', 'js', 'data', 'recipes.js');
if (fs.existsSync(androidPath)) {
  fs.writeFileSync(androidPath, fileHeader + JSON.stringify(all, null, 2) + ';\n', 'utf8');
  console.log(`已更新 Android 端: ${androidPath}`);
}

// 5. 同步更新 scripts/data_80_congee.js
const congeeFile = path.join(__dirname, 'data_80_congee.js');
if (fs.existsSync(congeeFile)) {
  require('./data_80_congee.js');
  let congees = [...window.CONGEE_80_DATA];
  congees = congees.map(r => {
    if (targetMapping[r.id]) {
      return {
        ...r,
        image: targetMapping[r.id].url,
        photoUrl: targetMapping[r.id].url
      };
    }
    return r;
  });
  const congeeHeader = `// 80道地道全品类滋补养生粥品数据库\nwindow.CONGEE_80_DATA = `;
  fs.writeFileSync(congeeFile, congeeHeader + JSON.stringify(congees, null, 2) + ';\n', 'utf8');
  console.log(`已更新 scripts/data_80_congee.js`);
}

console.log('所有 14 道目标养生粥图片已 100% 替换并验证完成！');
