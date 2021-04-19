import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Platform,
  Text,
} from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const WelcomeScreen = () => {
  const handleOnPress = () => {
    console.log("login pressed");
  };

  return (
    <ImageBackground
      style={styles.background}
      blurRadius={Platform.OS === "android" ? 3 : 10}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.buttonsContainer}>
        <AppButton caption="Login" onPress={handleOnPress} />
        <AppButton
          caption="Register"
          onPress={handleOnPress}
          color="secondary"
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <AppText>Sell things you don't need</AppText>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    margin: 10,
    width: "100%",
    alignItems: "center",
  },
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;
