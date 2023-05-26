import {View, Image, ScrollView, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import MilkChoice from './MilkChoice';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CoffeeViewScreen = () => {
  return (
    <View style={styles.coffeeViewScreen}>
      {/* Coffee Image */}
      <Image
        style={styles.coffeeImage}
        resizeMode="cover"
        source={{
          uri: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
      />
      {/* Coffee Name Container */}
      <View style={styles.coffeeNameContainer}>
        <View style={styles.coffeeNameTaglineContainer}>
          <Text style={styles.coffeeNameTxt}>Cappucino</Text>
          <View style={styles.taglineRatingContainer}>
            <Text style={styles.taglineTxt}>Drizzled with Caramel</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <AntDesign name="star" color="#D3A601" size={12} />
              <Text style={{...styles.ratingTxt, marginLeft: 5}}>4.5</Text>
            </View>
          </View>
        </View>
        <AntDesign name="heart" size={22} color="red" />
      </View>
      {/* Coffee Description */}
      <View style={styles.descriptionContainer}>
        <ScrollView style={styles.descriptionScrollView}>
          <Text style={styles.descriptionTxt}>
            A single espresso shot poured into hot foamy milk, with the surface
            topped with mildly sweetened cocoa powder and drizzled with
            scrumptious caramel syrup
          </Text>
        </ScrollView>

        {/* Milk Choice */}
        <View>
          <Text style={styles.choiceOfMilkHeaderTxt}>Choice of Milk</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.choiceOfMilkScrollView}
            bounces={false}>
            {[0, 1, 2]?.map(milk => (
              <MilkChoice milk={milk} />
            ))}
          </ScrollView>
          {/* Buy Now Button */}
          <View style={styles.priceBuyNowContainer}>
            <View>
              <Text style={styles.priceHeaderTxt}>Price</Text>
              <Text style={styles.priceTxt}>₹250</Text>
            </View>
            <Pressable style={styles.buyNowBtn}>
              <Text style={styles.buyNowTxt}>Buy now</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CoffeeViewScreen;
