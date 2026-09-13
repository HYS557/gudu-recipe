(function(){
"use strict";
const IDS=new Set(["rec_prov_260","rec_prov_262"]);
if(!Array.isArray(window.RECIPES_DATA))return;
window.RECIPES_DATA.forEach(recipe=>{if(IDS.has(recipe.id))recipe.metadataReviewStatus="verified-complete";});
})();
