import React from 'react';
import {
  View, StyleSheet, ImageBackground, Text
} from 'react-native';

import { connect } from 'react-redux';
import { fetchForumApps } from '../redux/reducers/forum/actions';
import Header from '../components/Header';
import BoomingFlatList from '../components/Common/List';
import { login } from '../redux';
import { TOP_TEN_API_ENDPOINT } from '../constants';

/**
   * can we make this work for all apss and single app?
   *
   * SOULOUTION:
   * take in appId if no App id pull top 30 fourm threads
   * how do we store top 30...? cache...?
   *
   * 1. display the app names and number of questions asked within their forum page
   * 2. create search functionality, filter list based on search
   */
class ForumScreen extends React.Component {
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
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    await this.props.fetchForumApps({ url: TOP_TEN_API_ENDPOINT, dispatch });
  }


  render() {
    const { props } = this;
    return (
      <View style={styles.container}>
        <Header title="Forum" />
        <BoomingFlatList data={props.forumApps} type="apps" navigation={props.navigation} />
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
  bannerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: 200
  },
  iosArrow: {
    position: 'absolute',
    right: 10
  }
});

const mapDispatchToProps = dispatch => ({
  fetchForumApps,
  dispatch
});

const mapStateToProps = state => ({
  forumApps: state.forum.forumApps,
  user: state.user,
  error: state.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForumScreen);
