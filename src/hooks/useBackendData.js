import { useState, useEffect } from 'react';

function useBackendData(apiEndpoint, params = {}) {

    const api = axios.create({
        baseURL: urls.BASE_URL,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(apiEndpoint, params);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();

    // Clean-up function
    return () => {
      // Optionally you can cancel any ongoing requests or perform other clean-up tasks here
    };
  }, [apiEndpoint, params]);

  return { data, loading, error };
}

export default useBackendData;
