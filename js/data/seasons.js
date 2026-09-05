/**
 * 🍲 咕嘟食谱 - 四季时令日历与全菜谱数据库 (不时不食)
 */

const SEASONS_DATA = {
  autumn: {
    id: "autumn",
    name: "秋·收",
    solarTerms: ["立秋", "处暑", "白露", "秋分", "寒露", "霜降"],
    motto: "秋风起，蟹脚痒；润燥滋补，吃秋藕与板栗",
    soupAdvice: "秋燥伤津，多煲雪梨百合老鸽汤、排骨莲藕汤",
    keySeafoods: [
      { name: "东海梭子蟹", season: "8月-11月", badge: "膏满肉厚", desc: "清蒸或葱姜爆炒极鲜", query: "梭子蟹" },
      { name: "阳澄湖大闸蟹", season: "9月-12月", badge: "九雌十雄", desc: "母蟹黄满，公蟹膏白如玉", query: "大闸蟹" },
      { name: "鲜活对虾", season: "9月-11月", badge: "甜脆弹牙", desc: "白灼原汁原味", query: "虾" },
      { name: "肥嫩生蚝", season: "9月-次年4月", badge: "初秋起肥", desc: "蒜蓉粉丝清蒸/碳烤", query: "生蚝" }
    ],
    keyProduce: [
      { name: "洪湖九孔藕", badge: "粉糯拉丝", desc: "慢煲排骨汤甘甜清润", query: "藕" },
      { name: "迁西板栗", badge: "香甜软糯", desc: "与土鸡同烧是一绝", query: "板栗" },
      { name: "太湖茭白", badge: "鲜嫩爽脆", desc: "家常肉丝爆炒清甜解腻", query: "茭白" }
    ],
    keyDishes: [
      { name: "葱姜炒东海梭子蟹", badge: "当季必吃", query: "梭子蟹" },
      { name: "清蒸阳澄湖大闸蟹配姜醋汁", badge: "秋日极品", query: "大闸蟹" },
      { name: "洪湖排骨煨藕汤", badge: "润燥暖胃", query: "藕" },
      { name: "蒜蓉粉丝蒸肥嫩生蚝", badge: "肥美多汁", query: "生蚝" }
    ]
  },
  spring: {
    id: "spring",
    name: "春·生",
    solarTerms: ["立春", "雨水", "惊蛰", "春分", "清明", "谷雨"],
    motto: "春风送暖，百草尝鲜；尝春笋头刀韭，吃带籽皮皮虾",
    soupAdvice: "升发阳气，宜喝春笋荠菜豆腐羹、猪肝菠菜枸杞汤",
    keySeafoods: [
      { name: "皮皮虾(虾爬子)", season: "3月-5月", badge: "母虾带红膏", desc: "椒盐或清蒸最鲜甜", query: "皮皮虾" },
      { name: "春鲅鱼", season: "4月-5月", badge: "肉质细嫩", desc: "胶东风味红烧/水饺", query: "鲅鱼" },
      { name: "清明螺蛳", season: "3月-4月", badge: "壳薄肉肥", desc: "紫苏酱爆镬气十足", query: "螺蛳" }
    ],
    keyProduce: [
      { name: "临安春笋", badge: "鲜嫩无渣", desc: "油焖春笋、江南腌笃鲜", query: "春笋" },
      { name: "头刀香椿", badge: "春日绝鲜", desc: "香椿炒土鸡蛋香飘满屋", query: "香椿" },
      { name: "野生荠菜", badge: "清香爽口", desc: "荠菜大馄饨、黄鱼羹", query: "荠菜" }
    ],
    keyDishes: [
      { name: "油焖春笋", badge: "江南时令", query: "春笋" },
      { name: "清明螺蛳炒紫苏", badge: "吮指鲜辣", query: "螺蛳" }
    ]
  },
  summer: {
    id: "summer",
    name: "夏·长",
    solarTerms: ["立夏", "小满", "芒种", "夏至", "小暑", "大暑"],
    motto: "伏天消暑，生津祛湿；吃肥花蛤小龙虾，喝苦瓜老鸭冬瓜汤",
    soupAdvice: "消暑清热，宜煲冬瓜薏米老鸭汤、苦瓜排骨盅、绿豆百合汤",
    keySeafoods: [
      { name: "盛夏花蛤", season: "6月-8月", badge: "肉肥无沙", desc: "辣炒花蛤/丝瓜煮花蛤", query: "花蛤" },
      { name: "潜江小龙虾", season: "5月-8月", badge: "虾黄饱满", desc: "十三香/蒜蓉/麻辣", query: "小龙虾" },
      { name: "鲜活蛏子", season: "6月-9月", badge: "肥美爆汁", desc: "葱姜爆炒/盐焗", query: "蛏子" }
    ],
    keyProduce: [
      { name: "清甜丝瓜", badge: "降火生津", desc: "金银蒜蒸丝瓜、滚鱼汤", query: "丝瓜" },
      { name: "降火苦瓜", badge: "清热祛火", desc: "黄豆苦瓜炖排骨不苦回甘", query: "苦瓜" },
      { name: "酸辣藕带", badge: "爽脆开胃", desc: "大火辣炒下饭神器", query: "藕带" }
    ],
    keyDishes: [
      { name: "潜江十三香小龙虾", badge: "夏夜顶流", query: "小龙虾" },
      { name: "紫苏酱爆花甲", badge: "吮指留香", query: "花甲" },
      { name: "水晶水果白凉粉冻", badge: "冰爽解暑", query: "凉粉" }
    ]
  },
  winter: {
    id: "winter",
    name: "冬·藏",
    solarTerms: ["立冬", "小雪", "大雪", "冬至", "小寒", "大寒"],
    motto: "冬藏温补，热气暖锅；吃冬蚝肥甜、查干湖胖头鱼与热腾牛羊",
    soupAdvice: "温中散寒，宜炖当归生姜羊肉汤、白萝卜牛腩煲、胡椒猪肚鸡",
    keySeafoods: [
      { name: "肥嫩冬蚝", season: "11月-次年2月", badge: "奶白肥厚", desc: "原壳清蒸蘸姜汁", query: "生蚝" },
      { name: "冬捕大胖头鱼", season: "12月-1月", badge: "鱼头肥美", desc: "大锅炖鱼贴饼子、剁椒鱼头", query: "鱼头" },
      { name: "胶东大带鱼", season: "11月-次年3月", badge: "油脂丰腴", desc: "家常红烧、香煎带鱼", query: "带鱼" }
    ],
    keyProduce: [
      { name: "冬日白萝卜", badge: "赛小人参", desc: "清炖牛腩/羊肉汤解腻", query: "萝卜" },
      { name: "冬笋", badge: "脆嫩甘甜", desc: "与五花腊肉同炒极香", query: "冬笋" },
      { name: "霜降白菜", badge: "甜脆多汁", desc: "烂肉煨白菜、酸菜白肉锅", query: "白菜" }
    ],
    keyDishes: [
      { name: "酸菜白肉血肠", badge: "北方冬日", query: "酸菜" },
      { name: "河南滋补羊肉烩面", badge: "暖身驱寒", query: "羊肉" }
    ]
  }
};

window.SEASONS_DATA = SEASONS_DATA;
