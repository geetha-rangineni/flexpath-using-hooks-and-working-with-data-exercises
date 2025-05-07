import React from 'react';
import useFetch from '../hooks/useFetch';

const CustomHookDemo = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/3');

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Custom Hook Demo</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default CustomHookDemo;
