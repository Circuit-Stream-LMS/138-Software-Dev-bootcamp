# React Practice Question: Building a Product Card

## Problem Statement

You are tasked with building a **Product Card** component that displays details about a product, such as its name, image, price, and description. The product data will be passed as **props** to the component. 

### Requirements:

1. **Product Card**: Create a component called `ProductCard` that accepts the following props:
   - `name`: A string representing the name of the product.
   - `image`: A string representing the URL of the product image.
   - `price`: A string or number representing the price of the product.
   - `description`: A string representing the description of the product.

2. **Product List**: Create a `ProductList` component that renders multiple `ProductCard` components, each with different product data. 

3. **CSS Styling**: Apply basic styling to the `ProductCard` component, ensuring the following:
   - The product image should be displayed as a square (you can set a fixed width and height).
   - The product details (name, price, and description) should be arranged neatly below the image.
   - The price should be bold and stand out.
   - The description should be in a smaller font.

4. **Example Usage**: Render a list of products (at least 3 products) in the `ProductList` component, passing the required props to each `ProductCard`.

---

### Acceptance Criteria:

- **ProductCard Component**:
  - The `ProductCard` component correctly displays the product's image, name, price, and description using props.
  - The product image is displayed as a square (consistent width and height).
  - The price is displayed in bold.
  - The description is in a smaller font than the product name.
  
- **ProductList Component**:
  - The `ProductList` component correctly renders multiple `ProductCard` components with different product data.
  - Each product's data (name, image, price, description) is passed as props to the respective `ProductCard`.

- **UI Layout**:
  - The product card has a clean layout with the image at the top and product details below.
  - The card should have some padding or margin around its content for spacing.
  - The `ProductList` component should display multiple cards correctly on the page.

- **No Errors**:
  - Ensure that there are no errors in the console and that the props are correctly passed and displayed.

---
