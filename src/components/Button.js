import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Button({ onPressFunc, label }) {
  return (
    <View style={styles.buttonStyle}>
      <TouchableOpacity onPress={onPressFunc} style={styles.TouchableOpacityStyle}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#CF0054",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
export { Button };
