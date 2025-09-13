// src/data/menuData.js
import bitesImage from "../assets/images/bites.jpg";
import steakImage from "../assets/images/steak.jpg";
import dessertImage from "../assets/images/dessert.jpg";
import teaImage from "../assets/images/cup-with-tea.jpg";

const menuData = [{
        title: "Small Bites",
        image: bitesImage,
        items: [{
                name: "Green papaya salad",
                price: 12,
                desc: "Shrimp, chili & lime"
            },
            {
                name: "Black pepper calamari",
                price: 14,
                desc: "Galangal dressing, roasted rice, thai basil"
            },
            {
                name: "Tumeric spiced cauliflower",
                price: 11,
                desc: "Sesame tofu dressing, furikake"
            },
            {
                name: "Kingfish sashimi",
                price: 15,
                desc: "Green nam jim, coconut & thai basil"
            },
            {
                name: "Caramelised betel leaf",
                price: 12,
                desc: "Pineapple, Chili"
            },
            {
                name: "Pacific oysters",
                price: 5,
                desc: "Ponzu, sriracha"
            },
        ],
    },
    {
        title: "Hot Dishes",
        image: steakImage,
        items: [{
                name: "Sesame Chicken",
                price: 12,
                desc: "Chinese eggplant, sweet chili soy glaze, pineapple, ginger"
            },
            {
                name: "Chicken Wings",
                price: 18,
                desc: "Thai basil, chili, peanuts, papaya, cilantro"
            },
            {
                name: "Ribeye Bites Roasted",
                price: 22,
                desc: "Shishito Peppers, Jalapeño Crème"
            },
            {
                name: "Blackened Fish Sandwich",
                price: 23,
                desc: "Cabbage, arugula, tomato, tartar sauce, brioche bun"
            },
            {
                name: 'Siji Chun "Four Seasons"',
                price: 9,
                desc: "Intense floral aroma and fruity taste"
            },
            {
                name: "Black Pepper Chili Chicken",
                price: 12,
                desc: "Pepper, onion, bamboo shoot, celery"
            },
        ],
    },
    {
        title: "Dessert",
        image: dessertImage,
        items: [{
                name: "Dessert platter",
                price: 12,
                desc: "Chef’s selection of sweets. Serves 2"
            },
            {
                name: "Fruit Plate",
                price: 14,
                desc: "Seasonal fruits, shaved coconut, vanilla drizzle, mint"
            },
            {
                name: "Fried Banana",
                price: 9,
                desc: "Panko crusted with caramel sauce, banana brulee, caramel popcorn"
            },
            {
                name: "Sorbet",
                price: 7,
                desc: "Watermelon, passion fruit, strawberry, mango, orange"
            },
            {
                name: "Thai Donut",
                price: 8,
                desc: "Fried donut with condensed milk & peanut"
            },
        ],
    },
    {
        title: "Tea",
        image: teaImage,
        items: [{
                name: "Ti Quan Yin",
                price: 4,
                desc: "Intense aroma, fruity taste, no bitterness"
            },
            {
                name: "Sencha",
                price: 5,
                desc: "Grassy, refreshing brew. Popular in Japan"
            },
            {
                name: "Gunpowder",
                price: 6,
                desc: "Rolled pellets with smokey flavor"
            },
            {
                name: "White Peony",
                price: 4,
                desc: "Fresh bamboo aroma, light melon & grape notes"
            },
            {
                name: "Hong Tao",
                price: 4,
                desc: "Peachy flavor, pairs with dessert"
            },
        ],
    },
];

export default menuData;