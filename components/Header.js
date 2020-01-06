import React from 'react';
import { View, Text, } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
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

const Header = (props) => {
  const { title } = props;
  const wordsInTitle = title.split(' ');
  const titleJSX = generateTitleText(wordsInTitle);

  return (
    <View style={styles.headerContainer}>
      {props.imageUrl
        ? (
          <ImageBackground
            imageStyle={{ }}
            style={styles.headerBackgroundImage}
            source={props.imageUrl}
            key={i}
          >
            <Text style={styles.headerText}>{props.title}</Text>
          </ImageBackground>
        )
        : (
          <Text style={styles.headerText}>
            {titleJSX}

          </Text>
        )
  }

    </View>
  );
};
export default Header;
