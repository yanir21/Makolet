import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppNavbar from "./components/Navbar/navbar";
import Home from "./components/Views/HomePage/homePage";
import Cart from "./components/Views/Cart/cart";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
