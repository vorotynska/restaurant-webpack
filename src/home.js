// src/home.js
import chaletImage from "./asset/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables.jpg"
export default function loadHome() {
    const content = document.getElementById("content");
    const homeDiv = document.createElement("div");

    homeDiv.innerHTML = `
        <h1>Welcome in our restaurant!</h1>
        <p>We serve the best food on the planet.</p>
        <img src=${chaletImage} alt="restaurant">
    `;
    content.appendChild(homeDiv);
}