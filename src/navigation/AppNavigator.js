import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack} from './AuthStack';
import {ROUTES} from './routes';
import {MyTabs} from './TabNavigator';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerStyle: {display: 'none'},
          headerShown: false,
        };
      }}>
      <Stack.Screen name={ROUTES.AUTH_STACK} component={AuthStack} />
      <Stack.Screen name={ROUTES.APP_VIEW} component={MyTabs} />
    </Stack.Navigator>
  );
};
