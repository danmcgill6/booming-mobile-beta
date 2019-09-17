import React from 'react';
import { ScrollView, Text, View, WebView } from 'react-native';
import axios from 'axios';

import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import Table from '../components/Table';
import ArticleSlider from '../components/ArticleSlider';
import Header from '../components/Header';
import styles from '../assets/stylesheet';
import TwitterWidget from '../components/twitterWidget';
import { login } from '../redux';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topTen: []
    };
    this.update = this.update.bind(this);
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

  async componentDidMount() {
    const response = await axios.get(
      'https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/topTen'
    );
    const topTen = response.data.slice(0, 10);
    this.setState({ topTen });
  }

  update() {
    console.log('pressed');
    this.props.setToken('fuck');
  }

  render() {
    return (
      <LinearGradient
        colors={['#13547a', '#80d0c7']}
        style={{ alignItems: 'center', paddingBottom: 45 }}
      >
        <Header title="Booming  Apps" />

        <ScrollView
          contentContainerStyle={styles.homeContainer}
          showsVerticalScrollIndicator={false}
        >
          <ArticleSlider />

          <Table topTen={this.state.topTen} navigation={this.props.navigation} />
          <View style={{ paddingLeft: 8, paddingRight: 8 }}>
            <Header title="Find us on Twitter!" />

            <TwitterWidget />
          </View>

          {/* <Header title="About Us" />
          <Text style={styles.homescreenText} onPress={this.update}>
            Booming apps is a platform dedicated to find the worlds up and
            coming apps within the crowded app store. We pull in data from
            twitter and analyze it using several algorithim and decide which
            apps are being talked about the most. Our leaderboards based souly
            off of the data thgat we gather.If you are a developer and you would
            like to submit your app to us. Sign up for an developer account and
            submit it to us. After review we will add your app to our system and
            you will be able to see all of twitter analytics we use for your
            app.
          </Text> */}
        </ScrollView>
      </LinearGradient>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(login(token))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
