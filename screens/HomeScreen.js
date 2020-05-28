import React from 'react';

import {
  ScrollView, Text, View, WebView, ImageBackground, ActivityIndicator
} from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

import { connect } from 'react-redux';
import Header from '../components/Header';
import Table from '../components/Table';
import ArticleSlider from '../components/Article/ArticleSlider';

import HeaderV2 from '../components/HeaderV2';
import styles from '../assets/stylesheet';
import TwitterWidget from '../components/Twitter/twitterWidget';
import { login } from '../redux';

class HomeScreen extends React.Component {
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
      topTen: [],
      loading: true
    };
    this.update = this.update.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/topTen'
    );
    const topTen = response.data.slice(0, 10);
    this.setState({ topTen, loading: false });
  }

  update() {
    console.log('pressed');
    this.props.setToken('fuck');
  }

  // "#2a4858", "#23aa8f", "#1c6373"
  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.loadingContainer, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (

      <View style={styles.homeContentContainer}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ArticleSlider />
          <View style={{
            display: 'flex',
            justifyContent: 'center',
            borderBottomColor: '#381D2A',
            alignItems: 'center',
            color: '#50d890',
            marginBottom: 7,
            backgroundColor: 'transparent',
            fontFamily: 'Al Nile'
          }}
          >
            <Text style={{
              fontSize: 25, color: 'black', fontFamily: 'Cochin', fontWeight: '500'
            }}
            >
          Top Ten
            </Text>
          </View>
          <Table
            topTen={this.state.topTen}
            navigation={this.props.navigation}
          />
          <View style={{ paddingLeft: 8, paddingRight: 8 }}>
            <HeaderV2 title="Find us on Twitter!" />

            <TwitterWidget />
          </View>

          <HeaderV2 title="About Us" />
          <Text style={styles.homescreenText} onPress={this.update}>
              Booming apps is a platform dedicated to find the worlds up and
              coming apps within the crowded app store. We pull in data from
              twitter and analyze it using several algorithim and decide which
              apps are being talked about the most. Our leaderboards based souly
              off of the data thgat we gather.If you are a developer and you
              would like to submit your app to us. Sign up for an developer
              account and submit it to us. After review we will add your app to
              our system and you will be able to see all of twitter analytics we
              use for your app.
          </Text>
        </ScrollView>
      </View>

    );
  }
}
const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(login(token))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
