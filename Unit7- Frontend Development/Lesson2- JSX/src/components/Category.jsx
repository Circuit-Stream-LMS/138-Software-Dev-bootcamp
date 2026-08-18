// React component for menu categories
import MenuItem from "./MenuItem";

// Functional component to display a category with its items
const Category = ({ category }) => {
  return (
    <div className="category">
      <h2>{category.category}</h2>
      <div className="items">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// Exporting the component so it can be used in Menu.jsx
export default Category;
