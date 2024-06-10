import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { AuthProvider } from "@/context/AuthContext";
import { DataProvider } from "@/context/DataContext";
import { registerBackgroundFetchAsync, unregisterBackgroundFetchAsync } from "./backgroundFetch";

interface RootLayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useEffect(() => {
    registerBackgroundFetchAsync();

    return () => {
      unregisterBackgroundFetchAsync();
    };
  }, []);

  return (
    <AuthProvider>
      <DataProvider>
        <View style={styles.container}>
          {/* Render Slot component for routing */}
          {children}
        </View>
      </DataProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RootLayout;
