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

document.getElementById("homeBtn").addEventListener("click", () => {
    clearContent();
    loadHome();
});

document.getElementById("menuBtn").addEventListener("click", () => {
    clearContent();
    loadMenu();
});

document.getElementById("aboutBtn").addEventListener("click", () => {
    clearContent();
    loadAbout();
});

document.getElementById("contactBtn").addEventListener("click", () => {
    clearContent();
    loadContact();
});

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

// click the hamburger button
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


// load home page default
loadHome();