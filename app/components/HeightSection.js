import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import {Container} from '../components';
import {connect} from 'react-redux';
import {setHeight} from '../reduxSection/actions';
import {labelStyle, numberStyle} from './constant';

class HeightSection extends Component {
  constructor(props) {
    super();
    this.state = {
      heightValue: 170,
    };
  }
  render() {
    return (
      <Container>
        <Text style={styles.heightStyle}>HEIGHT</Text>
        <View style={styles.groupStyle}>
          <Text style={styles.numberStye}>{this.state.heightValue}</Text>
          <Text style={styles.cm}>cm</Text>
        </View>
        <Slider
          value={170}
          minimumValue={120}
          maximumValue={220}
          minimumTrackTintColor="#CF0054"
          maximumTrackTintColor="#8D8E98"
          thumbTintColor='white'
          style={styles.slider}
          onValueChange={(value) => {
            this.setState({heightValue: parseInt(value)});
            const heightValue = parseInt(value);
            this.props.setHeight({heightValue});
          }}
        />
      </Container>
    );
  }
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