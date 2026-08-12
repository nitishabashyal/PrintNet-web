/* ==========================================
   Printnet
   script.js
   Home Page JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Display logged-in user
    if (typeof showLoggedInUser === "function") {
        showLoggedInUser("userEmail");
    }

    setupNewsletter();
    setupSmoothScroll();
    setupScrollAnimations();
    setupCounterAnimation();
    setupActiveNavigation();

});

/* ==========================================
   Newsletter Form
========================================== */

function setupNewsletter() {

    const form = document.querySelector(".newsletter form");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const emailInput = form.querySelector("input");

        const email = emailInput.value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email.");

            return;

        }

        alert("🎉 Thank you for subscribing to PrintHub!");

        emailInput.value = "";

    });

}

/* ==========================================
   Smooth Scroll
========================================== */

function setupSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

}

/* ==========================================
   Scroll Animation
========================================== */

function setupScrollAnimations() {

    const cards = document.querySelectorAll(
        ".feature-card, .product-card, .testimonial"
    );

    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.2

    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all .6s ease";

        observer.observe(card);

    });

}

/* ==========================================
   Animated Stats Counter
========================================== */

function setupCounterAnimation() {

    const stats = document.querySelectorAll(".stat h2");

    if (!stats.length) return;

    const options = {

        threshold: 0.5

    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateStat(entry.target);

            observer.unobserve(entry.target);

        });

    }, options);

    stats.forEach(stat => observer.observe(stat));

}

function animateStat(element) {

    const original = element.textContent;

    const number = parseInt(original.replace(/\D/g, ""));

    const suffix = original.replace(/[0-9]/g, "");

    let current = 0;

    const duration = 1500;

    const increment = number / 60;

    const timer = setInterval(() => {

        current += increment;

        if (current >= number) {

            current = number;

            clearInterval(timer);

        }

        element.textContent = Math.floor(current) + suffix;

    }, duration / 60);

}

/* ==========================================
   Highlight Current Navigation
========================================== */

function setupActiveNavigation() {

    const current = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === current) {

            link.classList.add("active");

        }

    });

}

/* ==========================================
   Feature Card Hover Effect
========================================== */

document.querySelectorAll(".feature-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   Product Button Click
========================================== */

document.querySelectorAll(".buy-btn").forEach(button => {

    button.addEventListener("click", function () {

        console.log("Redirecting to Shop...");

    });

});

/* ==========================================
   Greeting Based on Time
========================================== */

(function () {

    const welcome = document.querySelector(".welcome");

    if (!welcome) return;

    const hour = new Date().getHours();

    let greeting = "Welcome";

    if (hour < 12) {

        greeting = "Good Morning";

    } else if (hour < 18) {

        greeting = "Good Afternoon";

    } else {

        greeting = "Good Evening";

    }

    const email = localStorage.getItem("userEmail") || "User";

    welcome.innerHTML = `${greeting}, <strong>${email}</strong>`;

})();

/* ==========================================
   Back To Top Button (Created Dynamically)
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

Object.assign(topButton.style, {

    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    background: "#2563eb",
    color: "#fff",
    fontSize: "20px",
    display: "none",
    zIndex: "999"

});

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});