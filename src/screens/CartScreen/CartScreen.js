import {View, Text, Pressable, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CartItem from './CartItem';

const CartScreen = () => {
  return (
    <View style={styles.cartScreenContainer}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cartScreenScrollView}>
        <View>
          {/* Cart Screen Header */}
          <Text style={styles.cartScreenHeaderTxt}>Cart</Text>

          {/* Cart Items Container */}
          <View style={styles.cartItemsContainer}>
            {[0, 1, 4]?.map(cartItem => (
              <CartItem cartItem={cartItem} />
            ))}
          </View>

          {/* Delivery Charges container */}
          <View style={styles.deliveryTaxesContainer}>
            <View style={styles.deliveryTaxesRow}>
              <Text style={styles.deliveryTaxesTxt}>Delivery Charges</Text>
              <Text style={styles.deliveryTaxesTxt}>₹234</Text>
            </View>
            <View style={styles.deliveryTaxesRow}>
              <Text style={styles.deliveryTaxesTxt}>Taxes</Text>
              <Text style={styles.deliveryTaxesTxt}>₹234</Text>
            </View>
          </View>
        </View>

        {/* Grand Total And Pay Now */}
        <View style={styles.totalContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalTxt}>Grand Total</Text>
            <Text style={styles.totalTxt}>₹2049</Text>
          </View>
          <Pressable style={styles.payNowBtn}>
            <Text style={styles.payNowBtnTxt}>PAY NOW</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;
