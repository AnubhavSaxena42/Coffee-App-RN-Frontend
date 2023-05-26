import {View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CatalogueScreen = () => {
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
    </View>
  );
};

export default CatalogueScreen;
