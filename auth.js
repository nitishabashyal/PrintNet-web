/* ==========================================
   Printnet Authentication
   auth.js
   Protects pages and handles logout
========================================== */

(function () {
    const currentPage = window.location.pathname.split("/").pop();

    // Pages that don't require login
    const publicPages = [
        "login.html",
        ""
    ];

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // Redirect unauthenticated users
    if (!isLoggedIn && !publicPages.includes(currentPage)) {
        window.location.href = "login.html";
    }

    // Redirect logged-in users away from login page
    if (isLoggedIn && currentPage === "login.html") {
        window.location.href = "index.html";
    }
})();

/**
 * Logout function
 * Can be called from any page:
 * logout();
 */
function logout() {

    // Remove login data
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    // Redirect to login page
    window.location.href = "login.html";
}

/**
 * Returns the logged-in user's email.
 */
function getCurrentUser() {
    return localStorage.getItem("userEmail");
}

/**
 * Check login status.
 */
function isUserLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
}

/**
 * Display logged-in email inside an element.
 * Example:
 * <span id="userEmail"></span>
 */
function showLoggedInUser(elementId = "userEmail") {
    const element = document.getElementById(elementId);

    if (!element) return;

    const email = getCurrentUser();

    element.textContent = email ? email : "Guest";
}

/**
 * Optional helper:
 * Redirect user manually if not logged in.
 */
function requireLogin() {
    if (!isUserLoggedIn()) {
        window.location.href = "login.html";
    }
}