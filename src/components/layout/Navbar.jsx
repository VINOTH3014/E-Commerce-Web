import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart.js";
import { useAuth } from "../../hooks/useAuth.js";
import { BRAND_NAME } from "../../utils/constants.js";

export default function Navbar() {
  const { items } = useCart();
  const { user, logout } = useAuth();
  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <nav className="navbar">
      <Link to="/"><strong>{BRAND_NAME}</strong></Link>
      <div style={{ display: "flex", gap: 12 }}>
        <Link to="/products">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        {user ? (
          <>
            <Link to="/orders">Orders</Link>
            <Link to="/profile">Hi, {user.name.split(" ")[0]}</Link>
            <button className="button" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/profile">Login</Link>
        )}
      </div>
    </nav>
  );
}
