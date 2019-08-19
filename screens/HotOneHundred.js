import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { View, Text } from 'react-native';
import axios from 'axios';
import CategoryDisplayer from '../components/CategoryDisplayer';
import DisplayApps from '../components/DisplayApps';
import styles from '../assets/stylesheet';
import Header from '../components/Header';


export default class AppsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topHundred: []
    };
  }

    static navigationOptions = {
      title: 'Hot One Hundred',
      headerStyle: {
        backgroundColor: '#CBD4C2',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
        borderColor: '#63aabc'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 34,
        color: '#50514F',
        fontFamily: 'Cochin'
      },
      tabBarOptions: {
        activeTintColor: '#293462',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#60a9a6',
        },
      }
    };

    async componentDidMount() {
      const response = await axios.get('https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/topHundred');
      const topHundred = response.data;
      console.log('HUNDRED', topHundred);
      this.setState({ topHundred });
    }

    render() {
      return (
        <View style={styles.appsScreenContainer}>
          <DisplayApps apps={this.state.topHundred} navigation={this.props.navigation} />
        </View>
      );
    }
}
