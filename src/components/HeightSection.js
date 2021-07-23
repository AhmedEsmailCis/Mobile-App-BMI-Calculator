import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { connect } from "react-redux";
import { Container } from "./Container";
import { setHeight } from "../redux/actions";
import { labelStyle, numberStyle } from "../common/constant";

function HeightSection(props) {
  const [height, setHeightValue] = useState(170);
  return (
    <Container>
      <Text style={styles.heightStyle}>HEIGHT</Text>
      <View style={styles.groupStyle}>
        <Text style={styles.numberStye}>{height}</Text>
        <Text style={styles.cm}>cm</Text>
      </View>
      <Slider
        value={170}
        minimumValue={120}
        maximumValue={220}
        minimumTrackTintColor="#CF0054"
        maximumTrackTintColor="#8D8E98"
        thumbTintColor="white"
        style={styles.slider}
        onValueChange={(value) => {
          setHeightValue(value.toFixed(0));
          props.setHeight({ heightValue: value.toFixed(0) });
        }}
      />
    </Container>
  );
}
const styles = StyleSheet.create({
  slider: { width: "100%", marginTop: 10 },
  groupStyle: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  heightStyle: labelStyle,
  cm: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  numberStye: numberStyle,
});
export default connect(null, { setHeight })(HeightSection);
