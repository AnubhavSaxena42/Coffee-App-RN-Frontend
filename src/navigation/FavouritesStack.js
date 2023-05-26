import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen/CartScreen';
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
      <Stack.Screen name={ROUTES.CART_SCREEN} component={CartScreen} />
    </Stack.Navigator>
  );
};
