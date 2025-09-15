// src/about.js
export default function loadAbout() {
  const content = document.getElementById("content");
  const aboutDiv = document.createElement("div");
  aboutDiv.className = "contact";

  aboutDiv.innerHTML = `
    <div class="container">
      <h1>Hi, I am About</h1>
    </div>     
   `;
  content.appendChild(aboutDiv);
}