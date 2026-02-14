import React, { useEffect, useState } from "react";
import { productService } from "../../service/productService.js";
import ProductCard from "./ProductCard.jsx";
import Loader from "../common/loader.jsx";
import { useCart } from "../../hooks/useCart.js";

export default function ProductList() {
  const [products, setProducts] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    productService.list().then(setProducts);
  }, []);

  if (!products) return <Loader />;

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} onAdd={addItem} />
      ))}
    </div>
  );
}

