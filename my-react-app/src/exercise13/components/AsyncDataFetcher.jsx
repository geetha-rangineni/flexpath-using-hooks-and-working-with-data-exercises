import React, { useEffect, useState } from 'react';

const AsyncDataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data using async/await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Async Data Fetcher</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default AsyncDataFetcher;
