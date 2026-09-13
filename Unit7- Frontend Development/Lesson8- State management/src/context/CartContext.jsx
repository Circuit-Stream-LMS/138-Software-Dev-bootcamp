import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cart items look like: { ...product, quantity }
  const [cart, setCart] = useState([]);

  function addToCard(product) {
    setCart((previousCart) => {
      const existingItem = previousCart.find((item) => item.id === product.id);
      //don't add duplicate rows for the same product —
      // adding an item that's already in the cart should bump its quantity.
      if (existingItem) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== productId),
    );
  }

  //TODO: Update quantity (Lets the Cart page do +/- buttons instead of only "remove entirely".)
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      );
    });
  };
  //TODO: Clear Cart
  const clearCart = () => setCart([]);
  //TODO: CartCount
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  //TODO: CartTotal
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCard,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
