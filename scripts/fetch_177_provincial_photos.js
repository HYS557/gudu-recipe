const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const dishes = [
  // 一、川渝巴蜀 (37道: 12道大菜 + 25道市井小炒)
  // 传世大菜名肴 (12道)
  { id: 'rec_prov_121', name: '国宴川菜头牌传统开水白菜', search: '开水白菜', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_122', name: '眉州传统名名东坡肘子', search: '东坡肘子', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_123', name: '四川正宗麻辣水煮牛肉', search: '水煮牛肉', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_124', name: '乐山非遗正宗跷脚牛肉', search: '跷脚牛肉', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_125', name: '宜宾南溪豆腐干红烧肉', search: '豆干红烧肉', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_126', name: '重庆老字号地道毛血旺', search: '毛血旺', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_127', name: '重庆歌乐山正宗辣子鸡', search: '歌乐山辣子鸡', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_128', name: '自贡盐帮绝味仔姜鲜锅兔', search: '鲜锅兔', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_129', name: '四川传统樟茶鸭', search: '樟茶鸭', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_130', name: '乐山正宗红油藤椒钵钵鸡', search: '钵钵鸡', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_131', name: '巫山正宗万州炭火烤鱼', search: '万州烤鱼', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_132', name: '成都传统名门神仙鸡豆花', search: '鸡豆花', region: '四川', sub: 'chuanyu' },
  // 市井下饭小炒 (25道)
  { id: 'rec_prov_133', name: '川味经典青椒蒜苗回锅肉', search: '回锅肉', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_134', name: '红白生炒五花盐煎肉', search: '盐煎肉', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_135', name: '川味传统纯正鱼香肉丝', search: '鱼香肉丝', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_136', name: '极速大火爆炒麦穗腰花', search: '火爆腰花', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_137', name: '川味市井镬气火爆肥肠', search: '火爆肥肠', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_138', name: '川菜家常双拼肝腰合炒', search: '肝腰合炒', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_139', name: '宜宾碎米芽菜炒肉末', search: '碎米芽菜肉末', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_140', name: '老坛泡酸豇豆炒烂肉末', search: '烂肉豇豆', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_141', name: '川味传统干煸四季豆', search: '干煸四季豆', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_142', name: '川味干煸苦瓜豆豉肉丝', search: '干煸苦瓜', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_143', name: '川味浓郁下饭鱼香茄子煲', search: '鱼香茄子', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_144', name: '红泡椒大火爆炒鸡杂碎', search: '泡椒鸡杂', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_145', name: '经典蒜泥白肉卷黄瓜片', search: '蒜泥白肉', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_146', name: '自贡传统红油冷吃牛肉', search: '冷吃牛肉', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_147', name: '川西连山传统大片回锅肉', search: '连山回锅肉', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_148', name: '青椒大蒜爆炒煎虎皮蛋', search: '青椒炒皮蛋', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_149', name: '红泡椒大火急炒鲜黄喉', search: '火爆黄喉', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_150', name: '青红椒爆炒脆嫩猪肚丝', search: '炒肚丝', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_151', name: '红油豆瓣生煎家常豆腐', search: '家常豆腐', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_152', name: '青红鲜椒大火生炒仔排', search: '鲜椒炒排骨', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_153', name: '四川农家尖椒炒老腊肉', search: '尖椒炒腊肉', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_154', name: '川味芹菜泡椒炒牛肉丝', search: '芹菜炒牛肉丝', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_155', name: '野山椒大火爆炒小墨鱼', search: '泡椒墨鱼仔', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_156', name: '农家干豆角烧五花肉丁', search: '干豆角烧肉丁', region: '四川', sub: 'chuanyu' },
  { id: 'rec_prov_157', name: '川味凉拌红油椒麻鸡丝', search: '椒麻鸡丝', region: '四川', sub: 'chuanyu' },

  // 二、关东黑土东北菜 (35道: 10道大菜 + 25道市井小炒)
  // 传世大菜名肴 (10道)
  { id: 'rec_prov_158', name: '东北老式双立人锅包肉', search: '老式锅包肉', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_159', name: '东北经典油润软糯地三鲜', search: '地三鲜', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_160', name: '长白山野生榛蘑炖笨鸡', search: '小鸡炖蘑菇', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_161', name: '东北老酸菜五花肉炖粉条', search: '酸菜炖粉条', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_162', name: '松花江得莫利大铁锅炖鱼', search: '得莫利炖鱼', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_163', name: '东北农家铁锅炖大鹅配卷', search: '铁锅炖大鹅', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_164', name: '东北传统酸菜白肉汆血肠', search: '酸菜汆白肉血肠', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_165', name: '东北老汤慢酱五香大骨头', search: '东北酱大骨', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_166', name: '哈尔滨红肠炒鲜甜洋葱片', search: '洋葱炒红肠', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_167', name: '东北传统金黄甜丝拔丝地瓜', search: '拔丝地瓜', region: '东北', sub: 'dongbei' },
  // 市井下饭小炒 (25道)
  { id: 'rec_prov_168', name: '东北老菜馆溜咸鲜肉段', search: '溜肉段', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_169', name: '东北家常尖椒煨干豆腐', search: '尖椒干豆腐', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_170', name: '东北老菜肉丝炒大拉皮', search: '肉丝炒拉皮', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_171', name: '老坛酸菜炒五花肉丝粉条', search: '酸菜炒粉', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_172', name: '东北传统家常五彩木须肉', search: '东北木须肉', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_173', name: '大豆油大葱爆炒笨鸡蛋', search: '大葱炒鸡蛋', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_174', name: '大骨头拆骨肉炒青椒蒜酱', search: '青椒炒拆骨肉', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_175', name: '东北老式焦溜猪肉小丸子', search: '焦溜丸子', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_176', name: '东北大院红烧溜肥肠段', search: '溜肥肠', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_177', name: '东北沙瓤西红柿炒卷心菜', search: '西红柿炒甘蓝', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_178', name: '农家脆嫩蒜苔炒五花肉丝', search: '蒜薹炒肉', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_179', name: '东北夜市洋葱孜然煸实蚕', search: '干煸实蚕', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_180', name: '东北大白菜丝炒细红薯粉', search: '白菜炒粉条', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_181', name: '东北大平房油豆角炒肉段', search: '油豆角炒肉', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_182', name: '老腌雪里蕻炖大豆腐肉末', search: '雪里蕻炖豆腐', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_183', name: '东北老式溜蒜香猪腰花', search: '溜腰花', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_184', name: '东北尖椒两面煎土豆厚片', search: '尖椒土豆片', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_185', name: '青红尖椒煸干香风干小肠', search: '尖椒炒风干肠', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_186', name: '绿芹菜细粉条炒猪肉碎', search: '芹菜炒粉', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_187', name: '滑嫩咸鲜老式溜猪肝尖', search: '溜肝尖', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_188', name: '东北大香菜爆炒黄牛肉', search: '香菜炒牛肉', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_189', name: '螺丝椒大铁锅炒金黄土蛋', search: '尖椒炒鸡蛋', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_190', name: '鲜黄瓜片快炒五花猪肉片', search: '黄瓜炒肉片', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_191', name: '沈阳街头孜然香辣煸鸡架', search: '辣炒鸡架', region: '东北', sub: 'dongbei' },
  { id: 'rec_prov_192', name: '大叶香菜嫩梗猛火炒肉丝', search: '香菜炒肉丝', region: '东北', sub: 'dongbei' },

  // 三、齐鲁胶东鲁菜 (35道: 10道大菜 + 25道市井小炒)
  // 传世大菜名肴 (10道)
  { id: 'rec_prov_193', name: '国宴鲁菜宗师浓油葱烧海参', search: '葱烧海参', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_194', name: '济南名门五味俱全九转大肠', search: '九转大肠', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_195', name: '济南传统糖醋金黄黄河鲤鱼', search: '糖醋鲤鱼', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_196', name: '鲁菜绝技沸油极速爆双脆', search: '油爆双脆', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_197', name: '山东德州传统五香脱骨扒鸡', search: '德州扒鸡', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_198', name: '传统香糟卤温油溜黑鱼片', search: '糟溜鱼片', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_199', name: '大明湖鲜鲜浓奶汤煨蒲菜', search: '奶汤蒲菜', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_200', name: '鲁菜传统蛋浆金黄塌老豆腐', search: '锅塌豆腐', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_201', name: '博山传统砂锅荤素大酥锅', search: '博山酥锅', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_202', name: '胶东正宗鲜韭菜鲅鱼大水饺', search: '鲅鱼水饺', region: '山东', sub: 'shandong' },
  // 市井下饭小炒 (25道)
  { id: 'rec_prov_203', name: '临沂传统大铁锅大块炒公鸡', search: '临沂炒鸡', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_204', name: '枣庄正宗地道干香生辣子鸡', search: '枣庄辣子鸡', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_205', name: '鲁菜绝技香菜白胡椒爆肚丝', search: '芫爆肚丝', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_206', name: '传统甜面酱文火推炒酱爆鸡丁', search: '酱爆鸡丁', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_207', name: '胶东大虾熬红虾油烧白菜', search: '大虾烧白菜', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_208', name: '鲁派正统清溜脆皮糖醋里脊', search: '正宗糖醋里脊', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_209', name: '老醋急火猛爆冬笋猪腰花', search: '爆炒腰花', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_210', name: '鲁菜传统猪油快翻温生白菜', search: '温生白菜', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_211', name: '胶东两面煎透开背焖大虾', search: '油焖大虾', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_212', name: '高汤清鲜琉璃薄芡炒虾仁', search: '清炒虾仁', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_213', name: '外酥里嫩热醋烹炸里脊段', search: '炸烹里脊', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_214', name: '黄花木耳鸡蛋肉片木须肉', search: '木须肉', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_215', name: '嫩黄牛肉丝急炒大把香菜梗', search: '芫爆牛肉丝', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_216', name: '胶东烟台韭菜极速炒海肠段', search: '韭菜炒海肠', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_217', name: '章丘甜大葱马蹄段炒五花肉', search: '大葱炒肉', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_218', name: '传统发蛋糊软炸里脊配椒盐', search: '软炸里脊', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_219', name: '花椒干辣椒大火爆圆白菜', search: '火爆大头菜', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_220', name: '红尖椒大蒜爆炒胶东鲜花蛤', search: '辣炒蛤蜊', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_221', name: '山东蒜香浓郁炸脆猪小排', search: '蒜香炸排骨', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_222', name: '鲁味高汤滑炒冬笋海参丁', search: '肉丁炒海参', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_223', name: '清脆黄瓜片溜滑嫩猪肝片', search: '黄瓜炒猪肝', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_224', name: '肉末大蒜干煸黄金土豆芸豆', search: '干煸土豆芸豆', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_225', name: '山东家常苦瓜薄片炒笨鸡蛋', search: '苦瓜炒鸡蛋', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_226', name: '蒜蓉大火快炒鲜脆嫩茼蒿', search: '蒜蓉茼蒿', region: '山东', sub: 'shandong' },
  { id: 'rec_prov_227', name: '甜面酱大葱白丝炒里脊肉丝', search: '葱炒肉丝', region: '山东', sub: 'shandong' },

  // 四、江浙淮扬水韵 (37道: 12道大菜 + 25道市井小炒)
  // 传世大菜名肴 (12道)
  { id: 'rec_prov_228', name: '苏州名门金黄松鼠鳜鱼', search: '松鼠鳜鱼', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_229', name: '金陵古法清卤浸熟盐水鸭', search: '盐水鸭', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_230', name: '扬州纯手工细切清炖狮子头', search: '清炖狮子头', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_231', name: '淮安传统无骨滑爽软兜长鱼', search: '软兜长鱼', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_232', name: '无锡传统红曲浓酱甜排骨', search: '无锡酱排骨', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_233', name: '杭州开水白烫酸甜西湖醋鱼', search: '西湖醋鱼', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_234', name: '杭州清明前龙井新茶炒虾仁', search: '龙井虾仁', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_235', name: '绍兴陈年花雕酒焖东坡方肉', search: '东坡肉', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_236', name: '杭州传统宋嫂鲜鲈鱼肉羹', search: '宋嫂鱼羹', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_237', name: '宁波老雪里蕻炖东海大黄鱼', search: '雪菜大黄鱼', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_238', name: '杭州荷叶黄泥慢煨叫花鸡', search: '叫花鸡', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_239', name: '扬州传统鸭套鸽慢煨三套鸭', search: '三套鸭', region: '江苏', sub: 'jiangzhe' },
  // 市井下饭小炒 (25道)
  { id: 'rec_prov_240', name: '江南水乡滚烫猪油响油鳝糊', search: '响油鳝糊', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_241', name: '江南开春早笋雪菜炒肉丝', search: '雪菜冬笋炒肉丝', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_242', name: '太湖小河虾高油温油爆甜壳', search: '油爆河虾', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_243', name: '春荠菜冬笋片炒水磨白年糕', search: '荠菜炒年糕', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_244', name: '鲜嫩茭白丝毛豆肉丝水乡炒', search: '茭白炒毛豆', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_245', name: '黄鳝丝配火腿笋丝烂糊鳝丝', search: '烂糊鳝丝', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_246', name: '浓油赤酱晃锅红烧草鱼尾', search: '红烧划水', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_247', name: '早春青蚕豆猪油慢推豆瓣酥', search: '雪菜豆瓣酥', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_248', name: '江南早春草头白酒十秒快翻', search: '酒香草头', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_249', name: '江南薄千张裹肉馅红烧百叶包', search: '百叶包肉', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_250', name: '清明鲜水螺蛳肉急炒嫩韭黄', search: '韭黄炒螺蛳肉', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_251', name: '江南早春雷笋浓油赤酱焖透', search: '油焖春笋', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_252', name: '水嫩鲜水芹配五香茶干肉丝', search: '水芹炒香干', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_253', name: '太湖鲜嫩白鱼片快炒青蒜段', search: '清炒太湖白鱼', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_254', name: '江南水乡十色时蔬细丝素什锦', search: '素什锦', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_255', name: '清香野荠菜猪油翻炒嫩冬笋', search: '荠菜炒冬笋', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_256', name: '宁波深绿深海苔条炸黄鱼柳', search: '苔条黄鱼', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_257', name: '苏式红曲酱汁肉炒泡天目笋干', search: '酱汁肉', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_258', name: '太湖莼菜白胡椒高汤滑肉丝', search: '莼菜肉丝', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_259', name: '杭州泗乡薄豆腐皮脆炸响铃', search: '干炸响铃', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_260', name: '苏州嫩鸡头米手剥河虾仁', search: '鸡头米炒虾仁', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_261', name: '早春青嫩蚕豆焖炒土鸡蛋', search: '蚕豆炒鸡蛋', region: '浙江', sub: 'jiangzhe' },
  { id: 'rec_prov_262', name: '江南野马兰头细碎拌香干麻油', search: '马兰头拌香干', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_263', name: '黄鳝一寸大段带骨大蒜生炒', search: '生炒鳝筒', region: '江苏', sub: 'jiangzhe' },
  { id: 'rec_prov_264', name: '太湖鲜嫩河蚌肉片炒金花菜', search: '蚌肉炒金花菜', region: '江苏', sub: 'jiangzhe' },

  // 五、荆楚千湖湖北菜 (33道: 8道大菜 + 25道市井小炒)
  // 传世大菜名肴 (8道)
  { id: 'rec_prov_265', name: '国宴楚菜名门清蒸梁子湖武昌鱼', search: '清蒸武昌鱼', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_266', name: '荆州非遗传统白玉蒸原春鱼糕', search: '荆州鱼糕', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_267', name: '潜江正宗十三香啤酒油焖大虾', search: '油焖大虾', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_268', name: '沔阳三蒸之五香米粉蒸五花肉', search: '沔阳三蒸', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_269', name: '武汉传统黄陂三鲜三味大烩', search: '黄陂三鲜', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_270', name: '洪湖排骨煨野生九孔老藕浓汤', search: '排骨藕汤', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_271', name: '武汉老汉口传统金黄三鲜豆皮', search: '三鲜豆皮', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_272', name: '荆楚民间大瓦罐香菇煨老母鸡', search: '瓦罐土鸡汤', region: '湖北', sub: 'hubei' },
  // 市井下饭小炒 (25道)
  { id: 'rec_prov_273', name: '洪山特产紫红菜苔炒烟熏腊肉', search: '红菜苔炒腊肉', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_274', name: '洪湖嫩幼白酸辣藕带炒鸡胗', search: '酸辣藕带', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_275', name: '湖北民间绝技小泥鳅钻嫩豆腐', search: '泥鳅钻豆腐', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_276', name: '老坛风味腊八豆炒鲜黄牛肉碎', search: '腊八豆炒牛肉', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_277', name: '干锅千页豆腐五花肉片煸干香', search: '干锅千页豆腐', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_278', name: '水乡鲜水芹脆梗爆炒野鸭肉', search: '水芹炒肉', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_279', name: '双面金黄酥脆莲藕夹鲜肉碎', search: '炸藕夹', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_280', name: '潜江金黄蒜蓉小龙虾球爆汁', search: '蒜蓉虾尾', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_281', name: '浓油赤酱两面金黄武昌鱼块', search: '红烧鱼块', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_282', name: '江汉平原野韭菜爆炒黄牛肉', search: '韭菜炒牛肉', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_283', name: '泡野山椒紫苏叶急炒大田螺肉', search: '紫苏炒田螺肉', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_284', name: '九孔莲藕拍粉炸香干煸藕丝', search: '干煸藕丝', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_285', name: '土法风干腊猪肝炒青脆蒜薹', search: '蒜苔炒腊猪肝', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_286', name: '薄如发丝千张炒滑嫩猪肉丝', search: '千张肉丝', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_287', name: '焦边皮蛋青椒爆炒卤肥肠段', search: '皮蛋炒肥肠', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_288', name: '花椒干椒老陈醋炝土豆细丝', search: '酸辣土豆丝', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_289', name: '农家腌外婆菜煸炒五花肉末', search: '外婆菜炒肉末', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_290', name: '五香脆骨猪头肉大火炒尖椒', search: '尖椒炒猪头肉', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_291', name: '老坛酸豇豆肉末大火爆野山椒', search: '酸豇豆炒肉末', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_292', name: '青尖椒大火爆炒软韧牛肚丝', search: '尖椒炒牛肚', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_293', name: '洪湖鲜白菱角肉炒五花肉丁', search: '菱角炒肉', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_294', name: '黑木耳青尖椒滑熘鲜嫩猪肝', search: '木耳炒猪肝', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_295', name: '大铁锅猪油干煸手撕圆白菜', search: '手撕包菜', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_296', name: '青蒜苗马蹄段炒土猪风干肠', search: '青蒜炒香肠', region: '湖北', sub: 'hubei' },
  { id: 'rec_prov_297', name: '九孔甜藕骰子小丁脆炒酸甜', search: '酸辣炒藕丁', region: '湖北', sub: 'hubei' }
];

// 加载现有 704 道食谱的全部图片，建立冲突排除库
const recipesContent = fs.readFileSync(path.join(__dirname, '../js/data/recipes.js'), 'utf8');
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(recipesContent, sandbox);
const existingRecipes = sandbox.window.RECIPES_DATA;
const existingUrls = new Set(existingRecipes.map(r => r.photoUrl || r.image).filter(Boolean));

console.log(`现有食谱图片去重库基数: ${existingUrls.size} 个 URL`);

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function searchChuimg(keyword) {
  try {
    const searchUrl = `https://www.xiachufang.com/search/?keyword=${encodeURIComponent(keyword)}&cat=1001`;
    const html = await fetchUrl(searchUrl);
    const regex = /https:\/\/i\d*\.chuimg\.com\/[a-zA-Z0-9_]+\.jpg/g;
    const matches = html.match(regex) || [];
    const filtered = matches.filter(url => !url.includes('placeholder') && !url.includes('avatar'));
    return Array.from(new Set(filtered));
  } catch (err) {
    return [];
  }
}

async function run() {
  console.log(`开始为 ${dishes.length} 道新食谱检索真实高清成菜大图...`);
  const results = {};
  const chosenUrls = new Set(existingUrls);

  for (let i = 0; i < dishes.length; i++) {
    const item = dishes[i];
    console.log(`[${i + 1}/${dishes.length}] 检索: ${item.name} (关键词: ${item.search})...`);
    let urls = await searchChuimg(item.search);
    let selected = null;
    for (const u of urls) {
      if (!chosenUrls.has(u)) {
        selected = u;
        chosenUrls.add(u);
        break;
      }
    }
    if (!selected) {
      urls = await searchChuimg(item.name);
      for (const u of urls) {
        if (!chosenUrls.has(u)) {
          selected = u;
          chosenUrls.add(u);
          break;
        }
      }
    }
    results[item.id] = {
      name: item.name,
      search: item.search,
      region: item.region,
      sub: item.sub,
      photoUrl: selected || null,
      candidatesCount: urls.length
    };
    console.log(`  -> 结果: ${selected ? '成功获取' : '未直接获取'} (${selected || '无'})`);
    await new Promise(r => setTimeout(r, 450));
  }

  const outputPath = path.join(__dirname, 'provincial_177_photos.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`检索完成，结果已保存至: ${outputPath}`);

  // 统计结果
  const total = Object.keys(results).length;
  const missing = Object.values(results).filter(x => !x.photoUrl).length;
  console.log(`总数: ${total}, 缺少图片数: ${missing}`);
}

run();
