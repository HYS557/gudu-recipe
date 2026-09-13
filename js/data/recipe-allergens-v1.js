(function(){
"use strict";
const D="2026-09-13";
const RULES=[
  ["含麸质谷物",/小麦|面粉|面条|面皮|面包|馒头|花卷|烧饼|油条|面筋|燕麦|大麦|黑麦|意面|通心粉|饺子皮|馄饨皮|酱油/],
  ["甲壳纲类",/虾|蟹|龙虾|虾皮|虾米|海米/],
  ["鱼类",/鱼|鳗|鲤|鲫|鲈|鳕|鲳|鲷|鲑|三文鱼|金枪鱼|黄花鱼|带鱼|银鱼|泥鳅|黄鳝/],
  ["蛋类",/鸡蛋|鸭蛋|鹅蛋|鹌鹑蛋|蛋黄|蛋清|蛋液|皮蛋|松花蛋|咸蛋|蛋皮/],
  ["花生",/花生/],
  ["大豆",/大豆|黄豆|豆腐|豆浆|豆皮|腐竹|千张|豆干|豆豉|豆瓣酱|味噌|酱油|毛豆/],
  ["乳及乳制品",/牛奶|羊奶|水牛奶|乳粉|奶粉|炼乳|奶油|黄油|芝士|奶酪|乳酪|乳扇|乳饼|酸奶|乳糖/],
  ["坚果",/核桃|杏仁|腰果|榛子|开心果|松子|碧根果|夏威夷果|巴旦木|板栗|栗子/],
  ["芝麻（自愿提示）",/芝麻|麻酱|香油/],
  ["贝类或软体动物（自愿提示）",/贝|蛤|蚝|牡蛎|螺|蛏|鲍鱼|鱿鱼|墨鱼|章鱼|海参/]
];
if(!Array.isArray(window.RECIPES_DATA))return;
window.RECIPES_DATA.forEach(recipe=>{
  const fields=[...(recipe.ingredients||[]),...(recipe.seasonings||[])];
  const text=fields.map(item=>`${item.name||""} ${item.amountText||""}`).join("；");
  const allergens=[],evidence={};
  RULES.forEach(([label,re])=>{
    const hits=[];
    fields.forEach(item=>{const value=`${item.name||""} ${item.amountText||""}`;if(re.test(value))hits.push(item.name);re.lastIndex=0;});
    if(hits.length){allergens.push(label);evidence[label]=[...new Set(hits)];}
  });
  recipe.allergens=allergens;
  recipe.allergenReview={status:"ingredient-derived",reviewedAt:D,standard:"GB 7718-2025 八大类并附加芝麻、贝类/软体动物自愿提示",evidence,note:"依据当前结构化食材与调味料名称推导，不包含厨房交叉接触风险；复合预包装原料仍应以产品标签为准。"};
});
})();
