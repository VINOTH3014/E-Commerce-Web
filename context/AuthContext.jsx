import React, { createContext, useContext, useState } from "react";
import { userService } from "../service/userService.js";


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {id, name, email}

  const login = async (email, password) => {
    const res = await userService.login(email, password);
    setUser(res);
    return res;
  };

  const signup = async (data) => {
    const res = await userService.signup(data);
    setUser(res);
    return res;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
