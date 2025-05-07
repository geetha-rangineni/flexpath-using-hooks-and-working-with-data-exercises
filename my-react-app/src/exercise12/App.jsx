import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home1';
import About from './pages/About1';
import NotFound from './pages/NotFound';
import SimpleForm from './components/SimpleForm';
import EventLogger from './components/EventLogger';
import AsyncDataFetcher from './components/AsyncDataFetcher'; 

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/form" style={{ marginRight: '1rem' }}>Form</Link>
        <Link to="/event" style={{ marginRight: '1rem' }}>Event Logger</Link>
        <Link to="/fetch">Async Fetcher</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<SimpleForm />} />
        <Route path="/event" element={<EventLogger />} />
        <Route path="/fetch" element={<AsyncDataFetcher />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
