import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function HeaderOfBmiScreen() {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>BMI CALCULATOR</Text>
    </View>
  );
}
export {HeaderOfBmiScreen};
const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#212544',
    marginBottom: 5,
    elevation: 15,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
