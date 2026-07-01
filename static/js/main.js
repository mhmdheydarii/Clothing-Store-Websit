/* =========================================================
   پیراهن‌کده — main.js (shared across all pages)
   ========================================================= */
(function(){
  "use strict";

  /* ---------- Data: Products ---------- */
  const PRODUCTS = [
    {id:1,name:"پیراهن کلاسیک سفید",cat:"classic",catLabel:"کلاسیک",price:1290000,badge:"پرفروش",rating:4.8,reviews:34,
      images:["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop"],
      colors:["#f4efe5","#28433d","#21201d"],
      desc:"پیراهن کلاسیک سفید با یقهٔ فرانسوی و پارچهٔ نخ مصری. مناسب جلسات رسمی و مراسم.",
      care:"شست‌وشو با آب سرد، خشک‌کردن در سایه، اتو با دمای متوسط."},
    {id:2,name:"پیراهن کتان خاکی",cat:"linen",catLabel:"کتان",price:1450000,badge:null,rating:4.6,reviews:21,
      images:["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"],
      colors:["#c9a463","#28433d","#a5503b"],
      desc:"کتان طبیعی و نفس‌کش با رنگ خاکی ملایم. انتخابی ایده‌آل برای روزهای گرم.",
      care:"شست‌وشوی دستی یا ماشینی ملایم، عدم استفاده از سفیدکننده."},
    {id:3,name:"پیراهن راه‌راه آبی",cat:"stripe",catLabel:"راه‌راه",price:1190000,badge:"تازه",rating:4.5,reviews:12,
      images:["https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800&auto=format&fit=crop"],
      colors:["#28433d","#21201d"],
      desc:"راه‌راه آبی و سفید روی پارچهٔ پوپلین سبک، مناسب استفاده روزمره و اداری.",
      care:"شست‌وشو با آب سرد و اتو ملایم."},
    {id:4,name:"پیراهن اسپرت طوسی",cat:"casual",catLabel:"اسپرت",price:990000,badge:null,rating:4.3,reviews:18,
      images:["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"],
      colors:["#7a766d","#21201d","#a5503b"],
      desc:"برش راحت و پارچهٔ نرم برای استایل اسپرت روزانه. مناسب با شلوار جین.",
      care:"شست‌وشوی ماشینی ملایم با آب ولرم."},
    {id:5,name:"پیراهن کلاسیک سرمه‌ای",cat:"classic",catLabel:"کلاسیک",price:1390000,badge:null,rating:4.7,reviews:27,
      images:["https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop"],
      colors:["#1b2e2a","#21201d"],
      desc:"سرمه‌ای پررنگ با یقهٔ ایتالیایی، مناسب پوشیدن با کت‌وشلوار.",
      care:"شست‌وشوی خشک پیشنهاد می‌شود."},
    {id:6,name:"پیراهن کتان کرم",cat:"linen",catLabel:"کتان",price:1350000,badge:"تازه",rating:4.4,reviews:9,
      images:["https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=800&auto=format&fit=crop"],
      colors:["#f4efe5","#c9a463"],
      desc:"کرم روشن، سبک‌وزن و خوش‌افت؛ همراه خوبی برای سفرهای تابستانی.",
      care:"شست‌وشو با دست، اجتناب از خشک‌کن."},
    {id:7,name:"پیراهن راه‌راه قهوه‌ای",cat:"stripe",catLabel:"راه‌راه",price:1240000,badge:null,rating:4.2,reviews:15,
      images:["https://images.unsplash.com/photo-1602810318660-d2c46b750f88?q=80&w=800&auto=format&fit=crop"],
      colors:["#a5503b","#21201d"],
      desc:"راه‌راه قهوه‌ای روی زمینهٔ بژ، ترکیبی گرم و امروزی برای پاییز.",
      care:"شست‌وشو با آب سرد."},
    {id:8,name:"پیراهن اسپرت مشکی",cat:"casual",catLabel:"اسپرت",price:1050000,badge:"پرفروش",rating:4.6,reviews:30,
      images:["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"],
      colors:["#21201d","#28433d"],
      desc:"مشکی مات با دکمه‌های هم‌رنگ، انتخابی ساده و شیک برای هر روز.",
      care:"شست‌وشوی وارونه برای حفظ رنگ."}
  ];

  /* ---------- Data: Blog ---------- */
  const BLOG_POSTS = [
    {slug:"size-guide", tag:"راهنمای سایز", title:"چطور سایز پیراهن خودتان را دقیق پیدا کنید",
     excerpt:"با چند اندازه‌گیری ساده در خانه، سایز دقیق پیراهن خود را پیدا کنید و دیگر هیچ‌وقت پیراهن نامناسب نخرید.",
     cover:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=900&auto=format&fit=crop",
     date:"۱۴۰۴/۰۲/۱۲",
     body:`
        <p>یکی از بزرگ‌ترین چالش‌های خرید آنلاین پیراهن، نداشتنِ امکان پرو کردن است. خوشبختانه با چند اندازه‌گیری ساده می‌توانید با اطمینان کامل، سایز درست را انتخاب کنید.</p>
        <h2>۱. اندازه‌گیری دور یقه</h2>
        <p>متر را دور گردن، در پایین‌ترین نقطهٔ یقهٔ ثابت قرار دهید و کمی شُل بگیرید تا یک انگشت بین متر و گردن جا شود.</p>
        <h2>۲. اندازه‌گیری دور سینه</h2>
        <p>متر را از پُرترین قسمت سینه، زیر بازو عبور دهید و کاملاً افقی نگه دارید.</p>
        <h2>۳. اندازه‌گیری طول آستین</h2>
        <p>از وسط پشت گردن تا روی استخوان مچ دست را اندازه بگیرید، در حالی‌که بازو کمی خم است.</p>
        <h2>جدول راهنمای سایز</h2>
        <table><tr><th>سایز</th><th>دور یقه (cm)</th><th>دور سینه (cm)</th></tr>
        <tr><td>S</td><td>۳۸-۳۹</td><td>۹۲-۹۶</td></tr>
        <tr><td>M</td><td>۴۰-۴۱</td><td>۹۷-۱۰۱</td></tr>
        <tr><td>L</td><td>۴۲-۴۳</td><td>۱۰۲-۱۰۶</td></tr>
        <tr><td>XL</td><td>۴۴-۴۵</td><td>۱۰۷-۱۱۲</td></tr></table>
        <p>اگر بین دو سایز مانده‌اید، برای پیراهن‌های کلاسیک سایز کوچک‌تر و برای مدل‌های اسپرت سایز بزرگ‌تر را انتخاب کنید.</p>`},
    {slug:"choose-right-shirt", tag:"راهنمای خرید", title:"چه پیراهنی برای فرم بدن شما مناسب است؟",
     excerpt:"از یقه تا برش؛ یاد بگیرید چطور بر اساس فرم بدن، پیراهنی انتخاب کنید که بهترین حالت را به شما بدهد.",
     cover:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=900&auto=format&fit=crop",
     date:"۱۴۰۴/۰۱/۲۸",
     body:`
        <p>انتخاب پیراهن درست فقط به رنگ و طرح ربط ندارد؛ برش و یقه هم نقش زیادی در ظاهر نهایی دارند.</p>
        <h2>اگر هیکل لاغر دارید</h2>
        <p>پیراهن‌های با برش راحت (Regular) و راه‌راه‌های افقی ظاهر پُرتر و متوازن‌تری می‌سازند.</p>
        <h2>اگر هیکل پُر دارید</h2>
        <p>برش Slim با خطوط عمودی یا رنگ یک‌دست، خطوط بدن را کشیده‌تر نشان می‌دهد.</p>
        <h2>اگر گردن کوتاه دارید</h2>
        <p>یقه‌های باز و کوتاه‌تر را انتخاب کنید تا گردن بلندتر به نظر برسد.</p>
        <ul>
          <li>برای جلسات رسمی: یقهٔ فرانسوی، رنگ‌های خنثی</li>
          <li>برای روزمره: یقهٔ باتن‌دار، رنگ‌های متنوع</li>
          <li>برای تابستان: کتان یا پوپلین سبک</li>
        </ul>`},
    {slug:"fabric-care", tag:"نگهداری", title:"راز ماندگاری پیراهن خوب، در نگهداری درست است",
     excerpt:"چند نکتهٔ ساده برای شست‌وشو، خشک‌کردن و اتوی پیراهن‌های پارچه‌ای که عمر آن‌ها را چند برابر می‌کند.",
     cover:"https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=900&auto=format&fit=crop",
     date:"۱۴۰۴/۰۱/۱۰",
     body:`
        <p>بهترین پارچه هم بدون نگهداری درست، زود از بین می‌رود. این نکات را رعایت کنید:</p>
        <h2>شست‌وشو</h2>
        <p>پیراهن‌های رنگی را با آب سرد و جدا از لباس‌های سفید بشویید.</p>
        <h2>خشک‌کردن</h2>
        <p>از آویزان کردن در سایه به‌جای خشک‌کن استفاده کنید تا الیاف پارچه آسیب نبیند.</p>
        <h2>اتو</h2>
        <p>برای کتان و پوپلین، اتو را روی دمای متوسط و در حالت کمی مرطوب پارچه انجام دهید.</p>`}
  ];

  const fmt = n => n.toLocaleString("fa-IR");
  window.PK = { PRODUCTS, BLOG_POSTS, fmt };

  /* ---------- Storage helpers ---------- */
  const LS = {
    get(key, def){ try{ const v = JSON.parse(localStorage.getItem(key)); return v===null?def:v; }catch(e){ return def; } },
    set(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
  };

  /* ---------- Cart ---------- */
  function getCart(){ return LS.get("pk_cart", []); }
  function setCart(c){ LS.set("pk_cart", c); updateCartBadge(); }
  function addToCart(id, size, qty){
    qty = qty||1; size = size||"M";
    const cart = getCart();
    const ex = cart.find(c=>c.id===id && c.size===size);
    if(ex) ex.qty += qty; else cart.push({id,size,qty});
    setCart(cart);
  }
  function updateCartBadge(){
    const el = document.getElementById("cart-count");
    if(!el) return;
    const cart = getCart();
    el.textContent = cart.reduce((s,c)=>s+c.qty,0);
  }
  window.PK.addToCart = addToCart;
  window.PK.getCart = getCart;
  window.PK.setCart = setCart;

  /* ---------- Auth ---------- */
  function getUser(){ return LS.get("pk_user", null); }
  function setUser(u){ LS.set("pk_user", u); }
  function logout(){ localStorage.removeItem("pk_user"); location.href="login.html"; }
  window.PK.getUser = getUser; window.PK.setUser = setUser; window.PK.logout = logout;

  /* ---------- Orders ---------- */
  function getOrders(){ return LS.get("pk_orders", []); }
  function saveOrder(order){
    const orders = getOrders();
    orders.unshift(order);
    LS.set("pk_orders", orders);
  }
  window.PK.getOrders = getOrders; window.PK.saveOrder = saveOrder;

  /* ---------- Toast ---------- */
  function showToast(msg){
    const toastEl = document.getElementById("toast");
    if(!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(window.__pkToastTimer);
    window.__pkToastTimer = setTimeout(()=>toastEl.classList.remove("show"), 2400);
  }
  window.PK.toast = showToast;

  /* =========================================================
     Global UI: header, search, mobile nav, cart drawer, modal
     ========================================================= */
  function initChrome(){
    updateCartBadge();

    const searchBar = document.getElementById("search-bar");
    const searchToggle = document.getElementById("search-toggle");
    if(searchToggle){
      searchToggle.addEventListener("click", ()=>{
        searchBar.classList.toggle("open");
        if(searchBar.classList.contains("open")) document.getElementById("search-input").focus();
      });
      document.getElementById("search-close").addEventListener("click", ()=>searchBar.classList.remove("open"));
      document.getElementById("search-input").addEventListener("keydown", e=>{
        if(e.key==="Enter"){
          const q = e.target.value.trim();
          if(q) location.href = "products.html?q=" + encodeURIComponent(q);
        }
      });
    }

    const hamburger = document.getElementById("hamburger");
    const mainNav = document.getElementById("main-nav");
    if(hamburger){
      hamburger.addEventListener("click", ()=>{
        hamburger.classList.toggle("open");
        mainNav.classList.toggle("open");
      });
    }

    const accountLink = document.getElementById("account-link");
    if(accountLink){
      accountLink.addEventListener("click", e=>{
        e.preventDefault();
        location.href = getUser() ? "account.html" : "login.html";
      });
    }

    initModal();
  }

  /* ---------- Quick-view modal ---------- */
  let modalSize = "M";
  function openModal(id){
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p) return;
    const modalEl = document.getElementById("product-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    if(!modalEl) return;
    modalSize = "M";
    modalEl.innerHTML = `
      <button class="modal-close" id="modal-close-btn" aria-label="بستن">✕</button>
      <div class="modal-img"><img src="${p.images[0]}" alt="${p.name}"></div>
      <div class="modal-body">
        <span class="product-cat">${p.catLabel}</span>
        <h3>${p.name}</h3>
        <div class="product-price">${fmt(p.price)}<span>تومان</span></div>
        <p class="desc">${p.desc}</p>
        <div class="size-label">انتخاب سایز</div>
        <div class="size-options" id="size-options">
          ${["S","M","L","XL"].map(s=>`<button data-size="${s}" class="${s==="M"?"active":""}">${s}</button>`).join("")}
        </div>
        <a href="product.html?id=${p.id}" style="font-size:12.5px;color:var(--clay);font-weight:600;margin-bottom:14px;display:inline-block;">مشاهدهٔ صفحهٔ کامل محصول ←</a>
        <button class="btn btn-primary modal-add" data-add="${p.id}">افزودن به سبد خرید</button>
      </div>`;
    modalEl.querySelector("#size-options").addEventListener("click", e=>{
      const btn = e.target.closest("button"); if(!btn) return;
      modalEl.querySelectorAll("#size-options button").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active"); modalSize = btn.dataset.size;
    });
    modalEl.querySelector("[data-add]").addEventListener("click", ()=>{
      addToCart(p.id, modalSize, 1);
      closeModal();
      showToast("به سبد خرید اضافه شد ✓");
    });
    modalEl.querySelector("#modal-close-btn").addEventListener("click", closeModal);
    modalEl.classList.add("open"); modalOverlay.classList.add("open");
  }
  function closeModal(){
    const modalEl = document.getElementById("product-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    if(!modalEl) return;
    modalEl.classList.remove("open"); modalOverlay.classList.remove("open");
  }
  function initModal(){
    const modalOverlay = document.getElementById("modal-overlay");
    if(modalOverlay) modalOverlay.addEventListener("click", closeModal);
    document.body.addEventListener("click", e=>{
      const quick = e.target.closest("[data-quick]");
      if(quick){ openModal(Number(quick.dataset.quick)); }
    });
  }
  window.PK.openModal = openModal;

  /* =========================================================
     Page: index.html
     ========================================================= */
  function renderFeatured(){
    const grid = document.getElementById("featured-grid");
    if(!grid) return;
    grid.innerHTML = PRODUCTS.slice(0,4).map(productCardHTML).join("");
  }
  function renderBlogTeaser(){
    const grid = document.getElementById("blog-teaser-grid");
    if(!grid) return;
    grid.innerHTML = BLOG_POSTS.slice(0,3).map(blogCardHTML).join("");
  }

  /* ---------- Reusable card builders ---------- */
  function productCardHTML(p){
    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-thumb">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
          <a href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${p.name}" loading="lazy"></a>
          <div class="quick-add"><button data-quick="${p.id}">مشاهدهٔ سریع</button></div>
        </div>
        <div class="product-info">
          <span class="product-cat">${p.catLabel}</span>
          <a href="product.html?id=${p.id}" style="color:inherit;"><h3 class="product-name">${p.name}</h3></a>
          <div class="product-bottom">
            <div class="product-price">${fmt(p.price)}<span>تومان</span></div>
            <div class="swatches">${p.colors.map(c=>`<span class="swatch" style="background:${c}"></span>`).join("")}</div>
          </div>
        </div>
      </article>`;
  }
  function blogCardHTML(b){
    return `
      <a class="blog-card" href="blog-post.html?slug=${b.slug}">
        <img src="${b.cover}" alt="${b.title}" loading="lazy">
        <div class="blog-card-body">
          <span class="blog-tag">${b.tag}</span>
          <h3>${b.title}</h3>
          <p>${b.excerpt}</p>
          <span class="blog-meta">${b.date}</span>
        </div>
      </a>`;
  }
  window.PK.productCardHTML = productCardHTML;
  window.PK.blogCardHTML = blogCardHTML;

  /* =========================================================
     Page: products.html
     ========================================================= */
  function initProductsPage(){
    const grid = document.getElementById("product-grid");
    if(!grid) return;
    let activeFilter = "all";
    let sortBy = "default";
    const params = new URLSearchParams(location.search);
    const q = (params.get("q")||"").trim().toLowerCase();

    const filterBar = document.getElementById("filter-bar");
    const sortSelect = document.getElementById("sort-select");
    const countEl = document.getElementById("result-count");

    function render(){
      let list = activeFilter==="all" ? [...PRODUCTS] : PRODUCTS.filter(p=>p.cat===activeFilter);
      if(q) list = list.filter(p=>p.name.toLowerCase().includes(q));
      if(sortBy==="price-asc") list.sort((a,b)=>a.price-b.price);
      if(sortBy==="price-desc") list.sort((a,b)=>b.price-a.price);
      if(sortBy==="rating") list.sort((a,b)=>b.rating-a.rating);
      grid.innerHTML = list.length ? list.map(productCardHTML).join("") :
        `<p style="grid-column:1/-1;text-align:center;color:#8a8275;padding:60px 0;">محصولی با این مشخصات پیدا نشد.</p>`;
      if(countEl) countEl.textContent = `${list.length} محصول`;
    }

    if(filterBar){
      filterBar.addEventListener("click", e=>{
        const chip = e.target.closest(".chip"); if(!chip) return;
        filterBar.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
        chip.classList.add("active"); activeFilter = chip.dataset.filter; render();
      });
    }
    if(sortSelect) sortSelect.addEventListener("change", e=>{ sortBy = e.target.value; render(); });
    render();
  }

  /* =========================================================
     Page: product.html (detail)
     ========================================================= */
  function initProductDetailPage(){
    const root = document.getElementById("product-detail-root");
    if(!root) return;
    const id = Number(new URLSearchParams(location.search).get("id")) || PRODUCTS[0].id;
    const p = PRODUCTS.find(x=>x.id===id) || PRODUCTS[0];
    let size = "M";

    document.title = p.name + " | پیراهن‌کده";
    root.innerHTML = `
      <div class="detail-grid">
        <div class="gallery">
          <div class="gallery-main"><img id="gallery-main-img" src="${p.images[0]}" alt="${p.name}"></div>
          <div class="gallery-thumbs">
            ${p.images.map((img,i)=>`<img src="${img}" class="${i===0?"active":""}" data-img="${img}">`).join("")}
          </div>
        </div>
        <div class="detail-info">
          <span class="product-cat">${p.catLabel}</span>
          <h1>${p.name}</h1>
          <div class="detail-rating"><span class="stars">★★★★★</span> ${p.rating} از ۵ · ${p.reviews} نظر</div>
          <div class="detail-price">${fmt(p.price)}<span> تومان</span></div>
          <p class="detail-desc">${p.desc}</p>

          <div class="size-row"><div class="size-label">انتخاب رنگ</div></div>
          <div class="color-options">
            ${p.colors.map((c,i)=>`<span class="swatch ${i===0?"active":""}" style="background:${c}" data-color="${c}"></span>`).join("")}
          </div>

          <div class="size-row">
            <div class="size-label">انتخاب سایز</div>
            <a href="blog-post.html?slug=size-guide" class="size-guide-link">راهنمای سایزبندی</a>
          </div>
          <div class="size-options" id="detail-size-options">
            ${["S","M","L","XL"].map(s=>`<button data-size="${s}" class="${s==="M"?"active":""}">${s}</button>`).join("")}
          </div>

          <div class="qty-add-row">
            <div class="qty-control big">
              <button id="d-dec">−</button><span id="d-qty" style="padding:0 14px;">۱</span><button id="d-inc">+</button>
            </div>
            <button class="btn btn-primary" id="d-add" style="flex:1;">افزودن به سبد خرید</button>
          </div>

          <div class="detail-perks">
            <div>✓ ارسال به سراسر ایران، حداکثر ۴۸ ساعت</div>
            <div>✓ هفت روز ضمانت بازگشت کالا</div>
            <div>✓ پرداخت در محل برای تهران</div>
          </div>
        </div>
      </div>

      <div class="tabs-bar">
        <button class="tab-btn active" data-tab="desc">توضیحات</button>
        <button class="tab-btn" data-tab="care">نگهداری</button>
        <button class="tab-btn" data-tab="size">جدول سایز</button>
      </div>
      <div class="tab-panel active" data-panel="desc"><p>${p.desc}</p></div>
      <div class="tab-panel" data-panel="care"><p>${p.care}</p></div>
      <div class="tab-panel" data-panel="size">
        <table class="size-table">
          <tr><th>سایز</th><th>دور یقه</th><th>دور سینه</th><th>طول آستین</th></tr>
          <tr><td>S</td><td>۳۸-۳۹</td><td>۹۲-۹۶</td><td>۶۲</td></tr>
          <tr><td>M</td><td>۴۰-۴۱</td><td>۹۷-۱۰۱</td><td>۶۴</td></tr>
          <tr><td>L</td><td>۴۲-۴۳</td><td>۱۰۲-۱۰۶</td><td>۶۶</td></tr>
          <tr><td>XL</td><td>۴۴-۴۵</td><td>۱۰۷-۱۱۲</td><td>۶۸</td></tr>
        </table>
      </div>

      <h2 class="related-heading" style="margin-top:70px;">محصولات مشابه</h2>
      <div class="product-grid" id="related-grid"></div>
    `;

    root.querySelectorAll("[data-img]").forEach(img=>{
      img.addEventListener("click", ()=>{
        document.getElementById("gallery-main-img").src = img.dataset.img;
        root.querySelectorAll("[data-img]").forEach(i=>i.classList.remove("active"));
        img.classList.add("active");
      });
    });
    root.querySelectorAll(".color-options .swatch").forEach(sw=>{
      sw.addEventListener("click", ()=>{
        root.querySelectorAll(".color-options .swatch").forEach(s=>s.classList.remove("active"));
        sw.classList.add("active");
      });
    });
    root.querySelector("#detail-size-options").addEventListener("click", e=>{
      const btn = e.target.closest("button"); if(!btn) return;
      root.querySelectorAll("#detail-size-options button").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active"); size = btn.dataset.size;
    });
    let qty = 1;
    const qtyEl = document.getElementById("d-qty");
    document.getElementById("d-inc").addEventListener("click", ()=>{ qty++; qtyEl.textContent = qty.toLocaleString("fa-IR"); });
    document.getElementById("d-dec").addEventListener("click", ()=>{ if(qty>1){qty--; qtyEl.textContent = qty.toLocaleString("fa-IR");} });
    document.getElementById("d-add").addEventListener("click", ()=>{
      addToCart(p.id, size, qty);
      showToast("به سبد خرید اضافه شد ✓");
    });
    root.querySelectorAll(".tab-btn").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        root.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));
        root.querySelectorAll(".tab-panel").forEach(pn=>pn.classList.remove("active"));
        btn.classList.add("active");
        root.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.add("active");
      });
    });
    const related = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4);
    document.getElementById("related-grid").innerHTML =
      (related.length?related:PRODUCTS.filter(x=>x.id!==p.id).slice(0,4)).map(productCardHTML).join("");
  }

  /* =========================================================
     Page: blog.html / blog-post.html
     ========================================================= */
  function initBlogPage(){
    const grid = document.getElementById("blog-grid");
    if(!grid) return;
    grid.innerHTML = BLOG_POSTS.map(blogCardHTML).join("");
  }
  function initBlogPostPage(){
    const root = document.getElementById("article-root");
    if(!root) return;
    const slug = new URLSearchParams(location.search).get("slug") || BLOG_POSTS[0].slug;
    const post = BLOG_POSTS.find(p=>p.slug===slug) || BLOG_POSTS[0];
    document.title = post.title + " | پیراهن‌کده";
    root.innerHTML = `
      <div class="article-head">
        <span class="blog-tag">${post.tag} · ${post.date}</span>
        <h1>${post.title}</h1>
      </div>
      <div class="article-cover"><img src="${post.cover}" alt="${post.title}"></div>
      <div class="article-body">${post.body}</div>
    `;
    const more = document.getElementById("more-articles");
    if(more) more.innerHTML = BLOG_POSTS.filter(p=>p.slug!==post.slug).slice(0,3).map(blogCardHTML).join("");
  }

  /* =========================================================
     Page: cart.html
     ========================================================= */
  function initCartPage(){
    const root = document.getElementById("cart-page-root");
    if(!root) return;
    function render(){
      const cart = getCart();
      if(cart.length===0){
        root.innerHTML = `<div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 6h2l2.2 11.1a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"/></svg>
          <p>سبد خرید شما خالی است</p>
          <a href="products.html" class="btn btn-dark" style="margin-top:18px;">مشاهدهٔ پیراهن‌ها</a>
        </div>`;
        return;
      }
      let total = 0;
      const rows = cart.map((c,idx)=>{
        const p = PRODUCTS.find(x=>x.id===c.id);
        const lineTotal = p.price*c.qty; total += lineTotal;
        return `
        <div class="cart-page-row">
          <img src="${p.images[0]}" alt="${p.name}">
          <div>
            <h4>${p.name}</h4>
            <p>سایز ${c.size} · ${fmt(p.price)} تومان</p>
            <div class="qty-control" style="margin-top:8px;">
              <button data-dec="${idx}">−</button><span>${c.qty}</span><button data-inc="${idx}">+</button>
            </div>
          </div>
          <div style="text-align:left;">
            <div style="font-weight:700;margin-bottom:10px;">${fmt(lineTotal)} تومان</div>
            <div class="cart-remove" data-remove="${idx}">حذف</div>
          </div>
        </div>`;
      }).join("");
      root.innerHTML = `
        <div class="cart-page-layout">
          <div class="cart-page-list">${rows}</div>
          <div class="summary-card">
            <h3>خلاصهٔ سفارش</h3>
            <div class="summary-row"><span>جمع کالاها</span><span>${fmt(total)} تومان</span></div>
            <div class="summary-row"><span>هزینهٔ ارسال</span><span>رایگان</span></div>
            <div class="promo-row"><input placeholder="کد تخفیف"><button class="btn btn-dark" style="padding:10px 16px;">اعمال</button></div>
            <div class="summary-row total"><span>جمع کل</span><span>${fmt(total)} تومان</span></div>
            <a href="checkout.html" class="btn btn-primary btn-block">ادامهٔ خرید</a>
          </div>
        </div>`;
      root.querySelectorAll("[data-inc]").forEach(b=>b.addEventListener("click", ()=>{ const c=getCart(); c[Number(b.dataset.inc)].qty++; setCart(c); render(); }));
      root.querySelectorAll("[data-dec]").forEach(b=>b.addEventListener("click", ()=>{
        const c=getCart(); const i=Number(b.dataset.dec); c[i].qty--; if(c[i].qty<=0)c.splice(i,1); setCart(c); render();
      }));
      root.querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click", ()=>{
        const c=getCart(); c.splice(Number(b.dataset.remove),1); setCart(c); render();
      }));
    }
    render();
  }

  /* =========================================================
     Page: checkout.html
     ========================================================= */
  function initCheckoutPage(){
    const form = document.getElementById("checkout-form");
    if(!form) return;
    const summaryEl = document.getElementById("checkout-summary");
    const cart = getCart();
    let total = 0;
    const rows = cart.map(c=>{
      const p = PRODUCTS.find(x=>x.id===c.id);
      total += p.price*c.qty;
      return `<div class="summary-row"><span>${p.name} × ${c.qty}</span><span>${fmt(p.price*c.qty)} تومان</span></div>`;
    }).join("");
    if(summaryEl){
      summaryEl.innerHTML = `
        <h3>خلاصهٔ سفارش</h3>
        ${rows || '<p style="color:#8a8275;font-size:13.5px;">سبد خرید خالی است</p>'}
        <div class="summary-row total"><span>جمع کل</span><span>${fmt(total)} تومان</span></div>
      `;
    }
    form.addEventListener("submit", e=>{
      e.preventDefault();
      if(cart.length===0){ showToast("سبد خرید خالی است"); return; }
      const order = {
        id: "PK" + Date.now().toString().slice(-8),
        date: new Date().toLocaleDateString("fa-IR"),
        items: cart, total,
        name: form.querySelector("[name=fullname]").value,
        address: form.querySelector("[name=address]").value,
        phone: form.querySelector("[name=phone]").value,
        status: "در حال پردازش"
      };
      saveOrder(order);
      setCart([]);
      location.href = "order.html?id=" + order.id;
    });
  }

  /* =========================================================
     Page: order.html
     ========================================================= */
  function initOrderPage(){
    const root = document.getElementById("order-root");
    if(!root) return;
    const id = new URLSearchParams(location.search).get("id");
    const orders = getOrders();
    const order = orders.find(o=>o.id===id) || orders[0];
    if(!order){
      root.innerHTML = `<div class="empty-state"><p>سفارشی پیدا نشد.</p><a href="products.html" class="btn btn-dark" style="margin-top:14px;">مشاهدهٔ پیراهن‌ها</a></div>`;
      return;
    }
    const itemsRows = order.items.map(c=>{
      const p = PRODUCTS.find(x=>x.id===c.id);
      return `<tr><td><img src="${p.images[0]}" alt="${p.name}"></td><td>${p.name}</td><td>سایز ${c.size}</td><td>${c.qty}</td><td>${fmt(p.price*c.qty)} تومان</td></tr>`;
    }).join("");
    root.innerHTML = `
      <div class="order-success">
        <div class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg></div>
        <h1>سفارش شما با موفقیت ثبت شد</h1>
        <p>کد پیگیری سفارش خود را نزد خود نگه دارید.</p>
        <div class="order-meta">
          <div>کد سفارش<strong>${order.id}</strong></div>
          <div>تاریخ ثبت<strong>${order.date}</strong></div>
          <div>مبلغ کل<strong>${fmt(order.total)} تومان</strong></div>
        </div>
      </div>

      <div class="tracking">
        <div class="track-steps">
          <div class="track-step done"><div class="dot">✓</div><span>ثبت سفارش</span></div>
          <div class="track-step done"><div class="dot">✓</div><span>پردازش</span></div>
          <div class="track-step"><div class="dot">۳</div><span>ارسال</span></div>
          <div class="track-step"><div class="dot">۴</div><span>تحویل</span></div>
        </div>
      </div>

      <table class="order-items-table">
        <tr><th></th><th>محصول</th><th>سایز</th><th>تعداد</th><th>قیمت</th></tr>
        ${itemsRows}
      </table>
      <div style="text-align:center;margin-top:36px;">
        <a href="products.html" class="btn btn-dark">بازگشت به فروشگاه</a>
      </div>
    `;
  }

  /* =========================================================
     Page: login.html / register.html
     ========================================================= */
  function initLoginPage(){
    const form = document.getElementById("login-form");
    if(!form) return;
    form.addEventListener("submit", e=>{
      e.preventDefault();
      const email = form.querySelector("[name=email]").value.trim();
      const pass = form.querySelector("[name=password]").value;
      const errEl = document.getElementById("login-error");
      if(!email || pass.length<4){
        errEl.textContent = "ایمیل یا رمز عبور نامعتبر است.";
        errEl.classList.add("show");
        return;
      }
      setUser({ name: email.split("@")[0], email });
      showToast("ورود موفق ✓");
      setTimeout(()=>location.href="account.html", 500);
    });
  }
  function initRegisterPage(){
    const form = document.getElementById("register-form");
    if(!form) return;
    form.addEventListener("submit", e=>{
      e.preventDefault();
      const name = form.querySelector("[name=fullname]").value.trim();
      const email = form.querySelector("[name=email]").value.trim();
      const pass = form.querySelector("[name=password]").value;
      const errEl = document.getElementById("register-error");
      if(!name || !email || pass.length<4){
        errEl.textContent = "لطفاً همهٔ فیلدها را به‌درستی پر کنید (رمز حداقل 8 کاراکتر).";
        errEl.classList.add("show");
        return;
      }
      setUser({ name, email });
      showToast("ثبت‌نام با موفقیت انجام شد ✓");
      setTimeout(()=>location.href="account.html", 500);
    });
  }

  /* =========================================================
     Page: account.html
     ========================================================= */
  function initAccountPage(){
    const root = document.getElementById("account-root");
    if(!root) return;
    const user = getUser();
    if(!user){
      root.innerHTML = `<div class="empty-state">
        <p>برای دیدن حساب کاربری ابتدا وارد شوید.</p>
        <a href="login.html" class="btn btn-dark" style="margin-top:14px;">ورود به حساب</a>
      </div>`;
      return;
    }
    const orders = getOrders();
    root.innerHTML = `
      <div class="account-layout">
        <div class="account-nav">
          <button class="active" data-panel="profile">پروفایل</button>
          <button data-panel="orders">سفارش‌های من</button>
          <button data-panel="addresses">آدرس‌ها</button>
          <button id="logout-btn">خروج از حساب</button>
        </div>
        <div>
          <div class="account-panel active" data-account-panel="profile">
            <div class="account-card">
              <h3 style="margin:0 0 18px;">اطلاعات حساب</h3>
              <div class="form-field"><label>نام</label><input value="${user.name}" disabled></div>
              <div class="form-field"><label>ایمیل</label><input value="${user.email}" disabled></div>
            </div>
          </div>
          <div class="account-panel" data-account-panel="orders">
            <div class="account-card">
              <h3 style="margin:0 0 10px;">سفارش‌های من</h3>
              ${orders.length ? orders.map(o=>`
                <div class="order-row">
                  <span>کد ${o.id}</span><span>${o.date}</span><span>${fmt(o.total)} تومان</span>
                  <span class="status-pill">${o.status}</span>
                </div>`).join("") : `<p style="color:#8a8275;font-size:13.5px;">هنوز سفارشی ثبت نکرده‌اید.</p>`}
            </div>
          </div>
          <div class="account-panel" data-account-panel="addresses">
            <div class="account-card">
              <h3 style="margin:0 0 18px;">آدرس‌های ذخیره‌شده</h3>
              <p style="color:#8a8275;font-size:13.5px;">هنوز آدرسی ثبت نکرده‌اید.</p>
            </div>
          </div>
        </div>
      </div>`;
    root.querySelectorAll(".account-nav button[data-panel]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        root.querySelectorAll(".account-nav button[data-panel]").forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        root.querySelectorAll(".account-panel").forEach(p=>p.classList.remove("active"));
        root.querySelector(`[data-account-panel="${btn.dataset.panel}"]`).classList.add("active");
      });
    });
    root.querySelector("#logout-btn").addEventListener("click", logout);
  }

  /* =========================================================
     Page: contact.html
     ========================================================= */
  function initContactPage(){
    const form = document.getElementById("contact-form");
    if(!form) return;
    form.addEventListener("submit", e=>{
      e.preventDefault();
      showToast("پیام شما ارسال شد، به‌زودی پاسخ می‌دهیم ✓");
      form.reset();
    });
  }

  /* ---------- Newsletter (shared) ---------- */
  function initNewsletter(){
    const form = document.getElementById("newsletter-form");
    if(!form) return;
    form.addEventListener("submit", e=>{
      e.preventDefault();
      showToast("عضویت شما با موفقیت ثبت شد ✓");
      form.reset();
    });
  }

  /* ---------- Tape divider ticks (signature element) ---------- */
  function buildTape(){
    const g = document.querySelector(".tape-ticks");
    if(!g) return;
    let html = "";
    for(let i=0;i<=60;i++){
      const x = i*20;
      const tall = i % 5 === 0;
      html += `<line x1="${x}" y1="0" x2="${x}" y2="${tall?16:9}"></line>`;
      if(tall) html += `<text x="${x+3}" y="26" font-size="9" fill="var(--ink)" opacity=".35" font-family="Vazirmatn">${i}</text>`;
    }
    g.innerHTML = html;
  }

  /* ---------- Init everything ---------- */
  document.addEventListener("DOMContentLoaded", ()=>{
    initChrome();
    buildTape();
    renderFeatured();
    renderBlogTeaser();
    initProductsPage();
    initProductDetailPage();
    initBlogPage();
    initBlogPostPage();
    initCartPage();
    initCheckoutPage();
    initOrderPage();
    initLoginPage();
    initRegisterPage();
    initAccountPage();
    initContactPage();
    initNewsletter();
  });
})();

(function () {

  /* ---------- Profile edit toggle ---------- */
  const editToggle = document.getElementById('profile-edit-toggle');
  const cancelBtn = document.getElementById('profile-cancel-btn');
  const formActions = document.getElementById('profile-form-actions');
  const profileForm = document.getElementById('profile-form');

  if (editToggle && profileForm) {
    const inputs = profileForm.querySelectorAll('input');
    let originalValues = [];

    function setEditable(editable) {
      inputs.forEach((input) => (input.disabled = !editable));
      formActions.hidden = !editable;
      editToggle.hidden = editable;
      if (editable) {
        originalValues = Array.from(inputs).map((i) => i.value);
        inputs[0] && inputs[0].focus();
      }
    }

    editToggle.addEventListener('click', () => setEditable(true));

    cancelBtn && cancelBtn.addEventListener('click', () => {
      inputs.forEach((input, i) => (input.value = originalValues[i]));
      setEditable(false);
    });
  }

  /* ---------- Address add / edit modal ---------- */
  const addBtn = document.getElementById('add-address-btn');
  const overlay = document.getElementById('address-modal-overlay');
  const modalTitle = document.getElementById('address-modal-title');
  const closeBtn = document.getElementById('address-modal-close');
  const cancelModalBtn = document.getElementById('address-modal-cancel');
  const addressForm = document.getElementById('address-form');
  const addressIdField = document.getElementById('address_id');

  if (overlay && addressForm) {
    const fieldMap = {
      title: 'title',
      receiver: 'receiver_name',
      phone: 'phone_number',
      province: 'province',
      city: 'city',
      full: 'full_address',
      postal: 'postal_code',
    };

    function openModal(isEdit, data) {
      overlay.classList.add('open');
      modalTitle.textContent = isEdit ? 'ویرایش آدرس' : 'افزودن آدرس جدید';

      if (isEdit && data) {
        addressIdField.value = data.id;
        Object.entries(fieldMap).forEach(([dataKey, fieldName]) => {
          const el = addressForm.elements[fieldName];
          if (el) el.value = data[dataKey] || '';
        });
        // Point the form at the edit endpoint if your urls.py separates add/edit
        addressForm.action = addressForm.dataset.editAction
          ? addressForm.dataset.editAction.replace('0', data.id)
          : addressForm.action;
      } else {
        addressIdField.value = '';
        addressForm.reset();
      }
    }

    function closeModal() {
      overlay.classList.remove('open');
    }

    addBtn && addBtn.addEventListener('click', () => openModal(false));
    closeBtn && closeBtn.addEventListener('click', closeModal);
    cancelModalBtn && cancelModalBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });

    document.querySelectorAll('.edit-address-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        openModal(true, {
          id: btn.dataset.id,
          title: btn.dataset.title,
          receiver: btn.dataset.receiver,
          phone: btn.dataset.phone,
          province: btn.dataset.province,
          city: btn.dataset.city,
          full: btn.dataset.full,
          postal: btn.dataset.postal,
        });
      });
    });
  }

})();