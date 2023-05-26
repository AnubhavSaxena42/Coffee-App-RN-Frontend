import 'react-native-gesture-handler';
import {View, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import CatalogueScreen from './src/screens/CatalogueScreen/CatalogueScreen';

import {APP_BACKGROUND_COLOR} from './src/core/constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CoffeeViewScreen from './src/screens/CoffeeViewScreen/CoffeeViewScreen';
import CartScreen from './src/screens/CartScreen/CartScreen';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView
        style={{
          paddingTop: getStatusBarHeight(),
          flex: 1,
          backgroundColor: APP_BACKGROUND_COLOR,
        }}>
        <NavigationContainer>
          <CoffeeViewScreen />
        </NavigationContainer>
        {/* <CatalogueScreen /> */}
        {/* <CoffeeViewScreen /> */}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
