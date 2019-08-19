import React from 'react';
import axios from 'axios';
import {
  View, Text, ImageBackground, TouchableOpacity
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import createIconSetFromFontello from '@expo/vector-icons/createIconSetFromFontello';
import TweetsModal from './tweetsModal';
import styles from '../assets/stylesheet';


export default class ArticleSlider extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const articles = [
      {
        title: 'Action/Adventure',
        imageUrl: require('../assets/images/trending.png'),
        backgroundTheme: 'light',
        style: {
          color: 'white',
          fontWeight: 'bold'
        }
      },
      {
        title: 'Simple',
        imageUrl: require('../assets/images/trending.png'),
        backgroundTheme: 'light',
        style: {
          color: 'white',
          fontWeight: 'bold'
        }

      },
      {
        title: 'Shooters',
        imageUrl: require('../assets/images/trending.png'),
        backgroundTheme: 'dark',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }

      },
      {
        title: 'Versus',
        imageUrl: require('../assets/images/trending.png'),
        backgroundTheme: 'dark',
        style: {
          color: 'white',
          fontWeight: 'bold'
        }
      },
      {
        title: 'Puzzle',
        imageUrl: require('../assets/images/trending.png'),
        style: {
          color: 'white',
          fontWeight: 'bold'
        }
      }
    ];
    return (
      <View>
        <View style={styles.featuredArticles}>
          <ScrollView style={styles.articlePageContainer} horizontal>
            {
              articles.map((app, i) => {
                if (app.backgroundTheme === 'light') {
                  styles.articlePreviewText.color = 'yello';
                } else {
                  styles.articlePreviewText.color = 'yellow';
                }
                return (
                  // <Card containerStyle={styles.cardStyle} wrapperStyle={styles.cardWrapper}>
                  <View key={i} style={styles.articleCard}>
                    <ImageBackground
                      imageStyle={{ borderRadius: 5 }}
                      style={styles.articlePreviewImage}
                      source={app.imageUrl}
                      key={i}
                    />
                    {/* <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> */}
                    <Text style={styles.articleText}>{app.title}</Text>
                    {/* </View> */}
                  </View>
                // </Card>
                );
              })
            }
          </ScrollView>
        </View>
      </View>

    );
  }
}
