import {View, Image, TextInput, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CategoryItem from './CategoryItem';
import {Coffees} from '../../core/dummyData';
import CatalogueItem from './CatalogueItem';

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
              renderItem={({item, index}) => <CatalogueItem coffee={item} />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CatalogueScreen;
