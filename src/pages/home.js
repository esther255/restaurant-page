function homePage() {
    const home = document.createElement("main");

    home.classList.add("home-page");

    home.innerHTML = `
        
        <header class="navbar">

            <a href="#" class="logo">
                <span class="logo-icon">🍴</span>
                <span>
                    Shekinah
                    <small>Dining</small>
                </span>
            </a>

            <nav class="nav-links">
                <a href="#about">About Us</a>
                <a href="#menu">Menu</a>
                <a href="#reviews">Reviews</a>
                <a href="#contacts">Contacts</a>
                <a href="#shop">Shop</a>
            </nav>

            <button class="cart-button" aria-label="Shopping cart">
                🛒
                <span class="cart-count">02</span>
            </button>

        </header>


        
        <section class="hero">

            
            <div class="hero-content">

                <div class="decoration decoration-one">♧</div>

                <h1>
                    Taste the Tradition,<br>
                    Served Fresh Daily
                </h1>

                <p class="hero-description">
                    Where authentic taste meets modern dining —
                    experience freshness, tradition, and a touch
                    of luxury in every meal.
                </p>

                <div class="hero-buttons">

                    <a href="#menu" class="btn btn-primary">
                        Order Now
                    </a>

                    <a href="#menu" class="btn btn-outline">
                        Book A Menu
                    </a>

                </div>

                <div class="decoration decoration-two">♧</div>

                
                <div class="social-contact" id="contacts">

                    <div class="social-icons">
                        <a href="#" aria-label="Twitter">♥</a>
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="TikTok">♪</a>
                        <a href="#" aria-label="Instagram">◎</a>
                    </div>

                    <span class="contact-divider"></span>

                    <a href="tel:+250790079144" class="phone-number">
                        +250790079144
                    </a>

                </div>

            </div>


            
            <div class="hero-visual">

                <div class="food-circle">

                    <div class="circle-border">
                        <span class="circle-dot dot-top"></span>
                        <span class="circle-dot dot-bottom"></span>
                        <span class="circle-dot dot-left"></span>
                        <span class="circle-dot dot-right"></span>
                    </div>

                    <img
                        class="food-image"
                        src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&auto=format&fit=crop&q=85"
                        alt="Freshly prepared salmon meal"
                    >

                </div>


        
                <div class="food-categories">

                    <a href="#menu" class="category active">
                        <span>♧</span> Dishes
                    </a>

                    <a href="#menu" class="category">
                        <span>🍰</span> Dessert
                    </a>

                    <a href="#menu" class="category">
                        <span>🥤</span> Drinks
                    </a>

                    <a href="#menu" class="category">
                        <span>♨</span> Platter
                    </a>

                </div>


                
                <div class="delivery-card">

                    <div class="delivery-icon">
                        📍
                    </div>

                    <div>
                        <h4>Fast Delivery</h4>
                        <p>Free of cost any delivery</p>
                    </div>

                </div>

            </div>

            <div class="decoration decoration-three">♧</div>
            <div class="decoration decoration-four">◉</div>

        </section>

    `;

    return home;
}

export default homePage;