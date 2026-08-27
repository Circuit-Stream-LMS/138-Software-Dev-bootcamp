import { useState, useEffect } from "react";
import Menu from "./components/Menu";

const App = () => {

  // useState hook allows you to create state variables which react can keep track of
  //const [nameOfVariable, functionToUpdateValueOfVariable] = useState(initialValue);
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    
    // [...cart, newItem] makes a NEW array instead of editing the old one --
    // React needs a new array to notice the change and re-render
    // cart is like an item object plus quantity field
    setCart([...cart, { ...item, quantity }]); 
  };


  // derived state 
  // .reduce() adds up the quantity of every item in the cart into one number
  const totalItems = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);


  // whenever you want to perfrom a side effect , then use a useEffect hook. 
  // useEffect allows you to tap into the life cycle of a component
  // Runs again only when totalItems changes -- keeps the browser tab in sync

  // useEffect(()=>{
  // // whatever logic you write, you can control when it runs
  // // if dep is blank when useffect only runs once for the first time,
  // // if any variables is passed, whenever the value of that variable will change, useEffect will run
  // },[totalItems])

  useEffect(() => {
    document.title = totalItems > 0 ? `Cart (${totalItems}) - Restaurant Menu` : "Restaurant Menu";
  }, [totalItems]);

  // Empty array = run once, right when the app first loads
  useEffect(() => {
    console.log("App mounted!");
  }, []);

  return (
    <div className="app-wrapper">
      <div className="cart-summary">🛒 Count: {totalItems}</div>
      <div className="app">
        {/* calling Menu component and passing a prop onAddToCart  */}
        <Menu onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default App;
