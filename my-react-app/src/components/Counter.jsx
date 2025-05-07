import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
