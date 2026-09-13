import { NavLink } from "react-router";
import ToggleTheme from "./ToggleTheme"; 
import { useCart } from "../context/CartContext";

const Navbar = () => {

  // TODO: Show count next to Cart
  const {cartCount} = useCart()

  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
       <NavLink to="/cart">{`Cart (${cartCount})`}</NavLink>
      <ToggleTheme /> 
    </nav>
  );
};

export default Navbar;
