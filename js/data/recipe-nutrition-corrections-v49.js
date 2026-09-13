(function(){
"use strict";
const D="2026-09-13";
const SRC={title:"中国疾病预防控制中心营养与健康所：食物营养成分查询平台",url:"https://nlc.chinanutri.cn/fq/"};
const STD={title:"WS/T 557—2017 慢性肾脏病患者膳食指导附录E",url:"https://www.chinacdc.cn/jkyj/yyyjk2/jswj13949/201708/P020240905519502563399.pdf",note:"提供常见食物每100克可食部能量数据"};
const C={
rec_congee_80:[460,230,"白萝卜150克、前夹瘦肉丝100克、大米70克按生米干重、姜葱30克、淀粉3克、香油3毫升及生抽计；煮粥用水不计能量"]
};
if(!Array.isArray(window.RECIPES_DATA))return;
window.RECIPES_DATA.forEach(recipe=>{const c=C[recipe.id];if(!c)return;recipe.calories=c[0];recipe.caloriePerServing=c[1];recipe.nutritionSource={status:"recalculated-estimate",reviewedAt:D,sources:[SRC,STD],basis:"按配方可食部重量乘每100克能量并合计，液体调味料按常用密度近似",assumptions:c[2],servings:recipe.servings,scope:"仅重算能量，未改动蛋白质、脂肪、碳水及其他字段"};recipe.nutritionReviewVersion="2026-09-13-n49";});
})();
