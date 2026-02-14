import React from "react";
import { useCart } from "../hooks/useCart.js";
import CartItem from "../components/cart/CartItem.jsx";
import CartSummary from "../components/cart/CartSummary.jsx";

export default function Cart() {
  const { items, updateQty, removeItem, total } = useCart();

  return (
    <>
      <h2>Your cart</h2>
      {items.length === 0 ? (
        <div className="card">Your cart is empty</div>
      ) : (
        <>
          <div style={{ display: "grid", gap: 12 }}>
            {items.map(i => (
              <CartItem key={i.id} item={i} onUpdateQty={updateQty} onRemove={removeItem} />
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <CartSummary total={total} />
          </div>
        </>
      )}
    </>
  );
}
