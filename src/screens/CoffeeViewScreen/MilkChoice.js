import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const MilkChoice = ({milk}) => {
  return (
    <View style={styles.choiceOfMilk}>
      <Text style={styles.choiceOfMilkTxt}>Oat Milk</Text>
    </View>
  );
};

export default MilkChoice;
