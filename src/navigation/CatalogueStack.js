import {createStackNavigator} from '@react-navigation/stack';
import CatalogueScreen from '../screens/CatalogueScreen/CatalogueScreen';
import CoffeeViewScreen from '../screens/CoffeeViewScreen/CoffeeViewScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterUserScreen from '../screens/RegisterUserScreen/RegisterUserScreen';
import {ROUTES} from './routes';

const Stack = createStackNavigator();

export const CatalogueStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerStyle: {display: 'none'},
          headerShown: false,
        };
      }}>
      <Stack.Screen name={ROUTES.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={ROUTES.REGISTER_USER_SCREEN}
        component={RegisterUserScreen}
      />
      <Stack.Screen
        name={ROUTES.CATALOGUE_SCREEN}
        component={CatalogueScreen}
      />
      <Stack.Screen
        name={ROUTES.COFFEE_VIEW_SCREEN}
        component={CoffeeViewScreen}
      />
    </Stack.Navigator>
  );
};
