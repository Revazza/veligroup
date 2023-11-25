import { useEffect, useState } from "react";
import { api } from "../Api";

function useFetch({ endpoint }) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);
    setHasErrors(false);
    api
      .get(endpoint)
      .then((res) => {
        const data = res.data;
        if (data.status !== 1) {
          setMessage(data.errors[0]);
          setHasErrors(true);
          return;
        }

        setData(data.payload);
      })
      .catch((err) => {
        setMessage(err.message);
        setHasErrors(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [endpoint]);

  useEffect(() => {
    if (!message) {
      return;
    }

    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  return {
    isLoading,
    hasErrors,
    message,
    data,
  };
}

export default useFetch;
