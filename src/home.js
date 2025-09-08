// src/home.js
import chaletImage from "./assets/images/background.jpg"
export default function loadHome() {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");

  homeDiv.innerHTML = `
    <div id="container-home" class="container-home">
      <div class="home__content">
        <div class="home__text">
          <h1>Grill Bar</h1>
          <h2 class="title__home__text">Hot and Delicious</h2>
          <div id="discount">
            <h3>40%</h3>
            <h4>BUSINESS</h4>
            <h4>LUNCH</h4>
          </div>
        </div>           
      </div>
    </div>     
   `;
  content.appendChild(homeDiv);
}