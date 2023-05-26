import {
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Text,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CategoryItem from './CategoryItem';
import {Coffees} from '../../core/dummyData';

const CatalogueScreen = () => {
  const [searchString, setSearchString] = useState('');
  return (
    <View style={styles.catalogueScreenContainer}>
      {/* Catalogue Header */}
      <View style={styles.catalogueScreenHeader}>
        <Image
          source={require('../../assets/images/BrandLogo.png')}
          style={styles.catalogueLogoStyle}
          resizeMode={'contain'}
        />
        {/* Avatar container */}
        <View style={styles.catalogueAvatarContainer}></View>
      </View>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        {/* Search Icon here */}
        <TextInput
          placeholder="Browse for your favourite coffee..."
          cursorColor="#EFE3C8"
          placeholderTextColor="#EFE3C8"
          value={searchString}
          onChangeText={text => setSearchString(text)}
          style={styles.searchBarInput}
        />
      </View>
      {/* Catalogue Container */}
      <View style={styles.catalogueContainer}>
        {/* Catalogue Categories */}
        <View style={styles.catalogueCategoriesContainer}>
          <ScrollView
            bounces={false}
            contentContainerStyle={styles.catalogueScrollViewContainer}
            showsVerticalScrollIndicator={false}>
            <CategoryItem category={'Cappucino'} />
            <CategoryItem category={'Latte'} />
            <CategoryItem category={'Americano'} />
            <CategoryItem category={'Espresso'} />
            <CategoryItem category={'Flat White'} />
          </ScrollView>
        </View>
        {/* Catalogue Category Items */}
        <View style={styles.catalogueItemsContainer}>
          <View style={styles.catalogueItemsWrapperFlex}>
            <FlatList
              data={Coffees}
              numColumns={2}
              contentContainerStyle={styles.catalogueItemsFlatListContainer}
              columnWrapperStyle={styles.catalogueItemsFlatListColumnWrapper}
              renderItem={() => {
                return (
                  <View style={styles.catalogueItem}>
                    <Image
                      style={styles.catalogueItemImage}
                      source={{
                        uri: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                      }}
                      resizeMode={'cover'}
                    />
                    <Text style={styles.catalogueItemTxt}>
                      Bursting Blueberry
                    </Text>
                    <View style={styles.catalogueItemQtySelector}>
                      <View style={styles.catalogueItemPriceContainer}>
                        <Text style={styles.catalogueItemPriceTxt}>$300</Text>
                      </View>
                      <Pressable style={styles.catalogueItemAddBtn}>
                        <Text>plus</Text>
                      </Pressable>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CatalogueScreen;
