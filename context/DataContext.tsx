import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

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

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://194.238.17.67/tc-lottery-prediction"
      );
      const tcData = response.data.data;
      setData(tcData);
      setError(null); // Reset error state on successful fetch
    } catch (err) {
      console.error("Error fetching data:", err);
      if (axios.isAxiosError(err)) {
        setError(err.message);
        console.error("Axios error details:", {
          message: err.message,
          code: err.code,
          config: err.config,
          response: err.response,
        });
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
