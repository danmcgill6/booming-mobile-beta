import React from 'react';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { View, Text } from 'react-native';
import styles from '../assets/stylesheet';


const ArticleDisplayer = (props) => {
  this.onCLick = function () {
  };
  const articles = [
    {
      title: 'Actiion/Adventure',
      // imageUrl:require('../assets/images/abstract-art-artistic-1020315.jpg'),
      backgroundTheme: 'light',
      style: {
        color: 'white',
        fontWeight: 'bold'
      }
    },
    {
      title: 'Puzzle',
      // imageUrl: require('../assets/images/abstract-astro-astronomy-956999.jpg'),
      backgroundTheme: 'light',
      style: {
        color: 'white',
        fontWeight: 'bold'
      }

    },
    {
      title: 'Simple',
      // imageUrl: require('../assets/images/abstract-background-blur-255379.jpg'),
      backgroundTheme: 'dark',
      style: {
        color: 'black',
        fontWeight: 'bold'
      }

    },
    {
      title: 'Shooters',
      // imageUrl:  require('../assets/images/alps-background-beautiful-view-1227520.jpg'),
      backgroundTheme: 'dark',
      style: {
        color: 'white',
        fontWeight: 'bold'
      }
    },
    {
      title: 'Versus',
      // imageUrl:  require('../assets/images/background-brick-wall-bricks-259915.jpg'),
      style: {
        color: 'white',
        fontWeight: 'bold'
      }
    }


  ];
  return (
    <ScrollView contentContainerStyle={styles.articleDisplayerContainer}>
      {

        articles.map((app, i) => {
          if (app.backgroundTheme === 'light') {
            styles.articlePreviewText.color = 'yellow';
          } else {
            styles.articlePreviewText.color = 'yellow';
          }
          return (
            <ImageBackground
              style={styles.articlePreviewImage}
              source={app.imageUrl}
              key={i}
            >
              <View style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
              }}
              >
                <Text style={app.style}>{app.title}</Text>
              </View>
            </ImageBackground>
          );
        })
      }
    </ScrollView>
  );
};
export default ArticleDisplayer;
