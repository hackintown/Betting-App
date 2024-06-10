import React, { createContext, useContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface DataContextProps {
  timestamp: string;
  number: string;
  size: string;
}

interface DataProviderProps {
  data: DataContextProps | null;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataProviderProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataContextProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch data from the API with retry mechanism
  const fetchData = async (retryCount = 0) => {
    try {
      setLoading(true);
      const response = await axios.get("http://194.238.17.67/tc-lottery-prediction");
      const tcData = response.data.data;
      setData(tcData);
      setError(null); // Reset error state on successful fetch
    } catch (err) {
      console.error("Error fetching data:", err);
      if (axios.isAxiosError(err)) {
        const statusCode = err.response?.status;
        setError(`Error: ${statusCode} - ${err.message}`);
        console.error("Axios error details:", {
          message: err.message,
          code: err.code,
          config: err.config,
          response: err.response,
        });

        // Handle specific HTTP status codes
        if (statusCode === 502 && retryCount < 3) {
          // Exponential backoff for 502 errors
          const retryDelay = Math.pow(2, retryCount) * 1000; // Exponential backoff delay
          setTimeout(() => fetchData(retryCount + 1), retryDelay);
          return;
        } else if (statusCode === 404) {
          // Handle 404 Not Found separately, no retries
          setError("Error: Resource not found (404)");
        }
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount and whenever the app is opened
  useEffect(() => {
    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 10000); // Fetch data every 10 seconds

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
