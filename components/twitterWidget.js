import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import styles from '../assets/stylesheet';
import axios from 'axios';

export default class TwitterWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      description: '',
      profileImageUrl: '',
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/twitterfeed'
    );
    const tweetData = response.data;
    console.log(tweetData);
    const { description } = tweetData[0].user;
    const profileImageUrl = tweetData[0].user.profile_image_url_https;
    const tweets = tweetData.map((data) => {
      return {
        tweet: data.text,
        createdAt: data.created_at,
        profileImage: data.user.profile_image_url_https,
      };
    });

    this.setState({ tweets, description, profileImageUrl });
  }

  render() {
    return (
      <View style={styles.singleAppWidgetContainer}>
        <View>
          <View style={styles.singleAppTwitterLogoContainer}>
            <Ionicons name="logo-twitter" size={40} color="lightblue" />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.viewTweetsContainer}>
          {this.state.tweets.map((tweet, i) => {
            console.log(tweet);
            return (
              <View key={i} style={styles.tweetsDisplayer}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ selectedTweet: tweet });
                  }}
                >
                  <ListItem
                    roundAvatar
                    avatar={{ uri: tweet.profileImage }}
                    key={i}
                    subtitleStyle={styles.tweetPreviewtext}
                    title={tweet.userName}
                    subtitle={tweet.tweet}
                    hideChevron
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
