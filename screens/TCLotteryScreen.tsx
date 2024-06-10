import {
  Provider as PaperProvider,
  Button,
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";
import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from "@rneui/themed";
import { useDataContext } from "@/context/DataContext";

const { width: viewportWidth } = Dimensions.get("window");
const data = [{ title: "Item 1" }, { title: "Item 2" }, { title: "Item 3" }];

const TCLotterScreen: React.FC = () => {
  const [dailyActiveUsers, setDailyActiveUsers] = useState(0);
  const { data, loading, error } = useDataContext();
  const [initialFetch, setInitialFetch] = useState(true);

  useEffect(() => {
    const updateDAU = () => {
      const randomDAU = Math.floor(Math.random() * (800 - 400 + 1)) + 200;
      setDailyActiveUsers(randomDAU);
    };

    updateDAU(); // Set an initial DAU value
    const interval = setInterval(updateDAU, 2000); // Update DAU every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    if (!loading) {
      setInitialFetch(false); // Set to false once loading is complete
    }
  }, [loading]);

  // Telegram-Press
  const handleTelegram = useCallback(() => {
    Linking.openURL("https://t.me/TheExcellentEarning");
  }, []);

  //Refferal-Register
  const handleRegister = useCallback(() => {
    Linking.openURL(
      "https://www.9987up.club/#/register?invitationCode=683365672307"
    );
  }, []);

  return (
    <PaperProvider>
      <View style={[styles.container, { flexDirection: "column" }]}>
        <View style={styles.header}>
          <Text style={styles.heading}>
            TC Lottery <Text style={{ color: "blue" }}>HacksV-D3</Text>
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/wingo_blue_bg.png")}
            style={styles.dashboard}
          />
          <Text
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              fontSize: 28,
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Win Go
          </Text>
          <View style={styles.randomTextWrap}>
            <Text style={styles.randomText}>
              Daily Active Users:{" "}
              <Text style={{ fontSize: 25, color: "yellow", fontWeight: "700" }}>
                {dailyActiveUsers}
              </Text>
            </Text>
          </View>

          <Image
            source={require("../assets/images/round_ball_bg.png")}
            style={styles.numCircle}
          />
        </View>
        <View style={{ position: "relative" }}>
          <ImageBackground
            source={require("../assets/images/orange_time_bg.png")}
            style={styles.dashboard}
          >
            <View style={[styles.absoluteView, styles.leftView]}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: "500",
                  marginLeft: 8,
                  marginBottom: 12,
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
                    uri: "https://9987up.club/assets/png/n5-49d0e9c5.png",
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
                    uri: "https://9987up.club/assets/png/n6-a56e0b9a.png",
                  }}
                  style={styles.iconBall}
                />
              </View>
            </View>
            <View style={[styles.absoluteView, styles.rightView]}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: "500",
                  marginBottom: 12,
                  marginRight: 10,
                }}
              >
                Time Remaining
              </Text>
              <View style={styles.leftContent}></View>
            </View>
          </ImageBackground>
        </View>
        <View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Period No</Text>
            <Text style={styles.headerCell}>Big Small</Text>
          </View>
          <View>
            {loading && initialFetch ? (
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}
                >
                  Please wait, Predicting...
                </Text>
                <ActivityIndicator animating={true} color={MD2Colors.red800} />
              </View>
            ) : (
              data && (
                <View style={styles.row}>
                  <Text style={styles.cell}>
                    {(parseInt(data.timestamp) + 1).toString()}
                  </Text>
                  <Text style={styles.cell}>
                    {data.size === "बड़ा"
                      ? "Big"
                      : data.size === "छोटा"
                      ? "Small"
                      : data.size}
                  </Text>
                </View>
              )
            )}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "500",
                marginVertical: 10,
                padding: 10,
                borderWidth: 1,
                borderColor: "red",
                borderRadius: 5,
                backgroundColor: "#ffebee", // Light red background color
              }}
            >
              Create a new TC Lottery account by clicking the 'Register' button.
              This mod will not work with your old account. Click 'Register' to
              create a new account. नया Account बनाने के लिए 'Register' बटन पर
              क्लिक करें।
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              justifyContent: "center",
              marginVertical: 18,
              width: "100%",
            }}
          >
            <Button
              icon={() => <Icon name="person-add" size={20} color="white" />}
              mode="contained"
              onPress={handleRegister}
            >
              Register
            </Button>
            <Button
              icon={() => <Icon name="telegram" size={20} color="white" />}
              mode="contained"
              onPress={handleTelegram}
            >
              Telegram
            </Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={() => router.push("/home")}
              style={styles.backButton}
            >
              <MaterialIcons name="arrow-back-ios" size={15} color="black" />
              <Text style={styles.backText}>Go Back to Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
};

export default TCLotterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#ffffff",
    flex: 1, // Ensure the container takes up the full screen height
  },
  dashboard: {
    width: "100%",
    height: 150,
    marginTop: 8,
    borderRadius: 20,
    resizeMode: "cover", // Ensure the image covers the entire area
  },
  absoluteView: {
    position: "absolute",
    width: "50%",
    height: "100%",
    display: "flex",
    bottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  leftView: {
    left: 0,
    display: "flex",
    alignItems: "flex-start",
  },
  rightView: {
    right: 0,
    display: "flex",
    alignItems: "flex-end",
  },
  numCircle: {
    width: 120,
    height: 100,
    position: "absolute",
    top: -12,
    right: 2,
    resizeMode: "contain",
  },
  iconBallWrap: {
    flexDirection: "row",
  },
  iconBall: {
    width: 35,
    height: 35,
    marginRight: 8,
    resizeMode: "contain",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  header: {
    paddingTop: 30,
    marginBottom: 10,
    textAlign: "center",
    alignItems: "center",
  },
  randomTextWrap: {
    position: "absolute",
    top: 60,
    left: 20,
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },
  randomText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
  },
  heading: {
    fontSize: 28,
    textTransform: "uppercase",
    fontWeight: "900",
    alignItems: "center",
  },
  timeWrap: {
    backgroundColor: "#fff",
    marginRight: 8,
    padding: 5,
    borderRadius: 4,
  },
  timeCount: {
    fontSize: 20,
    color: "#ff5c00",
    fontWeight: "700",
  },
  // Table-UI
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#FFA726",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: "600",
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  number: {
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
