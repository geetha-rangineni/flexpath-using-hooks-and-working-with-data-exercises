import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home1';
import About from './pages/About1';
import NotFound from './pages/NotFound';
import SimpleForm from './components/SimpleForm';
import EventLogger from './components/EventLogger';
import AsyncDataFetcher from './components/AsyncDataFetcher';
import EnhancedDataFetcher from './components/EnhancedDataFetcher';
import CallbackDemo from './components/CallbackDemo';
import MemoizationDemo from './components/MemoizationDemo';
import CustomHookDemo from './components/CustomHookDemo';
import ReducerCounter from './components/ReducerCounter';


function App() {
  return (
    <div>
      <nav style={{ padding: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/form" style={{ marginRight: '1rem' }}>Form</Link>
        <Link to="/event" style={{ marginRight: '1rem' }}>Event Logger</Link>
        <Link to="/fetch" style={{ marginRight: '1rem' }}>Async Fetcher</Link>
        <Link to="/enhanced-fetch" style={{ marginRight: '1rem' }}>Enhanced Fetcher</Link>
        <Link to="/callback" style={{ marginRight: '1rem' }}>Callback Demo</Link>
        <Link to="/memo" style={{ marginRight: '1rem' }}>Memo Demo</Link> 
        <Link to="/custom-hook" style={{ marginRight: '1rem' }}>Custom Hook</Link>
        <Link to="/counter" style={{ marginRight: '1rem' }}>Counter</Link>
      
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<SimpleForm />} />
        <Route path="/event" element={<EventLogger />} />
        <Route path="/fetch" element={<AsyncDataFetcher />} />
        <Route path="/enhanced-fetch" element={<EnhancedDataFetcher />} />
        <Route path="/callback" element={<CallbackDemo />} />
        <Route path="/memo" element={<MemoizationDemo />} />
        <Route path="/custom-hook" element={<CustomHookDemo />} />
        <Route path="/counter" element={<ReducerCounter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;





