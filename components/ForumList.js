import React from 'react';
import {
  Text, View, FlatList, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import {
  SearchBar
} from 'react-native-elements';
import { connect } from 'react-redux';
import Header from './Header';
import { login } from '../redux';


class ForumList extends React.Component {
  /*
  *
  * dynamically display forum questions and apps
  *
  * take in type as a prop...?
  *
  * SOULOUTION:
  * if type === apps ---> fetch apps with most forum activity
  * if type === posts ---> fetch forum posts that are associated with appId or appName
  *
  * 1. display a banner background with app image infront of it
  * 2. create search functionality, filter list based on search
  * 3. display top 20 questions
  */

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
      search: 'Search for post',
      posts: [],
      allPosts: [],
      apps: [
        {
          key: 'Gacha Life',
          posts: 19
        }]
    };
    this.renderAppsList = this.renderAppsList.bind(this);
    this.renderPostsList = this.renderPostsList.bind(this);
  }

  async componentDidMount() {
    const { type, appTitle } = this.props;
    if (type === 'posts') await this.getPosts(appTitle);
  }

  async getPosts(appTitle) {
    const getPostsResponse = await axios.get(`https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/forum?appTitle=${appTitle}`);
    const posts = getPostsResponse.data;
    console.log('POSTS', posts);
    this.setState({ posts });
  }

  async getApps() {
    // logic to get apps
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

  renderAppsList(item) {
    const { props } = this;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => props.navigation.push('SingleForum', {
          item,
        })}
      >
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnail}
            source={{
              uri:
              'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png',
            }}
          />
        </View>
        <Text style={styles.itemText}>{item.key}</Text>
        <Text style={styles.postNumber}>
          {item.posts}
          {' '}
          Posts
        </Text>
        <View style={styles.iosArrow}>
          <Ionicons name="ios-arrow-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>
    );
  }

  renderPostsList(item) {
    const { props } = this;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => props.navigation.push('SingleForum', {
          item,
        })}
      >
        <Text style={styles.itemText}>{item.key}</Text>
        <Text style={styles.postNumber}>
          {item.posts}
          {' '}
      Posts
        </Text>
        <View style={styles.iosArrow}>
          <Ionicons name="ios-arrow-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>
    );
  }


  render() {
    const { search } = this.state;
    const { type } = this.props;
    console.log('PROPS', this.props);
    console.log('STATE', this.state);
    const { apps, posts } = this.state;
    const listData = posts.length ? posts : apps;
    return (
      <View style={styles.container}>
        <SearchBar
          containerStyle={styles.forumSearch}
          placeholder={search}
          onChangeText={this.updateSearch}
        />
        <FlatList
          data={listData}
          renderItem={({ item }) => {
            if (type === 'apps') return this.renderAppsList(item);
            if (type === 'posts') return this.renderPostsList(item);
          }
      }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
  itemContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  thumbnailContainer: {
    borderRadius: 5,
    marginLeft: 5
  },
  thumbnail: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10
  },
  iosArrow: {
    position: 'absolute',
    right: 10

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
)(ForumList);
