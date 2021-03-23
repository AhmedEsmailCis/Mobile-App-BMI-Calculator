import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {setSexType} from '../reduxSection/actions';
import {Container} from '../components';
import Icon from 'react-native-vector-icons/Fontisto';
import {labelStyle} from './constant';
class SexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexType: true,
    };
  }
  FemaleOnPress = () => {
    this.setState({sexType: false});
    const {sexType} = this.state;
    this.props.setSexType({sexType});
  };
  MaleOnPress = () => {
    this.setState({sexType: true});
    const {sexType} = this.state;
    this.props.setSexType({sexType});
  };
  render() {
    const bgColor = (label) =>
      this.state.sexType === label ? '#212744' : 'transparent';
    return (
      <View style={styles.rowForSexSection}>
        <Container>
          <TouchableOpacity
            style={[styles.buttonStyle, {backgroundColor: bgColor(true)}]}
            onPress={this.MaleOnPress}>
            <Icon name={'mars'} size={70} style={styles.icon} />
            <Text style={styles.labelStyle}>MALE</Text>
          </TouchableOpacity>
        </Container>
        <Container>
          <TouchableOpacity
            style={[styles.buttonStyle, {backgroundColor: bgColor(false)}]}
            onPress={this.FemaleOnPress}>
            <Icon name={'venus'} size={70} style={styles.icon} />
            <Text style={styles.labelStyle}>FEMALE</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowForSexSection: {flexDirection: 'row', flex: 1},
  icon: {
    color: 'white',
    margin: 3,
    marginBottom: 10,
  },
  labelStyle: labelStyle,
  buttonStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default connect(null, {setSexType})(SexContainer);
