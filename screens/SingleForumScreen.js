/* eslint-disable react/sort-comp */
import React from 'react';
import {
  Text, View, StyleSheet, ImageBackground
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import Header from '../components/Header';
import { login } from '../redux';
import ForumList from '../components/ForumList';


class SingleForumScreen extends React.Component {
  /**
     * Pass type posts and the appId or name into forum list to get correct results
     * 1. display a banner background with app image infront of it
     * 2. create search functionality, filter list based on search
     * 3. display top 20 questions
     *
     * THOUGHTS:
     * display single post screen through modal or screen?
     * Its also displayed in the single app screen and built in as a modal..?
     * Can we re use???
     * Extract code that displays post into a component and use that component in a screen and a modal
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
      appTitle: ''
    };
  }


  render() {
    console.log('SingleFoScreenProps', this.props);
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <ImageBackground
            style={styles.bannerImage}
            source={require('../assets/images/appBanner.jpg')}
          >
            <Text>Hello World</Text>
          </ImageBackground>
        </View>
        <View style={styles.questions}>
          <ForumList type="posts" appTitle="Gacha Life " navigation={navigation} />
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
