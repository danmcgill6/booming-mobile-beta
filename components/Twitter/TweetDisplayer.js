
import React from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/stylesheet';


export default class TweetsDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTweet: undefined
    };
    // for (let i = 0; i < this.props.tweets.length; i++) {
    //   this.state[i] = false;
    // }
  }

  render() {
    const tweets = this.props.tweets;
    return (
      <View style={styles.singleAppTweetsContainer}>
        <Text style={styles.singleAppTweetsHeader}>What are people saying ?</Text>

        <View style={styles.singleAppTwitterLogoContainer}>
          <Ionicons name="logo-twitter" size={40} color="lightblue" />
        </View>
        <ScrollView contentContainerStyle={styles.viewTweetsContainer}>
          {
            tweets.map((tweet, i) => (

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
            ))

          }
        </ScrollView>
        {
        this.state.selectedTweet
            && (
            <TouchableOpacity
              style={styles.dialog}
              onPress={() => { this.setState({ selectedTweet: undefined }); }}
            >
              <View style={styles.singleTweetContent}>
                <View style={styles.singleTweetTopContainer}>
                  <Image
                    style={styles.singleTweetProfImage}
                    source={{ uri: this.state.selectedTweet.profileImage }}
                  />
                  <Text style={styles.singleTweetuserName}>{this.state.selectedTweet.userName}</Text>
                </View>
                <View style={styles.singleTweetTextContainer}>
                  <Text style={styles.singleTweetText}>{this.state.selectedTweet.tweet}</Text>
                </View>
              </View>
            </TouchableOpacity>
            )
            }
      </View>
    );
  }
}
