import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class Entry extends React.Component {
  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    console.log('TOKERR', token);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(token ? 'Main' : 'Authentication');
  }

  // Fetch the token from storage then navigate to our appropriate place

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
