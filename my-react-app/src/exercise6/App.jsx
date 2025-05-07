import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../pages/Home1";
import About from "../pages/About1";



export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}