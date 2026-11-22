const PRODUCTS = [
  // Best Sellers (1–12)
  {
    id: 1,
    name: "Powder Canister",
    category: "Beauty",
    price: 13.51,
    oldPrice: 14.99,
    discount: "-9.84%",
    rating: 4.6,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
  },
  {
    id: 2,
    name: "Red Lipstick",
    category: "Beauty",
    price: 11.41,
    oldPrice: 12.99,
    discount: "-12.16%",
    rating: 4.4,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
  },
  {
    id: 3,
    name: "Red Nail Polish",
    category: "Beauty",
    price: 7.96,
    oldPrice: 8.99,
    discount: "-11.44%",
    rating: 4.3,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
  },
  {
    id: 4,
    name: "Calvin Klein CK One",
    category: "Beauty",
    price: 49.05,
    oldPrice: 49.99,
    discount: "-1.89%",
    rating: 4.4,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
  },
  {
    id: 5,
    name: "Chanel Coco Noir Eau De",
    category: "Beauty",
    price: 108.53,
    oldPrice: 129.99,
    discount: "-16.51%",
    rating: 4.3,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
  },
  {
    id: 6,
    name: "Annibale Colombo Bed",
    category: "Home & Kitchen",
    price: 1737.16,
    oldPrice: 1899.99,
    discount: "-8.57%",
    rating: 4.8,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png"
  },
  {
    id: 7,
    name: "Knoll Saarinen Conference Chair",
    category: "Home & Kitchen",
    price: 489.94,
    oldPrice: 499.99,
    discount: "-2.01%",
    rating: 4.9,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png"
  },
  {
    id: 8,
    name: "Fresh Red Apples",
    category: "Groceries",
    price: 1.74,
    oldPrice: 1.99,
    discount: "-12.62%",
    rating: 4.2,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png"
  },
  {
    id: 9,
    name: "Beef Steak",
    category: "Groceries",
    price: 11.74,
    oldPrice: 12.99,
    discount: "-9.61%",
    rating: 4.5,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png"
  },
  {
    id: 10,
    name: "Cooking Oil",
    category: "Groceries",
    price: 4.52,
    oldPrice: 4.99,
    discount: "-9.33%",
    rating: 4.8,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png"
  },
  {
    id: 11,
    name: "Fresh Cucumber",
    category: "Groceries",
    price: 1.49,
    oldPrice: 1.55,
    discount: "-3.87%",
    rating: 4.1,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png"
  },
  {
    id: 12,
    name: "Premium Dog Food",
    category: "Groceries",
    price: 9.86,
    oldPrice: 10.99,
    discount: "-10.27%",
    rating: 4.5,
    bestSeller: true,
    image: "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png"
  },

  // Electronics (13–16)
  {
    id: 13,
    name: "Apple MacBook Pro 14",
    category: "Electronics",
    price: 1899.99,
    oldPrice: 1999.99,
    discount: "-5.00%",
    rating: 4.9,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
  },
  {
    id: 14,
    name: "Asus Zenbook Pro Dual Screen",
    category: "Electronics",
    price: 1649.99,
    oldPrice: 1799.99,
    discount: "-8.33%",
    rating: 4.7,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png"
  },
  {
    id: 15,
    name: "iPhone 13 Pro",
    category: "Electronics",
    price: 999.99,
    oldPrice: 1099.99,
    discount: "-9.09%",
    rating: 4.8,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png"
  },
  {
    id: 16,
    name: "Apple AirPods Max Silver",
    category: "Electronics",
    price: 499.00,
    oldPrice: 549.00,
    discount: "-9.11%",
    rating: 4.6,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png"
  },

  // Fashion (17–20)
  {
    id: 17,
    name: "Blue & Black Check Shirt",
    category: "Fashion",
    price: 29.99,
    oldPrice: 34.99,
    discount: "-14.29%",
    rating: 4.4,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png"
  },
  {
    id: 18,
    name: "Nike Air Jordan 1 Red & Black",
    category: "Fashion",
    price: 149.99,
    oldPrice: 169.99,
    discount: "-11.76%",
    rating: 4.8,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png"
  },
  {
    id: 19,
    name: "Rolex Submariner Watch",
    category: "Fashion",
    price: 12999.00,
    oldPrice: 13999.00,
    discount: "-7.14%",
    rating: 4.9,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png"
  },
  {
    id: 20,
    name: "Black Women's Gown",
    category: "Fashion",
    price: 119.99,
    oldPrice: 139.99,
    discount: "-14.29%",
    rating: 4.6,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/thumbnail.png"
  },

  // Home & Kitchen (21–22)
  {
    id: 21,
    name: "Black Aluminium Cup",
    category: "Home & Kitchen",
    price: 5.99,
    oldPrice: 7.49,
    discount: "-20.03%",
    rating: 4.4,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/thumbnail.png"
  },
  {
    id: 22,
    name: "Electric Stove",
    category: "Home & Kitchen",
    price: 49.99,
    oldPrice: 59.99,
    discount: "-16.67%",
    rating: 4.5,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/thumbnail.png"
  },

  // Sports (23–25)
  {
    id: 23,
    name: "Basketball",
    category: "Sports",
    price: 19.99,
    oldPrice: 24.99,
    discount: "-20.00%",
    rating: 4.7,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/thumbnail.png"
  },
  {
    id: 24,
    name: "Cricket Bat",
    category: "Sports",
    price: 39.99,
    oldPrice: 45.00,
    discount: "-11.13%",
    rating: 4.6,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Bat/thumbnail.png"
  },
  {
    id: 25,
    name: "Tennis Racket",
    category: "Sports",
    price: 54.99,
    oldPrice: 64.99,
    discount: "-15.39%",
    rating: 4.5,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Racket/thumbnail.png"
  },

  // Automotive (26–28)
  {
    id: 26,
    name: "300 Touring Car",
    category: "Automotive",
    price: 24999.00,
    oldPrice: 26500.00,
    discount: "-5.66%",
    rating: 4.6,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/thumbnail.png"
  },
  {
    id: 27,
    name: "Charger SXT RWD",
    category: "Automotive",
    price: 31999.00,
    oldPrice: 33999.00,
    discount: "-5.88%",
    rating: 4.8,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
  },
  {
    id: 28,
    name: "Generic Motorcycle",
    category: "Automotive",
    price: 3999.00,
    oldPrice: 4499.00,
    discount: "-11.11%",
    rating: 4.5,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/thumbnail.png"
  },

  // Additional Dresses & Fashion (29–34)
  {
    id: 29,
    name: "Floral Summer Sundress",
    category: "Fashion",
    price: 44.99,
    oldPrice: 54.99,
    discount: "-18.19%",
    rating: 4.6,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Glamour/thumbnail.png"
  },
  {
    id: 30,
    name: "Corset Leather With Skirt",
    category: "Fashion",
    price: 89.99,
    oldPrice: 109.99,
    discount: "-18.18%",
    rating: 4.5,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/thumbnail.png"
  },
  {
    id: 31,
    name: "Corset With Black Skirt",
    category: "Fashion",
    price: 79.99,
    oldPrice: 94.99,
    discount: "-15.79%",
    rating: 4.4,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/thumbnail.png"
  },
  {
    id: 33,
    name: "Classic Men's Polo Shirt",
    category: "Fashion",
    price: 24.99,
    oldPrice: 29.99,
    discount: "-16.67%",
    rating: 4.5,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png"
  },
  {
    id: 33,
    name: "Classic Men's Polo Shirt",
    category: "Fashion",
    price: 24.99,
    oldPrice: 29.99,
    discount: "-16.67%",
    rating: 4.5,
    bestSeller: false,
    image: "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png"
  },
{
    id: 34,
    name: "Short Sleeve Casual Shirt",
    category: "Fashion",
    price: 21.99,
    oldPrice: 26.99,
    discount: "-18.53%",
    rating: 4.3,
    bestSeller: false,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80"
  }
];