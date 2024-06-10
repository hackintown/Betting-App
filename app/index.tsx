import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "@/screens/LoginScreen";
import HomeScreen from "@/screens/HomeScreen";
import CheckForUpdates from "@/components/CheckForUpdates";
import RootLayout from "./_layout";

const Stack = createStackNavigator();

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
    <RootLayout>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={user ? LoginScreen : HomeScreen} 
          options={{ 
            title: user ? 'Login' : 'Home', 
            headerShown: true 
          }} 
        />
        <Stack.Screen 
          name="CheckForUpdates" 
          component={CheckForUpdates} 
          options={{ 
            title: 'Check for Updates', 
            headerShown: true 
          }} 
        />
      </Stack.Navigator>
    </RootLayout>
  );
};

export default Index;
