# Mini Storefront

A minimal project built for ISM 3232.  
This mini storefront allows shoppers to browse products, filter by category and price, add items to a cart, view totals, and see stock updates over time.

---

# Install and Run

cd mini-storefront
npm install
npm run dev
Visit ➜ http://localhost:3000

# File Structure
src/
 ├── app/
 │   ├── page.js
 │   ├── api/
 │   │   └── products/
 │   │        └── route.js
 │   └── components/
 │        ├── Catalog.jsx
 │        ├── ProductList.jsx
 │        ├── ProductCard.jsx
 │        ├── CategoryFilter.jsx
 │        ├── PriceFilter.jsx
 │        ├── CartSummary.jsx
 │        └── StatusMessage.jsx
 ├── globals.css
 ├── layout.js
