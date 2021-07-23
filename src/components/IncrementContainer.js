import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setNumber } from "../redux/actions";
import { labelStyle, numberStyle } from "../common/constant";

function IncrementContainer({ number, setNumber, sectionLabel }) {
  const [num, setNum] = useState(number);
  const onPressFuncIncrease = () => {
    setNum((prev) => prev + 1);

    setNumber({ Number: num, sectionLabel });
  };
  const onPressFuncDecrease = () => {
    setNum((prev) => prev - 1);

    setNumber({ Number: num, sectionLabel });
  };
  return (
    <View style={styles.TouchableOpacityStyle}>
      <Text style={styles.sectionLabelStyle}>{sectionLabel}</Text>
      <Text style={styles.numberStyle}>{num}</Text>
      <View style={styles.rowViewOfIncrementButtons}>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={onPressFuncDecrease}>
            <Text style={styles.incrementSymbolStyle}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={onPressFuncIncrease}>
            <Text style={styles.incrementSymbolStyle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rowViewOfIncrementButtons: { flexDirection: "row" },
  sectionLabelStyle: labelStyle,
  numberStyle,
  incrementSymbolStyle: {
    color: "white",
    fontSize: 40,
    marginBottom: 5,
    fontWeight: "bold",
  },
  buttonViewStyle: {
    backgroundColor: "#757575",
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    elevation: 15,
  },
  TouchableOpacityStyle: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default connect(null, { setNumber })(IncrementContainer);
