//src/components/backTop

import "../styles.css";

export function initBackToTop() {
    // слушаем скролл и показываем кнопку
    window.addEventListener("scroll", () => {
        const btn = document.querySelector(".back-to-top");
        if (!btn) return; // кнопки пока нет — выходим

        if (window.scrollY > 700) {
            btn.style.visibility = "visible";
            btn.style.opacity = "1";
            btn.style.transform = "scale(1)";
        } else {
            btn.style.visibility = "hidden";
            btn.style.opacity = "0";
            btn.style.transform = "scale(0)";
        }
    });
}

export function renderButtonBackTop() {
    return `
    <a href="#top" class="back-to-top" title="Back to Top">
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <polyline points='112 244 256 100 400 244'
          style='fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:24px'/>
        <line x1='256' y1='120' x2='256' y2='412'
          style='fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:24px'/>
      </svg>
    </a>
  `;
}