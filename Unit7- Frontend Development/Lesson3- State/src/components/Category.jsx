// React component for menu categories
import MenuItem from "./MenuItem";

// stuff = one category object, e.g. { category: "Appetizers", items: [...] }
// onAddToCart isn't used here at all -- it's just passed down to MenuItem (prop drilling)
const Category = ({ stuff, onAddToCart }) => {
  return (
    <div className="category">
      <h2>{stuff.category}</h2>
      <div className="items">
        {stuff.items.map((item) => (
          <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Category;
