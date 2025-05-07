import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // ✅ no BrowserRouter here
import Home from './pages/Home1';
import About from './pages/About1';
import NotFound from './pages/NotFound';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home1</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About1</Link>
        <Link to="/form">Form</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<SimpleForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
