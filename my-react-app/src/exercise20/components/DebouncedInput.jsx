import React, { useEffect, useState } from 'react';

const DebouncedInput = () => {
  const [input, setInput] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      // Simulate API call
      console.log('API Call with:', input);
      setDebouncedValue(input);
    }, 1000);

    return () => {
      clearTimeout(handler); // Cancel previous timer if input changes
    };
  }, [input]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Debounced Input</h2>
      <input
        type="text"
        value={input}
        placeholder="Type something..."
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default DebouncedInput;
