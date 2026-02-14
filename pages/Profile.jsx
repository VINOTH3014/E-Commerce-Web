import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";
import LoginForm from "../components/user/LoginForm.jsx";
import SignupForm from "../components/user/SignupForm.jsx";
import ProfileInfo from "../components/user/ProfileInfo.jsx";

export default function Profile() {
  const { user, login, signup } = useAuth();
  const [mode, setMode] = useState("login");

  if (user) return <ProfileInfo user={user} />;

  return (
    <div style={{ display: "grid", gap: 12 ,}}>
      <div style={{ display: "flex", gap: 8, justifyContent: "end" }}>
        <button className="button" onClick={() => setMode("login")}>Login</button>
        <button className="button" onClick={() => setMode("signup")}>Sign up</button>
      </div>
      {mode === "login" ? (
        <LoginForm onSubmit={login} />
      ) : (
        <SignupForm onSubmit={signup} />
      )}
    </div>
  );
}
