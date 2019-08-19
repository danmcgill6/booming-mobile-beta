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
  }
});

Articles.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-cube${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
});


const Search = createStackNavigator({
  Search: {
    screen: SearchScreen,
  }
});

Search.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  headerTitle: 'Home',
  headerStyle: {
    backgroundColor: 'red'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const Categorys = createStackNavigator({
  Categorys: {
    screen: HotOneHundred,
  },
  Apps: {
    screen: AppsScreen
  },
  SingleApp: {
    screen: SingleApp
  }
});

Categorys.navigationOptions = {

  tabBarLabel: 'Hot 100',
  headerTitle: 'Hot 100',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
        ? `ios-trending-up${focused ? '' : '-outline'}`
        : ''
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  Categorys,
  Articles,
  Search,
}, {
  tabBarOptions: {
    activeTintColor: '#C3B299',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'white',
    },
  }
});
