import { useState, useEffect } from "react";
import Menu from "./components/Menu";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    // [...cart, newItem] makes a NEW array instead of editing the old one --
    // React needs a new array to notice the change and re-render
    // cart is like an item object plus quantity field
    setCart([...cart, { ...item, quantity }]);
  };

  // .reduce() adds up the quantity of every item in the cart into one number
  const totalItems = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

  // Runs again only when totalItems changes -- keeps the browser tab in sync
  useEffect(() => {
    document.title = totalItems > 0 ? `Cart (${totalItems}) - Restaurant Menu` : "Restaurant Menu";
  }, [totalItems]);

  // Empty array = run once, right when the app first loads
  useEffect(() => {
    console.log("App mounted!");
  }, []);

  return (
    <div className="app-wrapper">
      <div className="cart-summary">🛒 Items in cart: {totalItems}</div>
      <div className="app">
        <Menu onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default App;
