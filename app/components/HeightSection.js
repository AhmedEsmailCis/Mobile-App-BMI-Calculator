import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import {Container} from '../components';
import {connect} from 'react-redux';
import {setHeight} from '../reduxSection/actions';
import {labelStyle, numberStyle} from './constant';

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
          const heightValue = parseInt(value);
          setHeightValue(heightValue);
          props.setHeight({heightValue});
        }}
      />
    </Container>
  );
}
const styles = StyleSheet.create({
  slider: {width: '100%', marginTop: 10},
  groupStyle: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  heightStyle: labelStyle,
  cm: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  numberStye: numberStyle,
});
export default connect(null, {setHeight})(HeightSection);
