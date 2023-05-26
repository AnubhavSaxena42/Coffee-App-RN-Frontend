import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CategoryItem = ({category}) => {
  return (
    <Pressable
      style={{
        marginVertical: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {[...category]
        ?.map(letter => <Text style={styles.rotateText}>{letter}</Text>)
        .reverse()}
    </Pressable>
  );
};

export default CategoryItem;
