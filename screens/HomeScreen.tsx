// app/home.tsx
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const onPress = () => {
    router.push("/login");
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/736x/f4/05/4c/f4054c454c1d3dfb32a56a37bf16c4ca.jpg",
          }}
          style={styles.background}
        >
          <Image
            source={{
              uri: "https://biospc.org/wp-content/uploads/2023/11/TC-Lottery-1024x576.jpg",
            }}
            style={styles.dashboard}
          />

          <Text style={{ fontSize: 25, fontWeight: 900, marginTop: 10 }}>
            Welcome to Excellent Hacks
          </Text>
          <View style={styles.imageWrap}>
            <View style={styles.imgContainer}>
              <Pressable onPress={() => router.push('/tcLottery')}>
                <Image
                  source={{
                    uri: "https://play-lh.googleusercontent.com/3GWFLZYCm1eFjN2U8BibHBGYagNtXlYEkA-a1Vl_ERADUw1ApSdfktsNSuviVay8b08",
                  }}
                  style={styles.image}
                />
              </Pressable>
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jO0hO6Hw_rP3fwpIz3t0-3vycrV16LI8ur_iUeC_e7JO0fQA3Zl83d8L9pMNasgE0Ko&usqp=CAU",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://99clubs.com/wp-content/themes/99clubs/images/logo-99clubs.png",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://play-lh.googleusercontent.com/TvcahFACDBV9fGw8xgl_o0HdsA8jM7_aTMvd_Hz3Ta0zmztvHyeLwxuEyaqO538yz0Y",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://static6.tgstat.ru/channels/_0/c3/c31ad3cdda5461a8e09fc1f5872795ac.jpg",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://ok-win.org/wp-content/uploads/2024/05/Ok.png",
                }}
                style={styles.image}
              />
            </View>
          </View>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
              <Pressable>
                <Text style={styles.btnText}>Logout</Text>
              </Pressable>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  dashboard: {
    width: "95%",
    height: 150,
    marginTop: 80,
    borderRadius: 20,
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  glassContainer: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30, // iPhone-like rounded corners
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    overflow: "hidden", // Ensure content respects rounded corners
  },
  imageWrap: {
    display: "flex",
    marginTop: 50,
    flexDirection: "row",
    gap: 30,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imgContainer: {
    padding: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  image: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20, // iPhone-like rounded corners
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    overflow: "hidden", // Ensure content respects rounded corners
  },
  /** Button */
  btn: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginTop: 50,
    backgroundColor: "#075eec",
    borderColor: "#075eec",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});
