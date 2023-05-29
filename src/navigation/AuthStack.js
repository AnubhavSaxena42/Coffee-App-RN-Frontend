import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterUserScreen from '../screens/RegisterUserScreen/RegisterUserScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import {ROUTES} from './routes';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerStyle: {display: 'none'},
          headerShown: false,
        };
      }}>
      <Stack.Screen name={ROUTES.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={ROUTES.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={ROUTES.REGISTER_USER_SCREEN}
        component={RegisterUserScreen}
      />
    </Stack.Navigator>
  );
};
