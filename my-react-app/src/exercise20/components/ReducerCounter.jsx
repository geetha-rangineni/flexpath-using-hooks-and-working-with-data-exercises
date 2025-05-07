import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const ReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default ReducerCounter;
