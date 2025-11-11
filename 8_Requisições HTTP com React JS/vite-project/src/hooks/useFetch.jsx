import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  // 🔹 GET
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Erro na requisição: ${res.status}`);
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, callFetch]);

  // 🔹 POST
  useEffect(() => {
    const httpRequest = async () => {
      if (!config) return;

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, config);

        if (!res.ok) {
          throw new Error(`Erro no POST: ${res.status}`);
        }

        const json = await res.json();
        setCallFetch(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    httpRequest();
  }, [config, url]);

  return { data, httpConfig, loading, error };
};
