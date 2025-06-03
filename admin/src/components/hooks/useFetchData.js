// hooks/useFetchData.js
import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("No token found");
          setLoading(false);
          return;
        }

        const res = await fetch(url, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();
        if (result.status === "success") {
          setData(result.data);
        } else {
          console.error("Failed to fetch:", result.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading };
};

export default useFetchData;
