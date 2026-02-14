import React from "react";
import { formatPrice } from "../../utils/formatPrice.js";

export default function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <strong>{item.title}</strong>
        <div>Price: {formatPrice(item.price)} | Qty: {item.qty}</div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button className="button" onClick={() => onUpdateQty(item.id, Math.max(1, item.qty - 1))}>-</button>
        <button className="button" onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
        <button className="button" onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
}
