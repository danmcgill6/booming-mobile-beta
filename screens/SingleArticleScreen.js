import React from 'react';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { View, Text } from 'react-native';
import DisplayArticle from '../components/DisplayArticle';
import styles from '../assets/stylesheet';


export default class SingleArticleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state;
  }

   static navigationOptions = {
     title: 'Articles'
   };

   render() {
     return (
       <View>
         <DisplayArticle />
       </View>
     );
   }
}
