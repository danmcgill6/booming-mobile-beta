import React from 'react';
import { View } from 'react-native';
import ArticleDisplayer from '../components/Article/ArticleDisplayer';

import styles from '../assets/stylesheet';

export default class ReportsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state;
  }

  static navigationOptions = {
    title: 'Reports',
  };

  render() {
    return (
      <View>
        <ArticleDisplayer />
      </View>
    );
  }
}
