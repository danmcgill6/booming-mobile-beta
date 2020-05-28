import React from 'react';
import { View } from 'react-native';
import DisplayArticle from '../components/Article/DisplayArticle';
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
