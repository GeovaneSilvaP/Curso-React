import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  const [loading, setLoading] = useState(false);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    }
  };

  // GET
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await fetch(url);
      const json = await res.json();

      setLoading(false)

      setData(json);
    };

    fetchData();
  }, [url, callFetch]);

  // POST
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {
        setLoading(true)

        const res = await fetch(url, config);
        json = await res.json();

        setLoading(false)

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config]);

  return { data, httpConfig, loading };
};
