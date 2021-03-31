import React from 'react';
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

function BmiCalculatorScreen(props) {
   const onPressFunc = () => {
    const bmi =
      props.weightValue / Math.pow(props.heightValue / 100, 2);

    props.navigation.navigate('Result', {bmi: bmi.toFixed(2)});
  };
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
          <IncrementContainer sectionLabel="AGE" number={25} />
        </Container>
      </View>
      <Button
        onPressFunc={onPressFunc}
        label="CALCULATE YOUR BMI"></Button>
    </View>
  );
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
