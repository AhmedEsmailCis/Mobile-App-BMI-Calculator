import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import HeaderOfBmiScreen from './HeaderOfBmiScreen';
import Container from './Container';
import SexContainer from './SexContainer';
import IncrementContainer from './IncrementContainer';
import {connect} from 'react-redux';
import HeightSection from './HeightSection';

class BmiCalculatorScreen extends Component {
  onPressFunc = () => {
    const bmi =
      this.props.weightValue / Math.pow(this.props.heightValue / 100, 2);

    this.props.navigation.navigate('Result', {bmi: bmi.toFixed(2)});
  };
  render() {
    return (
      <View style={styles.screenStyle}>
        <StatusBar backgroundColor="#11163A" />
        <HeaderOfBmiScreen />
        <SexContainer />
        <HeightSection />
        <View style={styles.rowForIncrementSection}>
          <Container>
            <IncrementContainer sectionLabel="WEIGHT" number={70} />
          </Container>
          <Container>
            <IncrementContainer sectionLabel="AGE" number={20} />
          </Container>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            onPress={this.onPressFunc}
            style={styles.TouchableOpacityStyle}>
            <Text style={styles.buttonText}>CALCULATE YOUR BMI</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rowForIncrementSection: {flexDirection: 'row', flex: 1},
  TouchableOpacityStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenStyle: {
    flex: 1,
    backgroundColor: '#0B1030',
  },
  sexStyle: {
    color: 'white',
    fontSize: 20,
  },
  sexViewStyle: {
    backgroundColor: '#14193A',
    flex: 1,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#CF0054',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  weightButton: {
    backgroundColor: '#212544',
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
const mapStateToProps = (state) => {
  return {
    sexType: state.bmiRdx.sexType,
    ageValue: state.bmiRdx.ageValue,
    heightValue: state.bmiRdx.heightValue,
    weightValue: state.bmiRdx.weightValue,
  };
};
export default connect(mapStateToProps, null)(BmiCalculatorScreen);
