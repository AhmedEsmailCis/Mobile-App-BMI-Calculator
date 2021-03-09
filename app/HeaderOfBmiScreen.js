import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HeaderOfBmiScreen extends Component {
  render() {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>BMI CALCULATOR</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#11163A',
    marginBottom: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
