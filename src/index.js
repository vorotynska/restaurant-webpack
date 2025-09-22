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

// функция закрытия меню
function closeNav() {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
}

document.getElementById("homeBtn").addEventListener("click", () => {
    clearContent();
    loadHome();
    closeNav();
});

document.getElementById("menuBtn").addEventListener("click", () => {
    clearContent();
    loadMenu();
    closeNav();
});

document.getElementById("aboutBtn").addEventListener("click", () => {
    clearContent();
    loadAbout();
    closeNav();
});

document.getElementById("contactBtn").addEventListener("click", () => {
    clearContent();
    loadContact();
    closeNav();
});

// click the hamburger button
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        closeNav();
    }
});

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