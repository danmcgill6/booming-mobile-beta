import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../assets/stylesheet';


const generateTitleText = (words) => {
  const JSXArrayOfWords = words.map((word) => {
    const firstLetter = word[0];
    const restOfWord = word.slice(1);
    return (
      <Text>
        <Text style={styles.headerFirstLetter}>
          {' '}
          {firstLetter}
        </Text>
        {restOfWord}
      </Text>
    );
  });
  return JSXArrayOfWords;
};

const Header = props => (
  <View style={styles.headerContainer}>
    <Image style={styles.headerImage} source={require('../assets/images/FullColor_TransparentBg_1280x1024_72dpi.png')} />
  </View>

);
export default Header;
