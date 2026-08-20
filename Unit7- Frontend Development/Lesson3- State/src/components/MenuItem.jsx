// React component for individual menu items
import { useState } from "react";

const MenuItem = ({ item, onAddToCart }) => {
  const [showDetails, setShowDetails] = useState(false); // description hidden by default
  const [quantity, setQuantity] = useState(1);

  const toggleDetails = () => setShowDetails(!showDetails);

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
    setQuantity(1); // reset back to 1 after adding
  };

  return (
    <div className="menu-item">
      <div className="menu-item-header" onClick={toggleDetails}>
        <h3>{item.name}</h3>
        <span className="price">{item.price}</span>
      </div>

      {showDetails && <p className="description">{item.description}</p>}

      <div className="menu-item-actions">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))} // input values are always strings, so convert to a number
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
