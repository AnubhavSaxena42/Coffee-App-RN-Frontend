import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen/CartScreen';
import CoffeeViewScreen from '../screens/CoffeeViewScreen/CoffeeViewScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import {ROUTES} from './routes';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerStyle: {display: 'none'},
          headerShown: false,
        };
      }}>
      <Stack.Screen name={ROUTES.SETTINGS_SCREEN} component={SettingsScreen} />
    </Stack.Navigator>
  );
};
