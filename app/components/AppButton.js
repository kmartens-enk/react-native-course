import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppButton = ({ caption, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{caption}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 40,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});
export default AppButton;
