import React from "react";

export default function Input({ label, value, onChange, type = "text", placeholder }) {
  return (
    <label style={{ display: "block", marginBottom: 12 }}>
      <div style={{ marginBottom: 4 }}>{label}</div>
      <input
        className="input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}
