import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {setNumber} from '../reduxSection/actions';
import {labelStyle, numberStyle} from './constant';

function IncrementContainer(props) {
  const [number, setNumber] = useState(props.number);
  const onPressFuncIncrease = () => {
    let Number = number;
    setNumber(++Number);
    const {sectionLabel} = props;
    props.setNumber({Number, sectionLabel});
  };
  onPressFuncDecrease = () => {
    let Number = number;
    setNumber(--Number);
    const {sectionLabel} = props;
    props.setNumber({Number, sectionLabel});
  };
  return (
    <View style={styles.TouchableOpacityStyle}>
      <Text style={styles.sectionLabelStyle}>{props.sectionLabel}</Text>
      <Text style={styles.numberStyle}>{number}</Text>
      <View style={styles.rowViewOfIncrementButtons}>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={onPressFuncDecrease}>
            <Text style={styles.incrementSymbolStyle}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={onPressFuncIncrease}>
            <Text style={styles.incrementSymbolStyle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rowViewOfIncrementButtons: {flexDirection: 'row'},
  sectionLabelStyle: labelStyle,
  numberStyle: numberStyle,
  incrementSymbolStyle: {
    color: 'white',
    fontSize: 40,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  buttonViewStyle: {
    backgroundColor: '#757575',
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 15,
  },
  TouchableOpacityStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default connect(null, {setNumber})(IncrementContainer);
