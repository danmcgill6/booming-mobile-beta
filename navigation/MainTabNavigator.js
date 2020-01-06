import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HotOneHundred from '../screens/HotOneHundred';
import AppsScreen from '../screens/HotOneHundred';
import ReportsScreen from '../screens/ReportsScreen';
import SingleApp from '../screens/SingleApp';
import SearchScreen from '../screens/SearchScreen';
import ForumScreen from '../screens/ForumScreen';
import SingleForumScreen from '../screens/SingleForumScreen';

const Reports = createStackNavigator({
  Reports: {
    screen: ReportsScreen,
  },
});

Reports.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-book' : 'md-information-circle'}
    />
  ),
};

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  SingleApp: {
    screen: SingleApp,
  },
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  headerTitle: 'Home',
  headerStyle: {
    backgroundColor: 'red',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-information-circle'}
    />
  ),
};

const Search = createStackNavigator({
  Search: {
    screen: SearchScreen,
  },
});

Search.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-information-circle'}
    />
  ),
};


const Categorys = createStackNavigator({
  Categorys: {
    screen: HotOneHundred,
  },
  Apps: {
    screen: AppsScreen,
  },
  SingleApp: {
    screen: SingleApp,
  },
});

Categorys.navigationOptions = {
  tabBarLabel: 'Leaders',
  headerTitle: 'Leaders',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-trending-up' : ''}
    />
  ),
};

const Forum = createStackNavigator({
  Forum: {
    screen: ForumScreen,
  },
  SingleForum: {
    screen: SingleForumScreen,
  },
});

Forum.navigationOptions = {
  tabBarLabel: 'Forum',
  headerTitle: 'Forum',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatboxes' : ''}
    />
  ),
};

export default createBottomTabNavigator(
  {
    HomeStack,
    Forum,
    Categorys,
    Reports,
    Search,
  },
  {
    tabBarOptions: {
      activeTintColor: '#C3B299',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#04395E',
        borderTopWidth: 0,
        height: 55,
        paddingBottom: 5,
      },
    },
  }
);
