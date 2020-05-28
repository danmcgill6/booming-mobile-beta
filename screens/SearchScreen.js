import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { SearchBar } from 'react-native-elements';
import styles from '../assets/stylesheet';

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
          lightTheme
        />
      </View>
    );
  }
}
