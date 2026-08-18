// React component that renders the complete menu
import { menuData } from "../data/menuData";
import Category from "./Category";

// Functional component that maps through categories and displays them
const Menu = () => {
  return (
    <div className="menu">
      <h1>Restaurant Menu</h1>
      {menuData.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  );
};

// Exporting the Menu component
export default Menu;