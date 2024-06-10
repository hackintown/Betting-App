 // app/_layout.tsx
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import { AuthProvider } from "@/context/AuthContext";
import { DataProvider } from "@/context/DataContext";
import {
  registerBackgroundFetchAsync,
  unregisterBackgroundFetchAsync,
} from "./backgroundFetch";

export default function RootLayout() {
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
          <Slot />
        </View>
      </DataProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
