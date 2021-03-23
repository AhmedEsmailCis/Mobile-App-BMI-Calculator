import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  HeaderOfBmiScreen,
  Container,
  SexContainer,
  IncrementContainer,
  HeightSection,
  Button,
} from '../components';
import {connect} from 'react-redux';

class BmiCalculatorScreen extends Component {
  onPressFunc = () => {
    const bmi =
      this.props.weightValue / Math.pow(this.props.heightValue / 100, 2);

    this.props.navigation.navigate('Result', {bmi: bmi.toFixed(2)});
  };
  render() {
    return (
      <View style={styles.screenStyle}>
        <StatusBar backgroundColor="#0B1030" />
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
        <Button
          onPressFunc={this.onPressFunc}
          label="CALCULATE YOUR BMI"></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rowForIncrementSection: {flexDirection: 'row', flex: 1},
  screenStyle: {
    flex: 1,
    backgroundColor: '#0B1030',
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
