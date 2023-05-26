import {createStackNavigator} from '@react-navigation/stack';
import CatalogueScreen from '../screens/CatalogueScreen/CatalogueScreen';
import CoffeeViewScreen from '../screens/CoffeeViewScreen/CoffeeViewScreen';
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
