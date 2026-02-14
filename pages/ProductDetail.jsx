import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productService } from "../service/productService.js";
import ProductDetailView from "../components/product/ProductDetailView.jsx";
import Loader from "../components/common/loader.jsx";
import { useCart } from "../hooks/useCart.js";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    productService.getById(id).then(setProduct);
  }, [id]);

  if (!product) return <Loader />;

  return <ProductDetailView product={product} onAdd={addItem} />;
}
