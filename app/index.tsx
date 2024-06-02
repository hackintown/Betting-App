// app/index.tsx
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import { View } from "react-native";
import CheckForUpdates from "@/components/CheckForUpdates";

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
      <CheckForUpdates />
    </View>
  );
};

export default Index;
