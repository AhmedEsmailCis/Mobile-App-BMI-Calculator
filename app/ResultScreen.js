import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import HeaderOfBmiScreen from './HeaderOfBmiScreen';

export default class ResultScreen extends Component {
  onPressFunc = () => {
    this.props.navigation.navigate('BmiCalculator');
  };
  render() {
    const getDetails = (bmi) => {
      if (bmi >= 25) {
        return 'you have a higher than normal weight , try to  exercise more .';
      } else if (bmi > 18.5) {
        return 'you have a normal body weight , Good job .';
      } else {
        return 'you have a lower than normal weight , try to  eat a bit more .';
      }
    };
    const getResult = (bmi) => {
      if (bmi >= 25) {
        return 'Over Weight';
      } else if (bmi > 18.5) {
        return 'Normal';
      } else {
        return 'Under Weight';
      }
    };
    return (
      <View style={styles.screen}>
        <StatusBar backgroundColor="#11163A" />
        <HeaderOfBmiScreen />
        <Text style={styles.textStyle}> YOUR RESULT</Text>
        <View style={styles.containerStyle}>
          <Text style={styles.rStyle}>
            {getResult(this.props.navigation.state.params.bmi)}
          </Text>
          <Text style={styles.nStyle}>
            {this.props.navigation.state.params.bmi}
          </Text>
          <Text style={styles.dStyle}>
            {getDetails(this.props.navigation.state.params.bmi)}
          </Text>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            onPress={this.onPressFunc}
            style={styles.buttonStyleTouchableOpacity}>
            <Text style={styles.buttonText}>RE-CALCULATOR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rStyle: {
    color: '#46E256',
    fontSize: 20,
  },
  nStyle: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  dStyle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 2,
    marginRight: 2,
  },
  buttonStyleTouchableOpacity: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 30,
  },
  screen: {
    backgroundColor: '#14193A',
    flex: 1,
  },
  containerStyle: {
    backgroundColor: '#212544',
    flex: 1,
    borderRadius: 10,
    margin: 12,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#CF0054',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
