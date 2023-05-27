import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const FavouritesScreen = () => {
  return (
    <View style={styles.favouritesScreenContainer}>
      <Text style={styles.favouritesScreenHeaderTxt}>Favourites</Text>
    </View>
  );
};

export default FavouritesScreen;
