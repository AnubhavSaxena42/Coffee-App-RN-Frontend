import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const CartItem = ({cartItem}) => {
  return (
    <View style={styles.cartItem}>
      <Image
        style={styles.cartItemImage}
        resizeMode="cover"
        source={{
          uri: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
      />
      <View style={styles.cartItemInfoContainer}>
        <Text style={styles.cartItemInfoTxt}>Cappucino</Text>
        <Text style={styles.cartItemInfoTxt}>Cappucino</Text>
        <Text style={styles.cartItemInfoTxt}>Cappucino</Text>
      </View>
      <View style={styles.cartItemQtyContainer}>
        <View style={styles.cartItemQty}>
          <Pressable style={styles.cartItemQtyBtn}>
            <Entypo name="plus" color="black" size={18} />
          </Pressable>
          <View style={styles.cartItemQtyTxtContainer}>
            <Text style={styles.cartItemQtyTxt}>1</Text>
          </View>
          <Pressable style={styles.cartItemQtyBtn}>
            <Entypo name="minus" color="black" size={18} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
