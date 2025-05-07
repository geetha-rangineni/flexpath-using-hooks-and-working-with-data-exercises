import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about'); // Navigate to /about
  };

  return (
    <button onClick={handleClick} style={{ marginTop: '1rem' }}>
      Go to About Page
    </button>
  );
};

export default NavigationButton;
