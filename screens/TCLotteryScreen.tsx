// app/index.tsx
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel, { CarouselRenderItem } from "react-native-reanimated-carousel";
import "react-native-reanimated";

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

  const renderItem: CarouselRenderItem<Item> = ({ item }) => {
    console.log("Rendering item:", item);
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>
          TC Lottery <Text style={{ color: "blue" }}>Hacks</Text>
        </Text>
        <View style={styles.randomTextWrap}>
          <Text style={styles.randomText}>
            Daily Active Users: {dailyActiveUsers}
          </Text>
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          data={data}
          renderItem={renderItem}
          width={viewportWidth}
          height={200}
          autoPlay={true}
          autoPlayInterval={3000}
          loop={true}
        />
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
    alignItems: "center",
    padding: 15,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  randomTextWrap: {
    backgroundColor: "#000",
    padding: 6,
    borderRadius: 10,
    marginTop:5,
  },
  randomText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: 28,
    textTransform: "uppercase",
    fontWeight: "900",
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    backgroundColor: "lightblue",
    borderRadius: 10,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    paddingVertical: 20,
  },
  backText: {
    fontSize: 22,
    color: "blue",
  },
});
