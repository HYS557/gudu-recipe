/**
 * 🍲 咕嘟食谱 - 微信社交采购清单合并引擎与好友分工领菜控制器 (Apple 轻奢风格)
 * 核心功能：
 * 1. 多菜合一自动合并同类项、人数动态换算 (2/4/6人份)
 * 2. 划线勾选 Checklist (买完划掉)
 * 3. 👥 微信好友分工领菜：肉禽海鲜、时令果蔬、调料干货智能分组，支持好友认领与一键生成微信群分工令
 */

const ShareService = {
  menuCart: [],
  currentServings: 2,
  checkedItems: new Set(),
  deletedIngredients: new Set(), // 存储用户在清单中临时/单项剔除的食材
  activeTab: "checklist", // "checklist" 或 "claim"
  claimedGroups: {}, // 存储认领人信息 { "fresh_meat": "我来买", "fresh_veg": "待认领" }

  init() {
    this.loadFromStorage();
    this.updateCartUI();
  },

  loadFromStorage() {
    try {
      const saved = localStorage.getItem("GUDU_MENU_CART");
      if (saved) this.menuCart = JSON.parse(saved);
      const savedClaims = localStorage.getItem("GUDU_CLAIMED_GROUPS");
      if (savedClaims) this.claimedGroups = JSON.parse(savedClaims);
      const savedDeleted = localStorage.getItem("GUDU_DELETED_ITEMS");
      if (savedDeleted) this.deletedIngredients = new Set(JSON.parse(savedDeleted));
    } catch(e) {
      this.menuCart = [];
      this.claimedGroups = {};
      this.deletedIngredients = new Set();
    }
  },

  saveToStorage() {
    try {
      localStorage.setItem("GUDU_MENU_CART", JSON.stringify(this.menuCart));
      localStorage.setItem("GUDU_CLAIMED_GROUPS", JSON.stringify(this.claimedGroups));
      localStorage.setItem("GUDU_DELETED_ITEMS", JSON.stringify(Array.from(this.deletedIngredients)));
    } catch(e) {
      console.warn("Storage error", e);
    }
  },

  toggleRecipe(recipe) {
    const idx = this.menuCart.findIndex(r => r.id === recipe.id);
    if (idx > -1) {
      this.menuCart.splice(idx, 1);
    } else {
      if (this.menuCart.length >= 8) {
        alert("单次菜单最多可选 8 道美味组合哦～");
        return false;
      }
      this.menuCart.push({
        id: recipe.id,
        name: recipe.name,
        region: recipe.region,
        servings: recipe.servings || 2,
        ingredients: recipe.ingredients,
        seasonings: recipe.seasonings,
        categoryType: recipe.categoryType,
        isSeafood: recipe.isSeafood
      });
    }
    this.saveToStorage();
    this.updateCartUI();
    return true;
  },

  isInCart(recipeId) {
    return this.menuCart.some(r => r.id === recipeId);
  },

  clearCart() {
    this.menuCart = [];
    this.checkedItems.clear();
    this.claimedGroups = {};
    this.saveToStorage();
    this.updateCartUI();
  },

  updateCartUI() {
    const count = this.menuCart.length;

    // 更新各处角标
    document.querySelectorAll(".cart-count-badge").forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? "inline-flex" : "none";
    });

    // 更新底部悬浮托盘 (如果有)
    const tray = document.getElementById("cartTray");
    const countBadge = document.getElementById("cartCountBadge");
    const cartDesc = document.getElementById("cartDesc");
    if (tray) {
      if (count > 0) {
        tray.classList.add("show");
        if (countBadge) countBadge.textContent = count;
        if (cartDesc) {
          const names = this.menuCart.map(r => r.name).join(" + ");
          cartDesc.textContent = names.length > 25 ? names.substring(0, 25) + "..." : names;
        }
      } else {
        tray.classList.remove("show");
      }
    }

    // 更新所有菜品卡片上的加号按钮状态
    document.querySelectorAll(".card-quick-add").forEach(btn => {
      const id = btn.getAttribute("data-id");
      if (this.isInCart(id)) {
        btn.classList.add("in-cart");
        btn.innerHTML = "✓";
        btn.title = "已加入买菜菜单";
      } else {
        btn.classList.remove("in-cart");
        btn.innerHTML = "+";
        btn.title = "加入买菜清单/好友领菜";
      }
    });
  },

  // 合并同类项生成清单
  generateMergedChecklist(targetRecipes, targetServings = 2) {
    const freshIngredientsMap = new Map();
    const pantrySeasoningsMap = new Map();

    // 分类归集：肉禽海鲜、时令蔬果
    const meatAndSeafood = [];
    const veggiesAndOther = [];

    targetRecipes.forEach(recipe => {
      const baseServings = recipe.servings || 2;
      const multiplier = targetServings / baseServings;

      if (recipe.ingredients) {
        recipe.ingredients.forEach(ing => {
          const key = ing.name.trim();
          const scaledAmount = Math.round((ing.amount * multiplier) * 10) / 10;
          if (freshIngredientsMap.has(key)) {
            const existing = freshIngredientsMap.get(key);
            if (existing.unit === ing.unit) {
              existing.totalAmount += scaledAmount;
            } else {
              existing.extraText = (existing.extraText || "") + ` + ${scaledAmount}${ing.unit}`;
            }
            existing.fromRecipes.add(recipe.name);
          } else {
            const itemObj = {
              name: key,
              totalAmount: scaledAmount,
              unit: ing.unit,
              substitutes: ing.substitutes || [],
              fromRecipes: new Set([recipe.name])
            };
            freshIngredientsMap.set(key, itemObj);
          }
        });
      }

      if (recipe.seasonings) {
        recipe.seasonings.forEach(sea => {
          const key = sea.name.trim();
          let scaledBase = 0;
          if (typeof sea.baseAmount === 'number' && !isNaN(sea.baseAmount)) {
            scaledBase = Math.round((sea.baseAmount * multiplier) * 10) / 10;
          }
          if (pantrySeasoningsMap.has(key)) {
            const existing = pantrySeasoningsMap.get(key);
            if (scaledBase > 0) existing.totalAmount = Math.round(((existing.totalAmount || 0) + scaledBase) * 10) / 10;
            existing.fromRecipes.add(recipe.name);
          } else {
            pantrySeasoningsMap.set(key, {
              name: key,
              totalAmount: scaledBase || 0,
              unit: sea.unit || '',
              amountText: sea.amountText || sea.amount || '',
              fromRecipes: new Set([recipe.name])
            });
          }
        });
      }
    });

    // 智能划分肉类 vs 蔬菜 (过滤掉已被用户单项剔除的食材)
    Array.from(freshIngredientsMap.values()).forEach(item => {
      if (this.deletedIngredients.has(`fresh_${item.name}`)) return;
      const isMeatOrFish = item.name.match(/肉|排骨|鸡|鸭|鹅|羊|牛|鱼|虾|蟹|生蚝|扇贝|海参|蚌|螺|肚|蹄|肠|肉馅|虾仁/);
      if (isMeatOrFish) {
        meatAndSeafood.push(item);
      } else {
        veggiesAndOther.push(item);
      }
    });

    const activeFreshList = Array.from(freshIngredientsMap.values()).filter(item => !this.deletedIngredients.has(`fresh_${item.name}`));
    const activeSeasoningList = Array.from(pantrySeasoningsMap.values()).filter(item => !this.deletedIngredients.has(`sea_${item.name}`));

    return {
      servings: targetServings,
      recipeCount: targetRecipes.length,
      recipeNames: targetRecipes.map(r => r.name),
      freshList: activeFreshList,
      meatAndSeafood,
      veggiesAndOther,
      seasoningList: activeSeasoningList
    };
  },

  toggleCheckItem(itemKey) {
    if (this.checkedItems.has(itemKey)) {
      this.checkedItems.delete(itemKey);
    } else {
      this.checkedItems.add(itemKey);
    }
  },

  // 认领某一分工组
  // 认领某一分工组 (即点即领即退，极速响应)
  claimGroup(groupKey) {
    if (this.claimedGroups[groupKey]) {
      delete this.claimedGroups[groupKey];
    } else {
      this.claimedGroups[groupKey] = "我来买";
    }
    this.saveToStorage();
    const currentList = this.activeRecipesForModal || (this.menuCart.length > 0 ? this.menuCart : [window.RECIPES_DATA[0]]);
    this.renderChecklistModal(currentList, this.currentServings);
  },

  switchTab(tab) {
    this.activeTab = tab;
    const currentList = this.activeRecipesForModal || (this.menuCart.length > 0 ? this.menuCart : [window.RECIPES_DATA[0]]);
    this.renderChecklistModal(currentList, this.currentServings);
  },

  renderChecklistModal(targetRecipes, targetServings = 2) {
    this.currentServings = targetServings;
    this.activeRecipesForModal = targetRecipes;
    const container = document.getElementById("checklistModalBody");
    if (!container) return;

    if (!targetRecipes || targetRecipes.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 48px 20px;">
          <div style="font-size: 52px; margin-bottom: 16px;">🛒</div>
          <h3 style="font-size: 18px; font-weight: 700; color: #1D1D1F; margin-bottom: 8px;">做饭采购清单目前为空</h3>
          <p style="font-size: 14px; color: #86868B; margin-bottom: 24px; line-height: 1.6;">
            您可以在浏览菜谱时点击【+ 加清单】将心仪菜品加入菜单，<br>也可以一键添加推荐菜品体验智能合并采购！
          </p>
          <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
            <button class="btn btn-outline" onclick="document.getElementById('checklistModal').classList.remove('active')">
              去挑选美食
            </button>
            <button class="btn btn-primary" onclick="ShareService.addSampleMenu()">
              ✨ 一键添加推荐菜单
            </button>
          </div>
        </div>
      `;
      document.getElementById("checklistModal").classList.add("active");
      return;
    }

    const data = this.generateMergedChecklist(targetRecipes, targetServings);

    let html = `
      <!-- Apple 极简轻奢模式切换 -->
      <div class="ios-segmented-control" style="margin-bottom: 18px;">
        <button class="ios-segment-btn ${this.activeTab === 'checklist' ? 'active' : ''}" onclick="ShareService.switchTab('checklist')">
          🛒 买菜清单划线
        </button>
        <button class="ios-segment-btn ${this.activeTab === 'claim' ? 'active' : ''}" onclick="ShareService.switchTab('claim')">
          👥 好友分工领菜
        </button>
      </div>

      <div class="checklist-header-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 6px;">
          <div>
            <h3 style="font-size: 17px; font-weight: 700; color: #1D1D1F; letter-spacing: -0.01em;">
              ${this.activeTab === 'checklist' ? '🛒 今日聚餐合并采购单' : '👥 聚餐做大餐 · 微信好友领菜分工'}
            </h3>
            <p style="font-size: 12px; color: #86868B; margin-top: 2px;">
              点击菜品标签右侧【✕】移出单菜，点击食材右侧【✕】剔除单项：
            </p>
          </div>
          <div class="ios-servings-picker">
            <button class="ios-serv-btn ${targetServings === 2 ? 'active' : ''}" onclick="ShareService.changeModalServings(2)">2人</button>
            <button class="ios-serv-btn ${targetServings === 4 ? 'active' : ''}" onclick="ShareService.changeModalServings(4)">4人</button>
            <button class="ios-serv-btn ${targetServings === 6 ? 'active' : ''}" onclick="ShareService.changeModalServings(6)">6人</button>
          </div>
        </div>

        <!-- 交互式可删减菜谱胶囊池 -->
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 6px;">
          ${targetRecipes.map(r => `
            <span style="display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1px solid #E5E5EA; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 600; color: #1D1D1F; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              🍽️ ${r.name}
              <button style="border: none; background: #F2F2F7; color: #86868B; border-radius: 50%; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; font-size: 10px; cursor: pointer; padding: 0; line-height: 1;" onclick="event.stopPropagation(); ShareService.removeRecipeFromModal('${r.id}')" title="从清单中移出此菜谱">✕</button>
            </span>
          `).join("")}
          <button style="margin-left: auto; background: rgba(255, 107, 53, 0.08); border: 1px solid var(--primary-color); color: var(--primary-color); padding: 4px 10px; border-radius: 999px; font-size: 11.5px; font-weight: 600; cursor: pointer;" onclick="ShareService.addSampleMenu(true)" title="一键换一组精选搭配">
            🔄 换一组推荐搭配
          </button>
        </div>
      </div>
    `;

    if (this.activeTab === "checklist") {
      // 模式 1：买菜 Checklist
      html += `
        <!-- 生鲜食材组 -->
        <div class="ios-list-group">
          <div class="ios-group-title">🥬 需在菜场 / 超市采购的生鲜食材 (${data.freshList.length} 项)</div>
      `;

      data.freshList.forEach(item => {
        const itemKey = `fresh_${item.name}`;
        const isChecked = this.checkedItems.has(itemKey);
        const subInfo = item.substitutes && item.substitutes.length > 0 ? ` (可选: ${item.substitutes.join("/")})` : "";
        const source = Array.from(item.fromRecipes).join("+");

        html += `
          <div class="ios-check-row ${isChecked ? 'checked' : ''}" onclick="ShareService.handleItemClick('${itemKey}', this)">
            <div class="ios-check-indicator">
              <span class="ios-checkmark">✓</span>
            </div>
            <div class="ios-check-info">
              <div class="ios-item-name">${item.name}<span class="ios-sub-info">${subInfo}</span></div>
              <div class="ios-item-source">用于: ${source}</div>
            </div>
            <div class="ios-item-amount">${item.totalAmount} ${item.unit}</div>
            <button class="ios-item-del-btn" style="border: none; background: transparent; color: #C7C7CC; font-size: 16px; padding: 4px 8px; cursor: pointer; border-radius: 4px; line-height: 1;" onclick="event.stopPropagation(); ShareService.deleteIngredientItem('${itemKey}')" title="从清单中剔除该食材">✕</button>
          </div>
        `;
      });

      html += `
        </div>

        <!-- 调味料组 -->
        <div class="ios-list-group" style="margin-top: 16px;">
          <div class="ios-group-title">🧂 检查厨房常备调料 (${data.seasoningList.length} 种)</div>
      `;

      data.seasoningList.forEach(item => {
        const itemKey = `sea_${item.name}`;
        const isChecked = this.checkedItems.has(itemKey);
        const source = Array.from(item.fromRecipes).join("+");

        html += `
          <div class="ios-check-row ${isChecked ? 'checked' : ''}" onclick="ShareService.handleItemClick('${itemKey}', this)">
            <div class="ios-check-indicator">
              <span class="ios-checkmark">✓</span>
            </div>
            <div class="ios-check-info">
              <div class="ios-item-name">${item.name}</div>
              <div class="ios-item-source">用于: ${source}</div>
            </div>
            <div class="ios-item-amount">${item.totalAmount > 0 ? `约 ${item.totalAmount} ${item.unit || ''}`.trim() : (item.amountText || '适量')}</div>
            <button class="ios-item-del-btn" style="border: none; background: transparent; color: #C7C7CC; font-size: 16px; padding: 4px 8px; cursor: pointer; border-radius: 4px; line-height: 1;" onclick="event.stopPropagation(); ShareService.deleteIngredientItem('${itemKey}')" title="从清单中剔除该调料">✕</button>
          </div>
        `;
      });

      html += `
        </div>

        <!-- 底部快捷动作条 -->
        <div class="ios-modal-actions" style="margin-top: 24px; display: flex; flex-direction: column; gap: 10px;">
          <div style="display: flex; gap: 10px;">
            <button class="ios-btn-apple-primary" style="flex: 1;" onclick="ShareService.copyShareText()">
              📋 复制买菜清单发微信
            </button>
            <button class="ios-btn-apple-secondary" onclick="ShareService.resetChecklist()">
              重置
            </button>
          </div>
          <button class="ios-btn-apple-primary" style="width: 100%; background: #0071E3;" onclick="ShareService.generatePoster()">
            📸 生成轻奢买菜海报发微信群
          </button>
        </div>
      `;
    } else {
      // 模式 2：👥 微信好友分工领菜 (谁买什么)
      const meatClaim = this.claimedGroups["meat"];
      const vegClaim = this.claimedGroups["veg"];
      const seaClaim = this.claimedGroups["sea"];

      html += `
        <div class="ios-claim-card">
          <div class="ios-claim-banner">
            ✨ <strong>分工领菜玩法：</strong>邀请好友一起聚餐做饭，点击【认领】分配采购任务，一键复制发群，大家各买各的，做饭超轻松！
          </div>

          <!-- 分工 1: 肉禽海鲜组 -->
          <div class="ios-claim-box">
            <div class="ios-claim-box-header">
              <div class="ios-claim-title-area">
                <span class="ios-claim-icon">🥩</span>
                <div>
                  <h4 class="ios-claim-group-name">肉禽海鲜组 (${data.meatAndSeafood.length}种)</h4>
                  <p class="ios-claim-desc">${data.meatAndSeafood.map(m => `${m.name} ${m.totalAmount}${m.unit}`).join("、") || "暂无"}</p>
                </div>
              </div>
              <button class="ios-claim-btn ${meatClaim ? 'claimed' : ''}" onclick="ShareService.claimGroup('meat')">
                ${meatClaim ? `✓ ${meatClaim}` : '🙋 我来领'}
              </button>
            </div>
          </div>

          <!-- 分工 2: 时令蔬菜豆品组 -->
          <div class="ios-claim-box" style="margin-top: 12px;">
            <div class="ios-claim-box-header">
              <div class="ios-claim-title-area">
                <span class="ios-claim-icon">🥬</span>
                <div>
                  <h4 class="ios-claim-group-name">新鲜果蔬与豆品组 (${data.veggiesAndOther.length}种)</h4>
                  <p class="ios-claim-desc">${data.veggiesAndOther.map(v => `${v.name} ${v.totalAmount}${v.unit}`).join("、") || "暂无"}</p>
                </div>
              </div>
              <button class="ios-claim-btn ${vegClaim ? 'claimed' : ''}" onclick="ShareService.claimGroup('veg')">
                ${vegClaim ? `✓ ${vegClaim}` : '🙋 我来领'}
              </button>
            </div>
          </div>

          <!-- 分工 3: 调味料与酱汁干货组 -->
          <div class="ios-claim-box" style="margin-top: 12px;">
            <div class="ios-claim-box-header">
              <div class="ios-claim-title-area">
                <span class="ios-claim-icon">🧂</span>
                <div>
                  <h4 class="ios-claim-group-name">调料、酱汁与酒水干货组 (${data.seasoningList.length}种)</h4>
                  <p class="ios-claim-desc">${data.seasoningList.map(s => s.name).slice(0, 6).join("、") + (data.seasoningList.length > 6 ? " 等..." : "")}</p>
                </div>
              </div>
              <button class="ios-claim-btn ${seaClaim ? 'claimed' : ''}" onclick="ShareService.claimGroup('sea')">
                ${seaClaim ? `✓ ${seaClaim}` : '🙋 我来领'}
              </button>
            </div>
          </div>

          <!-- 底部一键复制微信群分工令 -->
          <div class="ios-modal-actions" style="margin-top: 24px; display: flex; flex-direction: column; gap: 10px;">
            <button class="ios-btn-apple-primary" style="width: 100%;" onclick="ShareService.copyFriendClaimShareText()">
              📤 复制「微信好友领菜分工令」发群
            </button>
            <button class="ios-btn-apple-primary" style="width: 100%; background: #0071E3;" onclick="ShareService.generatePoster()">
              📸 生成轻奢买菜海报发微信群
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
    document.getElementById("checklistModal").classList.add("active");
  },

  handleItemClick(itemKey, el) {
    this.toggleCheckItem(itemKey);
    el.classList.toggle("checked");
  },

  changeModalServings(newServings) {
    const currentList = this.activeRecipesForModal || (this.menuCart.length > 0 ? this.menuCart : [window.RECIPES_DATA[0]]);
    this.renderChecklistModal(currentList, newServings);
  },

  openCartChecklist() {
    this.activeRecipesForModal = this.menuCart;
    this.renderChecklistModal(this.menuCart, this.currentServings);
    const modal = document.getElementById("checklistModal");
    if (modal) modal.classList.add("active");
  },

  addSampleMenu(isRefresh = false) {
    if (!window.RECIPES_DATA || window.RECIPES_DATA.length === 0) return;
    const all = window.RECIPES_DATA;

    // 按营养与烹饪类型分层候选池
    const meatPool = all.filter(r => r.categoryType === "dish" && (r.name.match(/排骨|牛肉|牛腩|红烧|小炒肉|鸡|鸭|肉段|羊肉|叉烧/)));
    const seafoodPool = all.filter(r => r.categoryType === "seafood");
    const veggiePool = all.filter(r => r.name.match(/藕|青菜|土豆|茄子|包菜|豆角|菜心|油麦菜|西红柿炒鸡蛋/) && !r.name.match(/肉|鸡|鸭|牛|羊/));

    const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

    const pick1 = getRandom(meatPool) || all[0];
    let pick2 = getRandom(seafoodPool) || all[1];
    let pick3 = getRandom(veggiePool) || all[2];

    const themes = ["【时令荤素均衡】", "【金秋时鲜合菜】", "【经典家常下饭】", "【鲜辣过瘾大餐】", "【轻奢私房风味】"];
    const theme = themes[Math.floor(Math.random() * themes.length)];

    this.menuCart = [pick1, pick2, pick3];
    this.saveToStorage();
    this.updateCartUI();
    this.activeRecipesForModal = this.menuCart;
    this.renderChecklistModal(this.menuCart, this.currentServings);
    this._showToast(isRefresh ? `已换一组${theme}推荐菜单！` : `已添加今日推荐${theme}三道菜！`);
  },

  openSingleRecipeChecklist(recipe) {
    this.activeRecipesForModal = [recipe];
    this.renderChecklistModal([recipe], this.currentServings);
  },

  removeRecipeFromModal(recipeId) {
    this.menuCart = this.menuCart.filter(r => r.id !== recipeId);
    this.saveToStorage();
    this.updateCartUI();
    this.renderChecklistModal(this.menuCart, this.currentServings);
    this._showToast(this.menuCart.length === 0 ? "采购单已清空" : "已移出该菜谱并自动重算清单");
  },

  deleteIngredientItem(itemKey) {
    this.deletedIngredients.add(itemKey);
    this.saveToStorage();
    const currentList = this.activeRecipesForModal || this.menuCart;
    this.renderChecklistModal(currentList, this.currentServings);
    this._showToast("已从清单中剔除该食材");
  },

  resetChecklist() {
    this.checkedItems.clear();
    this.deletedIngredients.clear();
    this.saveToStorage();
    const currentList = this.activeRecipesForModal || this.menuCart;
    this.renderChecklistModal(currentList, this.currentServings);
    this._showToast("已恢复全部食材与划线");
  },

  // 复制买菜清单文本
  copyShareText() {
    const currentList = this.activeRecipesForModal || this.menuCart;
    const data = this.generateMergedChecklist(currentList, this.currentServings);

    let text = `🍲【咕嘟食谱 · 微信买菜清单】\n`;
    text += `🥘 今日菜单：${data.recipeNames.join(" + ")}\n`;
    text += `👥 用餐份量：${data.servings} 人份\n\n`;
    text += `🥬【需采购生鲜食材】\n`;
    data.freshList.forEach((item, idx) => {
      const isDone = this.checkedItems.has(`fresh_${item.name}`) ? " [已买✓]" : "";
      text += `${idx + 1}. ${item.name}：${item.totalAmount}${item.unit}${isDone}\n`;
    });

    text += `\n🧂【所需调味料（检查家中是否有）】\n`;
    data.seasoningList.forEach((item, idx) => {
      const amt = item.totalAmount > 0 ? `约 ${item.totalAmount}${item.unit || ''}` : (item.amountText || '适量');
      text += `· ${item.name}：${amt}\n`;
    });

    text += `\n✨ 微信长按识别买菜海报二维码，即可在线查看高清食谱、协同划线打勾！`;

    this._writeClipboard(text, "已成功复制买菜清单！可以直接粘贴发给微信好友啦～");
  },

  // 复制好友领菜分工令
  copyFriendClaimShareText() {
    const currentList = this.activeRecipesForModal || this.menuCart;
    const data = this.generateMergedChecklist(currentList, this.currentServings);

    const meatClaim = this.claimedGroups["meat"] ? `👉 认领人：@${this.claimedGroups["meat"]} (已领✓)` : `👉 待认领（群友请回复“我买肉”认领）`;
    const vegClaim = this.claimedGroups["veg"] ? `👉 认领人：@${this.claimedGroups["veg"]} (已领✓)` : `👉 待认领（群友请回复“我买蔬菜”认领）`;
    const seaClaim = this.claimedGroups["sea"] ? `👉 认领人：@${this.claimedGroups["sea"]} (已领✓)` : `👉 待认领（顺手带调料或酒水）`;

    let text = `🍲【咕嘟食谱 · 周末聚餐好友领菜分工令】\n`;
    text += `🥘 掌勺大菜单：${data.recipeNames.join(" + ")}\n`;
    text += `👥 用餐人数：${data.servings} 人份\n\n`;

    text += `🥩【肉禽海鲜组】\n`;
    text += `${data.meatAndSeafood.map(m => `· ${m.name} ${m.totalAmount}${m.unit}`).join("\n") || "· 暂无"}\n`;
    text += `${meatClaim}\n\n`;

    text += `🥬【新鲜果蔬与豆品组】\n`;
    text += `${data.veggiesAndOther.map(v => `· ${v.name} ${v.totalAmount}${v.unit}`).join("\n") || "· 暂无"}\n`;
    text += `${vegClaim}\n\n`;

    text += `🧂【调味料与酒水干货组】\n`;
    text += `${data.seasoningList.map(s => s.name).slice(0, 6).join("、")}\n`;
    text += `${seaClaim}\n\n`;

    text += `🎉 聚餐各带各的，分工做饭超省心！快在微信群里认领你的专属任务吧～\n`;
    text += `👉 长按识别分享海报二维码，即可查看菜品大图与实时协同划线！`;

    this._writeClipboard(text, "已成功复制「好友领菜分工令」！快粘贴发送到微信群让大家认领吧～");
  },

  // 方案 B：Apple 风格高清晰轻奢买菜协同海报 (HTML5 Off-screen Canvas)
  generatePoster() {
    const currentList = this.activeRecipesForModal || (this.menuCart.length > 0 ? this.menuCart : [window.RECIPES_DATA[0]]);
    const targetServings = this.currentServings || 2;
    const data = this.generateMergedChecklist(currentList, targetServings);
    const recipeNames = data.recipeNames;
    const meatClaim = this.claimedGroups["meat"];
    const vegClaim = this.claimedGroups["veg"];
    const seaClaim = this.claimedGroups["sea"];

    const canvas = document.createElement("canvas");
    const width = 750;
    const freshItems = data.freshList.slice(0, 10);
    const height = 480 + (freshItems.length * 48) + 320;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // 1. 背景色 (Apple 灰底)
    ctx.fillStyle = "#F5F5F7";
    ctx.fillRect(0, 0, width, height);

    // 2. 纯白大圆角卡片
    const margin = 24;
    const cardWidth = width - margin * 2;
    const cardHeight = height - margin * 2;
    const radius = 24;

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(margin, margin, cardWidth, cardHeight, radius);
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = "rgba(0, 0, 0, 0.06)";
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 6;
    ctx.fill();
    ctx.restore();

    // 3. 顶部轻奢深色 Header
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(margin, margin, cardWidth, 130, [radius, radius, 0, 0]);
    ctx.fillStyle = "#1D1D1F";
    ctx.fill();
    ctx.restore();

    // 标题与副标题
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 28px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
    ctx.fillText("🍲 咕嘟食谱 · 聚餐买菜协同单", margin + 30, margin + 55);

    ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
    ctx.font = "500 16px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
    const dateStr = new Date().toLocaleDateString("zh-CN", { month: "long", day: "numeric", weekday: "short" });
    ctx.fillText(`${dateStr} · 👥 ${targetServings} 人份聚餐 · 涵盖 ${recipeNames.length} 道精选佳肴`, margin + 30, margin + 95);

    let currY = margin + 160;

    // 4. 今日聚餐菜单汇总条
    ctx.fillStyle = "#F5F5F7";
    ctx.beginPath();
    ctx.roundRect(margin + 24, currY, cardWidth - 48, 54, 12);
    ctx.fill();

    ctx.fillStyle = "#1D1D1F";
    ctx.font = "bold 16px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
    const dishesText = "🍽️ 掌勺菜单：" + recipeNames.join("  +  ");
    const fitDishesText = dishesText.length > 34 ? dishesText.substring(0, 34) + "..." : dishesText;
    ctx.fillText(fitDishesText, margin + 40, currY + 33);
    currY += 76;

    // 5. 好友分工领菜协同榜
    ctx.fillStyle = "#1D1D1F";
    ctx.font = "bold 20px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
    ctx.fillText("👥 好友分工领菜协同榜", margin + 24, currY);
    currY += 24;

    const claimGroups = [
      { name: "🥩 肉禽海鲜组", claim: meatClaim, count: data.meatAndSeafood.length },
      { name: "🥬 时令果蔬组", claim: vegClaim, count: data.veggiesAndOther.length },
      { name: "🧂 调料干货组", claim: seaClaim, count: data.seasoningList.length }
    ];

    claimGroups.forEach((g, idx) => {
      const boxX = margin + 24 + idx * ((cardWidth - 48 - 24) / 3);
      const boxW = (cardWidth - 48 - 24) / 3;
      ctx.fillStyle = g.claim ? "#E8F5E9" : "#F5F5F7";
      ctx.beginPath();
      ctx.roundRect(boxX, currY, boxW, 64, 10);
      ctx.fill();

      ctx.fillStyle = g.claim ? "#2E7D32" : "#86868B";
      ctx.font = "bold 14px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
      ctx.fillText(g.name, boxX + 12, currY + 26);

      ctx.font = "500 13px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
      ctx.fillText(g.claim ? `✓ 已认领: ${g.claim}` : `待认领 (${g.count}项)`, boxX + 12, currY + 48);
    });
    currY += 88;

    // 6. 生鲜食材精准清单
    ctx.fillStyle = "#1D1D1F";
    ctx.font = "bold 20px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
    ctx.fillText(`🥬 核心生鲜采购明细 (${data.freshList.length}项)`, margin + 24, currY);
    currY += 20;

    freshItems.forEach((item, index) => {
      const itemKey = `fresh_${item.name}`;
      const isChecked = this.checkedItems.has(itemKey);

      if (index % 2 === 0) {
        ctx.fillStyle = "#FAFAFA";
        ctx.fillRect(margin + 20, currY - 6, cardWidth - 40, 42);
      }

      ctx.beginPath();
      ctx.arc(margin + 44, currY + 14, 10, 0, Math.PI * 2);
      if (isChecked) {
        ctx.fillStyle = "#34C759";
        ctx.fill();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("✓", margin + 40, currY + 18);
      } else {
        ctx.strokeStyle = "#C7C7CC";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      ctx.fillStyle = isChecked ? "#8E8E93" : "#1D1D1F";
      ctx.font = isChecked ? "500 15px sans-serif" : "bold 15px sans-serif";
      const fromDish = Array.from(item.fromRecipes)[0] || "";
      ctx.fillText(`${item.name} (${fromDish})`, margin + 66, currY + 19);

      ctx.fillStyle = isChecked ? "#8E8E93" : "#C9882E";
      ctx.font = "bold 15px sans-serif";
      const amountStr = `${item.totalAmount} ${item.unit}`;
      const amountW = ctx.measureText(amountStr).width;
      ctx.fillText(amountStr, cardWidth - margin - amountW - 10, currY + 19);

      currY += 44;
    });

    if (data.freshList.length > 10) {
      ctx.fillStyle = "#8E8E93";
      ctx.font = "italic 13px sans-serif";
      ctx.fillText(`... 以及其余 ${data.freshList.length - 10} 项时令辅食材`, margin + 66, currY + 10);
      currY += 30;
    }

    // 7. 分隔线
    ctx.strokeStyle = "#E5E5EA";
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(margin + 24, currY + 15);
    ctx.lineTo(cardWidth + margin - 24, currY + 15);
    ctx.stroke();
    currY += 35;

    // 8. 底部二维码与品牌口令
    const qrSize = 90;
    const qrX = margin + 30;
    const qrY = currY;

    ctx.fillStyle = "#1D1D1F";
    ctx.beginPath();
    ctx.roundRect(qrX, qrY, qrSize, qrSize, 8);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(qrX + 10, qrY + 10, 24, 24);
    ctx.fillRect(qrX + qrSize - 34, qrY + 10, 24, 24);
    ctx.fillRect(qrX + 10, qrY + qrSize - 34, 24, 24);

    ctx.fillStyle = "#1D1D1F";
    ctx.fillRect(qrX + 16, qrY + 16, 12, 12);
    ctx.fillRect(qrX + qrSize - 28, qrY + 16, 12, 12);
    ctx.fillRect(qrX + 16, qrY + qrSize - 28, 12, 12);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "18px sans-serif";
    ctx.fillText("🍲", qrX + 36, qrY + 52);

    ctx.fillStyle = "#1D1D1F";
    ctx.font = "bold 17px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
    ctx.fillText("微信长按识别二维码 · 协同查看菜品做法与买菜清单", qrX + qrSize + 20, qrY + 35);

    ctx.fillStyle = "#86868B";
    ctx.font = "14px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
    ctx.fillText("✨ 邀请好友认领食材，各买各的，聚餐做饭超轻松！", qrX + qrSize + 20, qrY + 62);
    ctx.fillText("咕嘟食谱生活志 · 旬味寻真 · 四季风物", qrX + qrSize + 20, qrY + 84);

    // 9. 显示弹窗
    const dataUrl = canvas.toDataURL("image/png");
    this.currentPosterDataUrl = dataUrl;

    const wrap = document.getElementById("posterImgWrap");
    if (wrap) {
      wrap.innerHTML = `<img src="${dataUrl}" style="width:100%; max-height:60vh; object-fit:contain; border-radius:12px; box-shadow: 0 4px 20px rgba(0,0,0,0.12);" alt="买菜海报">`;
    }
    const posterModal = document.getElementById("posterModal");
    if (posterModal) {
      posterModal.classList.add("active");
    }
  },

  downloadPoster() {
    if (!this.currentPosterDataUrl) return;
    const a = document.createElement("a");
    a.href = this.currentPosterDataUrl;
    a.download = `咕嘟食谱-聚餐买菜协同单-${new Date().getMonth() + 1}月${new Date().getDate()}日.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    this._showToast("海报图片已准备下载！长按图片也可直接发送到微信群");
  },

  _writeClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this._showToast(successMsg);
      }).catch(() => {
        this._fallbackCopy(text, successMsg);
      });
    } else {
      this._fallbackCopy(text, successMsg);
    }
  },

  _fallbackCopy(text, successMsg) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      this._showToast(successMsg);
    } catch (e) {
      this._showToast(successMsg);
    }
  },

  _showToast(msg) {
    let toast = document.getElementById("guduToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "guduToast";
      toast.style.cssText = "position:fixed; top:40%; left:50%; transform:translate(-50%, -50%); background:rgba(29,29,31,0.92); color:#fff; padding:12px 24px; border-radius:999px; font-size:14px; font-weight:600; z-index:999; box-shadow:0 8px 30px rgba(0,0,0,0.25); text-align:center; max-width:80vw; transition:opacity 0.3s; opacity:0; pointer-events:none;";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = "1";
    setTimeout(() => {
      toast.style.opacity = "0";
    }, 2200);
  }
};

window.ShareService = ShareService;
