import { useState, useEffect } from "react";
import { api } from "../Api";

function useApiRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [message, setMessage] = useState("");

  const handleApiRequest = (apiEndpoint, requestData, successMessage) => {
    setIsLoading(true);
    setHasErrors(false);
    api
      .post(apiEndpoint, requestData)
      .then((res) => {
        const data = res.data;
        if (data.status !== 1) {
          setMessage(data.errors[0]);
          setHasErrors(true);
          return;
        }

        setMessage(successMessage);
      })
      .catch((err) => {
        setMessage(err.message);
        setHasErrors(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
    handleApiRequest,
  };
}

export default useApiRequest;
