const sampleAppetizers = [
  {
    name: "Bruschetta",
    description:
      "Grilled bread topped with fresh tomatoes, basil, and balsamic glaze.",
    price: 7.99,
    category: "67c03ab86bd70b43fec60860", // Use the category ID for Appetizers
    imageUrl:
      "https://res.cloudinary.com/dsbhwx3dw/image/upload/v1740827860/ns2du7gjhqhqzppea2yg.jpg",
  },
  {
    name: "Stuffed Mushrooms",
    description:
      "Mushrooms filled with garlic, cheese, and herbs, baked to perfection.",
    price: 8.49,
    category: "67c03ab86bd70b43fec60860",
    imageUrl:
      "https://res.cloudinary.com/dsbhwx3dw/image/upload/v1740827962/yzbbvroibbscd2uvkkzj.jpg",
  },
  {
    name: "Chicken Wings",
    description:
      "Crispy fried wings tossed in your choice of sauce: BBQ, buffalo, or garlic parmesan.",
    price: 10.99,
    category: "67c03ab86bd70b43fec60860",
    imageUrl:
      "https://res.cloudinary.com/dsbhwx3dw/image/upload/v1740828036/gdufkemi19drs6tqmwac.jpg",
  },
  {
    name: "Fried Calamari",
    description:
      "Tender squid lightly battered and fried, served with marinara dipping sauce.",
    price: 12.99,
    category: "67c03ab86bd70b43fec60860",
    imageUrl:
      "https://res.cloudinary.com/dsbhwx3dw/image/upload/v1740828155/gwizvbd13xesyu2extjo.jpg",
  },
  {
    name: "Spinach and Artichoke Dip",
    description:
      "Creamy spinach and artichoke dip served with tortilla chips or bread.",
    price: 9.49,
    category: "67c03ab86bd70b43fec60860",
    imageUrl:
      "https://res.cloudinary.com/dsbhwx3dw/image/upload/v1740828248/jeulqtofhrng80sberze.jpg",
  },
  {
    name: "Mozzarella Sticks",
    description:
      "Crispy fried mozzarella sticks served with marinara sauce for dipping.",
    price: 8.99,
    category: "67c03ab86bd70b43fec60860",
    imageUrl:
      "https://res.cloudinary.com/dsbhwx3dw/image/upload/v1740828334/excjjojywntmtrquolor.jpg",
  },
  {
    name: "Guacamole and Chips",
    description: "Fresh homemade guacamole served with crispy tortilla chips.",
    price: 6.99,
    category: "67c03ab86bd70b43fec60860",
    imageUrl:
      "https://res.cloudinary.com/dsbhwx3dw/image/upload/v1740828409/u3gc7nodq1pzssqnrchs.jpg",
  },
  {
    name: "Grilled Chicken",
    description: "Juicy grilled chicken served with seasonal vegetables.",
    price: 14.99,
    imageUrl:
      "https://res.cloudinary.com/dsbhwx3dw/image/upload/v1740828547/n1cjsqyxy6snjwqzb040.jpg",
    category: "67c03d916bd70b43fec60867",
  },
  {
    name: "Steak and Fries",
    description: "Tender steak cooked to perfection, served with crispy fries.",
    price: 19.99,
    imageUrl:
      "https://res.cloudinary.com/dsbhwx3dw/image/upload/v1740828614/ihloqpy6papx0bncd4oz.jpg",
    category: "67c03d916bd70b43fec60867",
  },
  {
    name: "Spaghetti Bolognese",
    description: "Traditional pasta with a rich and savory meat sauce.",
    price: 12.99,
    imageUrl:
      "https://res.cloudinary.com/dsbhwx3dw/image/upload/v1740828683/uiacsgeidnvebl8kytsb.jpg",
    category: "67c03d916bd70b43fec60867",
  },
  {
    name: "Chicken Alfredo",
    description: "Creamy Alfredo sauce with grilled chicken over pasta.",
    price: 13.99,
    imageUrl: "https://your-image-url.com/chicken_alfredo.jpg",
    category: "67c03d916bd70b43fec60867",
  },
  {
    name: "Beef Wellington",
    description: "Beef wrapped in puff pastry and served with a rich sauce.",
    price: 24.99,
    imageUrl: "https://your-image-url.com/beef_wellington.jpg",
    category: "67c03d916bd70b43fec60867",
  },
  {
    name: "Lamb Chops",
    description: "Grilled lamb chops served with rosemary and mint sauce.",
    price: 21.99,
    imageUrl: "https://your-image-url.com/lamb_chops.jpg",
    category: "67c03d916bd70b43fec60867",
  },
  {
    name: "Salmon Fillet",
    description: "Pan-seared salmon fillet with a lemon butter sauce.",
    price: 18.99,
    imageUrl: "https://your-image-url.com/salmon_fillet.jpg",
    category: "67c03d916bd70b43fec60867",
  },
  {
    name: "Vegetarian Stir Fry",
    description: "Stir-fried vegetables served with tofu in a savory sauce.",
    price: 11.99,
    imageUrl: "https://your-image-url.com/vegetarian_stir_fry.jpg",
    category: "67c03d916bd70b43fec60867",
  },
  {
    name: "Chocolate Cake",
    description:
      "Rich and moist chocolate cake topped with chocolate frosting.",
    price: 6.99,
    imageUrl: "https://your-image-url.com/chocolate_cake.jpg",
    category: "67c03d986bd70b43fec6086a",
  },
  {
    name: "Cheesecake",
    description:
      "Classic New York-style cheesecake with a buttery graham crust.",
    price: 7.99,
    imageUrl: "https://your-image-url.com/cheesecake.jpg",
    category: "67c03d986bd70b43fec6086a",
  },
  {
    name: "Tiramisu",
    description:
      "Layered dessert with coffee-soaked ladyfingers and mascarpone cream.",
    price: 8.99,
    imageUrl: "https://your-image-url.com/tiramisu.jpg",
    category: "67c03d986bd70b43fec6086a",
  },
  {
    name: "Apple Pie",
    description: "Traditional apple pie with a buttery, flaky crust.",
    price: 5.99,
    imageUrl: "https://your-image-url.com/apple_pie.jpg",
    category: "67c03d986bd70b43fec6086a",
  },
  {
    name: "Panna Cotta",
    description:
      "Creamy Italian dessert made with vanilla and served with berries.",
    price: 6.49,
    imageUrl: "https://your-image-url.com/panna_cotta.jpg",
    category: "67c03d986bd70b43fec6086a",
  },
  {
    name: "Creme Brulee",
    description: "Classic French dessert with a caramelized sugar topping.",
    price: 7.49,
    imageUrl: "https://your-image-url.com/creme_brulee.jpg",
    category: "67c03d986bd70b43fec6086a",
  },
  {
    name: "Lemon Sorbet",
    description: "Refreshing lemon sorbet served with fresh mint.",
    price: 4.99,
    imageUrl: "https://your-image-url.com/lemon_sorbet.jpg",
    category: "67c03d986bd70b43fec6086a",
  },
  {
    name: "Chocolate Mousse",
    description: "Smooth chocolate mousse topped with whipped cream.",
    price: 5.49,
    imageUrl: "https://your-image-url.com/chocolate_mousse.jpg",
    category: "67c03d986bd70b43fec6086a",
  },
  {
    name: "Cappuccino",
    description: "Classic cappuccino with espresso, steamed milk, and foam.",
    price: 3.99,
    imageUrl: "https://your-image-url.com/cappuccino.jpg",
    category: "67c03da06bd70b43fec6086d",
  },
  {
    name: "Mango Smoothie",
    description: "Blended mango smoothie with a hint of lime.",
    price: 5.49,
    imageUrl: "https://your-image-url.com/mango_smoothie.jpg",
    category: "67c03da06bd70b43fec6086d",
  },
  {
    name: "Iced Tea",
    description: "Chilled black tea served with lemon and ice.",
    price: 2.49,
    imageUrl: "https://your-image-url.com/iced_tea.jpg",
    category: "67c03da06bd70b43fec6086d",
  },
  {
    name: "Latte",
    description: "Espresso and steamed milk with a layer of foam.",
    price: 3.49,
    imageUrl: "https://your-image-url.com/latte.jpg",
    category: "67c03da06bd70b43fec6086d",
  },
  {
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice served chilled.",
    price: 3.99,
    imageUrl: "https://your-image-url.com/orange_juice.jpg",
    category: "67c03da06bd70b43fec6086d",
  },
  {
    name: "Cold Brew Coffee",
    description: "Chilled cold brew coffee served over ice.",
    price: 4.99,
    imageUrl: "https://your-image-url.com/cold_brew_coffee.jpg",
    category: "67c03da06bd70b43fec6086d",
  },
  {
    name: "Strawberry Lemonade",
    description: "Sweet and tart strawberry lemonade served chilled.",
    price: 2.99,
    imageUrl: "https://your-image-url.com/strawberry_lemonade.jpg",
    category: "67c03da06bd70b43fec6086d",
  },
  {
    name: "Coconut Water",
    description: "Fresh coconut water served with ice.",
    price: 2.99,
    imageUrl: "https://your-image-url.com/coconut_water.jpg",
    category: "67c03da06bd70b43fec6086d",
  },
  {
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    price: 6.99,
    imageUrl: "https://your-image-url.com/caesar_salad.jpg",
    category: "67c03da96bd70b43fec60870",
  },
  {
    name: "Greek Salad",
    description: "Mixed greens with cucumbers, tomatoes, olives, and feta.",
    price: 7.49,
    imageUrl: "https://your-image-url.com/greek_salad.jpg",
    category: "67c03da96bd70b43fec60870",
  },
  {
    name: "Cobb Salad",
    description: "Mixed greens with chicken, bacon, avocado, and blue cheese.",
    price: 8.99,
    imageUrl: "https://your-image-url.com/cobb_salad.jpg",
    category: "67c03da96bd70b43fec60870",
  },
  {
    name: "Caprese Salad",
    description:
      "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
    price: 6.49,
    imageUrl: "https://your-image-url.com/caprese_salad.jpg",
    category: "67c03da96bd70b43fec60870",
  },
  {
    name: "Spinach Salad",
    description:
      "Fresh spinach leaves with walnuts, cranberries, and goat cheese.",
    price: 7.99,
    imageUrl: "https://your-image-url.com/spinach_salad.jpg",
    category: "67c03da96bd70b43fec60870",
  },
  {
    name: "Avocado Salad",
    description:
      "Fresh avocado slices with cherry tomatoes, red onions, and cilantro.",
    price: 7.49,
    imageUrl: "https://your-image-url.com/avocado_salad.jpg",
    category: "67c03da96bd70b43fec60870",
  },
  {
    name: "Asian Sesame Salad",
    description:
      "Mixed greens with grilled chicken, sesame dressing, and crunchy noodles.",
    price: 8.49,
    imageUrl: "https://your-image-url.com/asian_sesame_salad.jpg",
    category: "67c03da96bd70b43fec60870",
  },
  {
    name: "Quinoa Salad",
    description: "Quinoa with mixed greens, cucumbers, and lemon vinaigrette.",
    price: 8.99,
    imageUrl: "https://your-image-url.com/quinoa_salad.jpg",
    category: "67c03da96bd70b43fec60870",
  },
  {
    name: "French Fries",
    description: "Crispy golden fries served with ketchup.",
    price: 3.49,
    imageUrl: "https://your-image-url.com/french_fries.jpg",
    category: "67c03db26bd70b43fec60873",
  },
  {
    name: "Garlic Bread",
    description: "Toasted bread topped with garlic butter and herbs.",
    price: 2.99,
    imageUrl: "https://your-image-url.com/garlic_bread.jpg",
    category: "67c03db26bd70b43fec60873",
  },
  {
    name: "Mashed Potatoes",
    description: "Creamy mashed potatoes with butter and cream.",
    price: 3.99,
    imageUrl: "https://your-image-url.com/mashed_potatoes.jpg",
    category: "67c03db26bd70b43fec60873",
  },
  {
    name: "Steamed Vegetables",
    description: "A medley of seasonal steamed vegetables.",
    price: 4.49,
    imageUrl: "https://your-image-url.com/steamed_vegetables.jpg",
    category: "67c03db26bd70b43fec60873",
  },
  {
    name: "Onion Rings",
    description: "Crispy onion rings served with dipping sauce.",
    price: 4.99,
    imageUrl: "https://your-image-url.com/onion_rings.jpg",
    category: "67c03db26bd70b43fec60873",
  },
  {
    name: "Coleslaw",
    description: "Creamy coleslaw with shredded cabbage and carrots.",
    price: 3.49,
    imageUrl: "https://your-image-url.com/coleslaw.jpg",
    category: "67c03db26bd70b43fec60873",
  },
  {
    name: "Baked Potato",
    description: "Baked potato served with butter and sour cream.",
    price: 3.49,
    imageUrl: "https://your-image-url.com/baked_potato.jpg",
    category: "67c03db26bd70b43fec60873",
  },
  {
    name: "Rice Pilaf",
    description: "Fluffy rice pilaf with herbs and vegetables.",
    price: 4.29,
    imageUrl: "https://your-image-url.com/rice_pilaf.jpg",
    category: "67c03db26bd70b43fec60873",
  },
];

module.exports = { sampleAppetizers };
