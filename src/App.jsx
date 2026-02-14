import React from "react";
import AppRoutes from "./routes/AppRoutes.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
