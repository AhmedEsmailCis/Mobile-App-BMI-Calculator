import React from 'react';
import {View, StyleSheet} from 'react-native';
const Container = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#14193A',
    flex: 1,
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export  {Container};
