import React, { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: '0.5rem' }}>Submit</button>
      </form>

      {submittedValue && (
        <p style={{ marginTop: '1rem' }}>You submitted: {submittedValue}</p>
      )}
    </div>
  );
};

export default SimpleForm;
