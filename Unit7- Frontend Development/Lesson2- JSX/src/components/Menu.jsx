// React component that renders the complete menu
import { menuData } from "../data/menuData"; // its not a react functional component 
import Category from "./Category"; 

// Functional component that maps through categories and displays them
const Menu = () => {
  return (
    <div className="menu">
      <h1>Restaurant Menu</h1>
      {menuData.map((item, index) => (
        <Category key={index} stuff={item} />
      ))}
    </div>
  );
};

// Exporting the Menu component
export default Menu;

