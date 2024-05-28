// app/index.tsx
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");
const data = [{ title: "Item 1" }, { title: "Item 2" }, { title: "Item 3" }];

type Item = {
  title: string;
};

const TCLotterScreen: React.FC = () => {
  const [dailyActiveUsers, setDailyActiveUsers] = useState(0);

  useEffect(() => {
    const updateDAU = () => {
      const randomDAU = Math.floor(Math.random() * (1000 - 800 + 1)) + 800;
      setDailyActiveUsers(randomDAU);
    };

    updateDAU(); // Set an initial DAU value
    const interval = setInterval(updateDAU, 3000); // Update DAU every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>
          TC Lottery <Text style={{ color: "blue" }}>Hacks</Text>
        </Text>
      </View>
      <View>
        <Image
          source={{
            uri: "https://9987up.club/assets/png/XOSO_bg-33e377d7.png",
          }}
          style={styles.dashboard}
        />
        <Text
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            fontSize: 28,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Win Go
        </Text>
        <View style={styles.randomTextWrap}>
          <Text style={styles.randomText}>
            Daily Active Users: {dailyActiveUsers}
          </Text>
        </View>

        <Image
          source={{
            uri: "https://ossimg.9987cw.cc/TC/lotterycategory/lotterycategory_202312150334238m3v.png",
          }}
          style={styles.numCircle}
        />
      </View>
      <View>
        <Image
          source={{
            uri: "https://9987up.club/assets/png/diban-ad1641e9.png",
          }}
          style={styles.dashboard}
        />
        <Text
          style={{
            position: "absolute",
            bottom: 70,
            left: 20,
            color: "#fff",
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          Win Go 1Min
        </Text>
        <View style={styles.iconBallWrap}>
          <Image
            source={{
              uri: "https://9987up.club/assets/png/n4-cb84933b.png",
            }}
            style={styles.iconBall}
          />
          <Image
            source={{
              uri: "https://9987up.club/assets/png/n4-cb84933b.png",
            }}
            style={styles.iconBall}
          />
          <Image
            source={{
              uri: "https://9987up.club/assets/png/n4-cb84933b.png",
            }}
            style={styles.iconBall}
          />
          <Image
            source={{
              uri: "https://9987up.club/assets/png/n4-cb84933b.png",
            }}
            style={styles.iconBall}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.backText} onPress={() => router.push("/home")}>
          Back
        </Text>
      </View>
    </View>
  );
};

export default TCLotterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ffffff",
  },
  dashboard: {
    width: "100%",
    height: 150,
    marginTop: 8,
    borderRadius: 20,
  },
  numCircle: {
    width: 120,
    height: 100,
    position: "absolute",
    top: -12,
    right: 2,
  },
  iconBallWrap: {
    marginTop: 10,
    position: "absolute",
    bottom: 20,
    left: 15,
    flexDirection: "row",
  },
  iconBall: {
    width: 35,
    height: 35,
    marginRight: 8,
  },
  header: {
    paddingTop: 20,
    marginBottom: 20,
    textAlign: "center",
    alignItems: "center",
  },
  randomTextWrap: {
    position: "absolute",
    top: 60,
    left: 20,
    fontSize: 28,
    fontWeight: 700,
    color: "#fff",
  },
  randomText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: 400,
  },
  heading: {
    fontSize: 28,
    textTransform: "uppercase",
    fontWeight: "900",
    alignItems: "center",
  },

  footer: {
    paddingVertical: 20,
  },
  backText: {
    fontSize: 22,
    color: "blue",
  },
});
