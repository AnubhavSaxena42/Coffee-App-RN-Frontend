import {
  View,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CategoryItem from './CategoryItem';
import CatalogueItem from './CatalogueItem';
import Feather from 'react-native-vector-icons/Feather';
import {useCatalogue} from './useCatalogue';

const CatalogueScreen = () => {
  const {
    searchString,
    setSearchString,
    categories,
    getCoffees,
    getCategories,
    coffees,
    coffeesPageInfo,
    categoriesLoading,
    coffeesLoading,
    activeIndex,
    setActiveIndex,
    categoriesPageInfo,
  } = useCatalogue();
  console.log('active', activeIndex);
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
        <Feather name="search" color="#EFE3C8" size={20} />
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
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={styles.catalogueScrollViewContainer}
            data={categories}
            keyExtractor={item => item?.id}
            renderItem={({item, index}) => (
              <CategoryItem
                category={item}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            )}
            ListEmptyComponent={<></>}
            onEndReached={() => {
              if (categoriesPageInfo?.hasNextPage) {
                getCategories({fetchingMore: true});
              }
            }}
            ListFooterComponent={() => {
              if (categoriesPageInfo?.hasNextPage) {
                return (
                  <View
                    style={{
                      height: 80,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ActivityIndicator size={'small'} color="#EFE3C8" />
                  </View>
                );
              }
              return <></>;
            }}
          />
        </View>
        {/* Catalogue Category Items */}
        <View style={styles.catalogueItemsContainer}>
          <View style={styles.catalogueItemsWrapperFlex}>
            <FlatList
              data={coffees}
              refreshControl={
                <RefreshControl
                  onRefresh={() => {
                    getCoffees({fetchingMore: false, refreshing: true});
                  }}
                  refreshing={coffeesLoading}
                  colors={['#EFE3C8', '#EFE3C8']}
                  tintColor={'#EFE3C8'}
                />
              }
              ListFooterComponent={() => {
                if (coffeesPageInfo?.hasNextPage) {
                  return (
                    <View
                      style={{
                        height: 100,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <ActivityIndicator size={'large'} color="#EFE3C8" />
                    </View>
                  );
                }
                return <></>;
              }}
              ListEmptyComponent={
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator size={'large'} color="#EFE3C8" />
                </View>
              }
              onEndReached={() => {
                if (coffeesPageInfo?.hasNextPage) {
                  getCoffees({
                    fetchingMore: true,
                    refreshing: false,
                    signal: {},
                  });
                }
              }}
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
