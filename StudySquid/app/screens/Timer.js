import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";

import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";

const Timer = ({ setScreen }) => {
  const [remainingTime, setRemainingTime] = useState(10); // Start with 60 seconds
  const [timerStatus, setTimerStatus] = useState("running"); 
  const [focused, setFocused] = useState(true); // Track focus state

  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Quicksand_400Regular,
    Handjet: require("../../assets/fonts/Handjet.ttf"),
    PixelGame: require("../../assets/fonts/PixelGame.otf"),
  });

  // Countdown logic
  useEffect(() => {
    let timerId;

    if (remainingTime > 0 && timerStatus === "running" && focused) { 
      timerId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime <= 0 || !focused) { 
      setTimerStatus("stopped"); 
    }

    return () => clearInterval(timerId); 
  }, [remainingTime, timerStatus, focused]);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/plainBG.png")}
        style={styles.backgroundImage}
        onTouchStart={() => setFocused(!focused)} // Toggle focus on touch
      />
      <View style={styles.container}>
        {timerStatus === "running" ? (
          <Text style={styles.title}>{remainingTime}</Text> 
        ) : (
          <Text style={styles.title}>Times Up!</Text> 
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "PixelGame",
    fontSize: 125,
    marginBottom: -25,
    transform: [{ rotate: "-90deg" }],
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default Timer;