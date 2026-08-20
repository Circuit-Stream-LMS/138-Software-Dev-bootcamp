// React component that renders the complete menu
import { menuData } from "../data/menuData";
import Category from "./Category";

const Menu = ({ onAddToCart }) => {

  return (
    <div className="menu">
      <h1>Restaurant Menu</h1>

      {menuData.length === 0 && <p>No items </p>}

      {menuData.map((category, index) => (
        <Category key={index} stuff={category} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default Menu;
