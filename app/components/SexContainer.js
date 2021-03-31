import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {setSexType} from '../reduxSection/actions';
import {Container} from '../components';
import Icon from 'react-native-vector-icons/Fontisto';
import {labelStyle} from './constant';
function SexContainer(props) {
  const [sexType, setSexType] = useState(true);
  const FemaleOnPress = () => {
    setSexType(false);
    props.setSexType({sexType});
  };
  const MaleOnPress = () => {
    setSexType(true);
    props.setSexType({sexType});
  };
  const bgColor = (label) => (sexType === label ? '#212744' : 'transparent');
  return (
    <View style={styles.rowForSexSection}>
      <Container>
        <TouchableOpacity
          style={[styles.buttonStyle, {backgroundColor: bgColor(true)}]}
          onPress={MaleOnPress}>
          <Icon name={'mars'} size={70} style={styles.icon} />
          <Text style={styles.labelStyle}>MALE</Text>
        </TouchableOpacity>
      </Container>
      <Container>
        <TouchableOpacity
          style={[styles.buttonStyle, {backgroundColor: bgColor(false)}]}
          onPress={FemaleOnPress}>
          <Icon name={'venus'} size={70} style={styles.icon} />
          <Text style={styles.labelStyle}>FEMALE</Text>
        </TouchableOpacity>
      </Container>
    </View>
  );
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
