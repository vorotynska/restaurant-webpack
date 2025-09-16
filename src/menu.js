// src/menu.js
import menuData from "./data/menuData.js";
import {
  renderButtonBackTop,
  initBackToTop
} from "./components/backTop.js";

export default function loadMenu() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.className = "menu";

  const renderItem = (item) => `
    <div class="menu-item">
      <h3 class="price-title">${item.name} $${item.price}</h3>
      <p class="price-text">${item.desc}</p>
    </div>
  `;

  const renderSection = (section, index) => `
    <section class="${section.title.toLowerCase().replace(/\s+/g, "-")}">
      <h2 class="section-title">${section.title}</h2>
      <div class="section-content">
        ${index % 2 === 0
          ? `
            <div class="img-menu-container">
              <img src=${section.image} class="img-menu">
            </div>
            <div class="menu-items">
              ${section.items.map(renderItem).join("")}
            </div>
          `
          : `
            <div class="menu-items">
              ${section.items.map(renderItem).join("")}
            </div>
            <div class="img-menu-container">
              <img src=${section.image} class="img-menu">
            </div>
          `}
      </div>
    </section>
  `;

  menuDiv.innerHTML = `
     <div id="top"></div> <!-- Якорь для прокрутки -->
    <h1 class="menu-title">Flavour so good you’ll try to eat with your eyes</h1>
    <div class="menu__content">
      ${menuData.map(renderSection).join("")}
      ${renderButtonBackTop()}
    </div>
  `;

  content.appendChild(menuDiv);

  // инициализируем поведение кнопки
  initBackToTop();
}