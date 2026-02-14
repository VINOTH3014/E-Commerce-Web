import React from "react";
import Button from "../common/Button.jsx";
import { formatPrice } from "../../utils/formatPrice.js";

export default function ProductDetailView({ product, onAdd }) {
  return (
    <div className="card">
      <div style={{ height: 220, background: "#f1f5f9", borderRadius: 6, marginBottom: 12 }} />
      <h2 style={{ margin: 0 }}>{product.title}</h2>
      <p style={{ color: "#475569" }}>A great product for everyday use.</p>
      <h3>{formatPrice(product.price)}</h3>
      <Button onClick={() => onAdd(product)}>Add to cart</Button>
    </div>
  );
}
