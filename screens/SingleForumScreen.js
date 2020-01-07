import React from 'react';
import {
  Text, View, FlatList, StyleSheet, Image
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import Header from '../components/Header';
import { login } from '../redux';
import ForumList from '../components/ForumList';


class SingleForumScreen extends React.Component {
  /**
     * 1. display a banner background with app image infront of it
     * 2. create search functionality, filter list based on search
     * 3. display top 20 questions
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
    return (
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Text>Hello World</Text>
        </View>
        <View style={styles.questions}>
          <ForumList type="posts" />
        </View>
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
  bannerContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
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
