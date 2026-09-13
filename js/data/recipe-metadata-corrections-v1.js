(function(){
"use strict";
const I=(name,amount,unit,type="secondary")=>({name,amount,unit,type});
const P=(name,baseAmount,unit)=>({name,baseAmount,unit,amountText:`${baseAmount}${unit}`,isPantryStaple:true});
const C={
rec_gudu_0018:{metadataReviewStatus:"verified-complete"},
rec_gudu_0122:{ingredients:[I("正规渠道草鱼净鱼",900,"克","main"),I("生姜末",25,"克"),I("葱段",20,"克")]},
rec_gudu_0159:{ingredients:[I("中筋小麦面粉",250,"克","main"),I("饮用水",140,"毫升"),I("食用盐",2,"克"),I("熟制猪肉臊子或番茄鸡蛋浇头",150,"克","main")]},
rec_gudu_0160:{ingredients:[I("莜麦面粉",250,"克","main"),I("沸水",250,"毫升"),I("正规熟制羊肉臊子或蘑菇土豆蘸汁",200,"毫升","main")]},
rec_gudu_0161:{ingredients:[I("正规预包装熟酱牛肉",350,"克","main"),I("大蒜",15,"克"),I("香菜",15,"克"),I("老陈醋",20,"毫升")],seasonings:[P("老陈醋",20,"毫升"),P("辣椒油",10,"毫升"),P("芝麻油",5,"毫升")]},
rec_gudu_0162:{ingredients:[I("中筋小麦面粉",300,"克","main"),I("饮用水",170,"毫升"),I("干酵母",3,"克"),I("猪油",30,"克"),I("熟白芝麻",30,"克")],seasonings:[P("食用盐",3,"克"),P("花椒粉",2,"克"),P("植物油",10,"毫升")]},
rec_gudu_0164:{seasonings:[P("食用盐",3,"克"),P("植物油",20,"毫升")]},
rec_gudu_0166:{ingredients:[I("正规处理鲤鱼或鳜鱼净鱼",750,"克","main"),I("玉米淀粉",80,"克"),I("番茄汁",100,"毫升"),I("葱姜",30,"克")],seasonings:[P("米醋",35,"毫升"),P("白糖",30,"克"),P("料酒",15,"毫升"),P("食用盐",3,"克"),P("植物油",500,"毫升") ]},
rec_gudu_0173:{ingredients:[I("正规渠道牦牛后腿肉",1000,"克","main"),I("食用盐",25,"克"),I("花椒",5,"克"),I("食品用香辛料",5,"克")]},
rec_gudu_0196:{ingredients:[I("鲜活皮皮虾",500,"克","main"),I("大蒜",20,"克"),I("青红椒",20,"克"),I("小葱",10,"克")],seasonings:[P("椒盐",6,"克"),P("料酒",15,"毫升"),P("植物油",500,"毫升")]},
rec_gudu_0215:{ingredients:[I("正规处理鳗鱼净肉",500,"克","main"),I("生姜",15,"克"),I("小葱",20,"克"),I("日式山椒粉",1,"克")]},
rec_gudu_0221:{ingredients:[I("正规处理马友鱼净鱼",400,"克","main"),I("粗海盐",20,"克"),I("生姜",15,"克"),I("柠檬角",30,"克")]},
rec_gudu_0232:{ingredients:[I("中筋小麦面粉",400,"克","main"),I("传统老面引子",80,"克"),I("饮用水",210,"毫升"),I("红糖",80,"克")],seasonings:[P("食用碱",1,"克")]},
rec_gudu_0258:{ingredients:[I("大黄米面粉",220,"克","main"),I("糯米面粉",80,"克"),I("熟红芸豆泥",160,"克","main"),I("白糖",40,"克"),I("饮用水",190,"毫升")],seasonings:[P("白糖",40,"克")]},
rec_gudu_0321:{ingredients:[I("牛肩肉馅",300,"克","main"),I("食用盐",3,"克"),I("现磨黑胡椒",2,"克")],seasonings:[P("食用盐",3,"克"),P("黑胡椒",2,"克"),P("植物油",10,"毫升")]},
rec_gudu_0350:{metadataReviewStatus:"verified-complete"},
rec_gudu_0355:{ingredients:[I("去皮黄豌豆",300,"克","main"),I("饮用水",750,"毫升"),I("白砂糖",80,"克"),I("桂花蜂蜜",20,"克")]},
rec_gudu_0372:{metadataReviewStatus:"verified-complete",seasonings:[P("食用盐",3,"克"),P("植物油",20,"毫升")]},
rec_gudu_0379:{metadataReviewStatus:"verified-complete"},
rec_dessert_09:{metadataReviewStatus:"verified-complete"}
};
if(!Array.isArray(window.RECIPES_DATA))return;
window.RECIPES_DATA.forEach(recipe=>{if(C[recipe.id])Object.assign(recipe,C[recipe.id]);});
})();
