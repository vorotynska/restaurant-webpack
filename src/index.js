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

const nav = document.getElementById("nav");
document.getElementById("burger").addEventListener("click", () => {
    nav.classList.toggle("shou");
});

// load home page default
loadHome();