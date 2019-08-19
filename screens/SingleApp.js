import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native';
import {
  List, ListItem, FlatList, Card
} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import styles from '../assets/stylesheet';
import TweetDisplayer from '../components/TweetDisplayer';
import Forum from '../components/Forum';

export default class AppsScreen extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      tweets: [],
      app: { title: 'test' }
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#fffef7',
    },
  };

  async componentDidMount() {
    const app = this.props.navigation.state.params.app;
    const response = await axios.get(`https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/tweets?app=${app.title}`);
    const tweets = response.data;
    this.setState({ tweets, app });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.singleAppScreenContainer}>
        <Image
          style={styles.SingleAppImage}
          source={{ uri: 'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png' }}
        />
        <Text style={styles.singleAppTitle}>{this.state.app.title}</Text>
        <View style={styles.SingleAppTopRow}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          >
            <Text>{`${this.state.app.tweetGrowth / this.state.app.tweetCount}%`}</Text>
            <Ionicons type="ionicon" name="ios-trending-up" size={40} color="green" />
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          >
            <Text>Rank #3</Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          >
            <Ionicons name="logo-twitter" size={24} color="lightblue" />
            <Text>{this.state.app.tweetCount}</Text>
          </View>
        </View>
        <View style={styles.singleAppTweetView}>
          <TweetDisplayer tweets={this.state.tweets} />
        </View>
        <View style={styles.singleAppDescription}>
          <Text style={styles.singleAppDescriptionHeader}>Description</Text>
          <Text style={styles.singleAppDescriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <Forum app={this.props.navigation.state.params.app} />

      </ScrollView>
    );
  }
}
