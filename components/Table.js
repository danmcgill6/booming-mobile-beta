import React from 'react';
import axios from 'axios';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/stylesheet';
import TweetsModal from './tweetsModal';

const Table = (props) => {
  const topTen = props.topTen
    ? props.topTen.sort((a, b) => {
      if (a.tweetCount > b.tweetCount) return -1;
      if (a.tweetCount < b.tweetCount) return 1;
      if (a.tweetCount === b.tweetCount) return 0;
    })
    : [];

  return (
    <View style={styles.table}>
      {topTen.map((app, i) => (
        <TouchableOpacity
          key={i}
          containerStyle={{ borderRadius: 10 }}
          onPress={() => props.navigation.push('SingleApp', {
            app,
          })
          }
        >
          <View key={i} style={styles.tableRowContainer}>
            <Text style={styles.appPlaceText}>
#
              {i + 1}
            </Text>

            <View style={styles.thumbnailContainer}>
              <Image
                style={styles.thumbnail}
                source={{
                  uri:
                    'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png',
                }}
              />
            </View>
            <Text
              style={
                app.title.length > 15 ? styles.appTitleSmall : styles.appTitle
              }
            >
              {app.title}
            </Text>
            <View style={styles.twitterData}>
              <Ionicons name="logo-twitter" size={24} color="black" />
              <TweetsModal tweetCount={app.tweetCount} app={app.title} />
            </View>
            <View style={styles.iosArrow}>
              <Ionicons name="ios-arrow-forward" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default Table;
