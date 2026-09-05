const fs = require('fs');

// Master dictionary of authentic ingredients for the 175 template recipes
const authenticIngredientsMap = {
  '临川牛杂': [
    { name: '新鲜牛肚、牛肠与牛肺等牛杂 (卤熟切片)', amount: 350, unit: '克', type: 'main' },
    { name: '江西特产鲜红尖椒与生姜', amount: 50, unit: '克 (切碎)', type: 'secondary' },
    { name: '抚州临川菜梗', amount: 30, unit: '克', type: 'secondary' }
  ],
  '鄱阳湖胖头鱼头': [
    { name: '鄱阳湖生态大花鲢鱼头 (对半剖开)', amount: 800, unit: '克', type: 'main' },
    { name: '农家自制红剁椒与黄贡椒', amount: 80, unit: '克', type: 'secondary' },
    { name: '老生姜片与紫皮大蒜瓣', amount: 30, unit: '克', type: 'secondary' }
  ],
  '余干小炒田鸡': [
    { name: '新鲜生态田鸡/牛蛙肉 (斩小块)', amount: 400, unit: '克', type: 'main' },
    { name: '江西余干枫树辣 (切斜块)', amount: 150, unit: '克', type: 'secondary' },
    { name: '紫皮大蒜瓣与老姜丝', amount: 25, unit: '克', type: 'secondary' }
  ],
  '赣南小炒鱼': [
    { name: '鲜活草鱼中段/草鱼肉厚片', amount: 450, unit: '克', type: 'main' },
    { name: '客家传统生姜丝与红辣椒丝', amount: 40, unit: '克', type: 'secondary' },
    { name: '赣南特产纯红薯淀粉', amount: 20, unit: '克', type: 'secondary' }
  ],
  '老友炒猪杂': [
    { name: '新鲜猪粉肠、猪肝与猪腰花 (切片切花刀)', amount: 350, unit: '克', type: 'main' },
    { name: '南宁传统酸笋丝', amount: 80, unit: '克', type: 'secondary' },
    { name: '豆豉与指天椒碎', amount: 20, unit: '克', type: 'secondary' }
  ],
  '桂林啤酒鱼': [
    { name: '阳朔漓江鲜活剑骨鱼/鲜鲤鱼 (带皮斩大块)', amount: 650, unit: '克', type: 'main' },
    { name: '当地漓泉啤酒/优质啤酒', amount: 330, unit: '毫升 (1听)', type: 'secondary' },
    { name: '成熟红番茄块与青红彩椒块', amount: 120, unit: '克', type: 'secondary' }
  ],
  '南宁老友伊面': [
    { name: '广西南宁传统油炸伊面', amount: 150, unit: '克', type: 'main' },
    { name: '新鲜薄猪肉片与粉肠', amount: 100, unit: '克', type: 'main' },
    { name: '南宁特色酸笋丝与豆豉', amount: 50, unit: '克', type: 'secondary' }
  ],
  '巴马油茶': [
    { name: '广西巴马高山野生茶叶', amount: 30, unit: '克', type: 'main' },
    { name: '生姜块与大蒜粒', amount: 30, unit: '克', type: 'secondary' },
    { name: '炸脆米花、炸花生米与排散', amount: 80, unit: '克', type: 'secondary' }
  ],
  '岐山臊子面': [
    { name: '陕西手擀细韧面条', amount: 200, unit: '克', type: 'main' },
    { name: '岐山农家红油五花肉肉臊子', amount: 100, unit: '克', type: 'main' },
    { name: '豆腐干丁、木耳丁、黄花菜、红萝卜丁与韭菜末', amount: 100, unit: '克 (五色底菜)', type: 'secondary' }
  ],
  '陕西臊子面': [
    { name: '陕西优质手擀面条', amount: 200, unit: '克', type: 'main' },
    { name: '酸辣鲜香五花肉肉丁臊子', amount: 100, unit: '克', type: 'main' },
    { name: '胡萝卜丁、豆腐丁、黑木耳丁与鸡蛋皮碎', amount: 80, unit: '克', type: 'secondary' }
  ],
  '羊肉泡馍': [
    { name: '慢火久炖香浓秦川羊肉汤', amount: 450, unit: '毫升', type: 'main' },
    { name: '优质熟烂羊肉厚片', amount: 120, unit: '克', type: 'main' },
    { name: '传统半发酵死面托托馍 (掰指甲盖大小碎粒)', amount: 2, unit: '个', type: 'main' },
    { name: '糖蒜与陕西秘制油泼辣子', amount: 30, unit: '克', type: 'secondary' }
  ],
  '陕西凉皮': [
    { name: '手工洗面筋蒸制爽滑凉皮', amount: 250, unit: '克', type: 'main' },
    { name: '蜂窝状多孔蒸面筋块', amount: 50, unit: '克', type: 'main' },
    { name: '清脆黄瓜细丝与绿豆芽', amount: 60, unit: '克', type: 'secondary' },
    { name: '秦椒秘制油泼辣子与大蒜水', amount: 30, unit: '克', type: 'secondary' }
  ],
  '油泼辣子饸饹': [
    { name: '现压优质纯荞麦饸饹面', amount: 250, unit: '克', type: 'main' },
    { name: '热榨浓香菜籽油泼秦椒辣子', amount: 35, unit: '克', type: 'secondary' },
    { name: '大蒜泥与爽脆韭菜碎', amount: 30, unit: '克', type: 'secondary' }
  ],
  '长安葫芦鸡': [
    { name: '陕西散养嫩母鸡/三黄鸡 (整只约900克)', amount: 900, unit: '克', type: 'main' },
    { name: '大葱结、老姜片与八角花椒香料包', amount: 30, unit: '克', type: 'secondary' },
    { name: '特调长安椒盐蘸料粉', amount: 15, unit: '克', type: 'secondary' }
  ],
  '西宁手抓羊肉': [
    { name: '青海高原天然牧养羯羊肋排/羊前腿 (斩长条)', amount: 650, unit: '克', type: 'main' },
    { name: '西宁特产大蒜瓣与老姜片', amount: 40, unit: '克', type: 'secondary' },
    { name: '青海高原特产青花椒与青盐', amount: 15, unit: '克', type: 'secondary' }
  ],
  '宁夏黄焖羊肉': [
    { name: '宁夏盐池特产优质滩羊肉排 (斩适口方块)', amount: 550, unit: '克', type: 'main' },
    { name: '沙地黄心土豆块', amount: 150, unit: '克', type: 'secondary' },
    { name: '青红尖椒片与洋葱块', amount: 80, unit: '克', type: 'secondary' }
  ],
  '新疆手抓羊肉饭': [
    { name: '新疆阿勒泰新鲜羊腿肉/羊排 (切块)', amount: 350, unit: '克', type: 'main' },
    { name: '新疆长粒大米/香米 (浸泡滤干)', amount: 250, unit: '克', type: 'main' },
    { name: '新鲜红胡萝卜与黄胡萝卜粗丝', amount: 200, unit: '克', type: 'secondary' },
    { name: '皮牙子(洋葱丝)与孜然粒', amount: 60, unit: '克', type: 'secondary' }
  ],
  '新疆烤包子': [
    { name: '新鲜羊腿肉与羊尾油丁 (肥瘦相间)', amount: 250, unit: '克', type: 'main' },
    { name: '死面面团包子皮', amount: 8, unit: '张', type: 'main' },
    { name: '皮牙子(洋葱碎)与现磨孜然黑胡椒', amount: 100, unit: '克', type: 'secondary' }
  ],
  '椒麻鸡': [
    { name: '新疆农家散养土土鸡/三黄鸡 (煮熟手撕大条)', amount: 500, unit: '克', type: 'main' },
    { name: '新鲜小葱段与大葱丝', amount: 60, unit: '克', type: 'secondary' },
    { name: '新疆特产青花椒麻油与青红椒丝', amount: 40, unit: '克', type: 'secondary' }
  ],
  '地三鲜': [
    { name: '东北沙地黄心土豆 (滚刀块)', amount: 200, unit: '克', type: 'main' },
    { name: '嫩紫皮长茄子 (滚刀块挂薄粉)', amount: 200, unit: '克', type: 'main' },
    { name: '清脆绿圆椒/青椒 (手撕块)', amount: 100, unit: '克', type: 'main' },
    { name: '大蒜末与老姜碎', amount: 20, unit: '克', type: 'secondary' }
  ],
  '家常溜肉段': [
    { name: '精选新鲜猪里脊肉 (切适口长条肉段)', amount: 300, unit: '克', type: 'main' },
    { name: '青尖椒块与胡萝卜片', amount: 50, unit: '克', type: 'secondary' },
    { name: '东北纯土豆淀粉 (调水淀粉挂硬糊)', amount: 60, unit: '克', type: 'secondary' }
  ],
  '小鸡炖榛蘑': [
    { name: '东北农家散养小笨鸡/三黄鸡 (斩块)', amount: 600, unit: '克', type: 'main' },
    { name: '长白山野生野生干榛蘑 (温水充分泡发洗净)', amount: 60, unit: '克', type: 'main' },
    { name: '东北纯土豆宽粉条 (提前温水浸泡软)', amount: 80, unit: '克', type: 'secondary' }
  ],
  '东北大酱骨': [
    { name: '新鲜猪脊骨/大棒骨 (带厚肉斩大块)', amount: 800, unit: '克', type: 'main' },
    { name: '东北特产老黄豆酱/大酱', amount: 50, unit: '克', type: 'secondary' },
    { name: '大葱段、老姜块与八角桂皮', amount: 35, unit: '克', type: 'secondary' }
  ],
  '自制五彩大拉皮': [
    { name: '东北纯绿豆/土豆鲜拉皮 (切宽条)', amount: 250, unit: '克', type: 'main' },
    { name: '新鲜黄瓜细丝、胡萝卜丝与紫甘蓝丝', amount: 150, unit: '克', type: 'secondary' },
    { name: '精瘦肉丝炒肉帽', amount: 60, unit: '克', type: 'secondary' },
    { name: '纯芝麻酱调和汁与蒜醋汁', amount: 40, unit: '克', type: 'secondary' }
  ],
  '酸菜白肉血肠': [
    { name: '东北正宗老坛渍酸菜 (洗净攥干切细丝)', amount: 350, unit: '克', type: 'main' },
    { name: '熟烀带皮五花肉 (切规整薄大片)', amount: 200, unit: '克', type: 'main' },
    { name: '新鲜东北生猪血肠 (切斜厚片)', amount: 150, unit: '克', type: 'main' }
  ],
  '东北汆白肉': [
    { name: '东北正宗渍大白菜酸菜 (切细丝洗净)', amount: 300, unit: '克', type: 'main' },
    { name: '冷鲜带皮猪五花肉 (白煮后切透明薄片)', amount: 250, unit: '克', type: 'main' },
    { name: '老姜片与大葱段', amount: 20, unit: '克', type: 'secondary' }
  ],
  '拔丝地瓜': [
    { name: '优质沙地黄心红薯/地瓜 (滚刀切块)', amount: 400, unit: '克', type: 'main' },
    { name: '纯白砂糖/绵白糖', amount: 120, unit: '克', type: 'main' },
    { name: '熟白芝麻粒', amount: 5, unit: '克', type: 'secondary' }
  ],
  '经典回锅肉': [
    { name: '正宗四川坐墩肉/冷鲜带皮二刀肉', amount: 350, unit: '克', type: 'main' },
    { name: '新鲜鲜嫩青蒜苗/大葱段 (斜切长段)', amount: 150, unit: '克', type: 'secondary' },
    { name: '四川正宗郫县豆瓣酱与豆豉', amount: 30, unit: '克', type: 'secondary' }
  ],
  '宫保鸡丁': [
    { name: '鲜嫩鸡腿肉/鸡胸肉 (切1.5厘米方丁)', amount: 300, unit: '克', type: 'main' },
    { name: '香脆油炸去皮花生米', amount: 60, unit: '克', type: 'secondary' },
    { name: '四川干红辣椒段与花椒粒', amount: 15, unit: '克', type: 'secondary' },
    { name: '大葱白厚段', amount: 40, unit: '克', type: 'secondary' }
  ],
  '水煮牛肉': [
    { name: '精选牛里脊肉/黄瓜条 (逆纹切薄大片)', amount: 300, unit: '克', type: 'main' },
    { name: '鲜嫩凤尾莴笋尖与绿豆芽', amount: 180, unit: '克', type: 'secondary' },
    { name: '郫县豆瓣酱、刀口辣椒面与花椒面', amount: 40, unit: '克', type: 'secondary' }
  ],
  '重特辣子鸡': [
    { name: '散养公鸡腿肉 (斩2厘米见方小丁)', amount: 450, unit: '克', type: 'main' },
    { name: '四川二荆条干辣椒段与石柱红干椒', amount: 120, unit: '克', type: 'secondary' },
    { name: '汉源茂县大红袍花椒粒', amount: 25, unit: '克', type: 'secondary' },
    { name: '熟白芝麻与姜蒜丁', amount: 20, unit: '克', type: 'secondary' }
  ],
  '粉蒸牛肉': [
    { name: '精选鲜嫩牛里脊肉/牛胸脯肉 (切薄片)', amount: 300, unit: '克', type: 'main' },
    { name: '自炒五香大米粉(加八角桂皮打粗颗粒)', amount: 80, unit: '克', type: 'main' },
    { name: '新鲜红薯块/南瓜块 (垫底蒸)', amount: 150, unit: '克', type: 'secondary' }
  ],
  '干煸肥肠': [
    { name: '熟洗净猪大肠/肥肠头 (切斜滚刀块)', amount: 350, unit: '克', type: 'main' },
    { name: '新鲜青红尖椒段与洋葱丝', amount: 80, unit: '克', type: 'secondary' },
    { name: '干辣椒段、花椒与大蒜粒', amount: 25, unit: '克', type: 'secondary' }
  ],
  '干锅肥肠': [
    { name: '卤制熟透猪大肠 (切斜厚片)', amount: 350, unit: '克', type: 'main' },
    { name: '洋葱块、青红圆椒块与西芹段', amount: 120, unit: '克', type: 'secondary' },
    { name: '干锅香辣底料与豆瓣酱', amount: 35, unit: '克', type: 'secondary' }
  ],
  '农家一碗香': [
    { name: '带皮冷鲜五花肉片与瘦肉片', amount: 180, unit: '克', type: 'main' },
    { name: '鲜农家土鸡蛋 (原只煎焦黄切大块)', amount: 3, unit: '枚', type: 'main' },
    { name: '湖南本地鲜螺丝椒 (斜切滚刀块)', amount: 150, unit: '克', type: 'secondary' },
    { name: '紫皮大蒜与浏阳豆豉', amount: 20, unit: '克', type: 'secondary' }
  ],
  '外婆菜炒肉沫': [
    { name: '湘西特产传统外婆菜 (洗净攥干水分)', amount: 180, unit: '克', type: 'main' },
    { name: '肥三瘦七农家猪肉沫', amount: 150, unit: '克', type: 'main' },
    { name: '鲜红小米辣圈与大蒜碎', amount: 25, unit: '克', type: 'secondary' }
  ],
  '红煨甲鱼': [
    { name: '生态甲鱼/水鱼 (宰杀洗净斩适口厚块)', amount: 750, unit: '克', type: 'main' },
    { name: '带皮猪五花肉块 (一同红煨增香)', amount: 100, unit: '克', type: 'secondary' },
    { name: '整粒去皮紫皮大蒜瓣', amount: 20, unit: '瓣', type: 'secondary' },
    { name: '老姜厚片与大葱段', amount: 30, unit: '克', type: 'secondary' }
  ],
  '攸县香干炒肉': [
    { name: '湖南攸县传统手工香豆干 (切长薄片)', amount: 250, unit: '克', type: 'main' },
    { name: '冷鲜半肥瘦猪肉 (切薄肉片)', amount: 150, unit: '克', type: 'main' },
    { name: '鲜青红螺丝椒丝与青蒜段', amount: 80, unit: '克', type: 'secondary' }
  ],
  '平江豆干': [
    { name: '湖南平江特产卤香豆干 (切厚长条)', amount: 300, unit: '克', type: 'main' },
    { name: '鲜红干辣椒粉、花椒与熟芝麻', amount: 25, unit: '克', type: 'secondary' },
    { name: '香葱末与蒜泥', amount: 15, unit: '克', type: 'secondary' }
  ],
  '擂辣椒皮蛋': [
    { name: '鲜嫩湖南土皮螺丝椒 (烧烤至表皮起虎皮起焦黑撕去外皮)', amount: 200, unit: '克', type: 'main' },
    { name: '优质溏心无铅松花松皮蛋', amount: 3, unit: '枚', type: 'main' },
    { name: '紫皮大蒜瓣 (擂臼同捣碎成泥)', amount: 4, unit: '瓣', type: 'secondary' }
  ],
  '清蒸金鲳鱼': [
    { name: '深海鲜活大金鲳鱼 (洗净双面划一字花刀)', amount: 500, unit: '克', type: 'main' },
    { name: '鲜嫩红彩椒丝、小葱白细丝与老姜细丝', amount: 40, unit: '克 (蒸鱼三丝)', type: 'secondary' },
    { name: '特制蒸鱼豉油', amount: 3, unit: '汤匙', type: 'secondary' }
  ],
  '顺德鱼头豆腐汤': [
    { name: '顺德鲜活大花鲢鱼头/胖头鱼头 (斩两半入油锅煎香透)', amount: 650, unit: '克', type: 'main' },
    { name: '顺德石磨嫩水豆腐 (切大厚块)', amount: 250, unit: '克', type: 'main' },
    { name: '老生姜厚片与小葱结', amount: 30, unit: '克', type: 'secondary' }
  ],
  '经典菠萝咕咾肉': [
    { name: '精选新鲜猪梅花肉/猪里脊肉 (切2厘米方丁)', amount: 300, unit: '克', type: 'main' },
    { name: '新鲜成熟清甜菠萝 (盐水浸泡切块)', amount: 150, unit: '克', type: 'main' },
    { name: '彩椒块与红洋葱块', amount: 60, unit: '克', type: 'secondary' }
  ],
  '广东早茶蒸排骨': [
    { name: '精选新鲜猪肋排 (斩2.5厘米规整小段)', amount: 400, unit: '克', type: 'main' },
    { name: '荔浦芋头块/金南瓜块 (垫底蒸吸汁)', amount: 150, unit: '克', type: 'secondary' },
    { name: '阳江豆豉碎、生姜蒜末与红椒圈', amount: 20, unit: '克', type: 'secondary' }
  ],
  '生滚牛肉粥': [
    { name: '新鲜黄牛里脊/牛柳肉 (逆纹切透明薄片)', amount: 150, unit: '克', type: 'main' },
    { name: '丝苗米与东北米慢火熬透顺滑白粥底', amount: 500, unit: '克', type: 'main' },
    { name: '老生姜细丝与鲜香菜碎', amount: 20, unit: '克', type: 'secondary' }
  ],
  '潮汕牛肉丸汤': [
    { name: '正宗潮汕手打纯黄牛肉丸 (刀划十字花)', amount: 10, unit: '颗', type: 'main' },
    { name: '牛骨久炖清亮高汤底', amount: 500, unit: '毫升', type: 'main' },
    { name: '鲜嫩芹菜碎、潮汕炸金蒜酥与鱼露', amount: 25, unit: '克', type: 'secondary' }
  ],
  '啫啫煲鸡': [
    { name: '广东清远散养三黄土鸡 (斩小块)', amount: 450, unit: '克', type: 'main' },
    { name: '红葱头整个与老姜厚块', amount: 60, unit: '克', type: 'secondary' },
    { name: '紫皮大蒜瓣与青红彩椒片', amount: 40, unit: '克', type: 'secondary' }
  ],
  '盐焗鸡': [
    { name: '广东清远散养三黄鸡 (整只吸干表面水份)', amount: 900, unit: '克', type: 'main' },
    { name: '天然粗海盐 (炒至滚烫埋焗)', amount: 2000, unit: '克', type: 'secondary' },
    { name: '正宗传统客家盐焗鸡粉与沙姜粉', amount: 30, unit: '克', type: 'secondary' }
  ],
  '蚝油生菜': [
    { name: '清脆新鲜罗马生菜/圆生菜 (洗净摘片)', amount: 350, unit: '克', type: 'main' },
    { name: '大蒜瓣 (拍扁切碎粒)', amount: 4, unit: '瓣', type: 'secondary' },
    { name: '特级李锦记蚝油与生抽调和汁', amount: 3, unit: '汤匙', type: 'secondary' }
  ],
  '糟辣椒炒蛋': [
    { name: '新鲜农家土鸡蛋', amount: 4, unit: '枚', type: 'main' },
    { name: '贵州传统老坛糟辣椒', amount: 60, unit: '克', type: 'main' },
    { name: '大蒜碎与新鲜小葱花', amount: 20, unit: '克', type: 'secondary' }
  ],
  '花溪牛肉粉': [
    { name: '贵阳花溪特色水泡发粗酸浆米粉', amount: 200, unit: '克', type: 'main' },
    { name: '老卤黄牛腩肉片与卤牛筋块', amount: 100, unit: '克', type: 'main' },
    { name: '慢煨原汁牛骨高汤', amount: 400, unit: '毫升', type: 'main' },
    { name: '贵州特色泡莲花白菜与糊辣椒面', amount: 30, unit: '克', type: 'secondary' }
  ],
  '贵阳辣子鸡': [
    { name: '高山散养农家公鸡 (斩小丁块)', amount: 500, unit: '克', type: 'main' },
    { name: '贵州地道手工糍粑辣椒 (干椒煮后石臼舂碎)', amount: 120, unit: '克', type: 'main' },
    { name: '大蒜粒与老生姜块', amount: 40, unit: '克', type: 'secondary' }
  ],
  '折耳根拌腊肉': [
    { name: '新鲜脆嫩折耳根(鱼腥草嫩白节)', amount: 150, unit: '克', type: 'main' },
    { name: '贵州农家柏木熏制土猪五花腊肉 (煮熟切薄片)', amount: 150, unit: '克', type: 'main' },
    { name: '糊辣椒面、花椒油与香醋生抽', amount: 30, unit: '克', type: 'secondary' }
  ],
  '丝娃娃配蘸水': [
    { name: '贵阳现摊薄如蝉翼小面皮', amount: 12, unit: '张', type: 'main' },
    { name: '折耳根碎、酸萝卜丝、黄瓜丝、海带丝、绿豆芽与香脆哨', amount: 200, unit: '克 (各色时蔬丁丝)', type: 'main' },
    { name: '贵阳特调酸辣糊辣椒木姜子油蘸水', amount: 100, unit: '毫升', type: 'secondary' }
  ],
  '大理酸木瓜煮鸡': [
    { name: '云南大理农家土鸡肉 (斩适口块)', amount: 500, unit: '克', type: 'main' },
    { name: '大理新鲜野生白族酸木瓜 (切片)', amount: 1, unit: '个', type: 'main' },
    { name: '草果、八角与老姜厚片', amount: 20, unit: '克', type: 'secondary' }
  ],
  '黑三剁': [
    { name: '云南昆明老字号玫瑰大头菜 (切碎米丁)', amount: 100, unit: '克', type: 'main' },
    { name: '半肥半瘦纯猪精肉馅', amount: 150, unit: '克', type: 'main' },
    { name: '鲜红彩椒丁与青尖椒丁', amount: 80, unit: '克', type: 'main' }
  ],
  '洋芋焖饭': [
    { name: '云南高山黄心洋芋(土豆) (切2厘米大方块)', amount: 250, unit: '克', type: 'main' },
    { name: '宣威老火腿切厚丁', amount: 80, unit: '克', type: 'main' },
    { name: '长粒茉莉香米 (淘净焖制)', amount: 200, unit: '克', type: 'main' }
  ],
  '闽南传统荔枝肉': [
    { name: '精选新鲜猪里脊肉 (划十字花刀切块油炸如荔枝壳)', amount: 300, unit: '克', type: 'main' },
    { name: '去皮脆甜鲜荸荠(马蹄)', amount: 8, unit: '个', type: 'main' },
    { name: '福建传统红糟与糖醋芡汁', amount: 50, unit: '克', type: 'secondary' }
  ],
  '沙县扁肉': [
    { name: '沙县传统木槌打制纯精猪肉馅', amount: 200, unit: '克', type: 'main' },
    { name: '超薄特制云吞扁肉面皮', amount: 30, unit: '张', type: 'main' },
    { name: '大骨清汤底配小香葱花', amount: 400, unit: '毫升', type: 'secondary' }
  ],
  '同安封肉': [
    { name: '厦门同安带皮正方三层五花肉 (整块入封)', amount: 600, unit: '克', type: 'main' },
    { name: '福建鲜板栗、干香菇与虾仁干', amount: 80, unit: '克', type: 'secondary' },
    { name: '八角桂皮老抽与福建老酒', amount: 40, unit: '克', type: 'secondary' }
  ],
  '闽式红糟炸鳗鱼': [
    { name: '福建沿海新鲜海鳗鱼肉 (洗净切规整厚块)', amount: 400, unit: '克', type: 'main' },
    { name: '福州传统红曲米天然红糟', amount: 50, unit: '克', type: 'secondary' },
    { name: '五香粉、地瓜生粉与老姜汁', amount: 30, unit: '克', type: 'secondary' }
  ],
  '海南椰子鸡': [
    { name: '正宗海南文昌鸡 (半只斩整齐小块)', amount: 550, unit: '克', type: 'main' },
    { name: '新鲜天然椰青水 (现砍现倒2只原汁)', amount: 700, unit: '毫升', type: 'main' },
    { name: '新鲜清甜椰子肉刮条', amount: 50, unit: '克', type: 'secondary' },
    { name: '海南小金桔、沙姜碎与特级生抽蘸料', amount: 30, unit: '克', type: 'secondary' }
  ],
  '文昌鸡': [
    { name: '海南农家散养正宗文昌鸡 (整只约900克白切)', amount: 900, unit: '克', type: 'main' },
    { name: '沙姜末、香菜碎、大蒜泥与小金桔汁', amount: 40, unit: '克 (灵魂蘸料)', type: 'secondary' },
    { name: '大葱结与老生姜块', amount: 30, unit: '克', type: 'secondary' }
  ],
  '捞叶炒土鸡': [
    { name: '海南文昌土鸡肉 (斩小块)', amount: 400, unit: '克', type: 'main' },
    { name: '海南野生假蒌叶/捞叶 (洗净切碎段)', amount: 60, unit: '克', type: 'main' },
    { name: '紫皮大蒜与红尖椒片', amount: 25, unit: '克', type: 'secondary' }
  ],
  '松鼠鳜鱼': [
    { name: '鲜活新鲜鳜鱼/桂鱼 (去骨划麦穗花刀成松鼠尾翘起)', amount: 700, unit: '克', type: 'main' },
    { name: '熟金黄松子仁', amount: 20, unit: '克', type: 'secondary' },
    { name: '特制金红糖醋番茄汁芡', amount: 100, unit: '克', type: 'secondary' }
  ],
  '无锡酱排骨': [
    { name: '精选带肉新鲜猪精肋排 (斩段)', amount: 600, unit: '克', type: 'main' },
    { name: '天然红曲米粉/红曲水 (上天然艳红亮色)', amount: 15, unit: '克', type: 'secondary' },
    { name: '老冰糖、黄酒与生抽老抽', amount: 60, unit: '克', type: 'secondary' }
  ],
  '软兜长鱼': [
    { name: '鲜活野生笔杆黄鳝 (烫熟剔骨取纯鳝鱼脊背肉)', amount: 350, unit: '克', type: 'main' },
    { name: '紫皮大蒜瓣 (整粒软糯油煸)', amount: 10, unit: '瓣', type: 'secondary' },
    { name: '镇江香醋、白胡椒粉与生姜丝', amount: 25, unit: '克', type: 'secondary' }
  ],
  '西湖醋鱼': [
    { name: '西湖活草鱼 (饿养两天去泥腥，对剖两半)', amount: 750, unit: '克', type: 'main' },
    { name: '新鲜生姜末 (大量撒在鱼身表面提香解腻)', amount: 35, unit: '克', type: 'secondary' },
    { name: '镇江香醋、白砂糖与绍兴黄酒特调黑亮醋芡', amount: 80, unit: '克', type: 'secondary' }
  ],
  '杭帮名馔百年楼外楼正宗西湖醋鱼': [
    { name: '活杀生态草鱼/开化清水草鱼 (背部厚肉划斜刀)', amount: 750, unit: '克', type: 'main' },
    { name: '老生姜末', amount: 35, unit: '克', type: 'secondary' },
    { name: '湖羊传统天然生抽配纯香醋白糖浓芡', amount: 90, unit: '克', type: 'secondary' }
  ],
  '宋嫂鱼羹': [
    { name: '鲜活鳜鱼/鲜鲈鱼 (蒸熟细细拆下纯鱼肉嫩块)', amount: 200, unit: '克', type: 'main' },
    { name: '发泡香菇丝、金华火腿细丝与嫩笋丝', amount: 60, unit: '克', type: 'secondary' },
    { name: '优质鲜鸡蛋黄液 (淋入滑成金黄蛋丝)', amount: 1, unit: '个', type: 'secondary' },
    { name: '清鸡汤底配镇江香醋与胡椒粉', amount: 450, unit: '毫升', type: 'secondary' }
  ],
  '油焖春笋': [
    { name: '江南早春雷竹笋/新鲜春笋尖 (拍扁切长段)', amount: 400, unit: '克', type: 'main' },
    { name: '纯芝麻香油与热花生油', amount: 30, unit: '毫升', type: 'secondary' },
    { name: '生抽酱油与多量白冰糖 (重油重糖收出红亮油润壳)', amount: 40, unit: '克', type: 'secondary' }
  ],
  '雪菜大黄鱼汤': [
    { name: '舟山野生鲜活大黄鱼 (洗净煎至双面微黄)', amount: 450, unit: '克', type: 'main' },
    { name: '宁波地道老坛雪里蕻雪菜 (切末攥干水炒出香气)', amount: 80, unit: '克', type: 'main' },
    { name: '冬笋切片与老生姜片', amount: 40, unit: '克', type: 'secondary' }
  ],
  '糖醋鲤鱼': [
    { name: '黄河鲜活鲤鱼 (洗净双面划深百叶花刀，挂糊炸成弓形跃龙门)', amount: 800, unit: '克', type: 'main' },
    { name: '山东传统甜酸糖醋汁 (高汤、米醋、白糖与湿淀粉)', amount: 120, unit: '克', type: 'secondary' },
    { name: '生姜末与细葱丝', amount: 20, unit: '克', type: 'secondary' }
  ],
  '油爆双脆': [
    { name: '新鲜猪肚最厚尖端部分 (剔去筋膜划极密十字花刀)', amount: 180, unit: '克', type: 'main' },
    { name: '新鲜鲜鸡肫/鸭肫 (剥除外膜划菊花花刀)', amount: 150, unit: '克', type: 'main' },
    { name: '大葱白丁与老姜末', amount: 20, unit: '克', type: 'secondary' }
  ],
  '胶东大鲅鱼水饺': [
    { name: '胶东新鲜大鲅鱼纯鱼肉 (刮下鱼肉泥加韭菜五花肉搅打起胶)', amount: 350, unit: '克', type: 'main' },
    { name: '肥三瘦七猪肉沫 (增脂润滑)', amount: 60, unit: '克', type: 'secondary' },
    { name: '新鲜鲜嫩韭菜碎', amount: 80, unit: '克', type: 'secondary' },
    { name: '手工现揉水饺皮', amount: 30, unit: '张', type: 'main' }
  ],
  '德州扒鸡': [
    { name: '山东德州散养健壮公鸡 (整只盘腿造型)', amount: 950, unit: '克', type: 'main' },
    { name: '十六味天然草本天然大料包 (砂仁草果肉蔻白芷等)', amount: 40, unit: '克', type: 'secondary' },
    { name: '天然饴糖蜂蜜上色水', amount: 25, unit: '克', type: 'secondary' }
  ],
  '清蒸武昌鱼': [
    { name: '湖北鄂州梁子湖鲜活武昌鱼 (团头鲂，改孔雀开屏刀)', amount: 600, unit: '克', type: 'main' },
    { name: '红彩椒圈、小葱丝与老姜细丝', amount: 30, unit: '克', type: 'secondary' },
    { name: '优质高鲜蒸鱼豉油', amount: 3, unit: '汤匙', type: 'secondary' }
  ],
  '沔阳三蒸': [
    { name: '带皮猪五花肉厚片', amount: 150, unit: '克', type: 'main' },
    { name: '新鲜草鱼块/青鱼块', amount: 150, unit: '克', type: 'main' },
    { name: '新鲜茼蒿菜与红心南瓜块', amount: 150, unit: '克', type: 'main' },
    { name: '湖北传统特炒自磨五香米粉', amount: 120, unit: '克', type: 'secondary' }
  ],
  '红菜苔炒腊肉': [
    { name: '武汉洪山特产紫皮红菜苔 (手掐嫩段洗净)', amount: 350, unit: '克', type: 'main' },
    { name: '恩施土家柴火熏五花腊肉 (洗净煮软切长薄片)', amount: 120, unit: '克', type: 'main' },
    { name: '紫皮大蒜瓣与干红辣椒段', amount: 20, unit: '克', type: 'secondary' }
  ],
  '钟祥蟠龙菜': [
    { name: '精选冷鲜猪里脊肉泥与肥膘丁', amount: 250, unit: '克', type: 'main' },
    { name: '新鲜草鱼肉细蓉', amount: 150, unit: '克', type: 'main' },
    { name: '农家鲜鸡蛋摊制黄金蛋皮', amount: 2, unit: '张', type: 'main' }
  ],
  '荆州鱼糕': [
    { name: '湖北长江草鱼/青鱼剔骨纯白鱼茸', amount: 350, unit: '克', type: 'main' },
    { name: '去皮猪板油丁', amount: 60, unit: '克', type: 'secondary' },
    { name: '土鸡蛋清 (打入鱼茸起浮力)', amount: 3, unit: '个', type: 'secondary' },
    { name: '土鸡蛋黄液 (出锅前刷抹表面蒸成金黄玉顶)', amount: 2, unit: '个', type: 'secondary' }
  ],
  '襄阳牛肉面': [
    { name: '特制微碱劲道圆粗面条', amount: 200, unit: '克', type: 'main' },
    { name: '襄阳秘制红油牛腩肉丁与牛杂块', amount: 120, unit: '克', type: 'main' },
    { name: '厚重牛油熬煮香浓大骨汤', amount: 400, unit: '毫升', type: 'main' },
    { name: '新鲜绿豆芽与小葱花', amount: 40, unit: '克', type: 'secondary' }
  ],
  '黄山传统臭鳜鱼': [
    { name: '安徽黄山传统樟木桶自然腌制臭鳜鱼 (洗净改刀)', amount: 650, unit: '克', type: 'main' },
    { name: '熟五花肉丁、徽州鲜笋丁与红椒丁', amount: 80, unit: '克', type: 'secondary' },
    { name: '大蒜瓣、生姜末与黄山老酒', amount: 30, unit: '克', type: 'secondary' }
  ],
  '问政山笋煨腊肉': [
    { name: '徽州歙县问政山新鲜白白嫩毛笋 (切滚刀块)', amount: 350, unit: '克', type: 'main' },
    { name: '徽州古法柴火烟熏土猪腊肉 (切厚片)', amount: 150, unit: '克', type: 'main' },
    { name: '老冰糖少许与老生姜片', amount: 15, unit: '克', type: 'secondary' }
  ],
  '徽州一品锅': [
    { name: '散养土鸡肉块、农家自制炸肉圆与山猪腊肉片', amount: 350, unit: '克', type: 'main' },
    { name: '徽州干豆角结、鲜冬笋片与红薯粉丝', amount: 200, unit: '克 (层层码放)', type: 'main' },
    { name: '醇厚土鸡高汤', amount: 400, unit: '毫升', type: 'secondary' }
  ],
  '李鸿章大杂烩': [
    { name: '发制顶级海参、鲜鲍鱼、纯鱼肚与花胶', amount: 250, unit: '克', type: 'main' },
    { name: '熟散养鸡丝、熟火腿丝与鲜香菇丝', amount: 150, unit: '克', type: 'main' },
    { name: '金黄鲜鸡浓汤底', amount: 500, unit: '毫升', type: 'secondary' }
  ],
  '手工剔尖面': [
    { name: '特制高筋中筋小麦面粉调和软面团 (用铁筷沿盘剔出两头尖面条)', amount: 250, unit: '克', type: 'main' },
    { name: '老陈醋五香猪肉臊子/西红柿鸡蛋浇头', amount: 150, unit: '克', type: 'main' }
  ],
  '家常莜面栲栳栳': [
    { name: '山西纯正高寒莜麦面粉 (开水烫面手推成卷卷立放笼屉)', amount: 250, unit: '克', type: 'main' },
    { name: '羊肉臊子汤/酸辣蘑菇土豆丁调和蘸汁', amount: 200, unit: '毫升', type: 'main' }
  ],
  '平遥牛肉冷盘': [
    { name: '平遥古法老卤正宗风味酱牛肉 (逆纹切大薄片)', amount: 350, unit: '克', type: 'main' },
    { name: '山西老陈醋与红油蒜泥蘸料', amount: 40, unit: '克', type: 'secondary' }
  ],
  '晋南油酥锅盔': [
    { name: '酵面面团包入五香花椒猪油生酥', amount: 300, unit: '克', type: 'main' },
    { name: '纯熟白芝麻 (两面粘满慢火烙透)', amount: 30, unit: '克', type: 'secondary' }
  ],
  '山西大烩菜': [
    { name: '冷鲜带皮五花肉片与炸肉丸', amount: 200, unit: '克', type: 'main' },
    { name: '山西传统纯红薯宽粉条 (泡软)', amount: 120, unit: '克', type: 'main' },
    { name: '大白菜叶大片、炸老豆腐块与海带片', amount: 200, unit: '克', type: 'secondary' }
  ],
  '直隶官府李鸿章烩菜': [
    { name: '顶级泡发刺参、鲜鲍鱼片与纯鱼肚', amount: 200, unit: '克', type: 'main' },
    { name: '散养土鸡胸肉丝、干贝与鲜冬笋片', amount: 120, unit: '克', type: 'main' },
    { name: '清亮醇厚老母鸡高汤', amount: 450, unit: '毫升', type: 'secondary' }
  ],
  '直隶官府经典李鸿章一品大杂烩': [
    { name: '大水发辽东刺参、鲜南非鲍鱼与蹄筋', amount: 250, unit: '克', type: 'main' },
    { name: '金华火腿丝、熟鸽蛋与滑嫩鸡丝', amount: 120, unit: '克', type: 'main' },
    { name: '官府传世顶汤', amount: 500, unit: '毫升', type: 'secondary' }
  ],
  '金毛狮子鱼': [
    { name: '新鲜大鲤鱼/鳜鱼 (精湛刀功划出千条细丝如狮子金毛抖散)', amount: 750, unit: '克', type: 'main' },
    { name: '鲜榨番茄汁调和甜酸糖醋浇汁', amount: 120, unit: '克', type: 'secondary' }
  ],
  '唐山棋子烧饼': [
    { name: '小麦面粉半发酵千层起酥皮', amount: 250, unit: '克', type: 'main' },
    { name: '调味猪前腿肉大葱鲜肉馅', amount: 150, unit: '克', type: 'main' },
    { name: '熟白芝麻仁', amount: 30, unit: '克', type: 'secondary' }
  ],
  '沧州火锅鸡': [
    { name: '农家散养鲜嫩公鸡肉 (斩适口小块)', amount: 650, unit: '克', type: 'main' },
    { name: '沧州特制麻辣火锅鸡专用红油酱料', amount: 100, unit: '克', type: 'main' },
    { name: '大蒜泥与保宁香醋蘸水', amount: 40, unit: '克', type: 'secondary' }
  ],
  '内蒙古碳烤大羊腿': [
    { name: '内蒙古锡林郭勒草原散养羔羊前腿 (划深刀)', amount: 1200, unit: '克', type: 'main' },
    { name: '现磨孜然粒、特级辣椒面与炒熟白芝麻', amount: 40, unit: '克', type: 'secondary' },
    { name: '洋葱大葱生姜腌汁', amount: 80, unit: '克', type: 'secondary' }
  ],
  '蒙古传统咸奶茶炒米': [
    { name: '内蒙古纯正老青砖茶煮制浓茶汤', amount: 500, unit: '毫升', type: 'main' },
    { name: '新鲜全脂草原纯牛奶', amount: 300, unit: '毫升', type: 'main' },
    { name: '草原黄糜子香脆熟炒米', amount: 60, unit: '克', type: 'main' },
    { name: '纯黄油/酥油一块与少许青盐', amount: 15, unit: '克', type: 'secondary' }
  ],
  '青海老牌土火锅': [
    { name: '青海高原鲜嫩牦牛肉片与羊排块', amount: 300, unit: '克', type: 'main' },
    { name: '自制炸肉夹、炸肉丸与带皮五花肉片', amount: 150, unit: '克', type: 'main' },
    { name: '青海特色洋芋粉条与干香菇', amount: 100, unit: '克', type: 'secondary' }
  ],
  '藏式风干耗牛肉': [
    { name: '西藏高原生晒风干纯天然牦牛肉条 (手撕即食)', amount: 250, unit: '克', type: 'main' },
    { name: '藏式特产香辣蘸料粉与椒盐', amount: 20, unit: '克', type: 'secondary' }
  ],
  '藏家青稞糌粑': [
    { name: '西藏日喀则熟炒青稞纯细麦面', amount: 200, unit: '克', type: 'main' },
    { name: '纯天然牦牛浓香酥油', amount: 40, unit: '克', type: 'main' },
    { name: '西藏地道浓香酥油茶', amount: 100, unit: '毫升', type: 'secondary' }
  ],
  '台式九层塔三杯鸡': [
    { name: '鲜嫩带骨鸡腿肉 (斩小块)', amount: 450, unit: '克', type: 'main' },
    { name: '新鲜绿九层塔(罗勒叶)', amount: 20, unit: '克', type: 'main' },
    { name: '整粒去皮大蒜瓣与老姜厚片', amount: 40, unit: '克', type: 'secondary' },
    { name: '黑芝麻油、米酒与生抽酱油 (各一杯比例)', amount: 60, unit: '毫升', type: 'secondary' }
  ],
  '港式深井烧鹅': [
    { name: '正宗广东清远黑棕鹅 (光鹅整只约2500克或半只1200克)', amount: 1200, unit: '克', type: 'main' },
    { name: '广式秘制烧鹅盐配五香甘草粉', amount: 35, unit: '克', type: 'secondary' },
    { name: '皮水(麦芽糖与大红浙醋刷皮风干)', amount: 50, unit: '克', type: 'secondary' },
    { name: '港式传统酸甜冰花梅子酱', amount: 40, unit: '克 (佐餐蘸酱)', type: 'secondary' }
  ],
  '澳门葡式焦糖蛋挞': [
    { name: '多层千层起酥蛋挞皮', amount: 8, unit: '个', type: 'main' },
    { name: '动物鲜淡奶油', amount: 100, unit: '毫升', type: 'main' },
    { name: '新鲜纯全脂牛奶', amount: 80, unit: '毫升', type: 'main' },
    { name: '新鲜土鸡蛋黄', amount: 2, unit: '个', type: 'main' },
    { name: '细白砂糖与炼乳', amount: 25, unit: '克', type: 'secondary' }
  ],
  '台式川味红烧牛肉面': [
    { name: '精选新鲜牛肋条/牛腱子肉 (逆纹切厚大方块)', amount: 300, unit: '克', type: 'main' },
    { name: '台湾手工刀削面/劲道宽面', amount: 200, unit: '克', type: 'main' },
    { name: '豆瓣酱慢煨香浓牛骨高汤', amount: 400, unit: '毫升', type: 'main' },
    { name: '脆嫩酸菜碎与青江菜(油菜)', amount: 50, unit: '克', type: 'secondary' }
  ],
  '港式干炒牛河': [
    { name: '精选鲜嫩牛里脊肉/黄瓜条 (逆纹切薄大片)', amount: 150, unit: '克', type: 'main' },
    { name: '广东地道优质鲜湿沙河粉 (抖散)', amount: 300, unit: '克', type: 'main' },
    { name: '清脆鲜绿豆芽与香韭黄段', amount: 80, unit: '克', type: 'secondary' }
  ],
  '港式街头碗仔翅': [
    { name: '发泡香菇细丝与木耳细丝', amount: 60, unit: '克', type: 'main' },
    { name: '水煮鲜嫩鸡胸肉 (撕极细鸡丝)', amount: 80, unit: '克', type: 'main' },
    { name: '优质绿豆粉丝 (剪短泡软仿鱼翅)', amount: 40, unit: '克', type: 'main' },
    { name: '浓郁清鸡高汤底与大红浙醋', amount: 500, unit: '毫升', type: 'secondary' }
  ],
  '台式酥炸盐酥鸡': [
    { name: '新鲜无骨大鸡腿肉丁 (切一口大小块)', amount: 350, unit: '克', type: 'main' },
    { name: '新鲜九层塔罗勒叶 (起锅前油炸透)', amount: 15, unit: '克', type: 'secondary' },
    { name: '地瓜粗粒地瓜粉 (挂干粉炸出酥脆鳞片)', amount: 60, unit: '克', type: 'secondary' },
    { name: '台湾经典十三香特调白胡椒盐', amount: 10, unit: '克', type: 'secondary' }
  ],
  '港式丝袜奶茶配冰火菠萝油': [
    { name: '现烤外酥内软热港式菠萝包', amount: 1, unit: '个', type: 'main' },
    { name: '新西兰冷藏咸味厚切冰黄油片', amount: 25, unit: '克 (厚切1片)', type: 'main' },
    { name: '斯里兰卡拼配锡兰红茶冲制黑白淡奶浓香奶茶', amount: 300, unit: '毫升', type: 'main' }
  ],
  '清蒸深海石斑鱼': [
    { name: '深海鲜活老虎斑/东星斑 (洗净鱼身两面划花刀)', amount: 550, unit: '克', type: 'main' },
    { name: '红椒丝、小葱白细丝与老生姜丝', amount: 35, unit: '克', type: 'secondary' },
    { name: '特制清蒸鱼豉油', amount: 3, unit: '汤匙', type: 'secondary' }
  ],
  '原汁清蒸大带鱼': [
    { name: '舟山银鳞鲜捕厚肉大带鱼中段 (切8厘米长块)', amount: 400, unit: '克', type: 'main' },
    { name: '老生姜厚片与小葱结', amount: 25, unit: '克', type: 'secondary' },
    { name: '绍兴特级花雕料酒', amount: 2, unit: '汤匙', type: 'secondary' }
  ],
  '家常红烧大黄鱼': [
    { name: '新鲜东海大黄鱼 (去鳞腮内脏洗净划刀)', amount: 500, unit: '克', type: 'main' },
    { name: '五花肉细丁与冬笋香菇丁', amount: 50, unit: '克', type: 'secondary' },
    { name: '八角花椒、老抽生抽与香醋料酒', amount: 30, unit: '克', type: 'secondary' }
  ],
  '山东金黄水煎包': [
    { name: '手工发酵小面团面皮', amount: 12, unit: '个', type: 'main' },
    { name: '猪前腿肉大葱鲜肉馅/三鲜粉条韭菜馅', amount: 200, unit: '克', type: 'main' },
    { name: '面粉清水水淀粉 (浇出金黄脆冰花脆底)', amount: 150, unit: '毫升', type: 'secondary' }
  ],
  '传统老面红糖大馒头': [
    { name: '优质中筋小麦面粉与传统老面引子', amount: 400, unit: '克', type: 'main' },
    { name: '纯正老红糖块 (压碎溶水和面)', amount: 80, unit: '克', type: 'main' }
  ],
  '湖北荆州牛肉锅盔': [
    { name: '发酵小麦面粉面团', amount: 200, unit: '克', type: 'main' },
    { name: '鲜黄牛肉馅与小葱碎、五香粉辣椒面', amount: 120, unit: '克', type: 'main' },
    { name: '熟白芝麻粒', amount: 20, unit: '克', type: 'secondary' }
  ],
  '扬州老派葱油阳春面': [
    { name: '扬州细切生切面/龙须面', amount: 150, unit: '克', type: 'main' },
    { name: '纯手工慢熬红葱香猪油', amount: 2, unit: '汤匙', type: 'main' },
    { name: '清亮滚烫大骨清高汤', amount: 350, unit: '毫升', type: 'main' },
    { name: '生抽酱油与新鲜细香葱碎', amount: 20, unit: '克', type: 'secondary' }
  ],
  '家常韭菜盒子': [
    { name: '新鲜头刀鲜嫩绿韭菜 (切碎末拌油锁水)', amount: 250, unit: '克', type: 'main' },
    { name: '鲜土鸡蛋 (炒熟顺滑蛋碎)', amount: 3, unit: '枚', type: 'main' },
    { name: '温水泡软细绿豆粉丝 (切小碎段)', amount: 60, unit: '克', type: 'main' },
    { name: '半烫面柔韧面团面皮', amount: 8, unit: '张', type: 'main' }
  ],
  '上海葱油拌面': [
    { name: '新鲜细圆切面/劲道挂面', amount: 160, unit: '克', type: 'main' },
    { name: '鲜嫩小葱段 (慢火熬出金黄酥脆焦葱段)', amount: 80, unit: '克', type: 'main' },
    { name: '老抽、生抽与白砂糖熬成复合香葱油汁', amount: 3, unit: '汤匙', type: 'secondary' }
  ],
  '西安牛肉泡馍': [
    { name: '慢炖8小时浓厚原汁牛骨高汤', amount: 450, unit: '毫升', type: 'main' },
    { name: '酥烂大块熟牛腩与腱子肉片', amount: 120, unit: '克', type: 'main' },
    { name: '传统硬质托托馍 (手掰指甲盖碎块)', amount: 2, unit: '个', type: 'main' },
    { name: '糖蒜头与红油油泼辣子', amount: 30, unit: '克', type: 'secondary' }
  ],
  '老北京炒肝配猪肉大葱包': [
    { name: '新鲜熟猪大肠段 (切规整圆段)', amount: 150, unit: '克', type: 'main' },
    { name: '新鲜嫩鲜猪肝 (柳叶薄片滑熟)', amount: 100, unit: '克', type: 'main' },
    { name: '大蒜泥、黄酱汁与浓稠老芡汁', amount: 300, unit: '毫升', type: 'main' },
    { name: '新鲜猪肉大葱包子', amount: 3, unit: '个', type: 'secondary' }
  ],
  '延吉大冷面': [
    { name: '正统延吉现压纯荞麦细冷面', amount: 200, unit: '克', type: 'main' },
    { name: '冰镇酸甜冰渣牛骨雪梨冷汤', amount: 400, unit: '毫升', type: 'main' },
    { name: '酱牛肉切大薄片', amount: 50, unit: '克', type: 'main' },
    { name: '韩式老辣白菜、水煮蛋半个与新鲜糖醋苹果片', amount: 60, unit: '克', type: 'secondary' }
  ],
  '东北正宗黏豆包': [
    { name: '东北大黄米面粉与糯米面粉 (自然发酵成皮)', amount: 300, unit: '克', type: 'main' },
    { name: '自煮农家大红芸豆泥馅 (保留颗粒感加白糖)', amount: 200, unit: '克', type: 'main' }
  ],
  '泰式青咖喱鸡肉': [
    { name: '鲜嫩去皮去骨鸡腿肉 (切厚片)', amount: 350, unit: '克', type: 'main' },
    { name: '泰国正统纯青咖喱酱', amount: 45, unit: '克', type: 'main' },
    { name: '纯浓椰浆', amount: 200, unit: '毫升', type: 'secondary' },
    { name: '泰国小圆绿茄子与九层塔罗勒叶', amount: 60, unit: '克', type: 'secondary' }
  ],
  '椰汁鸡肉汤(Tom Kha Gai)': [
    { name: '鲜嫩鸡胸肉/鸡腿肉 (切适口薄片)', amount: 250, unit: '克', type: 'main' },
    { name: '纯香浓椰浆', amount: 300, unit: '毫升', type: 'main' },
    { name: '鲜南姜厚片、香茅段、青柠檬叶与草菇', amount: 80, unit: '克', type: 'secondary' }
  ],
  '泰式罗勒叶炒肉碎': [
    { name: '肥三瘦七猪前腿肉碎/纯牛肉末', amount: 300, unit: '克', type: 'main' },
    { name: '新鲜打抛叶/泰国罗勒九层塔叶', amount: 25, unit: '克', type: 'main' },
    { name: '泰国鸟眼红朝天椒碎与大蒜瓣碎', amount: 30, unit: '克', type: 'secondary' }
  ],
  '泰式香茅烤鸡': [
    { name: '散养嫩三黄全鸡 (去背骨拍平展)', amount: 800, unit: '克', type: 'main' },
    { name: '新鲜香茅草碎、南姜末、香菜根与大蒜', amount: 50, unit: '克 (腌鸡料)', type: 'secondary' },
    { name: '泰国传统甜辣酱', amount: 30, unit: '克', type: 'secondary' }
  ],
  '泰式黄咖喱牛腩': [
    { name: '精选新鲜牛腩肉块 (切3厘米大方块)', amount: 450, unit: '克', type: 'main' },
    { name: '泰国传统黄咖喱酱', amount: 50, unit: '克', type: 'main' },
    { name: '纯椰浆与软糯沙地土豆块', amount: 250, unit: '克', type: 'secondary' }
  ],
  '香兰叶包鸡': [
    { name: '鲜嫩鸡腿肉丁 (切3厘米丁腌制入味)', amount: 300, unit: '克', type: 'main' },
    { name: '新鲜长条香兰叶/斑斓叶 (打结包裹鸡肉炸出清香)', amount: 12, unit: '片', type: 'main' },
    { name: '泰式甜辣酱与熟白芝麻', amount: 20, unit: '克', type: 'secondary' }
  ],
  '泰式柠檬清蒸海鲈鱼': [
    { name: '鲜活新鲜海鲈鱼 (鱼身双面各划三刀)', amount: 550, unit: '克', type: 'main' },
    { name: '新鲜青柠檬纯现压果汁', amount: 60, unit: '毫升 (约3只)', type: 'main' },
    { name: '泰国鸟眼红辣椒碎、大蒜碎与香菜碎', amount: 35, unit: '克', type: 'secondary' }
  ],
  '泰式红宝石椰汁冰': [
    { name: '新鲜马蹄丁(裹天然甜菜根红汁与木薯粉煮成Q弹红宝石)', amount: 150, unit: '克', type: 'main' },
    { name: '冰镇纯椰浆配碎冰块', amount: 250, unit: '毫升', type: 'main' },
    { name: '波罗蜜丝或甜玉米粒', amount: 30, unit: '克', type: 'secondary' }
  ],
  '泰式香茅酸辣烤鱼': [
    { name: '新鲜罗非鱼/海鲈鱼 (肚中塞满香茅与青柠叶)', amount: 650, unit: '克', type: 'main' },
    { name: '粗海盐厚裹鱼身', amount: 300, unit: '克', type: 'secondary' },
    { name: '泰式青辣椒青柠海鲜蘸汁', amount: 60, unit: '毫升', type: 'secondary' }
  ],
  '泰式酥脆春卷': [
    { name: '鲜精瘦猪肉末', amount: 100, unit: '克', type: 'main' },
    { name: '粉丝碎、卷心菜丝、黑木耳丝与胡萝卜细丝', amount: 150, unit: '克', type: 'main' },
    { name: '香脆春卷皮', amount: 10, unit: '张', type: 'main' },
    { name: '泰式甜辣春卷蘸酱', amount: 30, unit: '克', type: 'secondary' }
  ],
  '泰式香茅炸鸡翅': [
    { name: '新鲜优质整只鸡中翅 (两面各划两刀)', amount: 8, unit: '只', type: 'main' },
    { name: '新鲜嫩香茅草细末与大蒜末', amount: 30, unit: '克', type: 'secondary' },
    { name: '泰国纯正鱼露与白胡椒粉', amount: 2, unit: '汤匙', type: 'secondary' }
  ],
  '泰式椰汁西米露': [
    { name: '泰国进口优质纯白小西米 (煮透明过凉开水)', amount: 80, unit: '克', type: 'main' },
    { name: '纯浓椰浆', amount: 250, unit: '毫升', type: 'main' },
    { name: '新鲜芒果小粒丁与甜玉米粒', amount: 60, unit: '克', type: 'secondary' }
  ],
  '日式胜丼炸猪排饭': [
    { name: '厚切新鲜猪大排/里脊肉排 (厚度2厘米，断筋敲松)', amount: 200, unit: '克', type: 'main' },
    { name: '日式新鲜白面包糠', amount: 50, unit: '克', type: 'main' },
    { name: '新鲜鸡蛋液', amount: 2, unit: '枚', type: 'secondary' },
    { name: '热腾腾日式越光米饭', amount: 1, unit: '大碗', type: 'main' },
    { name: '日式出汁洋葱滑蛋汁', amount: 80, unit: '毫升', type: 'secondary' }
  ],
  '日式传统土豆炖牛肉': [
    { name: '高品质原切肥牛卷/牛肩肉薄切肉片', amount: 200, unit: '克', type: 'main' },
    { name: '黄心土豆块 (滚刀块)', amount: 250, unit: '克', type: 'main' },
    { name: '胡萝卜滚刀块、洋葱片与魔芋结', amount: 150, unit: '克', type: 'secondary' },
    { name: '日式昆布柴鱼高汤、浓口酱油与味醂', amount: 200, unit: '毫升', type: 'secondary' }
  ],
  '日式和风关东煮': [
    { name: '白萝卜大厚轮切块 (去厚皮边缘倒角划十字)', amount: 3, unit: '厚块', type: 'main' },
    { name: '日式竹轮卷、魔芋丝结、鱼豆腐与水煮溏心蛋', amount: 250, unit: '克 (关东煮串盘)', type: 'main' },
    { name: '正统柴鱼片昆布高汤出汁', amount: 600, unit: '毫升', type: 'secondary' }
  ],
  '日式章鱼小丸子': [
    { name: '鲜捕真章鱼触手须丁 (焯水切一口颗粒)', amount: 80, unit: '克', type: 'main' },
    { name: '低筋面粉、山药泥调和高汤面糊', amount: 200, unit: '克', type: 'main' },
    { name: '卷心菜碎、红姜碎与木鱼花海苔粉', amount: 40, unit: '克', type: 'secondary' }
  ],
  '日式浓香咖喱牛肉': [
    { name: '精选牛腩肉块/牛肩肉 (切适口方块焯水)', amount: 350, unit: '克', type: 'main' },
    { name: '日式甘口/中辛咖喱块', amount: 2, unit: '小块', type: 'main' },
    { name: '黄心土豆、胡萝卜与紫皮洋葱', amount: 250, unit: '克', type: 'secondary' }
  ],
  '日式冷荞麦面配天妇罗': [
    { name: '日本信州原味干荞麦面条 (煮熟冰镇沥干)', amount: 160, unit: '克', type: 'main' },
    { name: '鲜大虾天妇罗与紫苏叶蔬菜天妇罗', amount: 3, unit: '件', type: 'main' },
    { name: '冰镇柴鱼昆布荞麦面浓缩蘸汁配现磨山葵酱', amount: 150, unit: '毫升', type: 'secondary' }
  ],
  '日式厚蛋烧(玉子烧)': [
    { name: '生食级优质新鲜鸡蛋', amount: 4, unit: '枚', type: 'main' },
    { name: '日本昆布出汁', amount: 3, unit: '汤匙', type: 'secondary' },
    { name: '日本味醂、白酱油与白砂糖', amount: 2, unit: '茶匙', type: 'secondary' }
  ],
  '日式和风照烧三文鱼': [
    { name: '智利深海大西洋三文鱼中段厚切鱼排', amount: 220, unit: '克', type: 'main' },
    { name: '日式特调照烧酱 (浓口酱油、味醂、清酒与糖)', amount: 3, unit: '汤匙', type: 'secondary' },
    { name: '熟白芝麻与香葱圈', amount: 5, unit: '克', type: 'secondary' }
  ],
  '韩式传统石锅拌饭': [
    { name: '热气腾腾珍珠大米饭', amount: 1, unit: '大碗', type: 'main' },
    { name: '调味嫩牛里脊肉丝', amount: 80, unit: '克', type: 'main' },
    { name: '菠菜段、黄豆芽、西葫芦丝、香菇丝与胡萝卜丝', amount: 150, unit: '克 (五彩拌菜)', type: 'secondary' },
    { name: '单面煎半熟太阳流心蛋', amount: 1, unit: '枚', type: 'main' },
    { name: '正宗韩式甜辣拌饭酱与纯芝麻油', amount: 2, unit: '汤匙', type: 'secondary' }
  ],
  '韩式甜辣无骨炸鸡': [
    { name: '新鲜无骨大鸡腿肉 (去皮切一口小块)', amount: 350, unit: '克', type: 'main' },
    { name: '韩式甜辣炸鸡裹酱 (韩式辣酱、番茄酱与蜂蜜)', amount: 60, unit: '克', type: 'main' },
    { name: '炸鸡裹粉配熟白芝麻', amount: 50, unit: '克', type: 'secondary' }
  ],
  '韩式冷面配牛肉片': [
    { name: '纯正韩式韧劲纯荞麦冷面', amount: 200, unit: '克', type: 'main' },
    { name: '冰镇牛骨雪梨酸甜微冰渣冷汤', amount: 400, unit: '毫升', type: 'main' },
    { name: '熟酱牛肉大薄片', amount: 50, unit: '克', type: 'main' },
    { name: '韩式辣白菜、黄瓜丝与半枚白煮蛋', amount: 50, unit: '克', type: 'secondary' }
  ],
  '韩式泡菜煎饼': [
    { name: '自然充分发酵正宗韩式辣白菜 (切小段)', amount: 160, unit: '克', type: 'main' },
    { name: '中筋面粉与韩式泡菜原汁调糊', amount: 150, unit: '克', type: 'main' },
    { name: '新鲜香葱段与红辣椒圈', amount: 30, unit: '克', type: 'secondary' }
  ],
  '韩式辣炖土豆鸡块': [
    { name: '新鲜三黄鸡/肉鸡 (斩3厘米整齐小块)', amount: 500, unit: '克', type: 'main' },
    { name: '黄心沙地土豆大块', amount: 250, unit: '克', type: 'main' },
    { name: '胡萝卜块、洋葱片与大葱白段', amount: 150, unit: '克', type: 'secondary' },
    { name: '韩式粗辣椒粉、韩式辣酱与蒜泥炖料', amount: 50, unit: '克', type: 'secondary' }
  ],
  '韩式紫菜包饭': [
    { name: '拌入香油与熟芝麻的温热米饭', amount: 2, unit: '碗', type: 'main' },
    { name: '烤海苔紫菜大张', amount: 2, unit: '张', type: 'main' },
    { name: '韩式黄色腌萝卜条、火腿肉条、鸡蛋皮条与菠菜段', amount: 120, unit: '克', type: 'main' }
  ],
  '韩式春川铁板辣炒鸡排': [
    { name: '新鲜无骨大鸡腿肉排 (切厚大块)', amount: 350, unit: '克', type: 'main' },
    { name: '韩式软糯纯大米炒年糕条', amount: 100, unit: '克', type: 'main' },
    { name: '卷心菜大厚片、洋葱片与苏子叶', amount: 150, unit: '克', type: 'secondary' },
    { name: '春川秘制甜辣炒酱', amount: 60, unit: '克', type: 'secondary' }
  ],
  '美式迷迭香香草烤鸡': [
    { name: '新鲜农家散养全鸡 (整只开膛洗净吸干)', amount: 1000, unit: '克', type: 'main' },
    { name: '新鲜迷迭香香草与新鲜百里香', amount: 15, unit: '克', type: 'secondary' },
    { name: '无盐黄油厚块与大蒜整头', amount: 40, unit: '克', type: 'secondary' },
    { name: '新鲜黄柠檬半个与粗海盐现磨黑胡椒', amount: 25, unit: '克', type: 'secondary' }
  ],
  '法式红酒炖牛肉': [
    { name: '安格斯精选牛肋条/牛腩块 (切3.5厘米大方块)', amount: 500, unit: '克', type: 'main' },
    { name: '法国勃艮第优质干红葡萄酒', amount: 300, unit: '毫升', type: 'main' },
    { name: '烟熏培根小方丁', amount: 60, unit: '克', type: 'secondary' },
    { name: '新鲜白口蘑、胡萝卜块与珍珠小洋葱', amount: 150, unit: '克', type: 'secondary' }
  ],
  '法式传统红酒烩牛肉': [
    { name: '精选牛腱子肉/牛腩肉块', amount: 500, unit: '克', type: 'main' },
    { name: '法国干红葡萄酒与牛高汤', amount: 400, unit: '毫升', type: 'main' },
    { name: '煎香培根片、鲜口蘑与胡萝卜段', amount: 150, unit: '克', type: 'secondary' }
  ],
  '美式经典汉堡肉饼': [
    { name: '优质谷饲纯牛肩肉馅 (肥瘦比例2:8)', amount: 300, unit: '克', type: 'main' },
    { name: '洋葱细碎粒 (黄油慢炒出甜味)', amount: 40, unit: '克', type: 'secondary' },
    { name: '现磨黑胡椒碎与粗海盐', amount: 10, unit: '克', type: 'secondary' }
  ],
  '低卡考伯沙拉': [
    { name: '鲜嫩鸡胸肉 (水煮熟手撕粗条)', amount: 120, unit: '克', type: 'main' },
    { name: '新鲜即食牛油果肉块', amount: 80, unit: '克', type: 'main' },
    { name: '土鸡蛋 (全熟切四瓣)', amount: 1, unit: '个', type: 'main' },
    { name: '甜脆小番茄、罗马生菜与水果黄瓜丁', amount: 150, unit: '克', type: 'secondary' }
  ],
  '英式炸鱼薯条': [
    { name: '大西洋新鲜真鳕鱼柳/无骨龙利鱼柳 (厚肉大块)', amount: 320, unit: '克', type: 'main' },
    { name: '黄心大土豆 (粗切长薯条油炸至金黄松脆)', amount: 200, unit: '克', type: 'main' },
    { name: '英式传统黑啤脆浆糊 (面粉、啤酒与泡打粉)', amount: 150, unit: '毫升', type: 'secondary' },
    { name: '英式塔塔酱与柠檬角', amount: 30, unit: '克', type: 'secondary' }
  ],
  '美式BBQ手撕猪肉': [
    { name: '新鲜整块猪梅花肉/猪肩胛肉 (整大块慢烤熏制)', amount: 650, unit: '克', type: 'main' },
    { name: '美式传统烟熏BBQ烧烤酱汁', amount: 80, unit: '克', type: 'main' },
    { name: '天然苹果醋与第戎黄芥末酱', amount: 30, unit: '克', type: 'secondary' }
  ],
  '意式培根奶油蘑菇面': [
    { name: '意大利原装纯硬质杜兰小麦直面条 (Spaghetti)', amount: 160, unit: '克', type: 'main' },
    { name: '烟熏意式培根片 (切小厚段煎焦脆)', amount: 80, unit: '克', type: 'main' },
    { name: '新鲜白口蘑菇 (切厚大片)', amount: 100, unit: '克', type: 'main' },
    { name: '纯动物性烘焙淡奶油与帕玛森干酪碎', amount: 150, unit: '毫升', type: 'secondary' }
  ],
  '水晶水果白凉粉冻': [
    { name: '食品级天然纯白凉粉粉', amount: 30, unit: '克', type: 'main' },
    { name: '纯净水 (煮沸充分融化)', amount: 600, unit: '毫升', type: 'main' },
    { name: '新鲜草莓丁、芒果丁与蓝莓粒', amount: 120, unit: '克', type: 'main' }
  ],
  '川味老红糖冰粉': [
    { name: '四川纯手工搓制石灰水点化假酸浆籽冰粉', amount: 350, unit: '克', type: 'main' },
    { name: '老红糖熬制醇厚糖浆', amount: 4, unit: '汤匙', type: 'main' },
    { name: '山楂碎粒、熟花生碎、葡萄干与醪糟汁', amount: 40, unit: '克', type: 'secondary' }
  ],
  '万能油醋汁彩椒鸡胸肉沙拉': [
    { name: '低脂高蛋白鲜鸡胸肉 (香煎熟切厚片)', amount: 180, unit: '克', type: 'main' },
    { name: '红黄绿三色彩椒细丝', amount: 90, unit: '克', type: 'main' },
    { name: '鲜嫩混合沙拉菜叶 (苦菊、生菜、紫甘蓝)', amount: 100, unit: '克', type: 'secondary' },
    { name: '特调特级初榨橄榄油苹果醋油醋汁', amount: 2, unit: '汤匙', type: 'secondary' }
  ],
  '泰式酸辣青芒拌水果': [
    { name: '清脆微酸新鲜青芒果 (去皮切厚长条)', amount: 1, unit: '个', type: 'main' },
    { name: '新鲜甜脆番石榴/芭乐 (切厚片)', amount: 100, unit: '克', type: 'main' },
    { name: '泰式鱼露、辣椒粉与细砂糖拌料', amount: 2, unit: '汤匙', type: 'secondary' }
  ],
  '无糖希腊酸奶水果捞': [
    { name: '浓厚高蛋白无糖纯希腊酸奶', amount: 200, unit: '克', type: 'main' },
    { name: '新鲜蓝莓、新鲜香蕉切厚片与草莓丁', amount: 120, unit: '克', type: 'main' },
    { name: '烘烤坚果碎燕麦脆片', amount: 30, unit: '克', type: 'secondary' }
  ],
  '微波炉空气炸锅烤蛋挞': [
    { name: '多层起酥冷冻蛋挞皮', amount: 6, unit: '个', type: 'main' },
    { name: '新鲜土鸡蛋', amount: 1, unit: '枚', type: 'main' },
    { name: '动物淡奶油与纯全脂牛奶', amount: 120, unit: '毫升', type: 'main' },
    { name: '细白砂糖', amount: 15, unit: '克', type: 'secondary' }
  ],
  '抹茶白凉粉茶冻': [
    { name: '天然植物白凉粉粉', amount: 25, unit: '克', type: 'main' },
    { name: '特级宇治微苦清香抹茶粉', amount: 8, unit: '克', type: 'main' },
    { name: '清水', amount: 500, unit: '毫升', type: 'main' },
    { name: '蜜红豆粒与纯炼乳', amount: 40, unit: '克', type: 'secondary' }
  ],
  '经典西红柿炒鸡蛋': [
    { name: '新鲜农家土鸡蛋 (打散搅匀出蓬松大泡)', amount: 4, unit: '枚', type: 'main' },
    { name: '自然成熟多汁红番茄 (去皮切大块带沙瓤汁)', amount: 2, unit: '个', type: 'main' },
    { name: '新鲜小葱花', amount: 15, unit: '克', type: 'secondary' },
    { name: '白砂糖 (平衡番茄天然酸度提鲜)', amount: 1, unit: '茶匙', type: 'secondary' }
  ],
  '绝味可乐鸡翅': [
    { name: '新鲜优质鲜鸡中翅 (两面划斜刀焯水沥干)', amount: 8, unit: '只', type: 'main' },
    { name: '经典可口可乐 (330毫升原味听装)', amount: 330, unit: '毫升', type: 'main' },
    { name: '老生姜片与新鲜小葱结', amount: 20, unit: '克', type: 'secondary' }
  ],
  '正宗糖醋小排骨': [
    { name: '新鲜精选猪肋排 (斩3厘米适口小排段)', amount: 500, unit: '克', type: 'main' },
    { name: '镇江优质传统香醋', amount: 3, unit: '汤匙', type: 'secondary' },
    { name: '老冰糖 (炒出枣红透亮糖色)', amount: 40, unit: '克', type: 'secondary' },
    { name: '熟白芝麻粒', amount: 5, unit: '克', type: 'secondary' }
  ],
  '家常青椒肉丝': [
    { name: '新鲜精选猪里脊肉 (顺纹切均匀肉丝)', amount: 200, unit: '克', type: 'main' },
    { name: '鲜嫩薄皮青椒/圆椒 (去籽切细丝)', amount: 3, unit: '个', type: 'main' },
    { name: '紫皮大蒜瓣末与老姜丝', amount: 15, unit: '克', type: 'secondary' }
  ],
  '蒜苔炒猪肉丝': [
    { name: '新鲜精选猪里脊肉丝', amount: 180, unit: '克', type: 'main' },
    { name: '清脆鲜嫩绿蒜苔 (掐去尾梢切4厘米长段)', amount: 250, unit: '克', type: 'main' },
    { name: '生姜丝与红椒细丝', amount: 15, unit: '克', type: 'secondary' }
  ],
  '洋葱大葱爆炒牛肉': [
    { name: '新鲜黄牛里脊/牛柳肉 (逆纹切薄大片，生抽胡椒粉抓起胶)', amount: 250, unit: '克', type: 'main' },
    { name: '紫皮清甜洋葱 (切厚条)', amount: 1, unit: '个', type: 'main' },
    { name: '山东大葱白段 (滚刀斜切厚片)', amount: 1, unit: '根', type: 'main' }
  ],
  '西红柿炖软烂牛腩': [
    { name: '精选肥瘦相间新鲜鲜牛腩 (切3厘米大方块焯透)', amount: 450, unit: '克', type: 'main' },
    { name: '熟透多汁红番茄 (去皮切大块炒出沙瓤红浓汁)', amount: 3, unit: '个', type: 'main' },
    { name: '八角香叶老姜片与生抽冰糖', amount: 30, unit: '克', type: 'secondary' }
  ],
  '金针菇酸汤肥牛': [
    { name: '优质原切原装肥牛卷 (整片入水滑熟)', amount: 250, unit: '克', type: 'main' },
    { name: '新鲜嫩金针菇 (撕小把铺底)', amount: 150, unit: '克', type: 'main' },
    { name: '海南黄灯笼特产天然辣椒酱', amount: 2, unit: '汤匙', type: 'secondary' },
    { name: '陈醋白醋调和酸爽黄汤底配青红线椒圈', amount: 300, unit: '毫升', type: 'secondary' }
  ],
  '蒜蓉清炒油麦菜': [
    { name: '新鲜清脆鲜绿油麦菜 (摘净折长段洗净控水)', amount: 350, unit: '克', type: 'main' },
    { name: '紫皮大蒜瓣 (拍扁切碎大蒜泥)', amount: 4, unit: '瓣', type: 'secondary' }
  ],
  '干煸四季豆肉沫': [
    { name: '新鲜无筋四季豆/架豆 (摘两头撕老筋折短段，油煸出起泡虎皮)', amount: 300, unit: '克', type: 'main' },
    { name: '农家半肥半瘦猪肉沫', amount: 80, unit: '克', type: 'main' },
    { name: '四川宜宾碎米咸芽菜', amount: 25, unit: '克', type: 'secondary' },
    { name: '干红辣椒段、花椒与大蒜碎', amount: 20, unit: '克', type: 'secondary' }
  ],
  '凉拌爽脆黑木耳': [
    { name: '天然纯干秋木耳 (温水充分泡发淘洗去根蒂)', amount: 150, unit: '克 (泡发后)', type: 'main' },
    { name: '红彩椒丝与洋葱细丝', amount: 30, unit: '克', type: 'secondary' },
    { name: '大蒜泥、新鲜香菜碎、香醋生抽与辣椒香油', amount: 35, unit: '克', type: 'secondary' }
  ],
  '钓鱼台国宴鲍汁极品刺参配西兰花': [
    { name: '发制好的辽宁特级灰海参 (整只原汁煨透入味)', amount: 2, unit: '只', type: 'main' },
    { name: '新鲜翠绿西兰花小朵 (焯盐水围边)', amount: 80, unit: '克', type: 'secondary' },
    { name: '钓鱼台国宴秘制金黄鲍汁浓芡', amount: 60, unit: '克', type: 'secondary' }
  ],
  '绝味麻辣鸭头鸭脖': [
    { name: '新鲜肥美鸭头', amount: 3, unit: '个', type: 'main' },
    { name: '新鲜厚肉鸭脖 (斩长段)', amount: 3, unit: '根', type: 'main' },
    { name: '老卤复合香辛料包、特级汉源青红花椒与子弹头干辣椒', amount: 60, unit: '克', type: 'secondary' }
  ],
  '自贡香辣冷吃牛肉': [
    { name: '新鲜纯黄牛腱子肉/牛后腿瘦肉 (切均匀粗长条)', amount: 350, unit: '克', type: 'main' },
    { name: '四川自贡二荆条干辣椒段与七星椒段', amount: 50, unit: '克', type: 'main' },
    { name: '汉源大红袍花椒粒与老生姜丝', amount: 25, unit: '克', type: 'secondary' },
    { name: '菜籽油、生抽黄酒与白糖醋调味汁', amount: 60, unit: '克', type: 'secondary' }
  ],
  '潮汕椒盐酥炸九肚鱼': [
    { name: '潮汕沿海野生新鲜九肚鱼/豆腐鱼 (去内脏切大厚块)', amount: 400, unit: '克', type: 'main' },
    { name: '自调香酥黄金炸粉糊', amount: 60, unit: '克', type: 'secondary' },
    { name: '特制香酥椒盐粉与红椒末小葱末', amount: 15, unit: '克', type: 'secondary' }
  ],
  '香辣孜然炒掌中宝': [
    { name: '新鲜鲜嫩鸡脆骨/掌中宝 (焯水沥干水分)', amount: 300, unit: '克', type: 'main' },
    { name: '现磨原粒孜然粉与粗孜然粒', amount: 20, unit: '克', type: 'secondary' },
    { name: '干红辣椒节、熟白芝麻与洋葱丁', amount: 40, unit: '克', type: 'secondary' }
  ],
  '红油香脆猪耳朵': [
    { name: '老卤卤熟入味大猪耳朵 (片薄长细丝)', amount: 250, unit: '克', type: 'main' },
    { name: '秘制浓香香辣红油', amount: 2, unit: '汤匙', type: 'secondary' },
    { name: '黄瓜细丝、香菜碎与炒香白芝麻', amount: 40, unit: '克', type: 'secondary' }
  ],
  '老醋五香炸花生米': [
    { name: '优质新鲜红皮小花生米 (冷油下锅慢火炸香酥)', amount: 250, unit: '克', type: 'main' },
    { name: '镇江陈醋老醋调和汁 (加少许白糖生抽微熬粘稠)', amount: 3, unit: '汤匙', type: 'secondary' },
    { name: '青红尖椒碎与洋葱碎', amount: 30, unit: '克', type: 'secondary' }
  ],
  '五香盐水煮毛豆': [
    { name: '新鲜碧绿鲜毛豆荚 (洗净剪去两端小尖角易入味)', amount: 400, unit: '克', type: 'main' },
    { name: '八角、桂皮、香叶、干辣椒与花椒香料包', amount: 25, unit: '克', type: 'secondary' },
    { name: '食用海盐', amount: 2, unit: '茶匙', type: 'secondary' }
  ]
};

function processRecipes(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  global.window = {};
  eval(content);
  const recipes = window.RECIPES_DATA;
  let fixedCount = 0;

  recipes.forEach(r => {
    if (authenticIngredientsMap[r.name]) {
      r.ingredients = authenticIngredientsMap[r.name];
      fixedCount++;
    }
  });

  const output = '/**\n * 咕嘟食谱 - 407道全域中华与环球精选食谱数据库\n */\nwindow.RECIPES_DATA = ' + JSON.stringify(recipes, null, 2) + ';\n';
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`Updated ${fixedCount} recipes in ${filePath}`);
}

processRecipes('js/data/recipes.js');
processRecipes('android_build/assets/js/data/recipes.js');
