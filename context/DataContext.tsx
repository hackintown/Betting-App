import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

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
        Alert.alert("Fetching data...");
        const response = await axios.get(
          "http://194.238.17.67/tc-lottery-prediction"
        );
        Alert.alert("Data fetched:", response.data);
        const tcData = response.data.data;
        setData(tcData);
        setLoading(false);
      } catch (err) {
        Alert.alert('Error me aagya');
        console.error(err); // Log the error
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 1000); // Fetch data every 10 seconds

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
