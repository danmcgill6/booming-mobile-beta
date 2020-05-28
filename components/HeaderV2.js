import React from 'react';
import { View, Text, } from 'react-native';
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

const HeaderV2 = (props) => {
  const { title } = props;
  const wordsInTitle = title.split(' ');
  const titleJSX = generateTitleText(wordsInTitle);

  return (
    <View style={styles.headerV2}>

      <Text style={styles.headerTextV2}>
        {titleJSX}
      </Text>
    </View>
  );
};
export default HeaderV2;
