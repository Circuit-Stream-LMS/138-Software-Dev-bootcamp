// React component for menu categories
import MenuItem from "./MenuItem";

// Functional component to display a category with its items
const Category = ({ stuff }) => {
  console.log(stuff);

  return (
    <div className="category">
      <h2>{stuff.category}</h2>
      <div className="items">
        {stuff.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// Exporting the component so it can be used in Menu.jsx
export default Category;
