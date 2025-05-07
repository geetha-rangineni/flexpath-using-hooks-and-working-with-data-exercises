import React, { useEffect, useState } from 'react';

const EnhancedDataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();

        // Optional: simulate "no data" condition
        if (!result || Object.keys(result).length === 0) {
          setData(null);
        } else {
          setData(result);
        }
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Enhanced Data Fetcher</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {!loading && !error && data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
      {!loading && !error && !data && <p>No data found.</p>}
    </div>
  );
};

export default EnhancedDataFetcher;
