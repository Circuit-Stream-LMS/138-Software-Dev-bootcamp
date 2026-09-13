import { useCart } from "../context/CartContext";

const Cart = () => {
  // This page is the whole point of having CartContext: any component
  // can read/update the cart without it being passed down as props from
  // App -> Home -> ProductList -> ProductCard.
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />

            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>

              {/* TODO: Add Quantity controls */}
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>

            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        {/* TODO: Show total and clear cart button */}
        <p>Total: ${cartTotal.toFixed(2)}</p>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;