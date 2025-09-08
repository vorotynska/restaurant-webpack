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
        <section class="bites">
          <h2 class="section-title">Small Bites</h2>
          <div class="section-content">
            <div class="img-menu-container">
              <img src=${bitesImage} class="img-menu">
            </div>
            <div class="price">
              <h3 class="price-title">Green papaya salad $12</h3>
              <p class="price-tect">shrimp, chili & lime</p>
              <h3 class="price-title">Black pepper calamari $14</h3>
              <p class="price-tect">Galangal dressing, roasted rice, thai basil</p>
              <h3 class="price-title">Tumeric spiced cauliflower $11</h3>
              <p class="price-tect">Sesame tofu dressing, furikake</p>
              <h3 class="price-title">Kingfish sashimi $15</h3>
              <p class="price-tect">Green nam jim, coconut & thai basil</p>
              <h3 class="price-title">Caramelised betel leaf $12</h3>
              <p class="price-tect">Pineapple, Chili</p>
              <h3 class="price-title">Pacific oysters (price per piece) $5</h3>
              <p class="price-tect">Ponzu, sriracha</p>
            </div>
          </div>
        </section>

        <section class="dishes">
          <h2 class="section-title">Hot Dishes</h2>
          <div class="section-content">
            <div class="price">
              <h3 class="price-title">Sesame Chicken $12</h3>
              <p class="price-tect">Chinese eggplant, sweet chili soy glaze, green onion, pineapple, ginger</p>
              <h3 class="price-title">Chicken Wings $18</h3>
              <p class="price-tect">Thai basil, chili, peanuts, green papaya, cilantro</p>
              <h3 class="price-title">Ribeye Bites Roasted $22</h3>
              <p class="price-tect">Shishito Peppers, Jalapeño Crème</p>
              <h3 class="price-title">Blackened Fish Sandwich $23</h3>
              <p class="price-tect">Crunchy cabbage, wild baby arugula, tomato, house made tartar sauce, on a brioche bun</p>
              <h3 class="price-title">Siji Chun "Four Seasons" $9</h3>
              <p class="price-tect">Intense floral aroma and delicate fruity taste without any bitterness or dryness</p>
              <h3 class="price-title">Black Pepper Chili Chicken $12</h3>
              <p class="price-tect">Pepper, onion, bamboo shoot, celery</p>
            </div>
            <div class="img-menu-container">
              <img src=${steakImage} class="img-menu"/>
            </div>
          </div>
        </section>

        <section class="dessert">
          <h2 class="section-title">Dessert</h2>
          <div class="section-content">
            <div class="img-menu-container">
              <img src=${dessertImage} class="img-menu"/>
            </div>
            <div class="price">
              <h3 class="price-title">Dessert platter $12</h3>
              <p class="price-tect">Chef’s selection of sweets. Serves 2</p>
              <h3 class="price-title">Fruit Plate $14</h3>
              <p class="price-tect">Seasonal selections of fruits, shaved coconut, vanilla drizzle, mint</p>
              <h3 class="price-title">Fried Banana $9</h3>
              <p class="price-tect">Panko crusted with caramel sauce, banana brulee, caramel popcorn</p>
              <h3 class="price-title">Sorbet $7</h3>
              <p class="price-tect">Watermelon, passion fruit, strawberry, mango, orange</p>
              <h3 class="price-title">Thai Donut $8</h3>
              <p class="price-tect">Fried donut dipped with sweet condense milk & peanut</p>
              <h3 class="price-title">Banana spring rolls $7</h3>
              <p class="price-tect">Honey glaze, vanilla drizzle, coconut-pineapple ice cream</p>
            </div>
          </div>
        </section>
          
        <section class="tea">
          <h2 class="section-title">Tea</h2>
          <div class="section-content">
            <div class="price">
              <h3 class="price-title">Ti Quan Yin $4</h3>
              <p class="price-tect">Intense aroma, depth and fruitiness- ranked as one of the most famous teas in China</p>
              <h3 class="price-title">Sencha $5</h3>
              <p class="price-tect">Shiny needlelike tea leaves that yield a slighty grassy, clean refreshing brew, the most popular tea in Japan</p>
              <h3 class="price-title">Gunpowder $6</h3>
              <p class="price-tect">Green pellets of rolled tea leaves that produces a pleasant smokey flavor</p>
              <h3 class="price-title">Zhenghe Bai Mudan "White Peony" $4</h3>
              <p class="price-tect">Fresh bamboo aroma, lightly sweet flavor with notes of melon and grape</p>
              <h3 class="price-title">Hong Tao $4</h3>
              <p class="price-tect">Peachy flavor, goes well with dessert</p>
              <h3 class="price-title">Jin Xuan $5</h3>
              <p class="price-tect">Creamy smooth texture, incredible milk aroma and taste with a naturally sweet flavor. Goes well with spicy foods</p>
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