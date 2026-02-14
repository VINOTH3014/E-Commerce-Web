import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // [{id, title, price, qty, image}]

  const addItem = (product, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(p => p.id === product.id);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeItem = (id) => setItems(prev => prev.filter(p => p.id !== id));

  const updateQty = (id, qty) =>
    setItems(prev => prev.map(p => (p.id === id ? { ...p, qty } : p)));

  const clear = () => setItems([]);

  const total = useMemo(
    () => items.reduce((sum, p) => sum + p.price * p.qty, 0),
    [items]
  );

  const value = { items, addItem, removeItem, updateQty, clear, total };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
