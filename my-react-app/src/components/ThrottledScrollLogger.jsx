import React, { useEffect } from 'react';

const throttle = (fn, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const ThrottledScrollLogger = () => {
  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log('Scroll position:', window.scrollY);
    }, 500);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh', padding: '2rem' }}>
      <h2>Throttled Scroll Logger</h2>
      <p>Scroll this page and check the console to see the scroll position being logged every 500ms.</p>
    </div>
  );
};

export default ThrottledScrollLogger;
