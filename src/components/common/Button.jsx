import React from "react";

export default function Button({ children, onClick, type = "button", variant = "primary", disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${variant === "primary" ? "primary" : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
