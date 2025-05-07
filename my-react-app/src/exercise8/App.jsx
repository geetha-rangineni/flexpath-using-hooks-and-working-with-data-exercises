import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../exercise9/Home1';
import About from '../pages/About1';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

    
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

