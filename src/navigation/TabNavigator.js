import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ACTIVE_TINT_COLOR,
  APP_BACKGROUND_COLOR,
  INACTIVE_TINT_COLOR,
} from '../core/constants';
import {CartStack} from './CartStack';
import {CatalogueStack} from './CatalogueStack';
import {FavouritesStack} from './FavouritesStack';
import {ProfileStack} from './ProfileStack';
import {ROUTES} from './routes';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: APP_BACKGROUND_COLOR,
          borderTopWidth: 0.2,
          height: 60,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: ACTIVE_TINT_COLOR,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Foundation
              name="home"
              size={30}
              color={focused ? ACTIVE_TINT_COLOR : INACTIVE_TINT_COLOR}
            />
          ),
        }}
        name={ROUTES.CATALOGUE_STACK}
        component={CatalogueStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Foundation
              name="shopping-cart"
              size={30}
              color={focused ? ACTIVE_TINT_COLOR : INACTIVE_TINT_COLOR}
            />
          ),
        }}
        name={ROUTES.CART_STACK}
        component={CartStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Foundation
              name="heart"
              size={30}
              color={focused ? ACTIVE_TINT_COLOR : INACTIVE_TINT_COLOR}
            />
          ),
        }}
        name={ROUTES.FAVOURITES_STACK}
        component={FavouritesStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Entypo
              name="user"
              size={25}
              color={focused ? ACTIVE_TINT_COLOR : INACTIVE_TINT_COLOR}
            />
          ),
        }}
        name={ROUTES.PROFILE_STACK}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};
