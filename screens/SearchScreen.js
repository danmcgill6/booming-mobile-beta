import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { View, Text } from 'react-native';
import axios from 'axios';
import CategoryDisplayer from '../components/CategoryDisplayer';
import DisplayApps from '../components/DisplayApps';
import styles from '../assets/stylesheet';
import Header from '../components/Header';

export default class AppsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topHundred: []
    };
  }

    static navigationOptions = {
      title: 'Search',
      headerStyle: {
        backgroundColor: '#fffef7',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

    async componentDidMount() {}

    render() {
      return (
        <View style={styles.appsScreenContainer}>
          <Header title="Search" />
        </View>
      );
    }
}
