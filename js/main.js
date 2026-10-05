/**
 * SafeCrust Co. - Allergy-Friendly Bakery & Confectionery Delivery & Order Aggregator
 * Interactive Engine & State Management
 */

// Default Seed Data
const DEFAULT_BAKERIES = [
    { id: 'b1', name: 'Flourish Safe Bakes', rating: 4.9, time: '20-30 min', minOrder: '$15', badge: '100% Dedicated Gluten-Free Facility', image: 'img/gf_artisan_loaf.png' },
    { id: 'b2', name: 'Pure Bliss Patisserie', rating: 4.8, time: '25-35 min', minOrder: '$20', badge: 'Certified Nut-Free & Vegan Kitchen', image: 'img/raspberry_almond_cake.png' },
    { id: 'b3', name: 'Sweet Haven GF Bakery', rating: 4.9, time: '15-25 min', minOrder: '$12', badge: 'Lab-Tested Celiac Safe (<5ppm)', image: 'img/Double Chocolate Fudge.png' },
    { id: 'b4', name: 'Velvet Vegan Confections', rating: 4.7, time: '30-40 min', minOrder: '$18', badge: 'Plant-Based & Dairy-Free Artisan', image: 'img/vegan_strawberry_glazed_donuts.png' }
];

const DEFAULT_MENU_ITEMS = [
    {
        id: 'p1',
        name: 'Triple Chocolate Decadence Cake',
        bakeryId: 'b1',
        bakeryName: 'Flourish Safe Bakes',
        price: 28.50,
        category: 'cakes',
        tags: ['gluten-free', 'vegan', 'dairy-free', 'egg-free'],
        image: 'img/Double Chocolate Fudge.png',
        desc: 'Rich 3-layer Belgian cocoa cake with silky avocado dark chocolate ganache. Zero gluten, dairy, or refined sugar.',
        safetyCert: 'Lab Swab Certified (<5ppm Gluten)',
        inStock: true,
        prepTime: '25 min'
    },
    {
        id: 'p2',
        name: 'Artisan Sourdough Boule (GF)',
        bakeryId: 'b1',
        bakeryName: 'Flourish Safe Bakes',
        price: 9.50,
        category: 'breads',
        tags: ['gluten-free', 'vegan', 'nut-free', 'egg-free'],
        image: 'img/gf_artisan_loaf.png',
        desc: 'Naturally fermented with wild sourdough starter, golden crispy crust, and open airy crumb. 100% Celiac-safe.',
        safetyCert: 'Strict Gluten-Free Facility',
        inStock: true,
        prepTime: '15 min'
    },
    {
        id: 'p3',
        name: 'Lemon Drizzle Cloud Dream',
        bakeryId: 'b2',
        bakeryName: 'Pure Bliss Patisserie',
        price: 24.00,
        category: 'cakes',
        tags: ['gluten-free', 'nut-free', 'dairy-free'],
        image: 'img/Lemon Drizzle Dream.png',
        desc: 'Infused with organic Meyer lemons and candied lemon zest, topped with a crisp sugar-free botanical glaze.',
        safetyCert: '100% Dedicated Peanut & Nut-Free',
        inStock: true,
        prepTime: '20 min'
    },
    {
        id: 'p4',
        name: 'Velvet Strawberry Glazed Donuts (4-Pack)',
        bakeryId: 'b4',
        bakeryName: 'Velvet Vegan Confections',
        price: 16.00,
        category: 'pastries',
        tags: ['vegan', 'dairy-free', 'egg-free', 'nut-free'],
        image: 'img/vegan_strawberry_glazed_donuts.png',
        desc: 'Baked artisan donuts smothered in fresh organic strawberry glaze made with real freeze-dried berries.',
        safetyCert: 'Vegan Society & Nut-Free Certified',
        inStock: true,
        prepTime: '20 min'
    },
    {
        id: 'p5',
        name: 'Rich Chocolate Chip Chunk Cookies (6-Pack)',
        bakeryId: 'b3',
        bakeryName: 'Sweet Haven GF Bakery',
        price: 14.50,
        category: 'cookies',
        tags: ['gluten-free', 'vegan', 'soy-free'],
        image: 'img/chocolate_chip_decadence_cookies.png',
        desc: 'Chewy center with crispy golden edges packed with organic fair-trade dark chocolate chunks.',
        safetyCert: 'ELISA Tested Gluten-Free',
        inStock: true,
        prepTime: '15 min'
    },
    {
        id: 'p6',
        name: 'Rosemary Sea Salt Focaccia',
        bakeryId: 'b1',
        bakeryName: 'Flourish Safe Bakes',
        price: 11.00,
        category: 'breads',
        tags: ['gluten-free', 'vegan', 'nut-free'],
        image: 'img/Rosemary Focaccia.png',
        desc: 'Drizzled with cold-pressed extra virgin olive oil, fresh organic rosemary, and flaky Maldon sea salt.',
        safetyCert: 'Certified Gluten-Free',
        inStock: true,
        prepTime: '20 min'
    },
    {
        id: 'p7',
        name: 'SunButter Crisp Protein Bars (4-Pack)',
        bakeryId: 'b2',
        bakeryName: 'Pure Bliss Patisserie',
        price: 13.50,
        category: 'pastries',
        tags: ['nut-free', 'gluten-free', 'vegan', 'sugar-free'],
        image: 'img/nut_free_sunbutter_bars.png',
        desc: 'Nut-free sunflower seed butter energy bars bound with sprouted quinoa crisps and organic dates.',
        safetyCert: 'School-Safe Nut-Free Standard',
        inStock: true,
        prepTime: '10 min'
    },
    {
        id: 'p8',
        name: 'Sugar-Free Keto New York Cheesecake',
        bakeryId: 'b3',
        bakeryName: 'Sweet Haven GF Bakery',
        price: 29.00,
        category: 'cakes',
        tags: ['gluten-free', 'sugar-free', 'keto', 'egg-free'],
        image: 'img/sugar_free_cheesecake.png',
        desc: 'Ultra creamy dairy-alternative vanilla cheesecake on a toasted coconut crust, sweetened with monkfruit.',
        safetyCert: 'Diabetic & Celiac Tested',
        inStock: true,
        prepTime: '30 min'
    },
    {
        id: 'p9',
        name: 'Zen Matcha Mousse Tart',
        bakeryId: 'b4',
        bakeryName: 'Velvet Vegan Confections',
        price: 18.00,
        category: 'pastries',
        tags: ['vegan', 'gluten-free', 'sugar-free', 'dairy-free'],
        image: 'img/sugar_free_matcha_latte.png',
        desc: 'Ceremonial grade Uji matcha mousse inside a crisp almond-free tart shell, topped with edible gold leaf.',
        safetyCert: 'Certified Plant-Based',
        inStock: true,
        prepTime: '25 min'
    },
    {
        id: 'p10',
        name: 'Raspberry Velvet Dream Cake',
        bakeryId: 'b2',
        bakeryName: 'Pure Bliss Patisserie',
        price: 26.00,
        category: 'cakes',
        tags: ['gluten-free', 'nut-free', 'dairy-free'],
        image: 'img/raspberry_almond_cake.png',
        desc: 'Moist vanilla bean sponge layered with tart organic raspberry reduction and dairy-free whip.',
        safetyCert: '100% Nut & Gluten Free',
        inStock: true,
        prepTime: '25 min'
    },
    {
        id: 'p11',
        name: 'Fudgy Belgian GF Brownies (4-Pk)',
        bakeryId: 'b3',
        bakeryName: 'Sweet Haven GF Bakery',
        price: 15.00,
        category: 'pastries',
        tags: ['gluten-free', 'nut-free'],
        image: 'img/gf_chocolate_brownies.png',
        desc: 'Dense, melt-in-your-mouth brownies crafted with 70% dark cocoa and a delicate crackly crust.',
        safetyCert: 'ELISA Swab Certified',
        inStock: true,
        prepTime: '15 min'
    },
    {
        id: 'p12',
        name: 'Savory Artisan Seed Crackers (Box)',
        bakeryId: 'b2',
        bakeryName: 'Pure Bliss Patisserie',
        price: 8.50,
        category: 'breads',
        tags: ['nut-free', 'vegan', 'gluten-free'],
        image: 'img/nut_free_crackers.png',
        desc: 'Oven-toasted gourmet crackers packed with golden flax, pumpkin seeds, and aromatic herbs.',
        safetyCert: 'Allergen Safe Facility',
        inStock: true,
        prepTime: '10 min'
    },
    {
        id: 'p13',
        name: 'Decadent Chocolate Avocado Gateau',
        bakeryId: 'b4',
        bakeryName: 'Velvet Vegan Confections',
        price: 27.00,
        category: 'cakes',
        tags: ['vegan', 'gluten-free', 'nut-free', 'dairy-free'],
        image: 'img/vegan_chocolate_avocado_cake.png',
        desc: 'Luscious chocolate indulgence made with ripe avocados, raw cacao, and coconut cream frosting.',
        safetyCert: '100% Plant-Based Certified',
        inStock: true,
        prepTime: '30 min'
    },
    {
        id: 'p14',
        name: 'Classic Vanilla Bean Cookies (6-Pk)',
        bakeryId: 'b1',
        bakeryName: 'Flourish Safe Bakes',
        price: 12.50,
        category: 'cookies',
        tags: ['vegan', 'nut-free', 'gluten-free'],
        image: 'img/Vegan Cookies.png',
        desc: 'Buttery, melt-in-the-mouth crumb infused with Madagascar vanilla bean caviar. 100% plant-based.',
        safetyCert: 'Dedicated Allergen Safe',
        inStock: true,
        prepTime: '15 min'
    },
    {
        id: 'p15',
        name: 'Triple Cocoa Crunch Cookies (6-Pk)',
        bakeryId: 'b3',
        bakeryName: 'Sweet Haven GF Bakery',
        price: 14.00,
        category: 'cookies',
        tags: ['gluten-free', 'vegan', 'nut-free'],
        image: 'img/Triple Choc Cookies.png',
        desc: 'Deep dark chocolate batter loaded with white and dark dairy-free chips for pure chocolate bliss.',
        safetyCert: 'Celiac Certified Facility',
        inStock: true,
        prepTime: '15 min'
    },
    {
        id: 'p16',
        name: 'Heritage Golden Seeded Morning Loaf',
        bakeryId: 'b1',
        bakeryName: 'Flourish Safe Bakes',
        price: 10.50,
        category: 'breads',
        tags: ['gluten-free', 'vegan', 'nut-free'],
        image: 'img/seeded morning.jpg',
        desc: 'Nutritious high-protein sandwich loaf loaded with chia, toasted sesame, and sunflower kernels.',
        safetyCert: '100% GF Dedicated',
        inStock: true,
        prepTime: '20 min'
    },
    {
        id: 'p17',
        name: 'Wild Blueberry Crumble Muffins (4-Pk)',
        bakeryId: 'b2',
        bakeryName: 'Pure Bliss Patisserie',
        price: 15.50,
        category: 'pastries',
        tags: ['gluten-free', 'nut-free', 'dairy-free'],
        image: 'img/WhatsApp Image 2026-04-10 at 3.21.19 PM (2).jpeg',
        desc: 'Bursting with juicy wild Maine blueberries and topped with a buttery cinnamon oat streusel.',
        safetyCert: 'Nut-Free Certified',
        inStock: true,
        prepTime: '15 min'
    },
    {
        id: 'p18',
        name: 'Cinnamon Spiced Oat Snaps (8-Pk)',
        bakeryId: 'b4',
        bakeryName: 'Velvet Vegan Confections',
        price: 9.00,
        category: 'cookies',
        tags: ['sugar-free', 'gluten-free', 'vegan', 'nut-free'],
        image: 'img/WhatsApp Image 2026-04-10 at 3.21.22 PM.jpeg',
        desc: 'Crunchy, aromatic Ceylon cinnamon cookies sweetened naturally with erythritol and monkfruit.',
        safetyCert: 'Diabetic & Vegan Friendly',
        inStock: true,
        prepTime: '12 min'
    }
];

// Initialize Storage if empty
function initializeAggregatorStorage() {
    if (!localStorage.getItem('safeBakesMenu')) {
        localStorage.setItem('safeBakesMenu', JSON.stringify(DEFAULT_MENU_ITEMS));
    }
    if (!localStorage.getItem('safeBakesBakeries')) {
        localStorage.setItem('safeBakesBakeries', JSON.stringify(DEFAULT_BAKERIES));
    }
    if (!localStorage.getItem('safeBakesOrders')) {
        const sampleOrders = [
            {
                orderId: 'SB-8924',
                date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                bakery: 'Flourish Safe Bakes',
                items: [
                    { name: 'Triple Chocolate Decadence Cake', qty: 1, price: 28.50, customMessage: 'Happy 10th Birthday Leo! (Nut-Free)' },
                    { name: 'Artisan Sourdough Boule (GF)', qty: 1, price: 9.50 }
                ],
                total: 41.80,
                status: 'out_for_delivery',
                statusText: 'Out for Delivery (Express Driver #402)',
                eta: '12 mins',
                address: '742 Evergreen Terrace, Suite 4B',
                allergensDeclared: ['Gluten-Free', 'Peanut-Free', 'Tree Nut-Free'],
                progressPct: 80,
                driverName: 'Alex Rivera',
                driverPhone: '+1 (555) 234-8921'
            },
            {
                orderId: 'SB-8921',
                date: '10:15 AM',
                bakery: 'Pure Bliss Patisserie',
                items: [
                    { name: 'Lemon Drizzle Cloud Dream', qty: 1, price: 24.00 },
                    { name: 'SunButter Crisp Protein Bars (4-Pack)', qty: 2, price: 27.00 }
                ],
                total: 54.20,
                status: 'delivered',
                statusText: 'Delivered Safely (Sealed Container)',
                eta: 'Delivered at 10:48 AM',
                address: '1204 Blossom Hill Rd',
                allergensDeclared: ['Vegan', 'Dairy-Free'],
                progressPct: 100,
                driverName: 'Alex Rivera'
            }
        ];
        localStorage.setItem('safeBakesOrders', JSON.stringify(sampleOrders));
    }
    if (!localStorage.getItem('safeBakesUser')) {
        localStorage.setItem('safeBakesUser', JSON.stringify({
            name: 'Emily Watson',
            email: 'emily.watson@example.com',
            role: 'customer',
            allergies: ['Gluten', 'Peanuts', 'Dairy'],
            address: '742 Evergreen Terrace, Suite 4B',
            phone: '+1 (555) 890-1234',
            loyaltyPoints: 320
        }));
    }
    if (!localStorage.getItem('safeBakesCart')) {
        const initialCart = [
            {
                id: 'p1',
                name: 'Triple Chocolate Decadence Cake',
                bakery: 'Flourish Safe Bakes',
                price: 28.50,
                qty: 1,
                image: 'img/Double Chocolate Fudge.png',
                tags: ['gluten-free', 'vegan', 'dairy-free'],
                customMessage: 'Allergy-Safe Celebration!'
            },
            {
                id: 'p4',
                name: 'Velvet Strawberry Glazed Donuts (4-Pack)',
                bakery: 'Velvet Vegan Confections',
                price: 16.00,
                qty: 1,
                image: 'img/vegan_strawberry_glazed_donuts.png',
                tags: ['vegan', 'dairy-free', 'nut-free'],
                customMessage: ''
            }
        ];
        localStorage.setItem('safeBakesCart', JSON.stringify(initialCart));
        localStorage.setItem('cartCount', '2');
    }
}

// Global Toast Notifications
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.position = 'fixed';
        container.style.bottom = '24px';
        container.style.right = '24px';
        container.style.zIndex = '9999';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '10px';
        container.style.pointerEvents = 'none';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type}`;
    const icon = type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-triangle-exclamation' : 'fa-info-circle';
    const bgColor = type === 'success' ? '#2e7d32' : type === 'warning' ? '#d97706' : '#FFC400';
    const textColor = (bgColor === '#FFC400') ? '#1C1917' : '#ffffff';

    toast.style.background = bgColor;
    toast.style.color = textColor;
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '10px';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '10px';
    toast.style.fontWeight = '600';
    toast.style.fontSize = '0.95rem';
    toast.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.pointerEvents = 'auto';

    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// User & Role Switching
function getSafeBakesUser() {
    return JSON.parse(localStorage.getItem('safeBakesUser') || '{}');
}

function setSafeBakesUser(user) {
    localStorage.setItem('safeBakesUser', JSON.stringify(user));
    updateUserNav();
}

function switchDemoRole(role) {
    let user;
    if (role === 'customer') {
        user = {
            name: 'Emily Watson',
            email: 'emily.watson@example.com',
            role: 'customer',
            roleTitle: 'Verified Allergy-Conscious Customer',
            allergies: ['Gluten', 'Peanuts', 'Dairy'],
            address: '742 Evergreen Terrace, Suite 4B',
            phone: '+1 (555) 890-1234',
            loyaltyPoints: 320
        };
    } else if (role === 'partner') {
        user = {
            name: 'Chef Marcel Laurent',
            email: 'marcel@purebliss.com',
            role: 'partner',
            roleTitle: 'Bakery Partner Owner (Pure Bliss)',
            bakeryName: 'Pure Bliss Patisserie',
            kitchenCert: 'ISO 22000 & GFCO Lab Certified',
            pendingOrders: 5,
            rating: 4.8
        };
    } else if (role === 'admin') {
        user = {
            name: 'Admin Sarah Vance',
            email: 'admin@safecrust.com',
            role: 'admin',
            roleTitle: 'SafeCrust Co. Aggregator Super-Admin',
            permissions: ['Live Dispatch', 'Kitchen Audits', 'Payouts', 'Menu Approvals']
        };
    } else if (role === 'driver') {
        user = {
            name: 'Alex Rivera',
            email: 'alex.driver@safecrust.com',
            role: 'driver',
            roleTitle: 'Express Delivery Courier #402',
            vehicle: 'Insulated Safe-Bake EV Van',
            activeDeliveries: 1
        };
    }

    setSafeBakesUser(user);
    showToast(`Logged in as ${user.name} (${user.roleTitle || user.role})`, 'success');
    
    // If on login or register, direct to dashboard
    if (window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html')) {
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 600);
    } else if (window.location.pathname.includes('dashboard.html')) {
        renderDashboardRoleView();
    }
}

function updateUserNav() {
    // Keep standard Login button in navigation as requested
    const loginBtns = document.querySelectorAll('a[href="login.html"], a[href="dashboard.html"].btn');
    loginBtns.forEach(btn => {
        if (btn.classList.contains('btn') && (btn.closest('.nav-actions') || btn.closest('.mobile-menu-actions'))) {
            btn.innerHTML = 'Login';
            btn.href = 'login.html';
        }
    });
}

// Cart Mechanics
function getCart() {
    return JSON.parse(localStorage.getItem('safeBakesCart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('safeBakesCart', JSON.stringify(cart));
    const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    localStorage.setItem('cartCount', count);
    updateCartBadges(count);
}

function updateCartBadges(count) {
    const badges = document.querySelectorAll('.cart-badge, #cart-count');
    badges.forEach(b => {
        b.textContent = count;
        b.classList.remove('animate-pop');
        void b.offsetWidth;
        b.classList.add('animate-pop');
    });
}

function addItemToCart(item, customMsg = '') {
    const cart = getCart();
    const existingIndex = cart.findIndex(c => c.id === item.id && (c.customMessage || '') === customMsg);
    if (existingIndex > -1) {
        cart[existingIndex].qty = (cart[existingIndex].qty || 1) + 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            bakery: item.bakeryName || 'SafeBakes Partner',
            price: item.price,
            qty: 1,
            image: item.image || 'img/gf_chocolate_brownies.png',
            tags: item.tags || ['gluten-free', 'vegan'],
            customMessage: customMsg
        });
    }
    saveCart(cart);
    showToast(`Added "${item.name}" to cart! 🛒`, 'success');
}

// Customizer Modal
function openCustomizerModal(productId) {
    const menu = JSON.parse(localStorage.getItem('safeBakesMenu') || JSON.stringify(DEFAULT_MENU_ITEMS));
    const product = menu.find(p => p.id === productId) || menu[0];

    let modal = document.getElementById('cake-customizer-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cake-customizer-modal';
        modal.className = 'customizer-modal-backdrop';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="customizer-modal-content">
            <div class="customizer-modal-header">
                <div>
                    <h3 style="margin:0; color:var(--primary);">${product.name}</h3>
                    <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">${product.bakeryName} &bull; $${product.price.toFixed(2)}</p>
                </div>
                <button type="button" class="close-modal-btn" onclick="closeCustomizerModal()"><i class="fas fa-times"></i></button>
            </div>
            <div class="customizer-modal-body">
                <div class="product-preview-row">
                    <img src="${product.image}" alt="${product.name}" style="width:90px; height:90px; object-fit:cover; border-radius:10px;">
                    <div>
                        <div class="safety-badge" style="background:#e8f5e9; color:#2e7d32; padding:4px 8px; border-radius:6px; font-size:0.8rem; font-weight:700; display:inline-block; margin-bottom:6px;">
                            <i class="fas fa-shield-halved"></i> ${product.safetyCert}
                        </div>
                        <p style="font-size:0.85rem; margin:0; color:var(--text-main);">${product.desc}</p>
                    </div>
                </div>

                <div class="form-group" style="margin-top:1.5rem;">
                    <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:6px;">Personalized Cake / Treat Inscription</label>
                    <input type="text" id="custom-cake-text" placeholder="e.g. Happy 12th Birthday Mia! (Nut-Free)" class="customizer-input" maxlength="45">
                    <small style="color:var(--text-muted); font-size:0.75rem;">Piped with organic natural plant-based icing (Max 45 chars)</small>
                </div>

                <div class="form-group" style="margin-top:1rem;">
                    <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:6px;">Dietary Safety Packaging</label>
                    <select id="custom-packaging-select" class="customizer-input">
                        <option value="sealed">Tamper-Evident Lab-Sealed Allergen Box (Standard)</option>
                        <option value="gift">Eco Gift Box with Certified Allergen Ribbon (+$3.00)</option>
                        <option value="insulated">Thermal Insulated Express Box for Hot Bakes (+$2.50)</option>
                    </select>
                </div>

                <div class="form-group" style="margin-top:1rem;">
                    <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:6px;">Allergy Special Instructions to Bakery Kitchen</label>
                    <textarea id="custom-allergy-notes" placeholder="e.g. Severe peanut allergy. Please sanitize workstations twice and use separate parchment." class="customizer-input" style="height:65px;"></textarea>
                </div>
            </div>
            <div class="customizer-modal-footer">
                <button type="button" class="btn btn-outline" onclick="closeCustomizerModal()">Cancel</button>
                <button type="button" class="btn btn-primary" id="confirm-add-custom-btn"><i class="fas fa-cart-plus"></i> Add to Order ($${product.price.toFixed(2)})</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    document.getElementById('confirm-add-custom-btn').onclick = () => {
        const text = document.getElementById('custom-cake-text').value.trim();
        addItemToCart(product, text);
        closeCustomizerModal();
    };
}

function closeCustomizerModal() {
    const modal = document.getElementById('cake-customizer-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Aggregator Menu Page Filtering & Customizer Engine
function initAggregatorMenuPage() {
    const searchInput = document.getElementById('menu-search-input');
    const bakerySelect = document.getElementById('bakery-filter-select');
    const filterChips = document.querySelectorAll('.filter-chip');
    const productsGrid = document.getElementById('menu-products-grid') || document.querySelector('.grid-3');
    const countEl = document.getElementById('filter-result-count');

    let currentFilter = 'all';
    let currentBakery = 'all';
    let currentSearch = '';

    function filterCards() {
        if (!productsGrid) return;
        const cards = productsGrid.querySelectorAll('.card');
        let visibleCount = 0;

        cards.forEach(card => {
            const cardTags = (card.getAttribute('data-tags') || '').toLowerCase();
            const cardBakery = (card.getAttribute('data-bakery') || '').toLowerCase();
            const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
            const cardTitle = (card.querySelector('h3') ? card.querySelector('h3').textContent : '').toLowerCase();
            const cardDesc = (card.querySelector('p') ? card.querySelector('p').textContent : '').toLowerCase();

            let matchesCategory = (currentFilter === 'all') || 
                                  cardTags.includes(currentFilter.toLowerCase()) || 
                                  cardCategory.includes(currentFilter.toLowerCase());

            let matchesBakery = (currentBakery === 'all') || 
                                cardBakery.includes(currentBakery.toLowerCase());

            let matchesSearch = !currentSearch || 
                                cardTitle.includes(currentSearch) || 
                                cardDesc.includes(currentSearch) || 
                                cardTags.includes(currentSearch) || 
                                cardBakery.includes(currentSearch);

            if (matchesCategory && matchesBakery && matchesSearch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update count text
        if (countEl) {
            countEl.textContent = `Showing ${visibleCount} safe treat${visibleCount === 1 ? '' : 's'}`;
        }

        // Handle No Results Box
        let noResultsEl = document.getElementById('no-menu-results');
        if (visibleCount === 0) {
            if (!noResultsEl) {
                noResultsEl = document.createElement('div');
                noResultsEl.id = 'no-menu-results';
                noResultsEl.className = 'no-results-box';
                noResultsEl.style.gridColumn = '1 / -1';
                noResultsEl.style.textAlign = 'center';
                noResultsEl.style.padding = '4rem 2rem';
                noResultsEl.style.background = 'var(--bg-card)';
                noResultsEl.style.borderRadius = 'var(--radius)';
                noResultsEl.style.border = '1px dashed var(--border)';
                noResultsEl.innerHTML = `
                    <i class="fas fa-cookie-bite" style="font-size:3rem; color:var(--text-muted); margin-bottom:1rem; opacity:0.6;"></i>
                    <h3 style="color:var(--primary); margin-bottom:0.5rem;">No treats match your filter</h3>
                    <p style="color:var(--text-muted); margin-bottom:1.5rem; max-width:400px; margin-left:auto; margin-right:auto;">Try selecting another allergen tag or search query to browse certified treats.</p>
                    <button type="button" class="btn btn-primary" id="reset-menu-filters-btn"><i class="fas fa-rotate-left"></i> Reset All Filters</button>
                `;
                productsGrid.appendChild(noResultsEl);
                document.getElementById('reset-menu-filters-btn').addEventListener('click', () => {
                    if (searchInput) searchInput.value = '';
                    if (bakerySelect) bakerySelect.value = 'all';
                    currentSearch = '';
                    currentBakery = 'all';
                    currentFilter = 'all';
                    filterChips.forEach(c => c.classList.remove('active'));
                    const allChip = document.querySelector('.filter-chip[data-filter="all"]');
                    if (allChip) allChip.classList.add('active');
                    filterCards();
                });
            } else {
                noResultsEl.style.display = 'block';
            }
        } else if (noResultsEl) {
            noResultsEl.style.display = 'none';
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.trim().toLowerCase();
            filterCards();
        });
    }

    if (bakerySelect) {
        bakerySelect.addEventListener('change', (e) => {
            currentBakery = e.target.value;
            filterCards();
        });
    }

    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.getAttribute('data-filter') || 'all';
            filterCards();
        });
    });

    // Wire customize & add to cart buttons
    document.querySelectorAll('.btn-customize-treat').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const pid = btn.getAttribute('data-product-id');
            if (btn.textContent.includes('Customize')) {
                openCustomizerModal(pid);
            } else {
                const menu = JSON.parse(localStorage.getItem('safeBakesMenu') || JSON.stringify(DEFAULT_MENU_ITEMS));
                const item = menu.find(p => p.id === pid) || menu[0];
                addItemToCart(item);
            }
        });
    });

    // Run initial filter check
    filterCards();
}

// Global helper for any legacy onclick handler
function addToCart(productId, event) {
    if (event) event.stopPropagation();
    const pid = typeof productId === 'string' ? productId : `p${productId}`;
    const menu = JSON.parse(localStorage.getItem('safeBakesMenu') || JSON.stringify(DEFAULT_MENU_ITEMS));
    const item = menu.find(p => p.id === pid) || menu[0];
    addItemToCart(item);
}

// Main Initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeAggregatorStorage();
    initTheme();
    initRTL();
    initMobileMenu();
    initAnimations();
    initCart();
    initBackToTop();
    initActiveNav();
    initFAQAccordion();
    initTimelineMilestones();
    initPasswordToggle();
    updateUserNav();
    initVideoAutoplay();

    // Page Specific Hooks
    if (document.querySelector('.cart-container')) {
        initCartPage();
    }
    if (document.getElementById('dashboardSidebar') || document.querySelector('.main-content')) {
        initDashboardEngine();
    }
    if (document.querySelector('.menu-page') || document.querySelector('.filter-container')) {
        initAggregatorMenuPage();
    }
    if (document.querySelector('.auth-card')) {
        initAuthPageEnhancements();
    }
});

// Video Autoplay & Stream Enhancements
function initVideoAutoplay() {
    const videos = document.querySelectorAll('video');
    if (!videos.length) return;

    videos.forEach(video => {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

        const tryPlay = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Browser policy blocked autoplay without touch; activate on first interaction
                    const resumeOnInteraction = () => {
                        video.play().catch(() => {});
                        window.removeEventListener('touchstart', resumeOnInteraction);
                        window.removeEventListener('click', resumeOnInteraction);
                        window.removeEventListener('scroll', resumeOnInteraction);
                    };
                    window.addEventListener('touchstart', resumeOnInteraction, { once: true, passive: true });
                    window.addEventListener('click', resumeOnInteraction, { once: true, passive: true });
                    window.addEventListener('scroll', resumeOnInteraction, { once: true, passive: true });
                });
            }
        };

        if (video.readyState >= 2) {
            tryPlay();
        } else {
            video.addEventListener('loadeddata', tryPlay, { once: true });
            video.addEventListener('canplay', tryPlay, { once: true });
        }
    });

    window.addEventListener('load', () => {
        videos.forEach(v => {
            if (v.paused) v.play().catch(() => {});
        });
    });
}

// Theme Management
function initTheme() {
    const themeToggles = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle, #auth-theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateThemeIcons(next);
        });
    });
}

function updateThemeIcons(theme) {
    const iconClass = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    document.querySelectorAll('#theme-toggle i, #mobile-theme-toggle i, #auth-theme-toggle i').forEach(icon => {
        icon.className = iconClass;
    });
}

// RTL Management
function initRTL() {
    const rtlToggles = document.querySelectorAll('#rtl-toggle, #mobile-rtl-toggle');
    const savedRTL = localStorage.getItem('rtl') === 'true';
    document.documentElement.setAttribute('dir', savedRTL ? 'rtl' : 'ltr');

    rtlToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('dir') === 'rtl';
            const next = !current;
            document.documentElement.setAttribute('dir', next ? 'rtl' : 'ltr');
            localStorage.setItem('rtl', next);
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const menuOverlay = document.getElementById('mobileMenuOverlay');
    const menuClose = document.getElementById('mobileMenuClose');
    const menuBackdrop = document.getElementById('mobileMenuBackdrop');

    if (!menuToggle || !menuOverlay) return;

    function openMenu() {
        menuOverlay.classList.add('active');
        if (menuBackdrop) menuBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menuOverlay.classList.remove('active');
        if (menuBackdrop) menuBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-menu-nav a').forEach(a => a.addEventListener('click', closeMenu));
}

// Cart Setup
function initCart() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    updateCartBadges(count);

    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    });
}

// Back to top
function initBackToTop() {
    let btn = document.getElementById('back-to-top');
    if (!btn) {
        btn = document.createElement('button');
        btn.type = 'button';
        btn.id = 'back-to-top';
        btn.className = 'back-to-top';
        btn.setAttribute('aria-label', 'Back to top');
        btn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
        document.body.appendChild(btn);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) btn.classList.add('visible');
        else btn.classList.remove('visible');
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Active Nav
function initActiveNav() {
    let page = window.location.pathname.split('/').pop() || 'index.html';
    page = page.toLowerCase();
    document.querySelectorAll('.nav-links a[href], .mobile-menu-nav a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        if (href.split('/').pop().toLowerCase() === page) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    });
}

// FAQ Accordion
function initFAQAccordion() {
    document.querySelectorAll('.faq-accordion').forEach(root => {
        const items = root.querySelectorAll('.faq-accordion-item');
        items.forEach(item => {
            const trigger = item.querySelector('.faq-accordion-trigger');
            const panel = item.querySelector('.faq-accordion-panel');
            if (!trigger || !panel) return;

            trigger.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');
                items.forEach(other => {
                    other.classList.remove('is-open');
                    const p = other.querySelector('.faq-accordion-panel');
                    const t = other.querySelector('.faq-accordion-trigger');
                    if (p) p.style.maxHeight = null;
                    if (t) t.setAttribute('aria-expanded', 'false');
                });
                if (!isOpen) {
                    item.classList.add('is-open');
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                    trigger.setAttribute('aria-expanded', 'true');
                }
            });
        });
    });
}

// Timeline
function initTimelineMilestones() {
    const milestones = document.querySelectorAll('.timeline-milestone');
    if (milestones.length === 0) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('is-visible');
        });
    }, { threshold: 0.15 });
    milestones.forEach(m => obs.observe(m));
}

// Animations
function initAnimations() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('animate-in');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// Password toggle
function initPasswordToggle() {
    document.querySelectorAll('.password-toggle').forEach(t => {
        t.addEventListener('click', () => {
            const input = t.previousElementSibling;
            if (input) {
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                t.classList.toggle('fa-eye');
                t.classList.toggle('fa-eye-slash');
            }
        });
    });
}

// ==========================================
// CART PAGE ENGINE
// ==========================================
function initCartPage() {
    renderCart();

    const applyPromoBtn = document.querySelector('.promo-btn');
    const promoInput = document.querySelector('.promo-input-group input');
    if (applyPromoBtn && promoInput) {
        applyPromoBtn.addEventListener('click', () => {
            const code = promoInput.value.trim().toUpperCase();
            if (code === 'SAFEBAKE20' || code === 'GLUTENFREE10' || code === 'FREEDELIVERY') {
                sessionStorage.setItem('activeDiscount', code);
                showToast(`Promo "${code}" applied successfully! 🎉`, 'success');
                renderCart();
            } else {
                showToast('Invalid promo code. Try SAFEBAKE20 or FREEDELIVERY', 'warning');
            }
        });
    }

    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const cart = getCart();
            if (cart.length === 0) {
                showToast('Your cart is empty! Add safe treats first.', 'warning');
                return;
            }
            openCheckoutModal();
        });
    }
}

function renderCart() {
    const cart = getCart();
    const cartItemsContainer = document.querySelector('.cart-items');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');
    const discountRow = document.getElementById('cart-discount-row');
    const discountEl = document.getElementById('cart-discount');
    const allergenBanner = document.getElementById('cart-allergen-guard');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart" style="text-align:center; padding:4rem 1rem;">
                <i class="fas fa-basket-shopping" style="font-size:4rem; color:var(--text-muted); margin-bottom:1.5rem;"></i>
                <h2>Your Safe Basket is Empty</h2>
                <p style="color:var(--text-muted); margin-bottom:2rem;">Explore 100% certified gluten-free, vegan & nut-safe bakery treats from our artisan partners!</p>
                <a href="menu.html" class="btn btn-primary"><i class="fas fa-utensils"></i> Browse Bakery Catalog</a>
            </div>
        `;
        if (subtotalEl) subtotalEl.textContent = '$0.00';
        if (taxEl) taxEl.textContent = '$0.00';
        if (totalEl) totalEl.textContent = '$0.00';
        if (allergenBanner) allergenBanner.style.display = 'none';
        return;
    }

    let subtotal = 0;
    cartItemsContainer.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; border-bottom:1px solid var(--border); padding-bottom:1rem;">
            <h2 style="font-size:1.4rem; margin:0; color:var(--primary);"><i class="fas fa-clipboard-check"></i> Aggregated Bakery Items (${cart.length})</h2>
            <button type="button" class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.85rem;" onclick="clearCart()"><i class="fas fa-trash"></i> Clear All</button>
        </div>
    `;

    cart.forEach((item, index) => {
        const itemTotal = item.price * (item.qty || 1);
        subtotal += itemTotal;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image || 'img/gf_chocolate_brownies.png'}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div>
                        <h4 class="cart-item-title" style="margin:0; font-size:1.1rem;">${item.name}</h4>
                        <span style="font-size:0.8rem; color:var(--secondary); font-weight:700;"><i class="fas fa-store"></i> ${item.bakery || 'SafeBakes Artisan'}</span>
                    </div>
                    <span class="cart-item-price" style="font-size:1.15rem; font-weight:700; color:var(--primary);">$${itemTotal.toFixed(2)}</span>
                </div>
                ${item.customMessage ? `<div style="background:var(--accent); padding:4px 8px; border-radius:6px; font-size:0.8rem; margin:6px 0; color:var(--primary); font-weight:600;"><i class="fas fa-pen-nib"></i> Inscription: "${item.customMessage}"</div>` : ''}
                <div style="display:flex; gap:6px; flex-wrap:wrap; margin:6px 0;">
                    ${(item.tags || ['gluten-free']).map(t => `<span style="background:var(--bg-main); border:1px solid var(--border); font-size:0.75rem; padding:2px 8px; border-radius:12px; font-weight:600; text-transform:capitalize;">${t}</span>`).join('')}
                </div>
                <div class="cart-item-quantity" style="display:flex; justify-content:space-between; align-items:center; margin-top:0.8rem;">
                    <div class="quantity-controls">
                        <button type="button" class="quantity-btn" onclick="updateCartItemQty(${index}, -1)">-</button>
                        <span class="quantity-input" style="display:inline-flex; align-items:center; justify-content:center;">${item.qty || 1}</span>
                        <button type="button" class="quantity-btn" onclick="updateCartItemQty(${index}, 1)">+</button>
                    </div>
                    <button type="button" class="remove-item" onclick="removeCartItem(${index})" title="Remove item"><i class="fas fa-trash-alt"></i> Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    // Discount calculations
    const activeDiscount = sessionStorage.getItem('activeDiscount');
    let discountAmount = 0;
    if (activeDiscount === 'SAFEBAKE20') {
        discountAmount = subtotal * 0.20;
    } else if (activeDiscount === 'GLUTENFREE10') {
        discountAmount = subtotal * 0.10;
    }

    const deliveryFee = activeDiscount === 'FREEDELIVERY' ? 0.00 : 3.99;
    const tax = (subtotal - discountAmount) * 0.08;
    const grandTotal = Math.max(0, subtotal - discountAmount + tax + deliveryFee);

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;

    const deliveryFeeEl = document.getElementById('cart-delivery-fee');
    if (deliveryFeeEl) deliveryFeeEl.textContent = deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`;

    if (discountRow && discountEl) {
        if (discountAmount > 0) {
            discountRow.style.display = 'flex';
            discountEl.textContent = `-$${discountAmount.toFixed(2)} (${activeDiscount})`;
        } else {
            discountRow.style.display = 'none';
        }
    }

    // Allergen Cross-Check Guard
    if (allergenBanner) {
        allergenBanner.style.display = 'block';
        allergenBanner.innerHTML = `
            <div style="background:rgba(76, 175, 80, 0.1); border:1px solid var(--secondary); border-radius:12px; padding:1rem 1.25rem; display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem;">
                <div style="width:40px; height:40px; border-radius:50%; background:var(--secondary); color:white; display:flex; align-items:center; justify-content:center; font-size:1.2rem; flex-shrink:0;">
                    <i class="fas fa-shield-virus"></i>
                </div>
                <div>
                    <h5 style="margin:0; color:#1b5e20; font-size:0.95rem; text-align:start;">SafeBakes 100% Allergen Isolation Guard Active</h5>
                    <p style="margin:0; font-size:0.8rem; color:var(--text-muted); text-align:start;">All items in your basket will be prepared in dedicated certified allergen-free zones and sealed in tamper-evident protective containers.</p>
                </div>
            </div>
        `;
    }
}

function updateCartItemQty(index, delta) {
    const cart = getCart();
    if (!cart[index]) return;
    cart[index].qty = (cart[index].qty || 1) + delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart(cart);
    renderCart();
}

function removeCartItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
    showToast('Item removed from cart', 'warning');
}

function clearCart() {
    saveCart([]);
    renderCart();
    showToast('Cart emptied', 'info');
}

// Checkout Modal
function openCheckoutModal() {
    const cart = getCart();
    const user = getSafeBakesUser();
    let modal = document.getElementById('checkout-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'checkout-modal';
        modal.className = 'customizer-modal-backdrop';
        document.body.appendChild(modal);
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * (i.qty || 1)), 0);

    modal.innerHTML = `
        <div class="customizer-modal-content" style="max-width:550px;">
            <div class="customizer-modal-header">
                <div>
                    <h3 style="margin:0; color:var(--primary);"><i class="fas fa-shield-halved"></i> Allergen-Safe Express Checkout</h3>
                    <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">Real-Time Order Aggregator Dispatch</p>
                </div>
                <button type="button" class="close-modal-btn" onclick="closeCheckoutModal()"><i class="fas fa-times"></i></button>
            </div>
            <div class="customizer-modal-body" style="max-height:70vh; overflow-y:auto;">
                <div class="form-group" style="margin-bottom:1rem;">
                    <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Delivery Address</label>
                    <input type="text" id="checkout-address" class="customizer-input" value="${user.address || '742 Evergreen Terrace, Suite 4B'}" required>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:1rem;">
                    <div>
                        <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Recipient Name</label>
                        <input type="text" id="checkout-name" class="customizer-input" value="${user.name || 'Emily Watson'}" required>
                    </div>
                    <div>
                        <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Phone Number</label>
                        <input type="tel" id="checkout-phone" class="customizer-input" value="${user.phone || '+1 (555) 890-1234'}" required>
                    </div>
                </div>

                <div class="form-group" style="margin-bottom:1rem;">
                    <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Delivery Speed Slot</label>
                    <select id="checkout-speed" class="customizer-input">
                        <option value="express">🚀 Instant Express Hot-Bake Delivery (25-35 mins)</option>
                        <option value="scheduled_lunch">📅 Today at 1:00 PM (Fresh Noon Batch)</option>
                        <option value="scheduled_evening">📅 Today at 6:00 PM (Evening Dinner/Party)</option>
                    </select>
                </div>

                <div class="form-group" style="margin-bottom:1rem;">
                    <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Courier Allergen Safety Protocol</label>
                    <div style="background:var(--accent); padding:10px 12px; border-radius:8px; font-size:0.85rem;">
                        <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                            <input type="checkbox" checked disabled>
                            <span>Sealed Sterile Insulated Compartment (Zero cross-contact in transit)</span>
                        </label>
                        <label style="display:flex; align-items:center; gap:8px; cursor:pointer; margin-top:6px;">
                            <input type="checkbox" id="contactless-delivery" checked>
                            <span>Contactless Doorstep Drop-off with Photo Confirmation</span>
                        </label>
                    </div>
                </div>

                <div class="form-group" style="margin-bottom:1rem;">
                    <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Payment Method</label>
                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
                        <button type="button" class="btn btn-outline pay-opt active" onclick="selectPayOpt(this)" style="padding:8px; font-size:0.85rem;"><i class="fas fa-credit-card"></i> Card</button>
                        <button type="button" class="btn btn-outline pay-opt" onclick="selectPayOpt(this)" style="padding:8px; font-size:0.85rem;"><i class="fab fa-apple-pay"></i> Apple Pay</button>
                        <button type="button" class="btn btn-outline pay-opt" onclick="selectPayOpt(this)" style="padding:8px; font-size:0.85rem;"><i class="fab fa-google-pay"></i> GPay</button>
                    </div>
                </div>
            </div>
            <div class="customizer-modal-footer">
                <button type="button" class="btn btn-outline" onclick="closeCheckoutModal()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="confirmPlaceOrder()"><i class="fas fa-lock"></i> Place Order ($${(subtotal * 1.08 + 3.99).toFixed(2)})</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function selectPayOpt(btn) {
    document.querySelectorAll('.pay-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function confirmPlaceOrder() {
    const cart = getCart();
    const address = document.getElementById('checkout-address').value;
    const name = document.getElementById('checkout-name').value;
    const speed = document.getElementById('checkout-speed').value;

    const orderId = 'SB-' + Math.floor(1000 + Math.random() * 9000);
    const subtotal = cart.reduce((sum, i) => sum + (i.price * (i.qty || 1)), 0);
    const total = subtotal * 1.08 + 3.99;

    const newOrder = {
        orderId: orderId,
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        bakery: cart[0] ? cart[0].bakery : 'Flourish Safe Bakes',
        items: cart,
        total: total,
        status: 'placed',
        statusText: 'Order Received & Dispatched to Kitchen',
        eta: speed === 'express' ? '28 mins' : 'Scheduled',
        address: address,
        customerName: name,
        allergensDeclared: ['Gluten-Free', 'Dairy-Free', 'Nut-Free'],
        progressPct: 20,
        driverName: 'Alex Rivera (#402)'
    };

    const orders = JSON.parse(localStorage.getItem('safeBakesOrders') || '[]');
    orders.unshift(newOrder);
    localStorage.setItem('safeBakesOrders', JSON.stringify(orders));

    // Clear Cart
    saveCart([]);
    closeCheckoutModal();

    showToast(`Order #${orderId} confirmed! Dispatched to bakery. 🥐`, 'success');

    setTimeout(() => {
        window.location.href = `dashboard.html?tab=orders&highlight=${orderId}`;
    }, 1200);
}

// ==========================================
// MENU & AGGREGATOR CATALOG
// ==========================================
function initAggregatorMenuPage() {
    const menu = JSON.parse(localStorage.getItem('safeBakesMenu') || JSON.stringify(DEFAULT_MENU_ITEMS));
    const filterChips = document.querySelectorAll('.filter-chip, .category-btn');
    const searchInput = document.getElementById('menu-search-input');
    const bakerySelect = document.getElementById('bakery-filter-select');
    const sortSelect = document.getElementById('sort-filter-select');

    let activeCategory = 'all';
    let activeAllergyTag = 'all';
    let searchQuery = '';
    let selectedBakery = 'all';

    function filterAndRender() {
        const productCards = document.querySelectorAll('.card[data-category], .product-item-card');
        productCards.forEach(card => {
            const cat = (card.getAttribute('data-category') || '').toLowerCase();
            const tags = (card.getAttribute('data-tags') || '').toLowerCase();
            const bakery = (card.getAttribute('data-bakery') || '').toLowerCase();
            const text = card.innerText.toLowerCase();

            const matchCat = activeCategory === 'all' || cat.includes(activeCategory);
            const matchTag = activeAllergyTag === 'all' || tags.includes(activeAllergyTag);
            const matchBakery = selectedBakery === 'all' || bakery.includes(selectedBakery.toLowerCase());
            const matchSearch = searchQuery === '' || text.includes(searchQuery);

            if (matchCat && matchTag && matchBakery && matchSearch) {
                card.style.display = 'flex';
                card.classList.add('animate-in');
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            const filter = chip.getAttribute('data-filter') || 'all';
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            if (['gluten-free', 'vegan', 'nut-free', 'sugar-free', 'dairy-free'].includes(filter)) {
                activeAllergyTag = filter;
                activeCategory = 'all';
            } else {
                activeCategory = filter;
                activeAllergyTag = 'all';
            }
            filterAndRender();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            filterAndRender();
        });
    }

    if (bakerySelect) {
        bakerySelect.addEventListener('change', (e) => {
            selectedBakery = e.target.value;
            filterAndRender();
        });
    }

    // Attach customizer click to all "Add to Cart" or "Customize" buttons
    document.querySelectorAll('.btn-add-cart, .btn-customize-treat').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pid = btn.getAttribute('data-product-id') || 'p1';
            openCustomizerModal(pid);
        });
    });
}

// ==========================================
// DASHBOARD ENGINE & LIVE TRACKER
// ==========================================
function initDashboardEngine() {
    initDashboardTabs();
    initDashboardMobileSidebar();
    renderDashboardRoleView();
    renderLiveOrdersTab();
    renderKanbanDispatcher();
    renderPartnerMenuEditor();
    renderAuditLogs();
}

function initDashboardTabs() {
    const tabLinks = document.querySelectorAll('.sidebar-nav-link[data-tab]');
    const tabSections = document.querySelectorAll('.dashboard-section');

    const urlParams = new URLSearchParams(window.location.search);
    const initialTab = urlParams.get('tab') || 'overview';

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = link.getAttribute('data-tab');

            tabLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            tabSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetTab) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Set initial
    const matchedLink = Array.from(tabLinks).find(l => l.getAttribute('data-tab') === initialTab);
    if (matchedLink) matchedLink.click();
}

function initDashboardMobileSidebar() {
    const toggle = document.getElementById('dashboardSidebarToggle');
    const sidebar = document.getElementById('dashboardSidebar');
    const backdrop = document.getElementById('dashboardSidebarBackdrop');
    const closeBtn = document.getElementById('dashboardSidebarClose');

    if (!toggle || !sidebar || !backdrop) return;

    function openDrawer() {
        sidebar.classList.add('is-open');
        backdrop.classList.add('is-active');
        document.body.classList.add('dashboard-sidebar-open');
    }

    function closeDrawer() {
        sidebar.classList.remove('is-open');
        backdrop.classList.remove('is-active');
        document.body.classList.remove('dashboard-sidebar-open');
    }

    toggle.addEventListener('click', openDrawer);
    backdrop.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
}

function renderDashboardRoleView() {
    const user = getSafeBakesUser();
    const profileName = document.querySelector('.profile-name');
    const profileRole = document.querySelector('.profile-role');
    const roleBanner = document.getElementById('role-context-banner');

    if (profileName) profileName.textContent = user.name || 'Emily Watson';
    if (profileRole) profileRole.textContent = user.roleTitle || 'Customer Portal';

    if (roleBanner) {
        let badgeColor = user.role === 'admin' ? '#D97706' : user.role === 'partner' ? '#FFC400' : user.role === 'driver' ? '#2563eb' : '#2e7d32';
        roleBanner.innerHTML = `
            <div style="background:var(--bg-card); border-left:4px solid ${badgeColor}; padding:1rem 1.25rem; border-radius:var(--radius); box-shadow:var(--shadow); display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem; flex-wrap:wrap; gap:1rem;">
                <div style="display:flex; align-items:center; gap:12px; flex:1 1 240px; min-width:0;">
                    <div style="background:${badgeColor}; color:white; width:40px; height:40px; min-width:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.1rem; flex-shrink:0;">
                        <i class="fas ${user.role === 'admin' ? 'fa-user-shield' : user.role === 'partner' ? 'fa-store' : user.role === 'driver' ? 'fa-motorcycle' : 'fa-user'}"></i>
                    </div>
                    <div style="min-width:0;">
                        <h4 style="margin:0; font-size:1.05rem; color:var(--text-main); text-align:start; word-break:break-word;">Viewing Mode: ${user.roleTitle || 'Customer'}</h4>
                        <p style="margin:0; font-size:0.8rem; color:var(--text-muted); text-align:start;">Simulating active workspace controls and workflow permissions</p>
                    </div>
                </div>
                <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap; width:100%; max-width:480px;">
                    <span style="font-size:0.8rem; color:var(--text-muted); width:100%; margin-bottom:2px;">Quick Switch Mode:</span>
                    <button class="btn btn-outline" style="padding:5px 8px; font-size:0.75rem; flex:1 1 calc(50% - 6px); min-width:105px; justify-content:center;" onclick="switchDemoRole('customer')">Customer</button>
                    <button class="btn btn-outline" style="padding:5px 8px; font-size:0.75rem; flex:1 1 calc(50% - 6px); min-width:105px; justify-content:center;" onclick="switchDemoRole('partner')">Bakery Owner</button>
                    <button class="btn btn-outline" style="padding:5px 8px; font-size:0.75rem; flex:1 1 calc(50% - 6px); min-width:105px; justify-content:center;" onclick="switchDemoRole('admin')">Super Admin</button>
                    <button class="btn btn-outline" style="padding:5px 8px; font-size:0.75rem; flex:1 1 calc(50% - 6px); min-width:105px; justify-content:center;" onclick="switchDemoRole('driver')">Courier Driver</button>
                </div>
            </div>
        `;
    }
}

function renderLiveOrdersTab() {
    const orders = JSON.parse(localStorage.getItem('safeBakesOrders') || '[]');
    const liveTrackerContainer = document.getElementById('live-order-tracker-container');
    const ordersTableBody = document.getElementById('dashboard-orders-tbody');
    const mobileCardsContainer = document.getElementById('dashboard-mobile-orders');

    if (orders.length === 0) return;

    const activeOrder = orders[0];

    if (liveTrackerContainer) {
        liveTrackerContainer.innerHTML = `
            <div style="background:var(--bg-card); border-radius:var(--radius); border:1px solid var(--border); padding:1.5rem 1.25rem; margin-bottom:2rem; box-shadow:var(--shadow);">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:1.25rem; border-bottom:1px solid var(--border); padding-bottom:1rem;">
                    <div>
                        <span style="background:var(--accent); color:var(--primary); font-weight:700; font-size:0.75rem; padding:3px 8px; border-radius:20px; display:inline-block; margin-bottom:4px;">LIVE DISPATCH #${activeOrder.orderId}</span>
                        <h3 style="margin:0; font-size:1.15rem; color:var(--primary); text-align:start;">${activeOrder.bakery} &bull; Express Hot-Bake</h3>
                    </div>
                    <div style="text-align:end;">
                        <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Estimated Arrival</span>
                        <span style="font-size:1.25rem; font-weight:700; color:var(--secondary);">${activeOrder.eta}</span>
                    </div>
                </div>

                <!-- Interactive Stepper -->
                <div class="order-stepper" style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; margin:1.5rem 0; position:relative;">
                    ${renderStepItem(1, 'Order Placed', 'fa-receipt', activeOrder.progressPct >= 20)}
                    ${renderStepItem(2, 'In Oven (375°F)', 'fa-fire-burner', activeOrder.progressPct >= 40)}
                    ${renderStepItem(3, 'Lab Swab Pass', 'fa-vial-circle-check', activeOrder.progressPct >= 60)}
                    ${renderStepItem(4, 'Dispatched', 'fa-motorcycle', activeOrder.progressPct >= 80)}
                    ${renderStepItem(5, 'Delivered', 'fa-house-circle-check', activeOrder.progressPct >= 100)}
                </div>

                <!-- Simulation Map Graphic -->
                <div style="background:linear-gradient(135deg, #1C1917, #292524); border-radius:12px; padding:1.25rem 1rem; color:white; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                    <div style="display:flex; align-items:center; gap:12px; min-width:0; flex:1 1 200px;">
                        <div style="width:42px; height:42px; min-width:42px; border-radius:50%; background:#2563eb; display:flex; align-items:center; justify-content:center; font-size:1.2rem; flex-shrink:0;">
                            <i class="fas fa-truck-fast"></i>
                        </div>
                        <div style="min-width:0;">
                            <h4 style="margin:0; color:white; font-size:0.95rem; text-align:start; word-break:break-word;">Driver: ${activeOrder.driverName || 'Alex Rivera (#402)'}</h4>
                            <p style="margin:0; font-size:0.75rem; color:#a8a29e; text-align:start; word-break:break-word;">Sterile insulated box &bull; 0.8 miles away</p>
                        </div>
                    </div>
                    <div style="display:flex; gap:8px; width:100%;">
                        <button type="button" class="btn btn-outline" style="color:white; border-color:#57534e; padding:6px 12px; font-size:0.8rem; width:100%; justify-content:center;" onclick="simulateAdvanceOrder()"><i class="fas fa-forward-step"></i> Advance Simulation Stage</button>
                    </div>
                </div>
            </div>
        `;
    }

    if (ordersTableBody) {
        ordersTableBody.innerHTML = orders.map(ord => `
            <tr>
                <td style="font-weight:700; color:var(--primary);">${ord.orderId}</td>
                <td>${ord.date}</td>
                <td>${ord.bakery}</td>
                <td>${ord.items.map(i => `${i.name} (x${i.qty || 1})`).join(', ')}</td>
                <td style="font-weight:700;">$${ord.total.toFixed(2)}</td>
                <td><span class="status-pill ${ord.status === 'delivered' ? 'status-delivered' : 'status-pending'}">${ord.statusText || ord.status}</span></td>
            </tr>
        `).join('');
    }

    if (mobileCardsContainer) {
        mobileCardsContainer.innerHTML = orders.map(ord => `
            <div class="mobile-order-card">
                <div class="order-id">#${ord.orderId}</div>
                <div class="order-meta">${ord.date} &bull; ${ord.bakery}</div>
                <div class="order-items">${ord.items.map(i => `${i.name} (x${i.qty || 1})`).join(', ')}</div>
                <div class="order-total">$${ord.total.toFixed(2)}</div>
                <span class="status-pill ${ord.status === 'delivered' ? 'status-delivered' : 'status-pending'}">${ord.statusText || ord.status}</span>
            </div>
        `).join('');
    }
}

function renderStepItem(num, label, icon, isDone) {
    const activeColor = '#2e7d32';
    const inactiveColor = '#a8a29e';
    return `
        <div style="text-align:center; display:flex; flex-direction:column; align-items:center; gap:6px;">
            <div style="width:36px; height:36px; border-radius:50%; background:${isDone ? activeColor : 'var(--bg-main)'}; color:${isDone ? 'white' : inactiveColor}; border:2px solid ${isDone ? activeColor : 'var(--border)'}; display:flex; align-items:center; justify-content:center; font-size:0.9rem; font-weight:700; transition:all 0.3s ease;">
                <i class="fas ${icon}"></i>
            </div>
            <span style="font-size:0.75rem; font-weight:${isDone ? '700' : '500'}; color:${isDone ? 'var(--text-main)' : 'var(--text-muted)'}; line-height:1.2;">${label}</span>
        </div>
    `;
}

function simulateAdvanceOrder() {
    const orders = JSON.parse(localStorage.getItem('safeBakesOrders') || '[]');
    if (orders.length === 0) return;

    const ord = orders[0];
    if (ord.progressPct < 40) {
        ord.progressPct = 40;
        ord.status = 'baking';
        ord.statusText = 'In Oven - Baking Artisan Batch (375°F)';
        ord.eta = '22 mins';
    } else if (ord.progressPct < 60) {
        ord.progressPct = 60;
        ord.status = 'lab_tested';
        ord.statusText = 'Allergy Lab Swab Complete: <5ppm Verified';
        ord.eta = '15 mins';
    } else if (ord.progressPct < 80) {
        ord.progressPct = 80;
        ord.status = 'out_for_delivery';
        ord.statusText = 'Courier En Route in Insulated EV Van';
        ord.eta = '7 mins';
    } else {
        ord.progressPct = 100;
        ord.status = 'delivered';
        ord.statusText = 'Delivered Safely & Handed to Customer';
        ord.eta = 'Delivered just now';
    }

    localStorage.setItem('safeBakesOrders', JSON.stringify(orders));
    renderLiveOrdersTab();
    renderKanbanDispatcher();
    showToast(`Order status updated to: ${ord.statusText}`, 'success');
}

// Admin / Kitchen Kanban Dispatcher
function renderKanbanDispatcher() {
    const kanbanContainer = document.getElementById('kanban-dispatcher-board');
    if (!kanbanContainer) return;

    const orders = JSON.parse(localStorage.getItem('safeBakesOrders') || '[]');

    const cols = [
        { id: 'placed', title: '1. Incoming / Received', icon: 'fa-inbox', filter: o => o.status === 'placed' },
        { id: 'baking', title: '2. Kitchen Oven / Prep', icon: 'fa-fire-burner', filter: o => o.status === 'baking' },
        { id: 'lab_tested', title: '3. Lab Swab Tested', icon: 'fa-microscope', filter: o => o.status === 'lab_tested' },
        { id: 'out_for_delivery', title: '4. Driver On Route', icon: 'fa-truck', filter: o => o.status === 'out_for_delivery' },
        { id: 'delivered', title: '5. Completed', icon: 'fa-circle-check', filter: o => o.status === 'delivered' }
    ];

    kanbanContainer.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:15px; margin-top:1.5rem;">
            ${cols.map(col => {
                const matchingOrders = orders.filter(col.filter);
                return `
                    <div style="background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:1rem; min-height:300px; display:flex; flex-direction:column;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">
                            <span style="font-weight:700; font-size:0.85rem; color:var(--primary);"><i class="fas ${col.icon}"></i> ${col.title}</span>
                            <span style="background:var(--bg-card); padding:2px 8px; border-radius:10px; font-size:0.75rem; font-weight:700; border:1px solid var(--border);">${matchingOrders.length}</span>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:10px; flex:1;">
                            ${matchingOrders.map(o => `
                                <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:10px; box-shadow:var(--shadow);">
                                    <div style="display:flex; justify-content:space-between; font-weight:700; font-size:0.85rem; color:var(--primary); margin-bottom:4px;">
                                        <span>#${o.orderId}</span>
                                        <span>$${o.total.toFixed(2)}</span>
                                    </div>
                                    <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:6px;">${o.bakery}</div>
                                    <div style="font-size:0.8rem; font-weight:600; margin-bottom:8px;">${o.items[0] ? o.items[0].name : 'Treats'}</div>
                                    <button class="btn btn-outline" style="width:100%; padding:4px 8px; font-size:0.75rem;" onclick="advanceKanbanOrder('${o.orderId}')">
                                        <i class="fas fa-arrow-right"></i> Move Next
                                    </button>
                                </div>
                            `).join('')}
                            ${matchingOrders.length === 0 ? `<div style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:2rem 0;">No active orders</div>` : ''}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function advanceKanbanOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem('safeBakesOrders') || '[]');
    const ord = orders.find(o => o.orderId === orderId);
    if (!ord) return;

    if (ord.status === 'placed') {
        ord.status = 'baking';
        ord.progressPct = 40;
        ord.statusText = 'In Oven - Baking Artisan Batch (375°F)';
    } else if (ord.status === 'baking') {
        ord.status = 'lab_tested';
        ord.progressPct = 60;
        ord.statusText = 'Lab Swab Tested (<5ppm Allergen Pass)';
    } else if (ord.status === 'lab_tested') {
        ord.status = 'out_for_delivery';
        ord.progressPct = 80;
        ord.statusText = 'Courier Picked Up & On Delivery Route';
    } else if (ord.status === 'out_for_delivery') {
        ord.status = 'delivered';
        ord.progressPct = 100;
        ord.statusText = 'Delivered Safely';
    }

    localStorage.setItem('safeBakesOrders', JSON.stringify(orders));
    renderLiveOrdersTab();
    renderKanbanDispatcher();
    showToast(`Updated Order #${orderId} stage!`, 'success');
}

// Bakery Menu Editor
function renderPartnerMenuEditor() {
    const menuContainer = document.getElementById('bakery-menu-inventory-container');
    if (!menuContainer) return;

    const menu = JSON.parse(localStorage.getItem('safeBakesMenu') || JSON.stringify(DEFAULT_MENU_ITEMS));

    menuContainer.innerHTML = `
        <div style="background:var(--bg-card); border-radius:var(--radius); border:1px solid var(--border); padding:1.5rem; margin-top:1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
                <div>
                    <h3 style="margin:0; font-size:1.2rem; color:var(--primary); text-align:start;"><i class="fas fa-boxes-stacked"></i> Live Bakery Catalog & Stock Manager</h3>
                    <p style="margin:0; font-size:0.8rem; color:var(--text-muted); text-align:start;">Toggle live ordering availability and update allergen certifications</p>
                </div>
                <button type="button" class="btn btn-primary" onclick="openAddProductModal()"><i class="fas fa-plus"></i> Add New Confection</button>
            </div>
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Item Image</th>
                            <th>Confection Name</th>
                            <th>Bakery Partner</th>
                            <th>Dietary & Allergen Tags</th>
                            <th>Price</th>
                            <th>Prep Time</th>
                            <th>Live Stock Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${menu.map((p, idx) => `
                            <tr>
                                <td><img src="${p.image}" alt="${p.name}" style="width:45px; height:45px; object-fit:cover; border-radius:6px;"></td>
                                <td style="font-weight:700; text-align:start;">${p.name}</td>
                                <td>${p.bakeryName}</td>
                                <td>
                                    <div style="display:flex; gap:4px; flex-wrap:wrap; justify-content:center;">
                                        ${p.tags.map(t => `<span style="background:var(--bg-main); border:1px solid var(--border); font-size:0.7rem; padding:2px 6px; border-radius:10px;">${t}</span>`).join('')}
                                    </div>
                                </td>
                                <td style="font-weight:700; color:var(--primary);">$${p.price.toFixed(2)}</td>
                                <td>${p.prepTime || '20 min'}</td>
                                <td>
                                    <button class="btn btn-outline" style="padding:4px 10px; font-size:0.75rem; border-color:${p.inStock ? '#2e7d32' : '#dc2626'}; color:${p.inStock ? '#2e7d32' : '#dc2626'};" onclick="toggleProductStock(${idx})">
                                        <i class="fas ${p.inStock ? 'fa-check' : 'fa-ban'}"></i> ${p.inStock ? 'In Stock' : 'Sold Out'}
                                    </button>
                                </td>
                                <td>
                                    <button class="btn btn-outline" style="padding:4px 8px; font-size:0.75rem;" onclick="deleteMenuItem(${idx})"><i class="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function toggleProductStock(index) {
    const menu = JSON.parse(localStorage.getItem('safeBakesMenu') || JSON.stringify(DEFAULT_MENU_ITEMS));
    if (!menu[index]) return;
    menu[index].inStock = !menu[index].inStock;
    localStorage.setItem('safeBakesMenu', JSON.stringify(menu));
    renderPartnerMenuEditor();
    showToast(`Stock updated for "${menu[index].name}"`, 'info');
}

function deleteMenuItem(index) {
    const menu = JSON.parse(localStorage.getItem('safeBakesMenu') || JSON.stringify(DEFAULT_MENU_ITEMS));
    menu.splice(index, 1);
    localStorage.setItem('safeBakesMenu', JSON.stringify(menu));
    renderPartnerMenuEditor();
    showToast('Menu item removed', 'warning');
}

function openAddProductModal() {
    const user = getSafeBakesUser();
    let modal = document.getElementById('add-product-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'add-product-modal';
        modal.className = 'customizer-modal-backdrop';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="customizer-modal-content" style="max-width:520px;">
            <div class="customizer-modal-header">
                <div>
                    <h3 style="margin:0; color:var(--primary);"><i class="fas fa-plus-circle"></i> Add Confection to Aggregator</h3>
                    <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">Publish new allergen-safe baked treat</p>
                </div>
                <button type="button" class="close-modal-btn" onclick="closeAddProductModal()"><i class="fas fa-times"></i></button>
            </div>
            <div class="customizer-modal-body">
                <div class="form-group" style="margin-bottom:1rem;">
                    <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Item Title</label>
                    <input type="text" id="new-item-title" class="customizer-input" placeholder="e.g. Cinnamon Swirl Brioche Loaf (GF, Vegan)" required>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:1rem;">
                    <div>
                        <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Price ($)</label>
                        <input type="number" id="new-item-price" class="customizer-input" value="14.50" step="0.5" required>
                    </div>
                    <div>
                        <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Category</label>
                        <select id="new-item-category" class="customizer-input">
                            <option value="cakes">Cakes & Confections</option>
                            <option value="breads">Artisan Breads</option>
                            <option value="pastries">Pastries & Tarts</option>
                            <option value="cookies">Cookies & Brownies</option>
                        </select>
                    </div>
                </div>
                <div class="form-group" style="margin-bottom:1rem;">
                    <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Dietary & Safety Tags (Comma separated)</label>
                    <input type="text" id="new-item-tags" class="customizer-input" value="gluten-free, vegan, nut-free" required>
                </div>
                <div class="form-group" style="margin-bottom:1rem;">
                    <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:4px;">Lab Swab Certification</label>
                    <input type="text" id="new-item-cert" class="customizer-input" value="Lab Swab Tested (<5ppm Allergen Pass)" required>
                </div>
            </div>
            <div class="customizer-modal-footer">
                <button type="button" class="btn btn-outline" onclick="closeAddProductModal()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="saveNewProduct()"><i class="fas fa-check"></i> Publish to Menu</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeAddProductModal() {
    const modal = document.getElementById('add-product-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function saveNewProduct() {
    const title = document.getElementById('new-item-title').value.trim();
    const price = parseFloat(document.getElementById('new-item-price').value) || 12.00;
    const category = document.getElementById('new-item-category').value;
    const tagsStr = document.getElementById('new-item-tags').value;
    const cert = document.getElementById('new-item-cert').value;
    const user = getSafeBakesUser();

    if (!title) {
        showToast('Please enter an item title', 'warning');
        return;
    }

    const tags = tagsStr.split(',').map(t => t.trim().toLowerCase()).filter(Boolean);
    const newItem = {
        id: 'p_' + Date.now(),
        name: title,
        bakeryId: 'b1',
        bakeryName: user.bakeryName || 'Flourish Safe Bakes',
        price: price,
        category: category,
        tags: tags,
        image: 'img/gf_chocolate_brownies.png',
        desc: `Freshly baked in certified allergen-safe kitchen. 100% ${tags.join(', ')}.`,
        safetyCert: cert,
        inStock: true,
        prepTime: '20 min'
    };

    const menu = JSON.parse(localStorage.getItem('safeBakesMenu') || JSON.stringify(DEFAULT_MENU_ITEMS));
    menu.unshift(newItem);
    localStorage.setItem('safeBakesMenu', JSON.stringify(menu));

    closeAddProductModal();
    renderPartnerMenuEditor();
    showToast(`Published "${title}" to live catalog! 🎂`, 'success');
}

// Lab Swab Audit Logs
function renderAuditLogs() {
    const auditContainer = document.getElementById('allergen-audit-logs-container');
    if (!auditContainer) return;

    auditContainer.innerHTML = `
        <div style="background:var(--bg-card); border-radius:var(--radius); border:1px solid var(--border); padding:1.5rem; margin-top:1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <h3 style="margin:0; font-size:1.15rem; color:var(--primary); text-align:start;"><i class="fas fa-microscope"></i> Daily Allergen Lab & Hygiene Swab Audits</h3>
                <span style="background:#e8f5e9; color:#2e7d32; padding:4px 10px; border-radius:12px; font-weight:700; font-size:0.8rem;">100% Pass Rate</span>
            </div>
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Audit Date</th>
                            <th>Bakery Kitchen</th>
                            <th>Test Type</th>
                            <th>Sensitivity</th>
                            <th>Result</th>
                            <th>Auditor ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Today, 08:30 AM</td>
                            <td>Flourish Safe Bakes</td>
                            <td>Gluten R5 ELISA Swab</td>
                            <td>&lt; 3 ppm</td>
                            <td><span style="color:#2e7d32; font-weight:700;">NEGATIVE (PASSED)</span></td>
                            <td>#LAB-9042</td>
                        </tr>
                        <tr>
                            <td>Today, 08:00 AM</td>
                            <td>Pure Bliss Patisserie</td>
                            <td>Peanut / Tree-Nut Lateral Flow</td>
                            <td>&lt; 1 ppm</td>
                            <td><span style="color:#2e7d32; font-weight:700;">NEGATIVE (PASSED)</span></td>
                            <td>#LAB-9042</td>
                        </tr>
                        <tr>
                            <td>Yesterday, 06:00 PM</td>
                            <td>Velvet Vegan Confections</td>
                            <td>Dairy (Casein / Whey) Swab</td>
                            <td>&lt; 2.5 ppm</td>
                            <td><span style="color:#2e7d32; font-weight:700;">NEGATIVE (PASSED)</span></td>
                            <td>#LAB-8819</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// Auth Page Role Switcher Enhancements
function initAuthPageEnhancements() {
    const authCard = document.querySelector('.auth-card');
    if (!authCard) return;

    const roleSwitchRow = document.createElement('div');
    roleSwitchRow.className = 'demo-role-quick-logins';
    roleSwitchRow.style.marginBottom = '1.5rem';
    roleSwitchRow.style.background = 'var(--bg-main)';
    roleSwitchRow.style.padding = '1rem';
    roleSwitchRow.style.borderRadius = 'var(--radius)';
    roleSwitchRow.style.border = '1px solid var(--border)';

    roleSwitchRow.innerHTML = `
        <div style="font-size:0.8rem; font-weight:700; color:var(--text-muted); margin-bottom:10px; text-align:center;">
            <i class="fas fa-bolt" style="color:var(--primary);"></i> Instant Demo Role Access
        </div>
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px;">
            <button type="button" class="btn btn-outline" style="height:44px; padding:0 8px; font-size:0.78rem; display:flex; align-items:center; justify-content:center; gap:6px; white-space:nowrap; border-radius:20px; font-weight:700; width:100%; box-sizing:border-box;" onclick="switchDemoRole('customer')">
                <i class="fas fa-user"></i> Customer
            </button>
            <button type="button" class="btn btn-outline" style="height:44px; padding:0 8px; font-size:0.78rem; display:flex; align-items:center; justify-content:center; gap:6px; white-space:nowrap; border-radius:20px; font-weight:700; width:100%; box-sizing:border-box;" onclick="switchDemoRole('partner')">
                <i class="fas fa-store"></i> Bakery Owner
            </button>
            <button type="button" class="btn btn-outline" style="height:44px; padding:0 8px; font-size:0.78rem; display:flex; align-items:center; justify-content:center; gap:6px; white-space:nowrap; border-radius:20px; font-weight:700; width:100%; box-sizing:border-box;" onclick="switchDemoRole('admin')">
                <i class="fas fa-user-shield"></i> Admin Portal
            </button>
            <button type="button" class="btn btn-outline" style="height:44px; padding:0 8px; font-size:0.78rem; display:flex; align-items:center; justify-content:center; gap:6px; white-space:nowrap; border-radius:20px; font-weight:700; width:100%; box-sizing:border-box;" onclick="switchDemoRole('driver')">
                <i class="fas fa-motorcycle"></i> Courier Driver
            </button>
        </div>
    `;

    const form = authCard.querySelector('form');
    if (form) {
        form.parentNode.insertBefore(roleSwitchRow, form);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : 'emily.watson@example.com';
            switchDemoRole('customer');
            showToast('Signed in successfully!', 'success');
            setTimeout(() => window.location.href = 'dashboard.html', 500);
        });
    }
}
