/* eslint-disable react/sort-comp */
import React from 'react';
import {
  Text, View, StyleSheet, ImageBackground
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { login } from '../redux';
import BoomingFlatList from '../components/Common/List';
import Header from '../components/Header';


class SingleForumScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 36,
      color: 'black',
      fontFamily: 'Cochin'
    },
    tabBarOptions: {
      activeTintColor: '#293462',
      labelStyle: {
        fontSize: 12
      }
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async getPosts(appTitle) {
    const getPostsResponse = await axios.get(`https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/forum?appTitle=${appTitle}`);
    const posts = getPostsResponse.data;
    console.log('Response data', posts);
    return posts;
  }

  async componentDidMount() {
    console.log('single forum props', this.props);
    const { app } = this.props.navigation.state.params;
    const { title } = app;
    const posts = await this.getPosts(title);
    this.setState({ posts });
  }


  render() {
    const { navigation } = this.props;
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Angry Birds" />
        <View style={styles.questions}>
          <BoomingFlatList data={posts} type="posts" title="Gacha Life" navigation={navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bannerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    backgroundColor: '#FCFFF7'
  },
  itemText: {
    fontSize: 18,
    alignSelf: 'center'
  },
  postNumber: {
    alignSelf: 'center',
    position: 'absolute',
    right: 76
  },
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: 200
  },
  questions: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 2
  }
});

const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(login(token))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleForumScreen);
