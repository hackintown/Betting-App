// app/index.tsx
import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TCLotterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HI</Text>
      <Text style={{ fontSize: 22 }} onPress={() => router.push("/home")}>
        Back
      </Text>
    </View>
  );
};

export default TCLotterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
