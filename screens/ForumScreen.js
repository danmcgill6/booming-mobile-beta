import React from 'react';
import {
  Text, View, FlatList, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import Header from '../components/Header';
import ForumList from '../components/ForumList';
import { login } from '../redux';

'';

class ForumScreen extends React.Component {
  /**
   * can we make this work for all apss and single app?
   *
   *
   * take in appId if no App id pull top 30 fourm threads
   *
   * how do we store top 30...? cache...?
   *
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
        <ForumList type="apps" navigation={props.navigation} />
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
