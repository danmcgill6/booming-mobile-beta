import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { View, Text } from 'react-native';
import ArticleDisplayer from '../components/ArticleDisplayer';

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