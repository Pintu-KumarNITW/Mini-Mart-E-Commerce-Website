let cart = JSON.parse(localStorage.getItem("minimart_cart")) || [];
let favorites = JSON.parse(localStorage.getItem("minimart_favs")) || [];
let selectedCategory = "All";
let showAllProducts = false;

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const productsHeading = document.getElementById("productsHeading");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const viewMoreBtn = document.getElementById("viewMoreBtn");

const cartCountEl = document.getElementById("cartCount");
const favCountEl = document.getElementById("favCount");
const cartDrawer = document.getElementById("cartDrawer");
const favDrawer = document.getElementById("favDrawer");
const cartItemsEl = document.getElementById("cartItems");
const favItemsEl = document.getElementById("favItems");
const cartTotalEl = document.getElementById("cartTotal");

function getProductById(id) {
  return typeof PRODUCTS !== "undefined" ? PRODUCTS.find((p) => p.id === id) : null;
}

function saveState() {
  localStorage.setItem("minimart_cart", JSON.stringify(cart));
  localStorage.setItem("minimart_favs", JSON.stringify(favorites));
  updateBadges();
  renderCart();
  renderFavorites();
}

function updateBadges() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountEl.textContent = totalQty;
  favCountEl.textContent = favorites.length;
}

function renderStars(rating) {
  const fullStars = Math.min(5, Math.max(0, Math.round(Number(rating) || 0)));
  let starsHtml = "";
  for (let i = 1; i <= 5; i++) {
    starsHtml +=
      i <= fullStars
        ? '<i class="fa-solid fa-star"></i>'
        : '<i class="fa-regular fa-star"></i>';
  }
  return starsHtml;
}

function renderProducts() {
  if (typeof PRODUCTS === "undefined" || !Array.isArray(PRODUCTS)) {
    productGrid.innerHTML = `<p class="empty-msg">Products data failed to load.</p>`;
    return;
  }

  const query = searchInput.value.trim().toLowerCase();
  const sortOrder = sortSelect ? sortSelect.value : "default";

  let filtered = PRODUCTS.filter((p) => {
    const matchCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchQuery =
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  if (sortOrder === "low-to-high") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-to-low") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const isDefaultUnfilteredView =
    selectedCategory === "All" && query === "" && sortOrder === "default";

  if (!showAllProducts && isDefaultUnfilteredView) {
    filtered = filtered.slice(0, 12);
    viewMoreBtn.style.display = PRODUCTS.length > 12 ? "inline-block" : "none";
  } else {
    viewMoreBtn.style.display = "none";
  }

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p class="empty-msg">No products found matching your search.</p>`;
    return;
  }

  productGrid.innerHTML = filtered
    .map((p) => {
      const isFav = favorites.includes(p.id);
      const oldPriceHtml =
        typeof p.oldPrice === "number"
          ? `<span class="old-price">$${p.oldPrice.toFixed(2)}</span>`
          : "";
      const discountHtml = p.discount
        ? `<span class="discount-pill">${p.discount}</span>`
        : "";

      return `
      <div class="product-card">
        ${p.bestSeller ? '<span class="best-badge">Best Seller</span>' : ""}
        <div class="img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-cat">${p.category}</p>
        <div class="rating-row">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-num">(${p.rating})</span>
        </div>
        <div class="price-row">
          <span class="current-price">$${Number(p.price).toFixed(2)}</span>
          ${oldPriceHtml}
          ${discountHtml}
        </div>
        <div class="card-actions">
          <button class="wish-btn ${isFav ? "active" : ""}" onclick="toggleFavorite(${p.id})" title="Save to Favorites">
            <i class="${isFav ? "fa-solid" : "fa-regular"} fa-heart"></i>
          </button>
          <button class="add-cart-btn" onclick="addToCart(${p.id})">Add to Cart</button>
          <button class="buy-now-btn" onclick="buyNow(${p.id})">Buy Now</button>
        </div>
      </div>
    `;
    })
    .join("");
}

function filterByCategory(category) {
  selectedCategory = category;
  if (category === "All") {
    showAllProducts = false;
  }
  productsHeading.textContent = category === "All" ? "Best Seller" : category;
  resetFilterBtn.classList.toggle("hidden", category === "All");

  document.querySelectorAll(".category-card").forEach((card) => {
    card.classList.toggle("active-cat", card.dataset.category === category);
  });

  renderProducts();
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((favId) => favId !== id);
  } else {
    favorites.push(id);
  }
  saveState();
  renderProducts();
}

function addToCart(id) {
  const product = getProductById(id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }
  saveState();
}

function buyNow(id) {
  const product = getProductById(id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }

  saveState();
  openDrawer(cartDrawer);
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }
  saveState();
}

function renderCart() {
  const hydratedCart = cart
    .map((entry) => {
      const product = getProductById(entry.id);
      return product ? { ...product, qty: entry.qty } : null;
    })
    .filter(Boolean);

  const total = hydratedCart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalEl.textContent = total.toFixed(2);

  if (hydratedCart.length === 0) {
    cartItemsEl.innerHTML = `<p class="empty-msg">Your cart is empty.</p>`;
    return;
  }

  cartItemsEl.innerHTML = hydratedCart
    .map(
      (item) => `
      <div class="drawer-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="drawer-item-info">
          <h4>${item.name}</h4>
          <p>$${Number(item.price).toFixed(2)} &times; ${item.qty}</p>
        </div>
        <div class="qty-controls">
          <button onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    `
    )
    .join("");
}

function renderFavorites() {
  const favProducts = favorites
    .map((id) => getProductById(id))
    .filter(Boolean);

  if (favProducts.length === 0) {
    favItemsEl.innerHTML = `<p class="empty-msg">No favorites saved yet.</p>`;
    return;
  }

  favItemsEl.innerHTML = favProducts
    .map(
      (item) => `
      <div class="drawer-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="drawer-item-info">
          <h4>${item.name}</h4>
          <p>$${Number(item.price).toFixed(2)}</p>
        </div>
        <button class="btn-dark" style="padding:6px 10px;font-size:12px;" onclick="addToCart(${item.id})">Add</button>
      </div>
    `
    )
    .join("");
}

function openDrawer(drawerToOpen) {
  cartDrawer.classList.add("hidden");
  favDrawer.classList.add("hidden");
  drawerToOpen.classList.remove("hidden");
}

// Event Listeners
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    const cat = card.dataset.category;
    filterByCategory(selectedCategory === cat ? "All" : cat);
    document.getElementById("best-sellers").scrollIntoView({ behavior: "smooth" });
  });
});

resetFilterBtn.addEventListener("click", () => filterByCategory("All"));
searchInput.addEventListener("input", renderProducts);

if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    renderProducts();
    document.getElementById("best-sellers").scrollIntoView({ behavior: "smooth" });
  });
}

viewMoreBtn.addEventListener("click", () => {
  showAllProducts = true;
  renderProducts();
});

document.getElementById("cartToggleBtn").addEventListener("click", () => openDrawer(cartDrawer));
document.getElementById("openCartLink").addEventListener("click", (e) => {
  e.preventDefault();
  openDrawer(cartDrawer);
});
document.getElementById("closeCartBtn").addEventListener("click", () => {
  cartDrawer.classList.add("hidden");
});

document.getElementById("favToggleBtn").addEventListener("click", () => openDrawer(favDrawer));
document.getElementById("openFavLink").addEventListener("click", (e) => {
  e.preventDefault();
  openDrawer(favDrawer);
});
document.getElementById("closeFavBtn").addEventListener("click", () => {
  favDrawer.classList.add("hidden");
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) return alert("Your cart is empty!");
  alert(`Order confirmed! Total charged: $${cartTotalEl.textContent}`);
  cart = [];
  saveState();
  cartDrawer.classList.add("hidden");
});

// Initial Render
saveState();
renderProducts();