import {Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const SettingItem = ({title, onPress}) => {
  return (
    <Pressable style={styles.settingItemContainer}>
      <Text style={styles.settingItemTxt}>{title}</Text>
      <Entypo name="chevron-right" color="#f4ce9a" size={15} />
    </Pressable>
  );
};

export default SettingItem;
