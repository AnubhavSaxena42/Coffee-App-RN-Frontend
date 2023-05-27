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
          uri: coffee?.imageUrl,
        }}
        resizeMode={'cover'}
      />
      <Text style={styles.catalogueItemTxt}>{coffee?.name}</Text>
      <View style={styles.catalogueItemQtySelector}>
        <View style={styles.catalogueItemPriceContainer}>
          <Text style={styles.catalogueItemPriceTxt}>${coffee?.price}</Text>
        </View>
        <Pressable style={styles.catalogueItemAddBtn}>
          <Entypo name="plus" color="black" size={22} />
        </Pressable>
      </View>
    </View>
  );
};

export default CatalogueItem;
