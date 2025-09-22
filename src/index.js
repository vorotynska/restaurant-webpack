// src/index.js
import "./styles.css"
import loadContact from "./contact";
import loadMenu from "./menu";
import loadHome from "./home";
import loadAbout from "./about";

function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const overlay = document.getElementById("overlay");

// Menu close function
function closeNav() {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    overlay.setAttribute("data-visible", false);
}

// Meny open function
function openNav() {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    overlay.setAttribute("data-visible", true); // ← показать overlay
}

// Active button backlight function
function setActive(buttonId) {
    document.querySelectorAll(".nav button").forEach(btn => {
        btn.classList.remove("active");
    });
    document.getElementById(buttonId).classList.add("active");
}

// Handlers for buttons
document.getElementById("homeBtn").addEventListener("click", () => {
    clearContent();
    loadHome();
    setActive("homeBtn");
    closeNav();
});

document.getElementById("menuBtn").addEventListener("click", () => {
    clearContent();
    loadMenu();
    setActive("menuBtn");
    closeNav();
});

document.getElementById("aboutBtn").addEventListener("click", () => {
    clearContent();
    loadAbout();
    setActive("aboutBtn");
    closeNav();
});

document.getElementById("contactBtn").addEventListener("click", () => {
    clearContent();
    loadContact();
    setActive("contactBtn");
    closeNav();
});

// click the hamburger button
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        openNav();
    } else {
        closeNav();
    }
});

// click the overlay (close menu)
overlay.addEventListener("click", closeNav);

// close when clicking outside the menu
document.addEventListener("click", (e) => {
    const isNavOpen = nav.getAttribute("data-visible") === "true";
    if (
        isNavOpen &&
        !nav.contains(e.target) && // click not on the menu
        !navToggle.contains(e.target) // and not for the burger
    ) {
        closeNav();
    }
});

// load home page default
loadHome();