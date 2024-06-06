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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://194.238.17.67/tc-lottery-prediction"
        );
        const tcData = response.data.data;
        setData(tcData);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 1000); // Fetch data every 50 seconds

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
