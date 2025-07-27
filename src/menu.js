// src/menu.js

export default function loadMenu() {
    const content = document.getElementById("content");
    const menuDiv = document.createElement("div");

    menuDiv.innerHTML = `
    <h1>Menu</h1>
    <ul>
        <li>Pizza</li>
        <li>Paste</li>
        <li>Salad</li>
    </ul>
    `;
    content.appendChild(menuDiv);
}