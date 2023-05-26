import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const CatalogueItem = ({coffee}) => {
  return (
    <View style={styles.catalogueItem}>
      <Image
        style={styles.catalogueItemImage}
        source={{
          uri: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        resizeMode={'cover'}
      />
      <Text style={styles.catalogueItemTxt}>Bursting Blueberry</Text>
      <View style={styles.catalogueItemQtySelector}>
        <View style={styles.catalogueItemPriceContainer}>
          <Text style={styles.catalogueItemPriceTxt}>$300</Text>
        </View>
        <Pressable style={styles.catalogueItemAddBtn}>
          <Entypo name="plus" color="black" size={22} />
        </Pressable>
      </View>
    </View>
  );
};

export default CatalogueItem;
