import React from 'react';
import {
  Text, View, FlatList, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import Header from '../components/Header';
import { login } from '../redux';

'';

class ForumScreen extends React.Component {
  /**
     * 1. display the app names and number of questions asked within their forum page
     * 2. create search functionality, filter list based on search
    */
  constructor(props) {
    super(props);
    this.state = {
      topTen: []
    };
  }

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


  render() {
    const { props } = this;
    return (
      <View style={styles.container}>
        <Header title="Forum" />

        <FlatList
          data={[
            { key: 'Gachalife', posts: 69 },
            { key: 'Angry Birds', posts: 69 },
            { key: 'Facebook', posts: 69 },
            { key: 'TikTok', posts: 1000 },
            { key: 'Snapchat', posts: 69 },
            { key: 'Instagram', posts: 69 },
            { key: 'John', posts: 69 },
            { key: 'Jillian', posts: 69 },
            { key: 'Jimmy', posts: 69 },
            { key: 'Julie', posts: 69 },
          ]}
          renderItem={({ item }) => (
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
          )
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
)(ForumScreen);
