import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home1 from './Home1';
import About1 from '../pages/About1';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/about" element={<About1 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
