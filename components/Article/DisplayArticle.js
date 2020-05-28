import React from 'react';
import {
  Text, ScrollView, ImageBackground
} from 'react-native';
import styles from '../../assets/stylesheet';


const DisplayArticle = (props) => {
  // const article = props.article;
  const article = {
    title: 'Top Picks for Artists',
    // imageUrl:require('../assets/images/abstract-art-artistic-1020315.jpg'),
    backgroundTheme: 'light',
    bannerImage: true,
    body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    style: {
      color: 'white',
      fontWeight: 'bold'
    }
  };

  return (
    <ScrollView style={styles.appListContainer}>
      <Text style={styles.articlePageHeader}>{article.title}</Text>
      {
        article.bannerImage
            && (
            <ImageBackground
              style={styles.articleBannerImage}
              source={article.imageUrl}
            />
            )
      }
      <Text>
        {
          article.body
        }
      </Text>


    </ScrollView>
  );
};
export default DisplayArticle;
