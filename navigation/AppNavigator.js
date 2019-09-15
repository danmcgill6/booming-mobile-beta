import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AuthenticationNavigator from './AuthenticationNavigator';
import { createStackNavigator } from 'react-navigation-stack';
import MainTabNavigator from './MainTabNavigator';
import Entry from '../screens/Entry';

const EntryStack = createStackNavigator({ Home: Entry });

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Authentication: AuthenticationNavigator,
    Entry: EntryStack,
  },
  {
    initialRouteName: 'Entry',
  }
);
