/* ==========================================
   PrintHub
   shop.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeCart();
    initializeSearch();
    initializeFilters();
    initializeNewsletter();
    updateCartCount();

});

/* ==========================================
   CART INITIALIZATION
========================================== */

function initializeCart() {

    const buttons = document.querySelectorAll(".add-cart");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const product = {

                id: Date.now(),

                name: button.dataset.name,

                price: Number(button.dataset.price),

                quantity: 1

            };

            addToCart(product);

            updateCartCount();

            alert(product.name + " added to cart.");

        });

    });

}

/* ==========================================
   ADD TO CART
========================================== */

function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === product.name);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push(product);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

}

/* ==========================================
   UPDATE CART COUNT
========================================== */

function updateCartCount() {

    const badge = document.getElementById("cartCount");

    if (!badge) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(item => {

        total += item.quantity;

    });

    badge.textContent = total;

}

/* ==========================================
   SEARCH
========================================== */

function initializeSearch() {

    const input = document.getElementById("searchInput");

    if (!input) return;

    input.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/* ==========================================
   CATEGORY FILTERS
========================================== */

function initializeFilters() {

    const buttons = document.querySelectorAll(".filter-btn");

    const cards = document.querySelectorAll(".product-card");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const category = button.dataset.category;

            cards.forEach(card => {

                if (
                    category === "all" ||
                    card.dataset.category === category
                ) {

                    card.style.display = "flex";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

}

/* ==========================================
   NEWSLETTER
========================================== */

function initializeNewsletter() {

    const form = document.getElementById("newsletterForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = form.querySelector("input").value.trim();

        if (email === "") {

            alert("Please enter your email.");

            return;

        }

        alert("Thank you for subscribing!");

        form.reset();

    });

}

/* ==========================================
   CHECKOUT
========================================== */

const checkoutButton = document.getElementById("checkoutBtn");

if (checkoutButton) {

    checkoutButton.addEventListener("click", () => {

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }

        alert(
            "Checkout feature will be connected to payment gateway in the next version."
        );

    });

}

/* ==========================================
   PRODUCT HOVER EFFECT
========================================== */

document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/* ==========================================
   SCROLL TO CART
========================================== */

const cartButton = document.querySelector(".cart-btn");

if (cartButton) {

    cartButton.addEventListener("click", () => {

        const cartSection = document.getElementById("cart");

        if (cartSection) {

            cartSection.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}

/* ==========================================
   LOGOUT SAFETY
========================================== */

if (typeof logout === "function") {

    console.log("Authentication Loaded");

}

/* ==========================================
   END
========================================== */