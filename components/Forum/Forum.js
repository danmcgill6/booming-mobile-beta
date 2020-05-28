import React from 'react';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import {
  View, Text,
} from 'react-native';
import BoomingFlatList from '../Common/List';
import styles from '../../assets/stylesheet';
import ForumPost from './ForumPost';


export default class Forum extends React.Component {
  constructor(props) {
    super();
    this.state = {
      search: 'Search for post',
      displayedPosts: [],
      allPosts: []
    };
  }

  async componentDidMount() {
    const { app } = this.props;
    console.log('APP', app);
  }

  render() {
    const { app } = this.props;

    return (
      <View style={styles.forumContainer}>
        <Text style={styles.forumHeader}>Forum</Text>
        <View style={styles.forumTop}>
          <ForumPost app={app.title} />
        </View>
        <BoomingFlatList type="posts" appTitle={app.title} />
      </View>
    );
  }
}
