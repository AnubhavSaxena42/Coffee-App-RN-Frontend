import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen/CartScreen';
import FavouritesScreen from '../screens/FavouritesScreen/FavouritesScreen';
import {ROUTES} from './routes';

const Stack = createStackNavigator();

export const FavouritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          //   headerStyle: {display: 'none'},
          headerShown: false,
        };
      }}>
      <Stack.Screen
        name={ROUTES.FAVOURITES_SCREEN}
        component={FavouritesScreen}
      />
    </Stack.Navigator>
  );
};
