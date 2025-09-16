// src/about.js
import aboutData from "./data/aboutData";
import {
  renderContactInfo
} from "./components/contactInfo.js";
import {
  renderButtonBackTop,
  initBackToTop
} from "./components/backTop.js";

export default function loadAbout() {
  const content = document.getElementById("content");
  const aboutDiv = document.createElement("div");
  aboutDiv.className = "about";

  const renderSection = (section, index) => `
    <section class="${section.name.toLowerCase().replace(/\s+/g, "-")}">
      <div class="section-content">
        ${index % 2 === 0
          ? `
            <div class="img-menu-container">
              <img src=${section.image} class="img-menu">
            </div>
            <div class="menu-items">
              <h3 class="mission">${section.name}</h3>
              <h2 class="section-title">${section.title}</h2>
              <p>${section.desc}</p>
              <a hef="#top" class="btn btn-read-more">Read More</a>
            </div>
          `
          : `
            <div class="menu-items">
              <h3 class="mission">${section.name}</h3>
              <h2 class="section-title">${section.title}</h2>
              <p>${section.desc}</p>
              <a href="#top" class="btn btn-read-more">Read More</a>
            </div>
            <div class="img-menu-container">
              <img src=${section.image} class="img-menu">
            </div>
          `}
      </div>
    </section>
  `;

  aboutDiv.innerHTML = `
    <div class="about__content">
    <div id="top"></div> <!-- Якорь для прокрутки -->
      ${aboutData.map(renderSection).join("")}
      ${renderContactInfo()}
      ${renderButtonBackTop()}
    </div>     
   `;
  content.appendChild(aboutDiv);

  // инициализируем поведение кнопки
  initBackToTop();
}