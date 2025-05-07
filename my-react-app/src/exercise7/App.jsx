import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../pages/Home1";
import About from "../pages/About1";
import UserProfile from "../pages/UserProfile";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/user/1">User 1</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
}
