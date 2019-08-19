import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HotOneHundred from '../screens/HotOneHundred';
import SettingsScreen from '../screens/SettingsScreen';
import appUploaderScreen from '../screens/appUploaderScreen';
import AppsScreen from '../screens/HotOneHundred';
import ArticlesScreen from '../screens/ArticlesScreen';
import SingleApp from '../screens/SingleApp';
import SearchScreen from '../screens/SearchScreen';


const Articles = createStackNavigator({
  Articles: {
    screen: ArticlesScreen,
    navigationOptions: {
      tabBarLabel: 'Articles',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : ''}
        />
      ),
    }
  }
});


const Search = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : ''}
        />
      ),
    }
  }
});


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  headerTitle: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const Categorys = createStackNavigator({
  Categorys: {
    screen: HotOneHundred,
    navigationOptions: {
      tabBarLabel: 'Apps',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : ''}
        />
      ),
    }
  },
  Apps: {
    screen: AppsScreen
  }
});


const Apps = createStackNavigator({
  Apps: AppsScreen,
});


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const appUploader = createStackNavigator({
  appUploader: appUploaderScreen,
});

appUploader.navigationOptions = {
  tabBarLabel: 'Image',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  Categorys,
  Articles,
  Search,
});
