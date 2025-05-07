import React, { useState, useMemo } from 'react';

const expensiveCalculation = (num) => {
  console.log('Calculating...');
  // Simulate heavy computation
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const MemoizationDemo = () => {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(true);

  const calculatedValue = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Calculated Value: {calculatedValue}</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        style={{ marginBottom: '1rem' }}
      />

      <br />

      <button onClick={() => setToggle((prev) => !prev)}>
        Toggle: {toggle.toString()}
      </button>
    </div>
  );
};

export default MemoizationDemo;
