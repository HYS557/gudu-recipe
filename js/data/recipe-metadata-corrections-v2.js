(function(){
"use strict";
const P=(name,baseAmount,unit)=>({name,baseAmount,unit,amountText:`${baseAmount}${unit}`,isPantryStaple:true});
const C={
rec_dessert_16:{metadataReviewStatus:"verified-complete"},
rec_seafood_09:{metadataReviewStatus:"verified-complete"},
rec_seafood_11:{seasonings:[P("生抽",180,"毫升"),P("饮用水",100,"毫升"),P("柠檬汁",20,"毫升"),P("食用盐",2,"克")]},
rec_seafood_23:{metadataReviewStatus:"verified-complete"},
rec_seafood_32:{metadataReviewStatus:"verified-complete"},
rec_staple_17:{seasonings:[P("食用碱",1,"克")]},
rec_staple_21:{seasonings:[P("红糖",60,"克"),P("芝麻香油",15,"毫升")]},
rec_staple_23:{seasonings:[P("白砂糖",70,"克")]},
rec_prov_081:{metadataReviewStatus:"verified-complete"},
rec_prov_106:{metadataReviewStatus:"verified-complete"},
rec_prov_173:{metadataReviewStatus:"verified-complete"},
rec_prov_210:{metadataReviewStatus:"verified-complete"},
rec_prov_211:{metadataReviewStatus:"verified-complete"},
rec_prov_226:{metadataReviewStatus:"verified-complete"},
rec_prov_233:{metadataReviewStatus:"verified-complete"},
rec_prov_235:{metadataReviewStatus:"verified-complete"},
rec_prov_242:{metadataReviewStatus:"verified-complete"},
rec_prov_248:{metadataReviewStatus:"verified-complete",seasonings:[P("低度黄酒",10,"毫升"),P("白糖",5,"克"),P("食用盐",3,"克"),P("熟猪油或植物油",25,"克")]},
rec_prov_251:{metadataReviewStatus:"verified-complete"},
rec_prov_255:{metadataReviewStatus:"verified-complete"}
};
if(!Array.isArray(window.RECIPES_DATA))return;
window.RECIPES_DATA.forEach(recipe=>{if(C[recipe.id])Object.assign(recipe,C[recipe.id]);});
})();
