window.handleImageError = function(img, dishName) {
  img.onerror = null;
  const name = dishName || img.alt || "";
  if (name.match(/面|粉|拉面|刀削|意面|米线|包子|馄饨|饺|饼/)) {
    img.src = "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=80";
  } else if (name.match(/鱼|虾|蟹|蚝|贝|蛤|海鲜|生蚝|小黄鱼|九肚鱼|带鱼/)) {
    img.src = "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80";
  } else if (name.match(/牛|排骨|肉|猪|羊|腱|耳|肠/)) {
    img.src = "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80";
  } else if (name.match(/鸡|鸭|鹅|翅|爪/)) {
    img.src = "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&auto=format&fit=crop&q=80";
  } else if (name.match(/汤|羹|煲|炖|笃|盅/)) {
    img.src = "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop&q=80";
  } else if (name.match(/茶|饮|奶|露|甜品|糕|果|冰/)) {
    img.src = "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80";
  } else {
    img.src = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80";
  }
};

const App = {
  activeCategory: "all",
  activeSubFilter: "all",
  activeSeason: "autumn", // 默认当前秋收时令
  activeSeasonTag: "all", // 默认选中当令全食谱
  searchQuery: "",
  // 默认不勾选任何食材，由用户自主点选或输入
  selectedFridgeIngredients: new Set(),
  activeRecipeForDetail: null,
  activeRecipeForCooking: null,
  cookingCurrentStep: 0,
  favorites: new Set(),

  // 分页状态 (消除4.5万像素超大DOM，实现60帧跟手流畅)
  currentFilteredList: [],
  currentPage: 1,
  pageSize: 12,
  isLoadingMore: false,

  init() {
    this.loadFavorites();
    this.bindEvents();
    this.setupInfiniteScroll();
    this.renderSeasonBanner();
    this.renderSubFilters();
    this.renderRecipeList();
    this.updateFavoritesUI();
    ShareService.init();
    this.initServiceWorker();
  },

  loadFavorites() {
    try {
      const saved = localStorage.getItem("GUDU_FAVORITES");
      if (saved) this.favorites = new Set(JSON.parse(saved));
    } catch(e) {
      this.favorites = new Set();
    }
  },

  saveFavorites() {
    try {
      localStorage.setItem("GUDU_FAVORITES", JSON.stringify(Array.from(this.favorites)));
    } catch(e) {}
  },

  isFavorite(id) {
    return this.favorites.has(id);
  },

  toggleFavorite(id) {
    const isNowFav = !this.favorites.has(id);
    if (isNowFav) {
      this.favorites.add(id);
      this.showToast("❤️ 已成功加入我的收藏！");
    } else {
      this.favorites.delete(id);
      this.showToast("已从收藏夹中移除");
    }
    this.saveFavorites();
    this.updateFavoritesUI();

    document.querySelectorAll(`.card-fav-btn[data-id="${id}"]`).forEach(btn => {
      btn.classList.toggle("is-fav", isNowFav);
      btn.innerHTML = `<span>${isNowFav ? '❤️' : '🤍'}</span>`;
      btn.title = isNowFav ? "取消收藏" : "收藏菜品";
    });

    if (this.activeSubFilter === "favorite") {
      this.renderRecipeList();
    }
  },

  updateFavoritesUI() {
    const badge = document.getElementById("headerFavCount");
    if (badge) {
      const count = this.favorites.size;
      badge.textContent = count;
      badge.style.display = count > 0 ? "inline-block" : "none";
    }
  },

  showFavorites() {
    this.activeCategory = "all";
    this.activeSubFilter = "favorite";
    document.querySelectorAll(".cat-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.cat === "all");
    });
    this.renderSubFilters();
    this.renderRecipeList();
    const grid = document.getElementById("recipeGrid");
    if (grid) grid.scrollIntoView({ behavior: 'smooth' });
  },

  showToast(msg) {
    const toast = document.getElementById("commercialToast") || document.getElementById("guduToast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("active");
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove("active");
    }, 2200);
  },

  openAboutModal(type) {
    const modal = document.getElementById("aboutModal");
    const title = document.getElementById("aboutModalTitle");
    const body = document.getElementById("aboutModalBody");
    if (!modal || !body) return;

    if (type === 'privacy') {
      title.textContent = '🔒 用户隐私保护声明';
      body.innerHTML = `
        <h4 style="font-weight:700; margin-bottom:8px;">本地化隐私优先原则</h4>
        <p style="margin-bottom:12px;">咕嘟食谱严格遵守个人隐私安全标准。本应用所有的收藏菜谱、买菜清单及自建私房菜数据均安全保存在您的手机本地存储 (LocalStorage) 中，不采集任何个人隐私信息与地理位置，请放心使用。</p>
        <h4 style="font-weight:700; margin-bottom:8px;">第三方图片说明</h4>
        <p>菜谱中展示的高清美食图片均通过安全链路载入，不携带任何第三方追踪行为。</p>
      `;
    } else if (type === 'terms') {
      title.textContent = '📜 服务协议与免责声明';
      body.innerHTML = `
        <h4 style="font-weight:700; margin-bottom:8px;">烹饪安全与健康指导</h4>
        <p style="margin-bottom:12px;">1. 本应用提供之菜谱配比、用火时长及食疗调养建议仅供家庭日常烹饪参考，不构成临床医疗、药物治疗或专业营养学指导凭据。</p>
        <p style="margin-bottom:12px;">2. 在厨房实操过程中，请务必注意燃气、火源、高温油溅及锐利刀具使用安全。老人及儿童操作时应在成人陪同指导下进行。</p>
        <p>3. 若对部分海鲜、坚果、豆类或药膳食材有过敏体质，请严格遵守医嘱并在烹饪前剔除替换相应食材。</p>
      `;
    } else if (type === 'feedback') {
      title.textContent = '📮 意见反馈与商务合作';
      body.innerHTML = `
        <h4 style="font-weight:700; margin-bottom:8px;">聆听每一个大厨的声音</h4>
        <p style="margin-bottom:12px;">如果您在使用中发现任何菜品图片、步骤描述有待改善，或有独家家传秘方推荐，欢迎向我们反馈！</p>
        <div style="background:var(--bg-page); padding:12px 14px; border-radius:8px; border:1px solid var(--border-color); margin-bottom:14px;">
          <div>📧 官方邮箱：<strong>contact@gudurecipe.com</strong></div>
          <div style="margin-top:6px;">💬 微信客服：<strong>GuduRecipes2026</strong></div>
        </div>
        <p style="font-size:12px; color:var(--text-muted);">感谢您与咕嘟食谱一同探索中华风味与生活美学！</p>
      `;
    } else {
      title.textContent = '🍲 关于咕嘟食谱';
      body.innerHTML = `
        <div style="text-align:center; margin-bottom:16px;">
          <img src="./icons/icon-192.png" style="width:68px; height:68px; border-radius:18px; box-shadow:0 4px 14px rgba(255,107,53,0.25); display:inline-block; margin-bottom:8px;" alt="咕嘟食谱标志">
          <h3 style="font-size:18px; font-weight:800; color:var(--text-main);">咕嘟食谱 · 旬味寻真</h3>
          <span style="display:inline-block; margin-top:4px; font-size:11px; background:rgba(255,107,53,0.12); color:#FF6B35; padding:2px 8px; border-radius:12px; font-weight:700;">v3.5.0 商业稳定版</span>
        </div>
        <p style="margin-bottom:12px;"><strong>产品使命：</strong>汇聚中华 34 省地道家常、慢熬靓汤、面食点心与异国料理，结合 24 节气顺时而食理念，以「保姆级避坑教程 + 智能微信买菜清单」让每个人都能轻松享受烹饪的烟火暖意。</p>
        <p style="margin-bottom:16px;"><strong>技术架构：</strong>轻量级高性能原生混合容器，支持离线高速缓存、60fps 跟手滚动与全屏防油污大字厨房工作台。</p>
        <div style="border-top:1px solid var(--border-color); padding-top:14px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:12px; color:var(--text-muted);">本地数据状态：正常</span>
          <button class="btn btn-outline btn-sm" onclick="App.clearLocalCache()">清理本地缓存</button>
        </div>
      `;
    }

    modal.classList.add("active");
  },

  clearLocalCache() {
    if (confirm("确定要清理本地缓存数据（包括买菜购物车和临时设定）吗？")) {
      try {
        localStorage.removeItem("GUDU_MENU_CART");
        localStorage.removeItem("GUDU_CLAIMED_GROUPS");
        localStorage.removeItem("GUDU_DELETED_ITEMS");
        this.showToast("✓ 本地临时数据已清除完成！");
        setTimeout(() => {
          window.location.reload();
        }, 800);
      } catch(e) {}
    }
  },

  playDingSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch(e) {}
  },

  getAllRecipes() {
    let ugcRecipes = [];
    try {
      const stored = localStorage.getItem("GUDU_UGC_RECIPES");
      if (stored) ugcRecipes = JSON.parse(stored);
    } catch(e) {
      ugcRecipes = [];
    }
    return [...ugcRecipes, ...window.RECIPES_DATA];
  },

  bindEvents() {
    // 搜索框实时防抖过滤
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderRecipeList();
      });
    }

    // 模态框点击背景关闭
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.classList.remove("active");
      });
    });

    // 冰箱自由输入框回车监听
    const fridgeInput = document.getElementById("fridgeCustomInput");
    if (fridgeInput) {
      fridgeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.addFridgeInputIngredient();
        }
      });
    }
  },

  // 渲染时令食俗 Banner (Apple 轻奢极简版)
  renderSeasonBanner(seasonKey = this.activeSeason) {
    const seasonData = window.SEASONS_DATA[seasonKey];
    if (!seasonData) return;
    this.activeSeason = seasonKey;

    const bannerEl = document.getElementById("seasonBanner");
    if (!bannerEl) return;

    bannerEl.innerHTML = `
      <div class="season-header">
        <div class="season-tag-group">
          <span class="solar-pill">${seasonData.name}</span>
          <span class="solar-name">节令：${seasonData.solarTerms.slice(0, 3).join(" · ")}</span>
        </div>
        <div class="season-switches">
          <button class="season-tab ${seasonKey === 'spring' ? 'active' : ''}" onclick="App.switchSeason('spring')">春·生</button>
          <button class="season-tab ${seasonKey === 'summer' ? 'active' : ''}" onclick="App.switchSeason('summer')">夏·长</button>
          <button class="season-tab ${seasonKey === 'autumn' ? 'active' : ''}" onclick="App.switchSeason('autumn')">秋·收</button>
          <button class="season-tab ${seasonKey === 'winter' ? 'active' : ''}" onclick="App.switchSeason('winter')">冬·藏</button>
        </div>
      </div>
      <div class="season-quote">
        “${seasonData.motto}” · <strong>适时调养</strong>：${seasonData.soupAdvice}
      </div>
      <div class="season-actions">
        <button class="season-btn-main ${this.activeSeasonTag === 'all' ? 'active' : ''}" onclick="App.filterByCurrentSeason()" title="查看本季所有应季菜谱">
          🍁 查看${seasonData.name}当令全食谱
        </button>
        <button class="season-btn-shuffle" onclick="App.shuffleSeasonalRecipes()" title="换一组当季推荐食谱">
          <span class="shuffle-icon">🔄</span> 换一换当令菜
        </button>
        ${(seasonData.keySeafoods || []).slice(0, 2).map(s => {
          const q = s.query || s.name;
          const isActive = this.activeSeasonTag === q;
          return `
          <button class="season-fish-tag ${isActive ? 'active' : ''}" data-query="${q}" onclick="App.filterBySeasonQuery('${q}')">
            🦀 ${s.name} <span class="tag-badge" style="font-size:10px; color:${isActive ? '#FFF' : 'var(--text-muted)'};">${s.badge}</span>
          </button>
        `}).join("")}
        ${(seasonData.keyProduce || []).slice(0, 2).map(p => {
          const q = p.query || p.name;
          const isActive = this.activeSeasonTag === q;
          return `
          <button class="season-fish-tag ${isActive ? 'active' : ''}" data-query="${q}" onclick="App.filterBySeasonQuery('${q}')">
            🥬 ${p.name} <span class="tag-badge" style="font-size:10px; color:${isActive ? '#FFF' : 'var(--text-muted)'};">${p.badge}</span>
          </button>
        `}).join("")}
      </div>
    `;
  },

  updateSeasonActionTags() {
    const actionsEl = document.querySelector(".season-actions");
    if (!actionsEl) return;
    const mainBtn = actionsEl.querySelector(".season-btn-main");
    if (mainBtn) mainBtn.classList.toggle("active", this.activeSeasonTag === "all");
    actionsEl.querySelectorAll(".season-fish-tag").forEach(tag => {
      const q = tag.getAttribute("data-query");
      const isAct = this.activeSeasonTag === q;
      tag.classList.toggle("active", isAct);
      const badge = tag.querySelector(".tag-badge");
      if (badge) badge.style.color = isAct ? "#FFF" : "var(--text-muted)";
    });
  },

  switchSeason(seasonKey) {
    this.activeSeason = seasonKey;
    this.activeSeasonTag = "all";
    this.renderSeasonBanner(seasonKey);
    this.filterByCurrentSeason();
  },

  // 筛选当前季节所有菜谱（包含当令海鲜、时令果蔬、家常菜、靓汤）
  filterByCurrentSeason() {
    this.activeCategory = "all";
    this.activeSubFilter = "all";
    this.activeSeasonTag = "all";
    this.updateSeasonActionTags();

    this.searchQuery = "";
    document.querySelectorAll(".cat-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-cat") === "all");
    });
    this.renderSubFilters();

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.value = "";
      searchInput.blur();
    }

    const list = this.getAllRecipes();
    const seasonData = window.SEASONS_DATA[this.activeSeason] || {};
    const keyWords = (seasonData.keyDishes || []).concat(seasonData.keySeafoods || []).concat(seasonData.keyProduce || []);

    // 筛选当前季节相关的菜谱
    let filtered = list.filter(r => r.season && r.season.includes(this.activeSeason));

    // 核心改进：当令核心特色菜置顶！使春夏秋冬四季菜品截然不同、各具风采
    filtered.sort((a, b) => {
      const aPrimary = (a.primarySeason === this.activeSeason) ? 60 : 0;
      const bPrimary = (b.primarySeason === this.activeSeason) ? 60 : 0;

      const aKeyword = keyWords.some(kw => {
        const kwStr = typeof kw === 'string' ? kw : (kw.query || kw.name || '');
        const subKw = kwStr.slice(0, 2);
        return subKw && (a.name.includes(subKw) || (a.ingredients && a.ingredients.some(i => i.name.includes(subKw))));
      }) ? 100 : 0;

      const bKeyword = keyWords.some(kw => {
        const kwStr = typeof kw === 'string' ? kw : (kw.query || kw.name || '');
        const subKw = kwStr.slice(0, 2);
        return subKw && (b.name.includes(subKw) || (b.ingredients && b.ingredients.some(i => i.name.includes(subKw))));
      }) ? 100 : 0;

      const scoreA = aPrimary + aKeyword;
      const scoreB = bPrimary + bKeyword;
      return scoreB - scoreA;
    });

    this.renderSpecificRecipeList(filtered, `【${seasonData.name || "时令"}】当季精选菜谱（已置顶时令生鲜）`);
  },

  // 节令推荐随机换一换菜谱 (用户体验升级：高方差动态随机打乱展示)
  shuffleSeasonalRecipes() {
    this.activeSeasonTag = "all";
    this.updateSeasonActionTags();
    const list = this.getAllRecipes();
    const seasonData = window.SEASONS_DATA[this.activeSeason] || {};
    let filtered = list.filter(r => r.season && r.season.includes(this.activeSeason));
    // 随机高方差乱序打乱
    filtered.sort(() => Math.random() - 0.5);
    this.renderSpecificRecipeList(filtered, `【${seasonData.name || "时令"}】当季精选菜谱（已换一组推荐）`);
    this.showToast(`已为您换一组【${seasonData.name || "时令"}】当季精选菜谱！`);
  },

  // 时令点击精准联动筛选 (修复：解除分类锁定，防止弹出软键盘，平滑滚动至结果)
  filterBySeasonQuery(kw) {
    this.activeCategory = "all";
    this.activeSubFilter = "all";
    this.activeSeasonTag = kw;
    this.updateSeasonActionTags();

    document.querySelectorAll(".cat-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-cat") === "all");
    });
    this.renderSubFilters();

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.value = kw;
      // 主动失焦，防止安卓手机弹出虚拟键盘遮挡列表
      searchInput.blur();
    }
    this.searchQuery = kw.toLowerCase();
    this.renderRecipeList();

    const grid = document.getElementById("recipeGrid");
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  setCategory(cat) {
    this.activeCategory = cat;
    this.activeSubFilter = "all";
    // 关键修复：切换大分类时主动清空单项搜索词与输入框，彻底解除互斥锁死
    this.searchQuery = "";
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";

    document.querySelectorAll(".cat-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-cat") === cat);
    });
    this.renderSubFilters();
    this.renderRecipeList();
  },

  renderSubFilters() {
    const bar = document.getElementById("subFilterBar");
    if (!bar) return;

    let pills = [{ label: "全部呈现", val: "all" }];
    if (this.activeCategory === "all") {
      pills.push(
        { label: "❤️ 我的收藏", val: "favorite" },
        { label: "🔥 全民家常必做", val: "家常" },
        { label: "🌶️ 鲜香香辣下饭", val: "辣" },
        { label: "🥩 硬核大块吃肉", val: "肉" },
        { label: "🍲 暖胃滋补靓汤", val: "汤" },
        { label: "🥟 面食小吃点心", val: "面" },
        { label: "🌊 鲜活海味水产", val: "海鲜" },
        { label: "🥬 爽脆解腻素菜", val: "素" }
      );
    } else if (this.activeCategory === "soup") {
      pills.push(
        { label: "🍲 广粤老火慢煲", val: "laohuo" },
        { label: "🏺 隔水蒸炖瓦罐", val: "geshui" },
        { label: "🥘 中原北派大汤", val: "beipai" },
        { label: "🥣 清鲜生滚润羹", val: "geng" },
        { label: "🍄 菌皇珍品素膳", val: "junsu" }
      );
    } else if (this.activeCategory === "regional") {
      pills.push(
        { label: "🌶️ 湖南湘菜", val: "hunan" },
        { label: "🍃 徽派皖韵", val: "anhui" },
        { label: "🍢 西北塞外", val: "xibei" },
        { label: "🍋 滇黔西南", val: "dianqian" },
        { label: "🍜 三晋中原", val: "zhongyuan" },
        { label: "🥘 川渝巴蜀", val: "chuanyu" },
        { label: "🍗 粤港澳台", val: "yuegang" },
        { label: "🦀 江浙淮扬", val: "jiangzhe" },
        { label: "🥢 齐鲁鲁菜", val: "shandong" },
        { label: "🔥 赣菜老表", val: "jiangxi" },
        { label: "🥩 关东东北", val: "dongbei" },
        { label: "🍲 荆楚湖北", val: "hubei" },
        { label: "🫓 三秦陕西", val: "shanxi_qin" },
        { label: "🌾 桂林广西", val: "guangxi" },
        { label: "🍖 塞北内蒙", val: "neimeng" },
        { label: "🏠 国民家常", val: "jiachang" }
      );
    } else if (this.activeCategory === "noodle") {
      pills.push(
        { label: "🥣 养生滋补稠粥", val: "粥" },
        { label: "🍜 汤面米粉拌面", val: "面" },
        { label: "🥟 蒸制点心包子", val: "蒸" },
        { label: "🍚 炒饭焖饭主食", val: "饭" },
        { label: "🫓 煎烙酥饼锅盔", val: "煎" },
        { label: "🥨 香酥麻花油条", val: "炸" }
      );
    } else if (this.activeCategory === "seafood") {
      pills.push(
        { label: "🐟 沿海海鱼图鉴", val: "鱼" },
        { label: "🦀 肥满膏蟹龙虾", val: "蟹" },
        { label: "🦐 鲜虾皮皮虾", val: "虾" },
        { label: "🦪 肥嫩生蚝鲍鱼", val: "生蚝" }
      );
    } else if (this.activeCategory === "grand") {
      pills.push(
        { label: "👑 钓鱼台国宾馆", val: "diaoyutai" },
        { label: "🏛️ 开国第一宴", val: "founding" },
        { label: "📜 传世八大菜系头牌", val: "legend" }
      );
    } else if (this.activeCategory === "japanese") {
      pills.push(
        { label: "🍲 寿喜烧关东煮", val: "寿喜烧" },
        { label: "🍛 咖喱照烧丼饭", val: "饭" }
      );
    } else if (this.activeCategory === "korean") {
      pills.push(
        { label: "🥘 部队锅泡菜汤", val: "火锅" },
        { label: "🍗 甜辣炸鸡炒年糕", val: "年糕" }
      );
    } else if (this.activeCategory === "thai") {
      pills.push(
        { label: "🦐 冬阴功海鲜", val: "冬阴功" },
        { label: "🥭 芒果甜糯米饭", val: "糯米饭" }
      );
    } else if (this.activeCategory === "western") {
      pills.push(
        { label: "🥩 黑椒菲力牛排", val: "牛排" },
        { label: "🍝 经典肉酱意面", val: "意面" }
      );
    } else if (this.activeCategory === "dessert") {
      pills.push(
        { label: "🧋 特调茶饮咖啡", val: "drink" },
        { label: "🍮 港粤传统糖水", val: "tongsui" },
        { label: "🥭 鲜果沙拉果捞", val: "fruit" },
        { label: "🍧 冰粉茶冻沙冰", val: "ice" },
        { label: "🥮 传统中式点心", val: "pastry" }
      );
    } else if (this.activeCategory === "fatloss") {
      pills.push(
        { label: "🍲 低卡暖胃刮油汤", val: "soup" },
        { label: "🥗 优质高蛋白肉禽", val: "poultry" },
        { label: "🦐 鲜虾低脂水产", val: "seafood" },
        { label: "🥦 爽脆解腻清肠", val: "veggie" },
        { label: "🌾 低GI粗粮主食", val: "staple" }
      );
    } else if (this.activeCategory === "drinks") {
      pills.push(
        { label: "🥜 酥脆花生毛豆", val: "花生" },
        { label: "🥩 酱卤焦香肉卤", val: "卤" },
        { label: "🌶️ 爽辣下酒爆炒", val: "辣" },
        { label: "🐚 鲜美田螺小鲜", val: "螺" }
      );
    }

    bar.innerHTML = pills.map(p => `
      <button class="sub-pill ${this.activeSubFilter === p.val ? 'active' : ''}" data-val="${p.val}" onclick="App.setSubFilter('${p.val}')">
        ${p.label}
      </button>
    `).join("");
  },

  setSubFilter(val) {
    this.activeSubFilter = val;
    // 关键修复：切换二级药丸时清空残存搜索词与输入框
    this.searchQuery = "";
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";

    document.querySelectorAll(".sub-pill").forEach(pill => {
      const pVal = pill.getAttribute("data-val") || "";
      pill.classList.toggle("active", pVal === val || (val === 'all' && pVal === 'all'));
    });
    this.renderRecipeList();
  },

  // 渲染下厨房风格的大图流列表
  renderRecipeList() {
    const list = this.getAllRecipes();
    const grid = document.getElementById("recipeGrid");
    const countLabel = document.getElementById("recipeCountLabel");
    if (!grid) return;

    const filtered = list.filter(recipe => {
      // 1. 搜索词匹配 (包含食材全文本与近义扩展)
      if (this.searchQuery) {
        const q = this.searchQuery;
        const match = 
          recipe.name.toLowerCase().includes(q) ||
          recipe.subtitle.toLowerCase().includes(q) ||
          recipe.region.toLowerCase().includes(q) ||
          (recipe.cuisineCategory && recipe.cuisineCategory.toLowerCase().includes(q)) ||
          (recipe.ingredients && recipe.ingredients.some(i => i.name.toLowerCase().includes(q))) ||
          (recipe.tags && recipe.tags.some(t => t.toLowerCase().includes(q))) ||
          (recipe.pantryChecklistTags && recipe.pantryChecklistTags.some(t => t.toLowerCase().includes(q))) ||
          ((q === '藕' || q === '莲藕') && (recipe.name.includes('藕') || (recipe.ingredients && recipe.ingredients.some(i => i.name.includes('藕')))));
        if (!match) return false;
      }

      // 2. 一级分类过滤
      if (this.activeCategory === "regional" && !recipe.region.match(/江西|广西|陕西|东北|四川|湖南|广东|福建|海南|江苏|浙江|山东|北京|天津|河南|湖北|安徽|山西|河北|内蒙|港澳台|国民家常|云南|贵州|新疆|甘肃|青海|宁夏|西藏/)) return false;
      if (this.activeCategory === "soup") {
        if (recipe.categoryType === "dessert" || recipe.categoryType === "noodle") return false;
        if (recipe.name.match(/水饺|饺子|馄饨|包子|汤包|面条|冷面|汤圆|圆子|酸梅汤|芝麻糊|奶茶|柠檬茶|冰粉|酸汤肥牛/)) return false;
        if (recipe.name.match(/啫啫煲|肉沫粉丝煲|蚂蚁上树|小鸡炖榛蘑|辣炖土豆|红煨甲鱼|问政山笋/)) return false;

        const isSoup = recipe.categoryType === "soup" || 
                       recipe.cuisineCategory === "慢熬靓汤" || 
                       recipe.cuisineCategory === "汤煲羹品" ||
                       recipe.name === "云南汽锅鸡" ||
                       recipe.name.includes("汽锅鸡") ||
                       !!recipe.name.match(/汤|羹|炖盅|原盅|清炖|慢煲|煨汤|笃鲜/);
        if (!isSoup) return false;
      }
      if (this.activeCategory === "noodle") {
        // 绝对隔离：海鲜炸物如面拖小黄鱼、带鱼绝不进入面食主食（粥品除外）
        if ((recipe.isSeafood || recipe.categoryType === "seafood") && !recipe.name.includes("粥") && recipe.cuisineCategory !== "滋补养生粥") return false;
        if (recipe.name.match(/小黄鱼|面拖.*鱼|锅包肉|包菜|荷包蛋|肉饼汤|大烩菜|冷盘|红烧肉|回锅肉|狮子头|排骨|鸡翅|鱼头|盐酥鸡|酸菜粉条|蚂蚁上树|花生米|白凉粉|冰粉|焙面|沙拉/) && !recipe.name.match(/过油肉拌面|粥/)) return false;
        if (recipe.name.match(/扇贝|面包蟹|大鱼/) && !recipe.name.includes("粥")) return false;
        const isNoodle = recipe.categoryType === "noodle" || recipe.cuisineCategory === "滋补养生粥" || !!recipe.name.match(/粥|稀饭|米汤|面茶|面|米粉|拌粉|米线|拉面|扯面|臊子|热干|阳春|云吞|炸酱|烩面|拌面|饸饹|包子|生煎|汤包|小笼|水饺|蒸饺|锅贴|馄饨|烧麦|肉夹馍|白吉馍|油条|麻花|馓子|酥饼|葱油饼|煎饼|发糕|伦教糕|年糕|糍粑|青团|汤圆|粽|酿皮|凉皮|河粉|肠粉|意面|千层面|披萨|锅盔|烧饼|馒头|烤包子|豆包|剔尖|栲栳栳|甑糕|粉|炒饭|焖饭|盖饭|抄手|菠萝包|鲜花饼|糯米鸡|煲仔饭|卤肉饭|咸饭|擦擦|米糕/);
        if (!isNoodle) return false;
      }
      if (this.activeCategory === "seafood") {
        if (recipe.name.match(/川贝|蚝油|鱼香|木耳|鸡胸|沙拉/)) return false;
        const isSea = recipe.isSeafood || recipe.categoryType === "seafood" || recipe.cuisineCategory === "海鲜盛宴" || !!recipe.name.match(/鱼|虾|蟹|蚝|贝|蛤|螺|鲍|海鲜|鱿|鳗|甲鱼/);
        if (!isSea) return false;
      }
      if (this.activeCategory === "japanese" && recipe.cuisineCategory !== "日式料理") return false;
      if (this.activeCategory === "korean" && recipe.cuisineCategory !== "韩式料理") return false;
      if (this.activeCategory === "thai" && recipe.cuisineCategory !== "泰式料理") return false;
      if (this.activeCategory === "western" && recipe.cuisineCategory !== "西餐经典") return false;
      if (this.activeCategory === "grand" && !recipe.isGrandBanquet && !recipe.isGrandBanquets && recipe.cuisineCategory !== "华夏名宴") return false;
      if (this.activeCategory === "drinks") {
        if (recipe.name.includes("小黄鱼") || recipe.name.includes("炸藕夹") || recipe.name.includes("炒面")) {
          if (recipe.name.includes("炒面")) return false;
        } else {
          // 严格剔除主食面条、米饭、大锅炖汤、甜品糊羹
          if (recipe.categoryType === "soup" || recipe.categoryType === "dessert" || recipe.categoryType === "noodle") return false;
          if (recipe.name.match(/面|饭|粥|汤|羹|糊|圆子|冰|饺|包|粉/)) return false;
        }
        const isDrink = recipe.cuisineCategory === "微醺下酒" || recipe.isDrinkingSnack || !!recipe.name.match(/毛豆|鸭脖|鸭头|鸭爪|鸭翅|肥肠|牛腱|酱牛肉|肚丝|鸡爪|猪耳|小龙虾|田螺|花甲|花蛤|螺蛳|掌中宝|小黄鱼|带鱼|冷吃|辣子鸡|盐酥鸡|口水鸡|椒盐|油爆|炸鸡|避风塘|千页豆腐|牙签|鸡胗|炸河虾|蜇头|花生米/);
        if (!isDrink) return false;
      }
      
      // 严格分类隔离：下酒菜与咸鲜重味绝不混入饮品甜品
      if (this.activeCategory === "dessert") {
        if (recipe.isDrinkingSnack || recipe.cuisineCategory === "下酒菜" || (recipe.name.match(/花生米|肥肠|牛腱|猪头肉|田螺|回锅肉|小炒|排骨|肉饼|炖/) && !recipe.name.match(/炖雪梨|炖雪燕|糖水|银耳/))) return false;
        if (recipe.categoryType !== "dessert" && recipe.cuisineCategory !== "甜品沙拉" && !recipe.name.match(/茶|饮|奶|露|沙冰|糖水|咖啡|布丁|提拉米苏|马蹄糕|豌豆黄|糍粑|栗子|羹|糊|圆子|玉米汁/)) return false;
      }
      
      if (this.activeCategory === "fatloss" && !recipe.isFatLossFriendly) return false;

      // 3. 二级细分精准匹配
      if (this.activeSubFilter !== "all") {
        const sub = this.activeSubFilter;

        // 收藏夹精准匹配
        if (sub === "favorite") {
          return this.favorites.has(recipe.id);
        }

        // 慢熬靓汤子分类
        if (this.activeCategory === "soup") {
          if (sub === "laohuo") return !!recipe.name.match(/猪肚鸡|五指毛桃|花胶|苦瓜黄豆|陈皮老鸭|响螺|霸王花|海底椰|车前草|椰子炖|冬瓜薏米|老火|顺德鱼头|肉骨茶|老鸭汤|排骨汤|冬瓜荷叶|麻油鸡|清脂汤|消肿汤/);
          if (sub === "geshui") return !!recipe.name.match(/汽锅|瓦罐|神仙鸭|天麻|西洋参|隔水|海蚌|狮子头|佛跳墙|清炖|蒸/);
          if (sub === "beipai") return !!recipe.name.match(/单县|水盆|简阳|羊肉汤|羊杂|当归生姜|藕汤|腌笃鲜|天目湖|胡辣汤|老豆腐炖|冬阴功|罗宋汤|大酱汤|泡菜汤|酸汤鱼/);
          if (sub === "geng") return !!recipe.name.match(/羹|莼菜|文思|宋嫂|乌鱼蛋|丝瓜|蛤蜊|九肚鱼|丸子|生滚|裙带菜|黄鱼汤|牛肉丸/);
          if (sub === "junsu") return !!recipe.name.match(/菌|松茸|羊肚菌|竹荪|菌菇|素鲜汤|玉米马蹄|魔芋丝/);
        }

        // 饮品甜品子分类
        if (this.activeCategory === "dessert") {
          if (sub === "drink") return !!recipe.name.match(/茶|奶茶|拿铁|咖啡|柠檬茶|普洱|酸梅汤|冷萃|饮|玉米汁|鲜奶/);
          if (sub === "tongsui") return !!recipe.name.match(/双皮奶|姜撞奶|杏仁|花生糊|杨枝甘露|红豆沙|绿豆沙|清补凉|银耳|桃胶|糖水|糊|露|雪梨|雪燕|芋苗|元宵|白果|紫米|甜酒酿/);
          if (sub === "fruit") return !!recipe.name.match(/水果|果捞|沙拉|青芒|芒果|拔丝|苹果/);
          if (sub === "ice") return !!recipe.name.match(/冰粉|茶冻|凉粉|沙冰|雪媚娘|布丁|豆腐/);
          if (sub === "pastry") return !!recipe.name.match(/糕|黄|糍粑|栗子|鲜花饼|蛋挞|发糕|提拉米苏|巴斯克|蛋糕|舒芙蕾|班戟|派/);
        }

        // 减脂轻食子分类
        if (this.activeCategory === "fatloss") {
          if (sub === "soup") return recipe.categoryType === "soup" || !!recipe.name.match(/汤|羹/);
          if (sub === "poultry") return !!recipe.name.match(/鸡|肉|牛|鸭|蛋/);
          if (sub === "seafood") return recipe.isSeafood || !!recipe.name.match(/虾|鱼|水产|三文鱼|金枪鱼|鳕鱼|蛤蜊/);
          if (sub === "veggie") return !!recipe.name.match(/沙拉|瓜|木耳|油麦菜|青菜|凉粉|魔芋|秋葵|杏鲍菇|菠菜|西兰花|豆腐|生菜|芦笋|荷兰豆/);
          if (sub === "staple") return !!recipe.name.match(/面|饭|燕麦|荞麦|魔芋|红薯|玉米|紫薯|卷/);
        }

        // 国宴名席子分类
        if (this.activeCategory === "grand") {
          if (sub === "diaoyutai") return !!recipe.name.match(/乌鱼蛋|鸡豆花|牡丹海鲈鱼|刺参|开水白菜|葱烧海参|佛跳墙|惠灵顿/);
          if (sub === "founding") return !!recipe.name.match(/第一宴|文思豆腐|狮子头|水晶肴肉/);
          if (sub === "legend") return !!recipe.name.match(/九转大肠|烤乳猪|三套鸭|西湖醋鱼|李鸿章|松鼠鳜鱼|东坡肘子|烤鸭|龙井虾仁/);
        }

        // 精选全部子分类
        if (this.activeCategory === "all") {
          if (sub === "素") return !!recipe.name.match(/素|豆腐|土豆|黄瓜|藕|包菜|油麦菜|西兰花|茭白|白菜|木耳|丝瓜|苦瓜|地三鲜|金针菇|干豆腐/) && !recipe.name.match(/炒肉|炖肉|肉片|肉末|肥肠|牛腩|排骨/);
        }

        // 中华各省子分类
        if (this.activeCategory === "regional") {
          if (sub === "hunan") return recipe.region === "湖南" || (recipe.cuisineCategory && recipe.cuisineCategory.includes("湘"));
          if (sub === "anhui") return recipe.region === "安徽" || (recipe.cuisineCategory && recipe.cuisineCategory.includes("徽"));
          if (sub === "xibei") return !!recipe.region.match(/新疆|甘肃|宁夏|青海/) || (recipe.cuisineCategory && recipe.cuisineCategory.includes("西北"));
          if (sub === "dianqian") return !!recipe.region.match(/云南|贵州/) || (recipe.cuisineCategory && recipe.cuisineCategory.match(/滇|黔/));
          if (sub === "zhongyuan") return !!recipe.region.match(/山西|河南|河北|天津|北京/) || (recipe.cuisineCategory && recipe.cuisineCategory.match(/晋|豫|冀|津|华北/));
          if (sub === "chuanyu") return !!recipe.region.match(/四川|重庆/) || (recipe.cuisineCategory && recipe.cuisineCategory.includes("川"));
          if (sub === "yuegang") return !!recipe.region.match(/广东|港澳台|海南/) || (recipe.cuisineCategory && recipe.cuisineCategory.match(/粤|港|台|琼/));
          if (sub === "jiangzhe") return !!recipe.region.match(/江苏|浙江|上海/) || (recipe.cuisineCategory && recipe.cuisineCategory.match(/苏|浙|淮扬/));
          if (sub === "shandong") return recipe.region === "山东" || (recipe.cuisineCategory && recipe.cuisineCategory.includes("鲁"));
          if (sub === "jiangxi") return recipe.region === "江西" || (recipe.cuisineCategory && recipe.cuisineCategory.includes("赣"));
          if (sub === "dongbei") return recipe.region === "东北" || (recipe.cuisineCategory && recipe.cuisineCategory.includes("东北"));
          if (sub === "hubei") return recipe.region === "湖北" || (recipe.cuisineCategory && recipe.cuisineCategory.match(/鄂|楚/));
          if (sub === "shanxi_qin") return recipe.region === "陕西" || (recipe.cuisineCategory && recipe.cuisineCategory.includes("陕"));
          if (sub === "guangxi") return recipe.region === "广西" || (recipe.cuisineCategory && recipe.cuisineCategory.includes("桂"));
          if (sub === "neimeng") return !!recipe.region.match(/内蒙|西藏/) || (recipe.cuisineCategory && recipe.cuisineCategory.includes("塞北"));
          if (sub === "jiachang" || sub === "国民家常") return recipe.region === "国民家常" || recipe.cuisineCategory === "家常经典" || !!recipe.name.match(/西红柿炒鸡蛋|可乐鸡翅|土豆丝|糖醋小排|青椒肉丝|茄子煲|老豆腐炖|蒜苔|爆炒牛肉|牛腩|酸汤肥牛|拍黄瓜|茭白|凉瓜|丝瓜/);
        }

        // 西餐子分类
        if (this.activeCategory === "western") {
          if (sub === "意面") return !!recipe.name.match(/意面|面|Lasagna|千层面|披萨/);
        }

        // 面食主食子分类
        if (this.activeCategory === "noodle") {
          if (sub === "粥") return recipe.cuisineCategory === "滋补养生粥" || !!recipe.name.match(/粥|稀饭|米汤|面茶/);
          if (sub === "面") return !!recipe.name.match(/面|粉|米线|拉面|扯面|臊子|拌面|刀削|饸饹|云吞|河粉|伊面|片儿川|过油肉|甜水面|抄手/);
          if (sub === "蒸") return !!recipe.name.match(/包|小笼|烧卖|水饺|蒸饺|馒头|糕|豆包|卷|花卷|汤包|水馅/);
          if (sub === "饭") return !!recipe.name.match(/饭|糯米鸡|咸饭|擦擦|米糕/) && !recipe.name.includes("粥");
          if (sub === "煎") return !!recipe.name.match(/饼|锅盔|生煎|煎饼|油旋|火烧|锅贴|烤包子/);
          if (sub === "炸") return !!recipe.name.match(/油条|麻花|馓子|炸/);
        }

        // 微醺下酒子分类
        if (this.activeCategory === "drinks") {
          if (sub === "花生") return !!recipe.name.match(/花生|毛豆|炸小鱼|炸河虾|小黄鱼|排骨/);
          if (sub === "卤") return !!recipe.name.match(/酱牛肉|牛腱|肚丝|卤|鸭掌|鸭头|鸭脖|鸭爪|鸡爪|猪耳|冷吃|豆腐/);
          if (sub === "辣") return !!recipe.name.match(/爆炒|干锅|辣子鸡|牙签|鸡胗|花甲|田螺|椒盐|双脆|炸鸡/);
          if (sub === "螺") return !!recipe.name.match(/花甲|花蛤|田螺|螺蛳|蛏子|生蚝|虾|九肚鱼|带鱼/);
        }

        // 沿海海鲜子分类
        if (this.activeCategory === "seafood") {
          if (sub === "鱼") return !!recipe.name.match(/鱼|鳗|鳝|黑头|迪仔|米鱼|安康|午笋|秋刀/);
          if (sub === "蟹") return !!recipe.name.match(/蟹|龙虾|肉蟹|梭子蟹|大闸蟹|青蟹|红蟳|江蟹/);
          if (sub === "虾") return !!recipe.name.match(/虾|皮皮虾|基围虾|对虾|小管|鱿鱼|墨鱼|花枝|章鱼/);
          if (sub === "生蚝") return !!recipe.name.match(/生蚝|蚝|鲍|贝|蛤|螺|海胆|海参|海蛎/);
        }

        // 默认常规子项匹配
        const subMatch = 
          (recipe.region && recipe.region.includes(sub)) ||
          (recipe.name && recipe.name.includes(sub)) ||
          (recipe.cookingMethod && recipe.cookingMethod.includes(sub)) ||
          (recipe.cuisineCategory && recipe.cuisineCategory.includes(sub));
        if (!subMatch) return false;
      }

      return true;
    });

    if (countLabel) {
      countLabel.textContent = `共呈现 ${filtered.length} 道精选好味`;
    }

    this.renderCards(filtered);
  },

  renderSpecificRecipeList(list, title) {
    const countLabel = document.getElementById("recipeCountLabel");
    if (countLabel) {
      countLabel.textContent = `${title} (共 ${list.length} 道)`;
    }
    this.renderCards(list);
    document.getElementById("recipeGrid").scrollIntoView({ behavior: 'smooth' });
  },

  // 切换底部标准 iOS 生态 Tab 栏
  switchTab(tab) {
    document.querySelectorAll(".ios-tab-btn").forEach(btn => btn.classList.remove("active"));
    if (tab === "home") {
      const el = document.getElementById("tabHome");
      if (el) el.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (tab === "fridge") {
      const el = document.getElementById("tabFridge");
      if (el) el.classList.add("active");
      this.openFridgeModal();
    } else if (tab === "cart") {
      const el = document.getElementById("tabCart");
      if (el) el.classList.add("active");
      ShareService.openCartChecklist();
    } else if (tab === "create") {
      const el = document.getElementById("tabCreate");
      if (el) el.classList.add("active");
      this.openCreateRecipeModal();
    }
  },

  // 监听丝滑无限滚动 (防抖加速，确保60帧不掉帧)
  setupInfiniteScroll() {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollBottom = window.innerHeight + window.scrollY;
          const totalHeight = document.documentElement.scrollHeight;
          if (scrollBottom >= totalHeight - 700) {
            this.loadNextPage();
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  },

  // 渲染分页卡片
  renderCards(filtered) {
    this.currentFilteredList = filtered;
    this.currentPage = 1;
    const grid = document.getElementById("recipeGrid");
    if (!grid) return;

    if (filtered.length === 0) {
      if (this.activeSubFilter === "favorite") {
        grid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
            <div style="font-size: 48px; margin-bottom: 8px;">❤️</div>
            <h3 style="font-size: 16px; color: var(--text-main); margin-bottom: 6px;">暂无收藏菜品</h3>
            <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">在浏览食谱时点击卡片右上角的 ❤️，即可把喜爱的美味永久保存在这里～</p>
            <button class="btn btn-primary" onclick="App.setCategory('all'); App.setSubFilter('all');">
              去发现精选美味
            </button>
          </div>
        `;
        return;
      }
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <div style="font-size: 48px; margin-bottom: 8px;">🍲</div>
          <h3 style="font-size: 16px; color: var(--text-main); margin-bottom: 6px;">没有找到符合的菜谱</h3>
          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">试试搜索其它食材，或亲自上传你的独门私房菜！</p>
          <button class="btn btn-primary" onclick="App.openCreateRecipeModal()">
            ✍️ 发布这道私房菜
          </button>
        </div>
      `;
      return;
    }

    const firstPage = filtered.slice(0, this.pageSize);
    grid.innerHTML = firstPage.map(recipe => this.createCardHTML(recipe)).join("");
    this.updatePaginationUI();
  },

  // 生成单张卡片 HTML (4:3 黄金构图，完整呈现整盘菜肴)
  createCardHTML(recipe) {
    const inCart = ShareService.isInCart(recipe.id);
    const isFav = this.isFavorite(recipe.id);
    const photo = recipe.photoUrl || recipe.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80";
    const score = recipe.score || "4.8";
    const cooked = recipe.cookedCount || 1280;
    const isBanquet = !!(recipe.isGrandBanquet || recipe.isGrandBanquets);

    return `
      <div class="recipe-card" onclick="App.openRecipeDetail('${recipe.id}')">
        <div class="card-img-wrap">
          <img class="card-img" src="${photo}" alt="${recipe.name}" loading="lazy" decoding="async" onerror="window.handleImageError(this, '${recipe.name}')">
          <div class="card-badges">
            <span class="tag-badge">${recipe.region}</span>
            ${isBanquet ? `<span class="tag-badge" style="background:rgba(201,136,46,0.88);">👑 国宴</span>` : ""}
            ${recipe.isSeafood ? `<span class="tag-badge" style="background:rgba(54,106,155,0.88);">🌊 鲜活水产</span>` : ""}
          </div>
          <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" data-id="${recipe.id}" onclick="event.stopPropagation(); App.toggleFavorite('${recipe.id}')" title="${isFav ? '取消收藏' : '收藏菜品'}">
            <span>${isFav ? '❤️' : '🤍'}</span>
          </button>
          <button class="card-quick-add ${inCart ? 'in-cart' : ''}" data-id="${recipe.id}" onclick="event.stopPropagation(); App.toggleCart('${recipe.id}')" title="加入今日菜单">
            ${inCart ? '✓' : '+'}
          </button>
        </div>
        <div class="card-body">
          <h3 class="card-title">${recipe.name}</h3>
          <p class="card-subtitle">${recipe.subtitle || ''}</p>
          <div class="card-meta-row">
            <span><span class="score">★ ${score}</span> · ${cooked}人做过</span>
            <span>⏱️ ${recipe.cookTimeMinutes || 15}分钟</span>
          </div>
        </div>
      </div>
    `;
  },

  // 加载下一页 (每次追加 12 道，极速渲染)
  loadNextPage() {
    if (this.isLoadingMore) return;
    const start = this.currentPage * this.pageSize;
    if (start >= this.currentFilteredList.length) return;

    this.isLoadingMore = true;
    const nextItems = this.currentFilteredList.slice(start, start + this.pageSize);
    this.currentPage++;

    const grid = document.getElementById("recipeGrid");
    if (grid) {
      const container = document.getElementById("loadMoreContainer");
      if (container) container.remove();

      const temp = document.createElement("div");
      temp.innerHTML = nextItems.map(recipe => this.createCardHTML(recipe)).join("");
      while (temp.firstChild) {
        grid.appendChild(temp.firstChild);
      }
    }
    this.updatePaginationUI();
    this.isLoadingMore = false;
  },

  // 底部加载状态指示条
  updatePaginationUI() {
    const grid = document.getElementById("recipeGrid");
    if (!grid) return;
    const existing = document.getElementById("loadMoreContainer");
    if (existing) existing.remove();

    const loaded = Math.min(this.currentPage * this.pageSize, this.currentFilteredList.length);
    const total = this.currentFilteredList.length;

    const div = document.createElement("div");
    div.id = "loadMoreContainer";
    div.className = "load-more-container";

    if (loaded < total) {
      div.innerHTML = `
        <button class="load-more-btn" onclick="App.loadNextPage()">
          <span>下滑加载更多 · 已呈现 ${loaded} / ${total} 道</span> ▾
        </button>
      `;
    } else {
      div.innerHTML = `
        <span style="letter-spacing: 0.05em; color: var(--text-muted);">✦ 已呈现全部 ${total} 道精选好味 ✦</span>
      `;
    }
    grid.appendChild(div);
  },

  toggleCart(recipeId) {
    const list = this.getAllRecipes();
    const target = list.find(r => r.id === recipeId);
    if (target) ShareService.toggleRecipe(target);
  },

  openRecipeDetail(recipeId, targetServings = null) {
    const list = this.getAllRecipes();
    const recipe = list.find(r => r.id === recipeId);
    if (!recipe) return;
    this.activeRecipeForDetail = recipe;
    const serv = targetServings || recipe.servings || 2;
    const multiplier = serv / (recipe.servings || 2);
    const perServingCal = Math.round(recipe.caloriePerServing || 280);
    const totalMealCal = Math.round(perServingCal * serv);
    const totalTime = (recipe.prepTimeMinutes || 10) + (recipe.cookTimeMinutes || 15);
    const calLevel = recipe.calorieLevel || 'balanced';
    const calTip = recipe.calorieBurnTip || '🟡 营养均衡 · 约合1.5碗米饭，元气满满';

    const modal = document.getElementById("detailModal");
    const body = document.getElementById("detailModalBody");
    if (!modal || !body) return;

    // 彻底解决滚动未复位问题：每次打开新菜谱前均强制复位至顶
    body.scrollTop = 0;
    modal.scrollTop = 0;
    const modalBox = modal.querySelector(".modal-box");
    if (modalBox) modalBox.scrollTop = 0;

    const photo = recipe.photoUrl || recipe.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80";

    body.innerHTML = `
      <img src="${photo}" alt="${recipe.name}" class="detail-banner-img" onerror="window.handleImageError(this, '${recipe.name}')">
      
      <div class="detail-hero">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
          <span style="font-size:12px; font-weight:700; color:var(--primary-red); background:var(--primary-red-light); padding:2px 8px; border-radius:4px;">${recipe.region} · ${recipe.cuisineCategory}</span>
          ${recipe.isGrandBanquet ? `<span style="font-size:12px; color:var(--accent-gold); font-weight:700;">👑 传世名席</span>` : ""}
          <span style="font-size:12px; color:var(--text-muted); margin-left:auto;">★ ${recipe.score || '4.9'} (${recipe.cookedCount || 1200}+ 人做过)</span>
        </div>
        <h2 class="detail-title">${recipe.name}</h2>
        <p class="detail-desc">${recipe.subtitle}</p>
      </div>

      <!-- 菜品关键参数与热量卡片 -->
      <div class="detail-meta-grid">
        <div class="detail-meta-item">
          <span class="meta-label">⏱️ 预估用时</span>
          <span class="meta-val">${totalTime} 分钟</span>
        </div>
        <div class="detail-meta-item">
          <span class="meta-label">🍳 烹饪难度</span>
          <span class="meta-val">${recipe.difficulty || '新手友好'}</span>
        </div>
        <div class="detail-meta-item">
          <span class="meta-label">🔥 单人热量</span>
          <span class="meta-val highlight-cal">约 ${perServingCal} kcal</span>
        </div>
        <div class="detail-meta-item">
          <span class="meta-label">🍲 本餐总热量</span>
          <span class="meta-val">约 ${totalMealCal} kcal</span>
        </div>
      </div>

      <!-- 热量暖心健康提示标 -->
      <div class="detail-calorie-tip-bar calorie-level-${calLevel}">
        <span>${calTip}</span>
      </div>

      <!-- 份量切换器 -->
      <div class="servings-controller">
        <span style="font-size:13px; font-weight:700; color:var(--text-main);">份量用量智能折算：</span>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-sm ${serv === 2 ? 'btn-primary' : 'btn-outline'}" onclick="App.openRecipeDetail('${recipe.id}', 2)">2人份</button>
          <button class="btn btn-sm ${serv === 4 ? 'btn-primary' : 'btn-outline'}" onclick="App.openRecipeDetail('${recipe.id}', 4)">4人份</button>
          <button class="btn btn-sm ${serv === 6 ? 'btn-primary' : 'btn-outline'}" onclick="App.openRecipeDetail('${recipe.id}', 6)">6人份</button>
        </div>
      </div>

      <!-- 食材清单 (主料与配菜细化) -->
      <div style="margin-bottom:24px;">
        <h3 style="font-size:15px; font-weight:800; margin-bottom:12px; color:var(--text-main);">🥬 所需用料 (按 ${serv} 人份精准计算)</h3>
        
        ${(() => {
          const mainIngs = recipe.ingredients.filter(i => i.type === 'main' || i.isCore === true);
          const displayMain = mainIngs.length > 0 ? mainIngs : recipe.ingredients.slice(0, 3);
          const secondaryIngs = recipe.ingredients.filter(i => i.type === 'secondary' || i.isCore === false);
          const displaySec = secondaryIngs.length > 0 ? secondaryIngs : (mainIngs.length === 0 ? recipe.ingredients.slice(3) : []);

          let ingHtml = `
            <div class="ing-section-title">🥩 核心主料：</div>
            <div class="ing-grid">
              ${displayMain.map(ing => {
                const scaled = typeof ing.amount === 'number' ? (Math.round((ing.amount * multiplier) * 10) / 10) : ing.amount;
                const unit = ing.unit || '';
                return `
                  <div class="ing-item">
                    <span class="ing-name">${ing.name}</span>
                    <span class="ing-amount">${scaled} ${unit}</span>
                  </div>
                `;
              }).join("")}
            </div>
          `;

          if (displaySec.length > 0) {
            ingHtml += `
              <div class="ing-section-title">🧄 提味配菜与辅料：</div>
              <div class="ing-grid">
                ${displaySec.map(ing => {
                  const scaled = typeof ing.amount === 'number' ? (Math.round((ing.amount * multiplier) * 10) / 10) : ing.amount;
                  const unit = ing.unit || '';
                  return `
                    <div class="ing-item">
                      <span class="ing-name">${ing.name}</span>
                      <span class="ing-amount">${scaled} ${unit}</span>
                    </div>
                  `;
                }).join("")}
              </div>
            `;
          }
          return ingHtml;
        })()}

        ${recipe.ingredients.some(i => i.substitutes) ? `
          <div class="substitute-box">
            💡 <strong>可替换食材平替方案</strong>：
            ${recipe.ingredients.filter(i => i.substitutes).map(i => `${i.name}可用【${i.substitutes.join("/")}】替代`).join("；")}
          </div>
        ` : ""}
      </div>

      <!-- 调料量勺 -->
      <div style="margin-bottom:24px;">
        <div class="ing-section-title">🧂 规范调味料配比：</div>
        <div class="ing-grid">
          ${(recipe.seasonings || []).map(sea => {
            let amountDisplay = "";
            if (typeof sea.baseAmount === 'number' && !isNaN(sea.baseAmount)) {
              const scaled = Math.round((sea.baseAmount * multiplier) * 10) / 10;
              amountDisplay = `约 ${scaled} ${sea.unit || ''}`.trim();
            } else if (sea.amountText) {
              amountDisplay = sea.amountText;
            } else if (sea.amount) {
              amountDisplay = sea.amount;
            } else {
              amountDisplay = "适量";
            }
            return `
              <div class="ing-item">
                <span class="ing-name">${sea.name}</span>
                <span class="ing-amount">${amountDisplay}</span>
              </div>
            `;
          }).join("")}
          ${(!recipe.seasonings || recipe.seasonings.length === 0) ? `
            <div style="color:var(--text-muted); font-size:12px; padding:6px 0;">以食材清单中调味料用量为准</div>
          ` : ""}
        </div>
      </div>

      <!-- 分步烹饪与避坑Tips -->
      <div style="margin-bottom:24px;">
        <h3 style="font-size:15px; font-weight:800; margin-bottom:10px;">🍳 保姆级分步做法 (防翻车Tips)</h3>
        <div class="steps-list">
          ${(recipe.steps || []).map((step, idx) => {
            const stepIndex = typeof step === 'object' ? (step.stepIndex || step.step || (idx + 1)) : (idx + 1);
            const title = typeof step === 'object' ? (step.title || `步骤 ${idx + 1}`) : `步骤 ${idx + 1}`;
            const instruction = typeof step === 'object' ? (step.instruction || step.desc || '') : step;
            const timerSeconds = typeof step === 'object' ? (step.timerSeconds || step.time || null) : null;
            const chefTip = typeof step === 'object' ? (step.chefTip || (recipe.chefTips && recipe.chefTips[idx]) || ((idx === recipe.steps.length - 1 && (recipe.proTips || recipe.tips)) ? (recipe.proTips || recipe.tips) : null)) : null;
            return `
            <div class="step-card">
              <div class="step-num">
                <span>步骤 ${stepIndex}：${title}</span>
                ${timerSeconds ? `<span style="font-size:11px; color:#3A86FF;">⏱️ 约需 ${Math.round(timerSeconds/60)} 分钟</span>` : ""}
              </div>
              <p class="step-text">${instruction}</p>
              ${chefTip ? `<div class="step-tip">⚠️ <strong>防翻车点</strong>：${chefTip}</div>` : ""}
            </div>
            `;
          }).join("")}
        </div>
      </div>

      <div style="display:flex; gap:10px; margin-top:20px; flex-wrap:wrap;">
        <button class="btn btn-primary" style="flex:1; padding:12px; font-weight:600;" onclick="App.startCookingMode('${recipe.id}')">
          👨‍🍳 启动大字烹饪台
        </button>
        <button class="btn btn-outline" style="padding:12px 16px; font-weight:600;" onclick="App.toggleFavorite('${recipe.id}'); this.innerHTML = App.isFavorite('${recipe.id}') ? '❤️ 已收藏' : '🤍 收藏菜品';">
          ${this.isFavorite(recipe.id) ? '❤️ 已收藏' : '🤍 收藏菜品'}
        </button>
        <button class="btn btn-outline" style="padding:12px 18px; font-weight:600;" onclick="ShareService.openSingleRecipeChecklist(App.activeRecipeForDetail)">
          🛒 微信采购单 · 好友领菜
        </button>
        <button class="btn btn-outline" style="padding:12px 16px; font-weight:500;" onclick="ShareService.toggleRecipe(App.activeRecipeForDetail); this.innerHTML = ShareService.isInCart('${recipe.id}') ? '✓ 已加入菜单' : '+ 拼入多菜';">
          ${ShareService.isInCart(recipe.id) ? '✓ 已加入菜单' : '+ 拼入多菜'}
        </button>
      </div>
    `;

    modal.classList.add("active");
    body.scrollTop = 0;
    if (modalBox) modalBox.scrollTop = 0;
  },

  // 烹饪工作台
  startCookingMode(recipeId) {
    const list = this.getAllRecipes();
    const recipe = list.find(r => r.id === recipeId);
    if (!recipe) return;
    this.activeRecipeForCooking = recipe;
    this.cookingCurrentStep = 0;

    const overlay = document.getElementById("cookingModeOverlay");
    if (overlay) {
      overlay.classList.add("active");
      this.renderCookingStep();
    }
  },

  closeCookingMode() {
    const overlay = document.getElementById("cookingModeOverlay");
    if (overlay) overlay.classList.remove("active");
  },

  renderCookingStep() {
    const recipe = this.activeRecipeForCooking;
    if (!recipe) return;
    const step = recipe.steps[this.cookingCurrentStep];
    const total = recipe.steps.length;

    document.getElementById("cookHeaderTitle").textContent = recipe.name;
    document.getElementById("cookStepIndicator").textContent = `第 ${this.cookingCurrentStep + 1} 步 / 共 ${total} 步`;
    document.getElementById("cookStepTitle").textContent = step.title || `步骤 ${this.cookingCurrentStep + 1}`;
    document.getElementById("cookStepText").textContent = step.instruction || step.detail || step.desc || '';

    const bar = document.getElementById("cookProgressBar");
    if (bar) {
      const pct = Math.round(((this.cookingCurrentStep + 1) / total) * 100);
      bar.style.width = pct + "%";
    }

    const tipBox = document.getElementById("cookTipBox");
    const chefTip = step.chefTip || (recipe.chefTips && recipe.chefTips[this.cookingCurrentStep]) || (this.cookingCurrentStep === recipe.steps.length - 1 ? (recipe.proTips || recipe.tips) : null);
    if (chefTip) {
      tipBox.style.display = "block";
      tipBox.innerHTML = `⚠️ <strong>大厨防翻车诀窍</strong>：${chefTip}`;
    } else {
      tipBox.style.display = "none";
    }
  },

  prevCookingStep() {
    if (this.cookingCurrentStep > 0) {
      this.cookingCurrentStep--;
      this.renderCookingStep();
    }
  },

  nextCookingStep() {
    if (this.cookingCurrentStep < this.activeRecipeForCooking.steps.length - 1) {
      this.cookingCurrentStep++;
      this.renderCookingStep();
    } else {
      this.playDingSound();
      alert("🎉 恭喜！这道美味佳肴已经制作完成，趁热开饭享用吧！");
      this.closeCookingMode();
    }
  },

  // ==================== 冰箱清库存·自由输入与即时匹配 ====================
  openFridgeModal() {
    const modal = document.getElementById("fridgeModal");
    const tagsContainer = document.getElementById("fridgeTagsContainer");
    if (!modal || !tagsContainer) return;

    const defaultTags = [
      "虾", "五花肉", "牛腩", "鸡胸肉", "鸡蛋", "西红柿", "土豆", "豆腐", "青椒",
      "梭子蟹", "生蚝", "酸笋", "白凉粉", "黄瓜", "排骨", "牛肉", "大葱", "白菜"
    ];

    tagsContainer.innerHTML = defaultTags.map(name => {
      const isSelected = this.selectedFridgeIngredients.has(name);
      return `
        <button class="fridge-chip ${isSelected ? 'selected' : ''}" onclick="App.toggleFridgeTag('${name}', this)">
          ${isSelected ? '✓ ' : '+ '}${name}
        </button>
      `;
    }).join("");

    this.calcFridgeMatches();
    modal.classList.add("active");
  },

  clearFridgeIngredients() {
    this.selectedFridgeIngredients.clear();
    document.querySelectorAll(".fridge-chip").forEach(chip => {
      chip.classList.remove("selected");
      chip.textContent = chip.textContent.replace('✓ ', '+ ');
    });
    this.calcFridgeMatches();
  },

  // 用户在输入框手动添加任意未知食材
  addFridgeInputIngredient() {
    const input = document.getElementById("fridgeCustomInput");
    if (!input || !input.value.trim()) return;
    const name = input.value.trim();

    this.selectedFridgeIngredients.add(name);
    input.value = "";

    // 添加到界面标签中并置顶
    const tagsContainer = document.getElementById("fridgeTagsContainer");
    if (tagsContainer) {
      const btn = document.createElement("button");
      btn.className = "fridge-chip selected";
      btn.textContent = `✓ ${name}`;
      btn.onclick = () => App.toggleFridgeTag(name, btn);
      tagsContainer.prepend(btn);
    }

    this.calcFridgeMatches();
  },

  toggleFridgeTag(name, el) {
    if (this.selectedFridgeIngredients.has(name)) {
      this.selectedFridgeIngredients.delete(name);
      el.classList.remove("selected");
      el.textContent = `+ ${name}`;
    } else {
      this.selectedFridgeIngredients.add(name);
      el.classList.add("selected");
      el.textContent = `✓ ${name}`;
    }
    this.calcFridgeMatches();
  },

  calcFridgeMatches() {
    const resultsContainer = document.getElementById("fridgeResultsContainer");
    if (!resultsContainer) return;

    if (this.selectedFridgeIngredients.size === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align:center; padding:20px; color:var(--text-muted); font-size:13px;">
          💡 点击上方食材（如 <strong>虾、五花肉、鸡蛋</strong>）或在输入框输入食材，系统将秒出对应菜谱！
        </div>
      `;
      return;
    }

    const recipes = this.getAllRecipes();
    const selectedArr = Array.from(this.selectedFridgeIngredients);

    const matches = [];
    recipes.forEach(r => {
      // 聚合菜名、所有食材名称、配料标签
      const allText = (
        r.name + " " +
        (r.subtitle || "") + " " +
        (r.pantryChecklistTags ? r.pantryChecklistTags.join(" ") : "") + " " +
        (r.ingredients ? r.ingredients.map(i => i.name).join(" ") : "")
      ).toLowerCase();

      // 核心升级：支持中华食材同义词/各地俗称智能扩展 (如输入青瓜自动匹配黄瓜，输入洋芋匹配土豆)
      const synMap = window.INGREDIENT_SYNONYMS || {};
      const matched = selectedArr.filter(sel => {
        const cleanSel = sel.trim().toLowerCase();
        const aliases = synMap[cleanSel] || [cleanSel];
        return aliases.some(alias => allText.includes(alias.toLowerCase()));
      });

      if (matched.length > 0) {
        matches.push({
          recipe: r,
          matchedIngredients: matched,
          score: matched.length
        });
      }
    });

    matches.sort((a, b) => b.score - a.score);

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding:16px; text-align:center; color:var(--text-muted); font-size:13px;">
          暂未直接匹配到包含【${selectedArr.join("、")}】的菜品，可尝试在上方输入框添加更多辅料！
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span style="font-size:12px; color:var(--text-secondary);">
          已选：<strong>${selectedArr.join("、")}</strong>，共匹配出 <strong>${matches.length}</strong> 道菜：
        </span>
        <button class="btn btn-ghost btn-sm" style="color:var(--primary-red);" onclick="App.clearFridgeIngredients()">
          清空已选
        </button>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px; max-height:280px; overflow-y:auto; padding-right:4px;">
        ${matches.map(m => `
          <div style="padding:12px 14px; background:var(--bg-page); border-radius:var(--radius-sm); border:1px solid var(--border-color); display:flex; align-items:center; justify-content:space-between;">
            <div>
              <h4 style="font-size:14px; font-weight:700; color:var(--text-main); margin-bottom:2px;">
                ${m.recipe.name}
              </h4>
              <div style="font-size:12px; color:var(--primary-red); font-weight:600;">
                🟢 命中已有食材：${m.matchedIngredients.join("、")}
              </div>
            </div>
            <button class="btn btn-sm btn-primary" onclick="App.openRecipeDetail('${m.recipe.id}')">
              查看做法
            </button>
          </div>
        `).join("")}
      </div>
    `;
  },

  // UGC 私房菜上传
  openCreateRecipeModal() {
    document.getElementById("createRecipeModal").classList.add("active");
  },

  submitUgcRecipe(event) {
    event.preventDefault();
    const name = document.getElementById("ugcName").value.trim();
    const region = document.getElementById("ugcRegion").value.trim() || "民间私房";
    const subtitle = document.getElementById("ugcSubtitle").value.trim();
    const author = document.getElementById("ugcAuthor").value.trim() || "民间大厨";
    const ingText = document.getElementById("ugcIngredients").value.trim();
    const stepText = document.getElementById("ugcSteps").value.trim();

    if (!name || !ingText || !stepText) {
      alert("请填写菜名、食材用量及烹饪步骤！");
      return;
    }

    const parsedIngs = ingText.split(/[,，\n]/).filter(s => s.trim()).map(s => {
      const parts = s.trim().split(/[:：\s]+/);
      return {
        name: parts[0],
        amount: parseFloat(parts[1]) || 100,
        unit: (parts[1] || "").replace(/[0-9.]/g, '') || "克",
        type: "main"
      };
    });

    const parsedSteps = stepText.split("\n").filter(s => s.trim()).map((s, idx) => ({
      stepIndex: idx + 1,
      title: `步骤 ${idx + 1}`,
      instruction: s.trim()
    }));

    const newRecipe = {
      id: "ugc_" + Date.now(),
      name: name,
      subtitle: subtitle || "民间大厨私房手艺，地道好滋味",
      photoUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
      region: region,
      cuisineCategory: "私房菜",
      categoryType: "dish",
      flavor: ["地道家常"],
      cookingMethod: "家常",
      difficulty: "新手友好",
      prepTimeMinutes: 10,
      cookTimeMinutes: 15,
      servings: 2,
      score: "5.0",
      cookedCount: 1,
      season: ["spring", "summer", "autumn", "winter"],
      isSeafood: false,
      isDrinkingSnack: false,
      isFatLossFriendly: false,
      isGrandBanquet: false,
      isUGC: true,
      authorName: `@${author}`,
      ingredients: parsedIngs,
      seasonings: [
        { name: "食用油与基础调味料", amountText: "按喜好添加", baseAmount: 1, unit: "份", isPantryStaple: true }
      ],
      steps: parsedSteps,
      pantryChecklistTags: parsedIngs.map(i => i.name)
    };

    try {
      const stored = localStorage.getItem("GUDU_UGC_RECIPES");
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(newRecipe);
      localStorage.setItem("GUDU_UGC_RECIPES", JSON.stringify(list));
    } catch(e) {}

    document.getElementById("createRecipeModal").classList.remove("active");
    alert("🎉 恭喜！你的私房菜谱发布成功，已成功进入菜谱库！");
    this.renderRecipeList();
  },

  openInstallModal() {
    document.getElementById("installModal").classList.add("active");
  },

  initServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
      });
    }
  }
};

// ==================== 🎲 今天吃什么 · 智能合菜/组餐引擎 ====================
window.MealPlanner = {
  currentSpec: '3_1',
  currentDishes: [],

  openModal() {
    const modal = document.getElementById('mealPlannerModal');
    if (!modal) return;
    modal.classList.add('active');
    if (this.currentDishes.length === 0) {
      this.generate(true);
    }
  },

  setSpec(spec) {
    this.currentSpec = spec;
    document.querySelectorAll('#mealSpecSelector .spec-pill').forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-spec') === spec);
    });
    this.generate(true);
  },

  generate(forceNew = true) {
    const all = App.getAllRecipes();
    if (!all || all.length === 0) return;

    const preferSeason = document.getElementById('preferSeasonCheck')?.checked ?? true;
    const flavor = document.getElementById('mealFlavorSelect')?.value || 'all';

    // 候选池过滤
    let candidatePool = all;
    if (flavor === 'homestyle') {
      candidatePool = all.filter(r => !r.flavor?.some(f => f.includes('辣')) && !r.name.includes('辣'));
    } else if (flavor === 'spicy') {
      candidatePool = all.filter(r => r.flavor?.some(f => f.includes('辣')) || r.name.match(/辣|麻|泡椒|水煮|剁椒/));
    } else if (flavor === 'cantonese') {
      candidatePool = all.filter(r => r.region === '广东' || r.region === '香港' || r.cuisineCategory.includes('粤'));
    } else if (flavor === 'intl') {
      candidatePool = all.filter(r => r.region === '泰国' || r.region === '日本' || r.region === '欧美' || r.region === '韩国');
    }
    if (candidatePool.length < 10) candidatePool = all; // 保证池子充足

    // 分类池
    const meatPool = candidatePool.filter(r => r.categoryType === 'dish' && (r.name.match(/肉|排骨|牛|羊|鸡|鸭|猪/) || r.flavor?.some(f => f.includes('肉'))));
    const seafoodPool = candidatePool.filter(r => r.categoryType === 'seafood');
    const veggiePool = candidatePool.filter(r => r.name.match(/藕|土豆|茄子|青菜|包菜|豆角|菜心|西红柿炒鸡蛋|黄瓜|时蔬|油麦菜|西兰花|豆腐/) && !r.name.match(/五花肉|排骨|牛|羊|鸭|鸡|汤|羹|煲/));
    const soupPool = candidatePool.filter(r => r.categoryType === 'soup' || r.name.includes('汤'));

    const getRandom = (arr, seasonFirst = preferSeason) => {
      if (!arr || arr.length === 0) return all[Math.floor(Math.random() * all.length)];
      if (seasonFirst) {
        const seasonal = arr.filter(r => r.season && r.season.includes(App.activeSeason));
        if (seasonal.length > 0 && Math.random() < 0.75) {
          return seasonal[Math.floor(Math.random() * seasonal.length)];
        }
      }
      return arr[Math.floor(Math.random() * arr.length)];
    };

    let dishes = [];
    if (this.currentSpec === '3_1') {
      // 三菜一汤：1当家大荤 + 1时鲜海鲜/精选肉禽 + 1清爽时蔬 + 1靓汤
      dishes = [
        { role: '当家硬菜', recipe: getRandom(meatPool) },
        { role: '时鲜美味', recipe: getRandom(seafoodPool) },
        { role: '清爽时蔬', recipe: getRandom(veggiePool) },
        { role: '滋补靓汤', recipe: getRandom(soupPool) }
      ];
    } else if (this.currentSpec === '4_1') {
      // 四菜一汤：2当家硬菜 + 1时鲜海鲜 + 1清爽时蔬 + 1砂锅靓汤
      const meat1 = getRandom(meatPool);
      let meat2 = getRandom(meatPool);
      while (meat2.id === meat1.id && meatPool.length > 1) {
        meat2 = getRandom(meatPool);
      }
      dishes = [
        { role: '当家主菜', recipe: meat1 },
        { role: '经典荤菜', recipe: meat2 },
        { role: '时鲜水产', recipe: getRandom(seafoodPool) },
        { role: '清甜绿叶', recipe: getRandom(veggiePool) },
        { role: '砂锅老汤', recipe: getRandom(soupPool) }
      ];
    } else if (this.currentSpec === '2_1') {
      // 两菜一汤：1荤菜 + 1素菜 + 1清汤
      dishes = [
        { role: '快手荤菜', recipe: getRandom(meatPool) },
        { role: '清脆素菜', recipe: getRandom(veggiePool) },
        { role: '暖胃清汤', recipe: getRandom(soupPool) }
      ];
    } else if (this.currentSpec === 'fatloss') {
      // 减脂轻食：高蛋白 + 刮油汤 + 清甜蔬菜
      const fatlossAll = all.filter(r => r.isFatLossFriendly);
      const fatMeat = fatlossAll.filter(r => r.name.match(/鸡胸|虾|牛肉|鱼/));
      const fatSoup = fatlossAll.filter(r => r.categoryType === 'soup' || r.name.includes('汤'));
      dishes = [
        { role: '高蛋白低脂', recipe: getRandom(fatMeat.length > 0 ? fatMeat : seafoodPool) },
        { role: '清脆刮油菜', recipe: getRandom(veggiePool) },
        { role: '轻卡温补汤', recipe: getRandom(fatSoup.length > 0 ? fatSoup : soupPool) }
      ];
    }

    this.currentDishes = dishes;
    this.render();
  },

  swapDish(idx) {
    const dishObj = this.currentDishes[idx];
    if (!dishObj) return;
    const all = App.getAllRecipes();
    const curRole = dishObj.role;

    let pool = all.filter(r => r.categoryType === 'dish');
    if (curRole.includes('海鲜') || curRole.includes('水产') || curRole.includes('时鲜')) {
      pool = all.filter(r => r.categoryType === 'seafood');
    } else if (curRole.includes('素') || curRole.includes('时蔬') || curRole.includes('绿叶')) {
      pool = all.filter(r => r.name.match(/藕|土豆|茄子|青菜|包菜|豆角|菜心|西红柿炒鸡蛋|黄瓜|时蔬|菌|菇|豆腐/));
    } else if (curRole.includes('汤')) {
      pool = all.filter(r => r.categoryType === 'soup' || r.name.includes('汤'));
    }

    // 挑选与当前不同的菜
    const filtered = pool.filter(r => r.id !== dishObj.recipe.id && !this.currentDishes.some(d => d.recipe.id === r.id));
    const newRecipe = (filtered.length > 0 ? filtered : pool)[Math.floor(Math.random() * (filtered.length || pool.length))];
    
    this.currentDishes[idx].recipe = newRecipe;
    this.render();
    ShareService._showToast(`已更换为【${newRecipe.name}】`);
  },

  render() {
    const grid = document.getElementById('mealDishesGrid');
    if (!grid) return;

    grid.innerHTML = this.currentDishes.map((item, idx) => {
      const r = item.recipe;
      const photo = r.image || r.photoUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80";
      return `
        <div class="meal-dish-row" onclick="App.openRecipeDetail('${r.id}')" style="cursor:pointer;">
          <img src="${photo}" alt="${r.name}" class="meal-dish-thumb" onerror="window.handleImageError(this, '${r.name}')">
          <div class="meal-dish-meta">
            <div class="meal-dish-name">${r.name}</div>
            <div class="meal-dish-tags">
              <span class="meal-role-badge">${item.role}</span>
              <span style="color:var(--text-muted);">${r.region} · ${r.cuisineCategory}</span>
              <span style="color:var(--text-muted); margin-left:auto;">⏱️ ${r.cookTimeMinutes || 15}分钟</span>
            </div>
          </div>
          <button class="meal-dish-swap-btn" onclick="event.stopPropagation(); MealPlanner.swapDish(${idx})" title="换一道同类型菜品">
            🔄 换这道
          </button>
        </div>
      `;
    }).join('');
  },

  exportToCart() {
    if (!this.currentDishes || this.currentDishes.length === 0) return;
    const recipes = this.currentDishes.map(d => d.recipe);
    ShareService.menuCart = recipes;
    ShareService.saveToStorage();
    ShareService.updateCartUI();
    
    // 关闭配餐弹窗，打开买菜清单
    document.getElementById('mealPlannerModal')?.classList.remove('active');
    ShareService.openCartChecklist();
    ShareService._showToast(`已将整桌 ${recipes.length} 道菜导入买菜清单，食材已合并！`);
  }
};

window.App = App;
window.addEventListener("DOMContentLoaded", () => App.init());
