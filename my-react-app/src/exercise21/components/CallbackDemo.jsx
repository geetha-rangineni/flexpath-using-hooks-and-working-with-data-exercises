import React, { useState, useCallback } from 'react';

// Regular button component that receives props
const Button = ({ onClick, label }) => {
  console.log(`Rendering button: ${label}`);
  return (
    <button onClick={onClick} style={{ marginRight: '1rem' }}>
      {label}
    </button>
  );
};

// Memoized version to avoid re-rendering unless props change
const MemoizedButton = React.memo(Button);

const CallbackDemo = () => {
  const [count, setCount] = useState(0);

  // useCallback to memoize these functions
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Callback Demo</h2>
      <p>Count: {count}</p>
      <MemoizedButton onClick={increment} label="Increment" />
      <MemoizedButton onClick={decrement} label="Decrement" />
    </div>
  );
};

export default CallbackDemo;
