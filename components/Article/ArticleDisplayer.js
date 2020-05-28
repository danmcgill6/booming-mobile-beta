import React from 'react';
import {
  ScrollView, ImageBackground, View, Text
} from 'react-native';

import styles from '../../assets/stylesheet';

const ArticleDisplayer = (props) => {
  this.onCLick = function () {};
  const data = [
    {
      title: '2019/01/01',
      imageUrl: require('../../assets/images/puzzle.jpg'),
      backgroundTheme: 'light',
      style: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    {
      title: '2019/01/08',
      Url: require('../../assets/images/puzzle.jpg'),
      backgroundTheme: 'light',
      style: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    {
      title: '2019/01/15',
      imageUrl: require('../../assets/images/puzzle.jpg'),
      backgroundTheme: 'dark',
      style: {
        color: 'black',
        fontWeight: 'bold',
      },
    },
    {
      title: '2019/01/22',
      imageUrl: require('../../assets/images/puzzle.jpg'),
      backgroundTheme: 'dark',
      style: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    {
      title: '2Why we think our app is good for disabled children',
      imageUrl: require('../../assets/images/puzzle.jpg'),
      style: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    {
      title: '2019/02/06',
      imageUrl: require('../../assets/images/puzzle.jpg'),
      backgroundTheme: 'light',
      style: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    {
      title: '2019/02/13',
      imageUrl: require('../../assets/images/puzzle.jpg'),
      backgroundTheme: 'light',
      style: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    {
      title: '2019/02/20',
      imageUrl: require('../../assets/images/puzzle.jpg'),
      backgroundTheme: 'dark',
      style: {
        color: 'black',
        fontWeight: 'bold',
      },
    },
    {
      title: '2019/02/27',
      imageUrl: require('../../assets/images/puzzle.jpg'),
      backgroundTheme: 'dark',
      style: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    {
      title: '2019/03/04',
      imageUrl: require('../../assets/images/puzzle.jpg'),
      style: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
  ];
  return (
    <ScrollView contentContainerStyle={styles.articleDisplayerContainer}>
      {data.map((app, i) => {
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
      })}
    </ScrollView>
  );
};
export default ArticleDisplayer;
