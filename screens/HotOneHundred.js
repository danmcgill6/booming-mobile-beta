import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import DisplayApps from '../components/DisplayApps';
import styles from '../assets/stylesheet';
import Header from '../components/Header';

export default class AppsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topHundred: [],
    };
  }

  static navigationOptions = {
    headerTransparent: true,

    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 36,
      color: 'black',
      fontFamily: 'Cochin',
    },
    tabBarOptions: {
      activeTintColor: '#293462',
      labelStyle: {
        fontSize: 12,
      },
    },
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/topHundred'
    );
    const topHundred = response.data;
    console.log('HUNDRED', topHundred);
    this.setState({ topHundred });
  }

  render() {
    return (
      <LinearGradient colors={['#13547a', '#80d0c7']}>
        <View>
          <Header title="Hot 100" />
          <DisplayApps
            apps={this.state.topHundred}
            navigation={this.props.navigation}
          />
        </View>
      </LinearGradient>
    );
  }
}
