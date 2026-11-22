<div align="center">

<img src="logo.jpg" alt="Mini Mart Logo" width="180" />

# Mini Mart | E-Commerce Website

**A fully responsive online shopping website built from scratch with HTML, CSS and JavaScript.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-16a34a?style=for-the-badge)](https://pintu-kumarnitw.github.io/Mini-Mart-E-Commerce-Website/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 🔗 [**Open the Live Website**](https://pintu-kumarnitw.github.io/Mini-Mart-E-Commerce-Website/)

</div>

---

## About the Project

Mini Mart is a front-end e-commerce platform that mimics the core shopping experience of sites like Amazon and Flipkart. Users can discover products across 7 categories, search and sort them, save favorites, and manage a cart with live totals. Everything runs in the browser with no framework or backend, so the logic is written by hand in vanilla JavaScript.

I built this project to understand how an online storefront works end to end: how a catalogue is organised, how customers browse and decide, and how a cart and checkout flow is structured.

## Key Features

| Feature | What it does |
| --- | --- |
| **Category browsing** | 7 categories: Electronics, Fashion, Home & Kitchen, Beauty, Sports, Groceries, Automotive |
| **Instant search** | Filters products by name or category as you type |
| **Price sorting** | Low to high and high to low |
| **Shopping cart** | Add items, change quantity, see running total |
| **Favorites / wishlist** | Save products to view or add to cart later |
| **Buy Now** | Adds the product and opens the cart in one click |
| **Saved sessions** | Cart and favorites stay after refresh using `localStorage` |
| **Smart product cards** | Rating stars, old price, discount badge, Best Seller tag |
| **Responsive layout** | Adapts to desktop, tablet and mobile screens |

## Tech Stack

- **HTML5** for semantic page structure
- **CSS3** for Grid and Flexbox layouts, sticky navbar, slide-out drawers, responsive breakpoints
- **JavaScript (ES6)** for dynamic rendering, filtering, sorting and state management
- **Browser localStorage** for data persistence
- **Font Awesome** for icons
- **GitHub Pages** for hosting and deployment

## What This Project Demonstrates

- Building a complete user flow (browse, search, save, add to cart, checkout) without libraries
- Managing application state and keeping the UI in sync with it
- Writing responsive layouts that work across screen sizes
- Structuring data and code into separate files (`products.js`, `app.js`)
- Deploying a live project and maintaining it on GitHub

## Project Structure

```
Mini-Mart-E-Commerce-Website/
├── index.html        # Page layout and sections
├── styles.css        # Styling and responsive rules
├── app.js            # Cart, favorites, search, sort and filter logic
├── products.js       # Product catalogue data
├── logo.jpg          # Brand logo
└── README.md
```

## Run Locally

```bash
git clone https://github.com/Pintu-KumarNITW/Mini-Mart-E-Commerce-Website.git
cd Mini-Mart-E-Commerce-Website
```

Then open `index.html` in any browser, or use the **Live Server** extension in VS Code. No installation or build step is needed.

## Roadmap

- [ ] Product detail pages
- [ ] User login and signup
- [ ] Order history and real payment integration
- [ ] Backend and database (Node.js and MongoDB)
- [ ] Product reviews and filters by price range and rating

## Author

**Pintu Kumar**
B.Tech, Electrical and Electronics Engineering, National Institute of Technology, Warangal (2023-2027)

GitHub: [@Pintu-KumarNITW](https://github.com/Pintu-KumarNITW)

---

<sub>Product data and images are for demonstration only. Checkout is simulated and no real payment is processed.</sub>
