
# React Router Practice

## Objective
In this challenge, you will implement a basic React application with routing using **React Router v8**. You will create two pages:
1. **Home Page**: Displays a list of products.
2. **Product Details Page**: Displays the details of a single product when clicked.

You will use a **public product API** to fetch data and display it. You will also apply best practices, such as handling routes correctly and catching errors.

## Challenge Tasks

### Task 1: Set Up Routing
1. Create two pages:
   - `Home`: Displays a list of products.
   - `Product Details`: Displays the details of a product when clicked.
2. Use **React Router** to navigate between the `Home` and `Product Details` pages.

### Task 2: Fetch Products from a Public API
1. Use the [Fake Store API](https://fakestoreapi.com) to get a list of products:
   - **Fetch the list of products** and display them on the `Home` page.
   - **Display product details** on the `Product Details` page when a product is clicked.

2. The URL for the **list of products**: `https://fakestoreapi.com/products`
   - The API will return a list of products with details such as name, price, and image.

3. For the **product details**, use the URL: `https://fakestoreapi.com/products/:id`
   - This will return detailed information about a specific product.

### Task 3: Handling Not Found Routes
1. If a user tries to visit a route that doesn’t exist, show a **404 Not Found** page.


## File Structure Example

```text
src/
  components/
    Navbar.jsx
  pages/
    Home.jsx
    ProductDetails.jsx
    NotFound.jsx
  routes/
    AppRoutes.jsx
  App.jsx
  index.jsx
  index.css
```

## Resources
- [Fake Store API](https://fakestoreapi.com) (For product data)
- [React Router Documentation](https://reactrouter.com)

