// React component for individual menu items

// Functional component to display a single menu item
const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span className="price">{item.price}</span>
    </div>
  );
};

// Exporting the component so it can be used in other files
export default MenuItem;