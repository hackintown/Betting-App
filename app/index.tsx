// app/index.tsx
import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { createStackNavigator } from '@react-navigation/stack';// Import StackNavigator from Expo's router
import LoginScreen from "@/screens/LoginScreen";
import HomeScreen from "@/screens/HomeScreen";
import CheckForUpdates from "@/components/CheckForUpdates";

const Stack = createStackNavigator(); // Create a StackNavigator

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {/* Set screen options for each screen */}
      <Stack.Screen 
        name="Home" 
        component={user ? LoginScreen : HomeScreen} 
        options={{ 
          title: user ? 'Login' : 'Home', // Set the title based on user status
          headerShown: true // Show header
        }} 
      />
      <Stack.Screen 
        name="CheckForUpdates" 
        component={CheckForUpdates} 
        options={{ 
          title: 'Check for Updates', // Set custom title
          headerShown: true // Show header
        }} 
      />
    </Stack.Navigator>
  );
};

export default Index;
