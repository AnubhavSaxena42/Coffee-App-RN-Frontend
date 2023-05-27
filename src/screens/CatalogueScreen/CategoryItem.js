import {Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CategoryItem = ({category, activeIndex, setActiveIndex, index}) => {
  return (
    <Pressable
      onPress={() => {
        setActiveIndex(index);
      }}
      style={{
        marginVertical: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {[...category?.name]
        ?.map(letter => (
          <Text
            style={{
              ...styles.rotateText,
              color:
                activeIndex === index ? '#EFE3C8' : ' rgba(239, 227, 200, 0.5)',
            }}>
            {letter}
          </Text>
        ))
        .reverse()}
    </Pressable>
  );
};

export default CategoryItem;
