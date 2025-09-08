// src/menu.js
import bitesImage from "./assets/images/bites.jpg";
import steakImage from "./assets/images/steak.jpg";
import dessertImage from "./assets/images/dessert.jpg";
import teaImage from "./assets/images/cup-with-tea.jpg";
export default function loadMenu() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.className = "menu";

  menuDiv.innerHTML = `
  <h1 class="menu-title">Flavour so good you’ll try to eat with your eyes</h1>
      <div class="menu__content">

        <!-- Small Bites -->
      <section class="bites">
        <h2 class="section-title">Small Bites</h2>
        <div class="section-content">
          <div class="img-menu-container">
            <img src=${bitesImage} class="img-menu">
          </div>
          <div class="menu-items">
            <div class="menu-item">
              <h3 class="price-title">Green papaya salad $12</h3>
              <p class="price-text">Shrimp, chili & lime</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Black pepper calamari $14</h3>
              <p class="price-text">Galangal dressing, roasted rice, thai basil</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Tumeric spiced cauliflower $11</h3>
              <p class="price-text">Sesame tofu dressing, furikake</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Kingfish sashimi $15</h3>
              <p class="price-text">Green nam jim, coconut & thai basil</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Caramelised betel leaf $12</h3>
              <p class="price-text">Pineapple, Chili</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Pacific oysters $5</h3>
              <p class="price-text">Ponzu, sriracha</p>
            </div>
          </div>
        </div>
      </section>

        <!-- Hot Dishes -->
      <section class="dishes">
        <h2 class="section-title">Hot Dishes</h2>
        <div class="section-content">
          <div class="menu-items">
            <div class="menu-item">
              <h3 class="price-title">Sesame Chicken $12</h3>
              <p class="price-text">Chinese eggplant, sweet chili soy glaze, pineapple, ginger</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Chicken Wings $18</h3>
              <p class="price-text">Thai basil, chili, peanuts, papaya, cilantro</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Ribeye Bites Roasted $22</h3>
              <p class="price-text">Shishito Peppers, Jalapeño Crème</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Blackened Fish Sandwich $23</h3>
              <p class="price-text">Cabbage, arugula, tomato, tartar sauce, brioche bun</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Siji Chun "Four Seasons" $9</h3>
              <p class="price-text">Intense floral aroma and fruity taste</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Black Pepper Chili Chicken $12</h3>
              <p class="price-text">Pepper, onion, bamboo shoot, celery</p>
            </div>
          </div>
          <div class="img-menu-container">
            <img src=${steakImage} class="img-menu"/>
          </div>
        </div>
      </section>

        <!-- Dessert -->
      <section class="dessert">
        <h2 class="section-title">Dessert</h2>
        <div class="section-content">
          <div class="img-menu-container">
            <img src=${dessertImage} class="img-menu"/>
          </div>
          <div class="menu-items">
            <div class="menu-item">
              <h3 class="price-title">Dessert platter $12</h3>
              <p class="price-text">Chef’s selection of sweets. Serves 2</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Fruit Plate $14</h3>
              <p class="price-text">Seasonal fruits, shaved coconut, vanilla drizzle, mint</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Fried Banana $9</h3>
              <p class="price-text">Caramel sauce, banana brulee, caramel popcorn</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Sorbet $7</h3>
              <p class="price-text">Watermelon, passion fruit, strawberry, mango, orange</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Thai Donut $8</h3>
              <p class="price-text">Fried donut with condensed milk & peanut</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Banana spring rolls $7</h3>
              <p class="price-text">Honey glaze, vanilla drizzle, coconut-pineapple ice cream</p>
            </div>
          </div>
        </section>
          
        <!-- Tea -->
      <section class="tea">
        <h2 class="section-title">Tea</h2>
        <div class="section-content">
          <div class="menu-items">
            <div class="menu-item">
              <h3 class="price-title">Ti Quan Yin $4</h3>
              <p class="price-text">Intense aroma, depth and fruitiness</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Sencha $5</h3>
              <p class="price-text">Grassy refreshing brew, popular in Japan</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Gunpowder $6</h3>
              <p class="price-text">Rolled tea leaves, pleasant smokey flavor</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">White Peony $4</h3>
              <p class="price-text">Bamboo aroma, sweet melon and grape notes</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Hong Tao $4</h3>
              <p class="price-text">Peachy flavor, goes well with dessert</p>
            </div>
            <div class="menu-item">
              <h3 class="price-title">Jin Xuan $5</h3>
              <p class="price-text">Milk aroma, sweet flavor, great with spicy food</p>
            </div>
          </div>
          <div class="img-menu-container">
            <img src=${teaImage} class="img-menu"/>
          </div>
        </div>
      </section>
      </div>
    `;
  content.appendChild(menuDiv);
}