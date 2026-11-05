function homePage() {
  const home = document.createElement("main");
  home.className = "home-page";

  const products = [
    { id: 1, name: "Fresh Garden Salad", description: "Crisp vegetables, fresh herbs and a delicious dressing.", price: 8000, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=85", tag: "Fresh & Light" },
    { id: 2, name: "Chef's Special", description: "A satisfying chef-inspired meal, prepared with care.", price: 15000, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=85", tag: "House Favourite" },
    { id: 3, name: "Chocolate Dessert", description: "Rich chocolate cake for a sweet ending.", price: 8000, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=85", tag: "Something Sweet" }
  ];
  let cart = [];
  const money = n => `RWF ${n.toLocaleString("en-US")}`;

  home.innerHTML = `
    <header class="navbar">
      <a href="#home" class="logo"><span class="logo-icon">✿</span><span class="logo-name">Shekinah<small>DINING</small></span></a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="#about">About Us</a><a href="#menu">Menu</a><a href="#reviews">Reviews</a><a href="#contacts">Contacts</a><a href="#shop">Your Cart</a>
      </nav>
      <button class="cart-button" type="button" aria-label="Go to shopping cart">🛍<span class="cart-count">0</span></button>
    </header>

    <section class="hero" id="home">
      <div class="hero-content">
        <p class="eyebrow">WELCOME TO SHEKINAH DINING</p>
        <h1>Taste the Tradition,<br><em>Served Fresh Daily</em></h1>
        <p class="hero-description">Where authentic taste meets modern dining — experience freshness, tradition, and a touch of luxury in every meal.</p>
        <div class="hero-buttons"><a href="#menu" class="btn btn-primary">Explore Our Menu</a><a href="#contacts" class="btn btn-outline">Book A Table</a></div>
        <div class="hero-contact"><span class="social-circles">f　♪　◎</span><span class="contact-divider"></span><a href="tel:+250790079144">+250 790 079 144</a></div>
      </div>
      <div class="hero-visual">
        <div class="hero-image-frame"><img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1000&auto=format&fit=crop&q=85" alt="Freshly prepared restaurant meal"></div>
        <div class="delivery-card"><span class="delivery-icon">✦</span><span><strong>Made with care</strong><small>Fresh food, happy moments</small></span></div>
        <span class="hero-decoration">✳</span>
      </div>
    </section>

    <section class="cart-section" id="shop">
      <div class="section-heading"><p class="eyebrow">YOUR SELECTION</p><h2>Your Shopping Cart</h2><p>Freshly prepared with love. Your chosen dishes will appear here.</p></div>
      <div class="cart-layout">
        <div class="cart-panel">
          <div class="panel-heading"><h3>Your Items</h3><span class="item-count-label">0 items</span></div>
          <div class="cart-items" aria-live="polite"></div>
        </div>
        <aside class="order-summary">
          <p class="summary-eyebrow">ORDER SUMMARY</p><h3>Your Order</h3>
          <div class="summary-row"><span>Subtotal</span><strong class="cart-subtotal">RWF 0</strong></div>
          <div class="summary-row"><span>Delivery</span><span class="delivery-cost">Calculated at checkout</span></div>
          <div class="summary-rule"></div>
          <div class="summary-row summary-total"><span>Total</span><strong class="cart-total">RWF 0</strong></div>
          <button class="checkout-button" type="button" disabled>Proceed to Checkout →</button>
          <p class="summary-note">♡ Freshly prepared with care</p>
        </aside>
      </div>
    </section>

    <section class="menu-section" id="menu">
      <div class="section-heading"><p class="eyebrow">DISCOVER OUR SPECIALTIES</p><h2>Our Popular <em>Dishes</em></h2><p>Carefully prepared meals, made with fresh ingredients.</p></div>
      <div class="food-grid"></div>
    </section>

    <section class="about-section" id="about">
      <div class="about-image"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&auto=format&fit=crop&q=85" alt="Elegant restaurant table setting" loading="lazy"></div>
      <div class="about-copy"><p class="eyebrow">A PLACE TO GATHER</p><h2>Good Food.<br><em>Beautiful Moments.</em></h2><p>At Shekinah Dining, we believe a memorable meal is about more than food. It is about warm hospitality, thoughtful preparation and sharing special moments around the table.</p><a href="#menu" class="text-link">Discover our menu →</a></div>
    </section>

    <section class="reviews-section" id="reviews">
      <div class="section-heading"><p class="eyebrow">KIND WORDS</p><h2>Made for <em>Memorable Moments</em></h2><p>We look forward to welcoming you to Shekinah Dining.</p></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><blockquote>“Wonderful food, a welcoming atmosphere and a lovely place to share a meal.”</blockquote><p>— A Shekinah Dining guest</p></div>
    </section>

    <footer class="site-footer" id="contacts">
      <div><a href="#home" class="footer-logo">Shekinah Dining</a><p>Fresh flavours. Warm hospitality. Beautiful moments.</p></div>
      <div class="footer-contact"><strong>Contact us</strong><a href="tel:+250790079144">+250 790 079 144</a><a href="mailto:hello@shekinah.example">hello@shekinah.example</a></div>
      <p class="copyright">© ${new Date().getFullYear()} Shekinah Dining. All rights reserved.</p>
    </footer>`;

  const foodGrid = home.querySelector(".food-grid");
  const cartItems = home.querySelector(".cart-items");
  const cartCount = home.querySelector(".cart-count");
  const itemCountLabel = home.querySelector(".item-count-label");
  const subtotalElement = home.querySelector(".cart-subtotal");
  const totalElement = home.querySelector(".cart-total");
  const checkoutButton = home.querySelector(".checkout-button");

  function renderMenu() {
    foodGrid.innerHTML = products.map(p => `
      <article class="food-card">
        <div class="food-card-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="food-category">${p.tag}</span></div>
        <div class="food-card-content"><h3>${p.name}</h3><p>${p.description}</p>
          <div class="food-card-bottom"><strong>${money(p.price)}</strong><button class="add-to-cart" type="button" data-add="${p.id}">Add to Cart +</button></div>
        </div>
      </article>`).join("");
  }

  function renderCart() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartCount.textContent = count;
    itemCountLabel.textContent = `${count} ${count === 1 ? "item" : "items"}`;
    subtotalElement.textContent = money(subtotal);
    totalElement.textContent = money(subtotal);
    checkoutButton.disabled = cart.length === 0;

    if (!cart.length) {
      cartItems.innerHTML = `<div class="empty-cart"><div class="empty-cart-icon">🛍️</div><h3>Your cart is empty</h3><p>Discover something delicious from our menu.</p><a href="#menu" class="btn btn-primary">Explore Our Menu</a></div>`;
      return;
    }
    cartItems.innerHTML = cart.map(item => `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info"><h4>${item.name}</h4><p>${money(item.price)} each</p>
          <div class="quantity-controls"><button type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button type="button" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button></div>
        </div>
        <div class="cart-item-end"><strong>${money(item.price * item.quantity)}</strong><button class="remove-item" type="button" data-action="remove" data-id="${item.id}">Remove</button></div>
      </article>`).join("");
  }

  function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });
    renderCart();
  }

  foodGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(Number(button.dataset.add));
  });

  cartItems.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const id = Number(button.dataset.id);
    const action = button.dataset.action;
    const item = cart.find(p => p.id === id);
    if (action === "remove") cart = cart.filter(p => p.id !== id);
    if (action === "increase" && item) item.quantity++;
    if (action === "decrease" && item) {
      item.quantity--;
      if (item.quantity <= 0) cart = cart.filter(p => p.id !== id);
    }
    renderCart();
  });

  home.querySelector(".cart-button").addEventListener("click", () => {
    home.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
  });

  checkoutButton.addEventListener("click", () => {
    if (cart.length) alert("Your cart is ready. Online payment and order submission are not connected yet.");
  });

  renderMenu();
  renderCart();
  return home;
}

export default homePage;
