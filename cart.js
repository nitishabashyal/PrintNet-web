/* ==========================================
   Printnet
   cart.js
   Shopping Cart Manager
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    loadCart();
});

/* ==========================================
   LOAD CART
========================================== */

function loadCart() {

    const cartContainer = document.getElementById("cartItems");
    const totalElement = document.getElementById("cartTotal");

    if (!cartContainer || !totalElement) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        totalElement.textContent = "0";

        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        const subtotal = item.price * item.quantity;

        total += subtotal;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>$${item.price} × ${item.quantity}</p>

            </div>

            <div class="cart-price">

                $${subtotal}

            </div>

            <div class="cart-actions">

                <button class="qty-btn minus" data-index="${index}">−</button>

                <span class="qty">${item.quantity}</span>

                <button class="qty-btn plus" data-index="${index}">+</button>

                <button class="remove-btn" data-index="${index}">
                    Remove
                </button>

            </div>

        `;

        cartContainer.appendChild(cartItem);

    });

    totalElement.textContent = total.toFixed(2);

    attachCartEvents();

    updateCartBadge();

}

/* ==========================================
   CART EVENTS
========================================== */

function attachCartEvents() {

    document.querySelectorAll(".plus").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            let cart = getCart();

            cart[index].quantity++;

            saveCart(cart);

        });

    });

    document.querySelectorAll(".minus").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            let cart = getCart();

            if (cart[index].quantity > 1) {

                cart[index].quantity--;

            } else {

                cart.splice(index, 1);

            }

            saveCart(cart);

        });

    });

    document.querySelectorAll(".remove-btn").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            let cart = getCart();

            cart.splice(index, 1);

            saveCart(cart);

        });

    });

}

/* ==========================================
   STORAGE HELPERS
========================================== */

function getCart() {

    return JSON.parse(localStorage.getItem("cart")) || [];

}

function saveCart(cart) {

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

/* ==========================================
   UPDATE NAVIGATION BADGE
========================================== */

function updateCartBadge() {

    const badge = document.getElementById("cartCount");

    if (!badge) return;

    const cart = getCart();

    let count = 0;

    cart.forEach(item => {

        count += item.quantity;

    });

    badge.textContent = count;

}

/* ==========================================
   CLEAR CART
========================================== */

function clearCart() {

    localStorage.removeItem("cart");

    loadCart();

}

/* ==========================================
   CHECKOUT
========================================== */

const checkoutButton = document.getElementById("checkoutBtn");

if (checkoutButton) {

    checkoutButton.addEventListener("click", () => {

        const cart = getCart();

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }

        const confirmed = confirm(
            "Proceed with checkout?"
        );

        if (!confirmed) return;

        alert(
            "Thank you for shopping with Printnet!\n\nYour order has been placed successfully."
        );

        clearCart();

    });

}

/* ==========================================
   END
========================================== */