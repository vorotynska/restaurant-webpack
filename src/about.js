// src/about.js
import aboutData from "./data/aboutData";
import {
  renderContactInfo
} from "./components/contactInfo.js";

export default function loadAbout() {
  const content = document.getElementById("content");
  const aboutDiv = document.createElement("div");
  aboutDiv.className = "about";

  const renderSection = (section, index) => `
    <section class="${section.name.toLowerCase().replace(/\s+/g, "-")}">
      <div class="section-content">
        ${index % 3 === 0
          ? `
            <div class="img-menu-container">
              <img src=${section.image} class="img-menu">
            </div>
            <div class="menu-items">
              <h3 class="price-title">${section.name}</h3>
              <h2 class="section-title">${section.title}</h2>
              <p class=price-text>${section.desc}</p>
              <button class="btn btn-read-more">Read More</button>
            </div>
          `
          : `
            <div class="menu-items">
              <p class="price-title">${section.name}</p>
              <h2 class="section-title">${section.title}</h2>
              <p class=price-text>${section.desc}</p>
              <button class="btn btn-read-more">Read More</button>
            </div>
            <div class="img-menu-container">
              <img src=${section.image} class="img-menu">
            </div>
          `}
      </div>
    </section>
  `;
  пше

  aboutDiv.innerHTML = `
    <div class="about__content">
      ${aboutData.map(renderSection).join("")}
      ${renderContactInfo()}
    </div>     
   `;
  content.appendChild(aboutDiv);
}