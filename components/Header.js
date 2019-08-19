import React from 'react';
import { View, Text, } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import styles from '../assets/stylesheet';

const Header = props => (
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
      : <Text style={styles.headerText}>{props.title}</Text>
  }

  </View>
);
export default Header;
