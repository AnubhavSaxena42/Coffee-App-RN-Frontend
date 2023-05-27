import 'react-native-gesture-handler';
import {View, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import CatalogueScreen from './src/screens/CatalogueScreen/CatalogueScreen';
import {APP_BACKGROUND_COLOR} from './src/core/constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MyTabs} from './src/navigation/TabNavigator';
import {ApolloProvider} from '@apollo/client';
import client from './src/core/client';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView
        style={{
          paddingTop: getStatusBarHeight(),
          flex: 1,
          backgroundColor: APP_BACKGROUND_COLOR,
        }}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
          {/* <CatalogueScreen /> */}
          {/* <CoffeeViewScreen /> */}
        </ApolloProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
