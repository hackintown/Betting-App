import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Alert,
} from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Club55Screen: React.FC = () => {
  return (
    <PaperProvider>
      <ImageBackground
        source={{ uri: "https://example.com/your-background-image.jpg" }} // Use your own image URL or local image
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)"]}
          style={styles.overlay}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Coming Soon</Text>
            <Text style={styles.subtitle}>
              We're working hard to get things ready for you. Stay tuned!
            </Text>
            <Button
              mode="contained"
              onPress={() => Alert.alert("Sure, we will notify you")}
              style={styles.button}
              labelStyle={styles.buttonLabel}
            >
              Notify Me
            </Button>
            <View style={{ marginTop: 25 }}>
              <TouchableOpacity
                onPress={() => router.push("/home")}
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <MaterialIcons
                  name="arrow-back-ios"
                  size={15}
                  color="black"
                  style={{ color: "#fff", fontSize: 18 }}
                />
                <Text style={{ color: "#fff", fontSize: 18 }}>
                  Go Back to Dashboard
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    width,
    height,
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FF6347",
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonLabel: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Club55Screen;
