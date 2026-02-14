import React from "react";
import { formatPrice } from "../../utils/formatPrice.js";
import Button from "../common/Button.jsx";
import { Link } from "react-router-dom";

export default function CartSummary({ total }) {
  return (
    <div className="card">
      <h3>Summary</h3>
      <div>Total: {formatPrice(total)}</div>
      <Link to="/checkout"><Button>Proceed to Checkout</Button></Link>
    </div>
  );
}
