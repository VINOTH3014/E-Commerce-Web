import React from "react";

export default function ProfileInfo({ user }) {
  if (!user) return <div className="card">Not logged in</div>;
  return (
    <div className="card">
      <h3>Profile</h3>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
    </div>
  );
}
