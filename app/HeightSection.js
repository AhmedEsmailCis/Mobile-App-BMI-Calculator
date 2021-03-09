import React, {Component} from 'react';
import {Slider, View, Text, StyleSheet} from 'react-native';
import Container from './Container';
import {connect} from 'react-redux';
import {setHeight} from './actions';

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
          maximumTrackTintColor="grey"
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
  heightStyle: {
    color: 'white',
    fontSize: 15,
  },
  cm: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  numberStye: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
  },
});
export default connect(null, {setHeight})(HeightSection);
