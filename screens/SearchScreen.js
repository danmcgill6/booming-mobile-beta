import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { View, Text } from 'react-native';
import axios from 'axios';
import CategoryDisplayer from '../components/CategoryDisplayer';
import DisplayApps from '../components/DisplayApps';
import styles from '../assets/stylesheet';
import Header from '../components/Header';
import { SearchBar } from 'react-native-elements';

export default class AppsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
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
  updateSearch = (search) => {
    this.setState({ search });
  };
  async componentDidMount() {}

  render() {
    const { search } = this.state;

    return (
      <View style={styles.searchScreenContainer}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={true}
        />
      </View>
    );
  }
}
