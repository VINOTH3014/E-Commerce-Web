import React, { useState } from "react";
import Input from "../common/input.jsx";
import Button from "../common/Button.jsx";



export default function SignupForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, email, password });
      }}
      className="card"
    >
      <h3>Sign up</h3>
      <Input label="Name" value={name} onChange={setName} placeholder="Your name"/>
      <Input label="Email" value={email} onChange={setEmail} type="email" placeholder="you@example.com" />
      <Input label="Password" value={password} onChange={setPassword} type="password" placeholder="Create a password" />
      <Input label="Confirm Password" value={password} onChange={setPassword} type="password" placeholder="Confirm your password" />
      <Button type="submit">Create account</Button>
      
    </form>
  );
}
