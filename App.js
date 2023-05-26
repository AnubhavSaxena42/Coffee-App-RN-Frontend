import {View, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import CatalogueScreen from './src/screens/CatalogueScreen/CatalogueScreen';

import {APP_BACKGROUND_COLOR} from './src/core/constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CoffeeViewScreen from './src/screens/CoffeeViewScreen/CoffeeViewScreen';
import CartScreen from './src/screens/CartScreen/CartScreen';

const App = () => {
  console.log('App comp', StatusBar.currentHeight);
  return (
    <SafeAreaView
      style={{
        paddingTop: getStatusBarHeight(),
        flex: 1,
        backgroundColor: APP_BACKGROUND_COLOR,
      }}>
      {/* <CatalogueScreen /> */}
      {/* <CoffeeViewScreen /> */}
      <CartScreen />
    </SafeAreaView>
  );
};

export default App;
