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
import Header from '../../Header';
import { login } from '../../../redux';
import renderApps from './RenderFunctions/RenderApps';
import renderForumPosts from './RenderFunctions/RenderForumPosts';


class BoomingFlatList extends React.Component {
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
    };
  }


  // updateSearch = (search) => {
  //   const displayedPosts = this.state.allPosts.filter((post) => {
  //     if (post.question.toLowerCase().includes(search.toLowerCase())) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   this.setState({ displayedPosts, search });
  // };

  render() {
    const { props } = this;
    const { search } = this.state;
    const { type, data } = this.props;
    return (
      <View style={styles.container}>
        <SearchBar
          containerStyle={styles.forumSearch}
          placeholder={search}
          lightTheme
          round
          // onChangeText={this.updateSearch}
        />
        <FlatList
          data={data}
          renderItem={({ item }) => {
            if (type === 'apps') return renderApps(item, props);
            if (type === 'posts') return renderForumPosts(item, props);
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
)(BoomingFlatList);
