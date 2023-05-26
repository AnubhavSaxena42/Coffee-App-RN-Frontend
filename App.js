import {View, StatusBar} from 'react-native';
import React from 'react';
import CatalogueScreen from './src/screens/CatalogueScreen/CatalogueScreen';

import {APP_BACKGROUND_COLOR} from './src/core/constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const App = () => {
  console.log('App comp', StatusBar.currentHeight);
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight(),
        flex: 1,
        backgroundColor: APP_BACKGROUND_COLOR,
      }}>
      <CatalogueScreen />
    </View>
  );
};

export default App;
