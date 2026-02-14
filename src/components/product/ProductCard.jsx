import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button.jsx";
import { formatPrice } from "../../utils/formatPrice.js";

export default function ProductCard({ product, onAdd }) {
  console.log('product', product)
  return (
    <div className="card">
      <div style={{ height: 140, borderRadius: 6, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={product.image} alt={product.title} width={100} height={100}/>
      </div>
      <div style={{ fontWeight: 600 }}>{product.title}</div>
      
      <div style={{ color: "#0f172a" }}>{formatPrice(product.price)}</div>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <Button onClick={() => onAdd(product)}>Add to cart</Button>
        <Link to={`/products/${product.id}`}>View</Link>
      </div>
    </div>
  );
}
