import React from 'react';

const EventLogger = () => {
  const handleClick = (event) => {
    console.log('Event Type:', event.type);
    console.log('Event Target:', event.target);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Event Logger</h2>
      <button onClick={handleClick}>Log Event Info</button>
    </div>
  );
};

export default EventLogger;
