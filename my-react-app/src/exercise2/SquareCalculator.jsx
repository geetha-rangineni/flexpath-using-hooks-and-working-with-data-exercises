import React, { useState } from "react";

function SquareCalculator() {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setNumber(Number(e.target.value));
  };

  const square = number * number;

  return (
    <div>
      <h2>Number: {number}</h2>
      <h2>Square: {square}</h2>
      <input type="number" value={number} onChange={handleChange} />
    </div>
  );
}

export default SquareCalculator;
