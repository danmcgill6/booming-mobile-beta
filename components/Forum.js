import React from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import {
  Card, ListItem, Button, SearchBar, List
} from 'react-native-elements';
import styles from '../assets/stylesheet';
import ForumPost from './ForumPost';
import ForumThread from './ForumThread';


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
    const getPostsResponse = await axios.get(`https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/forum?appTitle=${app.title}`);
    const allPosts = getPostsResponse.data;
    this.setState({ allPosts });
  }

  updateSearch = (search) => {
    const displayedPosts = this.state.allPosts.filter((post) => {
      if (post.question.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
    this.setState({ displayedPosts, search });
  };

  render() {
    const { search, displayedPosts, allPosts } = this.state;
    const { app } = this.props;
    return (
      <View style={styles.forumContainer}>
        <Text style={styles.forumHeader}>Forum</Text>
        <View style={styles.forumTop}>
          <SearchBar
            lightTheme
            containerStyle={styles.forumSearch}
            placeholder={search}
            onChangeText={this.updateSearch}
          />
          <ForumPost app={app.title} />
        </View>
        <ScrollView>
          {
              displayedPosts.length >= 1 ? displayedPosts.map((post, i) => (
                <ForumThread title={post.title} question={post.post} id={post.id} likes={post.likes} app={post.appTitle} />
              ))
                : allPosts.map((post, i) => (
                  <ForumThread title={post.title} id={post.id} likes={post.likes} question={post.post} app={post.appTitle} />
                ))
            }
        </ScrollView>
      </View>
    );
  }
}
