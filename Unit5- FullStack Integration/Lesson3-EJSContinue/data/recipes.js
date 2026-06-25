const recipes = [
  {
    name: "Spaghetti Bolognese",
    description:
      "<strong>Classic Italian</strong> recipe with rich tomato sauce.",
    ingredients: [
      "Spaghetti",
      "Tomato Sauce",
      "Minced Beef",
      "Garlic",
      "Onion",
    ],
    price: 12.99,
    discountPercentage: 15,
    stock: 12,
  },
  {
    name: "Chicken Curry",
    description: "Savory curry with <em>coconut milk</em> and ginger.",
    ingredients: [
      "Chicken",
      "Curry Powder",
      "Coconut Milk",
      "Ginger",
      "Garlic",
    ],
    price: 14.49,
    stock: 8,
  },
  {
    name: "Pancakes",
    description: "Fluffy pancakes with syrup and fresh berries.",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Baking Powder"],
    price: 8.5,
    discountPercentage: 10,
    stock: 5,
  },
  {
    name: "Caesar Salad",
    description: "Crisp romaine lettuce topped with parmesan and croutons.",
    ingredients: ["Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing"],
    price: 10.0,
    stock: 20,
  },
  {
    name: "Tacos",
    description: "Spicy beef tacos with fresh salsa and cheese.",
    ingredients: ["Tortilla", "Ground Beef", "Lettuce", "Cheese", "Salsa"],
    price: 11.25,
    discountPercentage: 20,
    stock: 7,
  },
];

module.exports = recipes;
