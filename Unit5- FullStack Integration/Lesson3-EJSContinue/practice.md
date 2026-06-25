# Lesson 3 Practice Exercise

## EJS + Bootstrap + Static Assets

### Objective

Build an Express app that renders a dynamic product catalog using EJS, serves local CSS and JavaScript from `public/`, and applies Bootstrap styling from a CDN.

This should extend the Lesson 2 exercise by preserving dynamic route rendering and discounted pricing logic, then adding Lesson 3 requirements for:

- Bootstrap layout and components
- local static assets in `public/`
- a client-side search filter using `/js/script.js`
- a clean Bootstrap-enabled UI

---

## Requirements

1. Create an Express app with EJS view engine and static asset serving:
   - `app.set('view engine', 'ejs')`
   - `app.use(express.static(path.join(__dirname, 'public')))`

2. Store product data in a server-side module (`data/products.js` or similar).
   Each item should include:
   - `id` (numeric)
   - `name`
   - `description` (may contain HTML tags)
   - `price`
   - `discountPercentage` (optional)
   - `stock` or `quantity`

3. Add two routes:
   - `GET /products` to render the full product list
   - `GET /products/:id` to render the product detail page

4. Build views using Bootstrap and EJS partials:

5. In the list page (`/products`):
   - include a search input field
   - display each product as a Bootstrap card or table row
   - show stock, price, and discount status
   - include a link to the detail page for each product

6. In the detail page:
   - render `description` using `<%- %>` so embedded HTML displays correctly
   - render `name`, `price`, and other text using `<%= %>` to escape output
   - use `<% %>` for conditional discount logic
   - if `discountPercentage` exists, display:
     - original price
     - discounted price
     - discount percentage
   - if no discount exists, display only the regular price

7. Add local static assets in `public/`:
   - `public/css/style.css` for custom theme/style overrides
   - `public/js/script.js` for client-side search filtering

8. Implement client-side filtering in `public/js/script.js`:
   - read the search input value
   - hide cards/items that do not match the query

9. Handle missing items gracefully:
---

## Example Data Shape

```js
const products = [
  {
    id: 1,
    name: "iPhone 13",
    description: "<b>Latest model</b> with A15 Bionic chip.",
    price: 999,
    discountPercentage: 15,
    stock: 12,
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    description: "<i>Powerful performance</i> and amazing camera.",
    price: 899,
    stock: 5,
  },
  {
    id: 3,
    name: "MacBook Pro",
    description: "16-inch, <span style='color:red'>M1 Pro</span>.",
    price: 2499,
    discountPercentage: 10,
    stock: 4,
  },
];
```

---

## Expected Behavior

### `GET /products`

- renders a Bootstrap page with a search box
- lists products in cards or a table
- includes local stylesheet and script through `public/`

### `GET /products/1`

- renders the product detail page
- displays HTML description correctly
- calculates discounted price when applicable

### `GET /products/99`

- renders `Product not found`
- maintains page layout and header/footer

---

## Stretch Goals

- Add a badge for stock status: `In Stock`, `Low Stock`, `Out of Stock`