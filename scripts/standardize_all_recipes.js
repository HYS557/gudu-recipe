const fs = require('fs');
const path = require('path');
const vm = require('vm');

const soupSubtitles = {
  'rec_soup_01': '春笋咸鲜交融，鲜肉肥嫩百叶软糯，春日第一口至鲜',
  'rec_soup_02': '浓白汤底胡椒辛香温润，猪肚爽脆土鸡鲜美，暖胃驱寒名汤',
  'rec_soup_03': '色白如奶水脂交融，鲜而不膻香而不腻，齐鲁中华第一汤',
  'rec_soup_04': '汤清肉烂碗大料足，花椒茴香芳香扑鼻，老陕回味无穷',
  'rec_soup_05': '鲫鱼羊肉同锅滚沸成至鲜，汤白汁浓，川味冬至必喝名汤',
  'rec_soup_06': '自带南药天然椰香，健脾祛湿舒筋活络，广府传统养生老火汤',
  'rec_soup_07': '深海厚花胶胶质丰盈，鲜鲍弹牙乌鸡甘润，润燥滋养席上珍品',
  'rec_soup_08': '苦瓜甘凉黄豆绵糯，清暑解热生津止渴，岭南盛夏消暑经典',
  'rec_soup_09': '十年老陈皮甘醇陈香，老鸭肉厚去燥润肺，秋燥滋补不二之选',
  'rec_soup_10': '紫陶汽锅不加一滴水，蒸汽凝成原汁鲜鸡汤，山珍野菌香透满室',
  'rec_soup_11': '鲜松茸与羊肚菌双菌争鲜，菌香馥郁汤色金黄，高原山野极鲜恩赐',
  'rec_soup_12': '深海响螺肉片鲜脆甜美，花胶软糯老鸡汤甘醇，海陆滋养润燥华筵',
  'rec_soup_13': '高原天麻健脑息风，乳鸽肉嫩汤清甘冽，黔地名贵温润调理药膳',
  'rec_soup_14': '砂锅慢炖汤色白稠如牛乳，鱼肉细嫩毫无土腥，江南鲜掉眉毛',
  'rec_soup_15': '张仲景金匮要略千年传世古方，温中补血祛寒止痛，冬季温阳圣汤',
  'rec_soup_16': '南湾老鸭慢火煨炖，肉酥骨烂鸭油金黄香而不腻，豫南瓦罐经典',
  'rec_soup_17': '传统客家食疗清肝利湿名汤，鲜猪横脷软嫩无腥，清凉降火',
  'rec_soup_18': '古法三蒸三煨不泄真气，鸭肉酥烂脱骨汤清似水，国宴级淮扬名汤',
  'rec_soup_19': '西湖娇嫩莼菜滑溜适口，鲈鱼丝白嫩细腻，江南水乡千年雅韵',
  'rec_soup_20': '新鲜原只青椰作盅，椰水蒸透乌鸡肉甘甜醇润，清甜滋阴润燥',
  'rec_soup_21': '润肺止咳清心安神，海底椰特有幽香，换季家庭必备甘润好汤',
  'rec_soup_22': '黄金虫草花汤色亮丽，西洋参益气生津老鸽温润，四季皆宜滋补佳品',
  'rec_soup_23': '蔡甸九孔粉藕煨至粉糯拉丝，大骨浓汤油润醇香，楚乡千家万户温情',
  'rec_soup_24': '长乐漳港红糟海蚌极品鲜脆，老母鸡文火吊出澄澈清汤，闽菜国宴至味',
  'rec_soup_25': '剑花干清润罗汉果回甘，洗透猪肺绵软，清热润肺止咳经典汤水',
  'rec_soup_26': '羊肚菌蜂窝吸饱排骨醇汁，铁棍山药粉糯温中，高营养全家滋补',
  'rec_soup_27': '黑麻油煸老姜辛香四溢，全米酒慢炖土鸡不加一滴水，宝岛暖胃御寒',
  'rec_soup_28': '渤海湾大虾出红润鲜虾油，卤水老豆腐吸满虾汁孔孔爆汁，鲜爽暖胃',
  'rec_soup_29': '春日野荠菜青翠脆嫩，东海小黄鱼滑嫩如蒜瓣，汤清而鲜美无双',
  'rec_soup_30': '竹荪雪白爽脆羊肚菌香气扑鼻，玉米马蹄自然清甜，素雅润养至味'
};

function standardizeRecipes() {
  const filePath = path.join(__dirname, '../js/data/recipes.js');
  const code = fs.readFileSync(filePath, 'utf8');

  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);

  const recipes = sandbox.window.RECIPES_DATA;
  console.log(`Loaded ${recipes.length} recipes.`);

  let subtitleCount = 0;
  let stepsUpdated = 0;
  let photoUrlSynced = 0;
  let banquetSynced = 0;

  const standardized = recipes.map((r, rIdx) => {
    // 1. Subtitle补齐
    if (!r.subtitle) {
      if (soupSubtitles[r.id]) {
        r.subtitle = soupSubtitles[r.id];
        subtitleCount++;
      } else {
        r.subtitle = `${r.region || '经典'}传统风味，食材鲜爽滋味地道`;
        subtitleCount++;
      }
    }

    // 2. 图片双向同步 photoUrl 与 image
    const photo = r.photoUrl || r.image;
    if (!r.photoUrl && photo) {
      r.photoUrl = photo;
      photoUrlSynced++;
    }
    if (!r.image && photo) {
      r.image = photo;
    }

    // 3. 国宴布尔属性对齐
    const isBanquet = !!(r.isGrandBanquet || r.isGrandBanquets);
    if (r.isGrandBanquet !== isBanquet || r.isGrandBanquets !== isBanquet) {
      r.isGrandBanquet = isBanquet;
      r.isGrandBanquets = isBanquet;
      banquetSynced++;
    }

    // 4. servings 与 cookTimeMinutes 规范化
    if (!r.servings && r.portion) {
      r.servings = r.portion;
    } else if (!r.servings) {
      r.servings = 2;
    }

    if (!r.cookTimeMinutes && r.cookTime) {
      const match = String(r.cookTime).match(/\d+/);
      r.cookTimeMinutes = match ? parseInt(match[0], 10) : 15;
    } else if (!r.cookTimeMinutes) {
      r.cookTimeMinutes = 15;
    }

    // 5. 统一 chefTips 数组
    if (!r.chefTips || !Array.isArray(r.chefTips) || r.chefTips.length === 0) {
      if (Array.isArray(r.proTips) && r.proTips.length > 0) {
        r.chefTips = [...r.proTips];
      } else if (typeof r.proTips === 'string' && r.proTips) {
        r.chefTips = [r.proTips];
      } else if (typeof r.tips === 'string' && r.tips) {
        r.chefTips = [r.tips];
      } else if (Array.isArray(r.tips) && r.tips.length > 0) {
        r.chefTips = [...r.tips];
      } else {
        r.chefTips = ["火候把控精准，食材依序下锅能保持最佳鲜美口感。"];
      }
    }

    // 6. 统一 steps 的结构与字段
    if (Array.isArray(r.steps)) {
      r.steps = r.steps.map((s, sIdx) => {
        const stepIndex = s.stepIndex || s.step || (sIdx + 1);
        const title = s.title || `步骤 ${sIdx + 1}`;
        const instruction = s.instruction || s.detail || s.desc || '';
        const timerSeconds = s.timerSeconds || s.time || 180;
        const chefTip = s.chefTip || (r.chefTips && r.chefTips[sIdx]) || (sIdx === r.steps.length - 1 ? r.chefTips[0] : '');

        if (!s.instruction && s.detail) {
          stepsUpdated++;
        }

        return {
          stepIndex,
          title,
          instruction,
          detail: instruction, // 兼容双字段
          timerSeconds,
          chefTip: chefTip || ''
        };
      });
    }

    return r;
  });

  console.log(`Standardization results:`);
  console.log(`- Subtitles filled: ${subtitleCount}`);
  console.log(`- PhotoUrl synchronized: ${photoUrlSynced}`);
  console.log(`- Steps updated with instruction: ${stepsUpdated}`);
  console.log(`- Banquet flags synced: ${banquetSynced}`);

  // Write back to js/data/recipes.js
  const outputCode = `// 全量菜谱核心主数据库 (标准化商用版)\nwindow.RECIPES_DATA = ${JSON.stringify(standardized, null, 2)};\n`;
  fs.writeFileSync(filePath, outputCode, 'utf8');
  console.log(`Saved standardized recipes to: ${filePath}`);

  // Write to android_build
  const androidPath = path.join(__dirname, '../android_build/assets/js/data/recipes.js');
  fs.writeFileSync(androidPath, outputCode, 'utf8');
  console.log(`Saved standardized recipes to: ${androidPath}`);
}

standardizeRecipes();
