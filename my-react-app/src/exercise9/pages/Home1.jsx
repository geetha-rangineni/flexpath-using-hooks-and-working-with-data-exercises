import React from 'react';
import NavigationButton from './NavigationButton'; 
const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the app.</p>

      <NavigationButton />
    </div>
  );
};

export default Home;
