/* =====================================
   PrintHub Login
   login.js
===================================== */

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    message.style.color = "#dc2626";
    message.textContent = "";

    // Basic validation
    if (email === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        return;
    }

    // Password length
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        return;
    }

    // Demo Login Credentials
    // Email: admin@printnet.com
    // Password: printnet123

    if (
        email === "admin@printnet.com" &&
        password === "printnet123"
    ) {

        // Save login status
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);

        message.style.color = "#16a34a";
        message.textContent = "Login successful! Redirecting...";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1200);

    } else {

        message.textContent =
            "Invalid email or password.";

    }
});

// Google Button
document.querySelector(".google").addEventListener("click", () => {

    alert(
        "Google Login will be available in a future update."
    );

});

// Facebook Button
document.querySelector(".facebook").addEventListener("click", () => {

    alert(
        "Facebook Login will be available in a future update."
    );

});

// Press Enter to Login
document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        loginForm.requestSubmit();

    }

});

// Show remembered email if available
window.addEventListener("load", () => {

    const rememberedEmail = localStorage.getItem("userEmail");

    if (rememberedEmail) {

        document.getElementById("email").value = rememberedEmail;

    }

});