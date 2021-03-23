import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {HeaderOfBmiScreen, Button} from '../components';
import BmiBrain from '../BmiBrain';
export default class ResultScreen extends Component {
  onPressFunc = () => {
    this.props.navigation.navigate('BmiCalculator');
  };
  render() {
    return (
      <View style={styles.screen}>
        <StatusBar backgroundColor="#0B1030" />
        <HeaderOfBmiScreen />
        <Text style={styles.textStyle}> YOUR RESULT</Text>
        <View style={styles.containerStyle}>
          <Text style={styles.rStyle}>
            {BmiBrain.getResult(this.props.navigation.state.params.bmi)}
          </Text>
          <Text style={styles.nStyle}>
            {this.props.navigation.state.params.bmi}
          </Text>
          <Text style={styles.dStyle}>
            {BmiBrain.getDetails(this.props.navigation.state.params.bmi)}
          </Text>
        </View>
        <Button label="RE-CALCULATOR" onPressFunc={this.onPressFunc}></Button>
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
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 30,
  },
  screen: {
    backgroundColor: '#0B1030',
    flex: 1,
  },
  containerStyle: {
    backgroundColor: '#14193A',
    flex: 1,
    borderRadius: 10,
    margin: 12,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
