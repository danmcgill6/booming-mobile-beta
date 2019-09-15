import { createStackNavigator } from 'react-navigation';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
});

export default createStackNavigator({
  AuthStack,
});
