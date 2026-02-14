import React, { useState } from "react";
import Input from "../components/common/input.jsx";
import Button from "../components/common/Button.jsx";
import { useCart } from "../hooks/useCart.js";
import { orderService } from "../service/orderService.js";
import { useAuth } from "../hooks/useAuth.js";
import { formatPrice } from "../utils/formatPrice.js";

export default function Checkout() {
  const { items, total, clear } = useCart();
  const { user } = useAuth();
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  const placeOrder = async () => {
    setStatus("Placing order...");
    const order = await orderService.create({
      userId: user?.id || "guest",
      items,
      total,
      address
    });
    clear();
    setStatus(`Order ${order.id} placed! Total: ${formatPrice(order.total)}`);
  };

  if (items.length === 0) return <div className="card">Add items to cart first.</div>;

  return (
    <div className="card">
      <h3>Checkout</h3>
      <Input label="Delivery address" value={address} onChange={setAddress} placeholder="Street, City, PIN" />
      <div style={{ marginBottom: 12 }}>Total: {formatPrice(total)}</div>
      <Button onClick={placeOrder}>Place order</Button>
      {status && <div style={{ marginTop: 12 }}>{status}</div>}
    </div>
  );
}
