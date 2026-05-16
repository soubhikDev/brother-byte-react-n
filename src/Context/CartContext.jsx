import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = (item) => {
    setCartItems((prev) => ({
      ...prev,
      [item.id]: { ...item, qty: (prev[item.id]?.qty || 0) + 1 },
    }));
  };

  const removeItem = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[id]) {
        if (updated[id].qty <= 1) delete updated[id];
        else updated[id] = { ...updated[id], qty: updated[id].qty - 1 };
      }
      return updated;
    });
  };

  const getQty = (id) => cartItems[id]?.qty || 0;

  const totalItems = Object.values(cartItems).reduce((sum, i) => sum + i.qty, 0);
  const subtotal = Object.values(cartItems).reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + tax;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        getQty,
        totalItems,
        subtotal,
        tax,
        grandTotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
