import React from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal,
  ScrollView,
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/stylesheet';
import TweetDisplayer from './TweetDisplayer';

export default class TweetsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      tweets: [],
    };
  }

  async setModalVisible(visible) {
    const response = await axios.get(
      `https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/tweets?app=${
        this.props.app
      }`
    );
    const tweets = response.data;
    this.setState({
      tweets,
      modalVisible: visible,
    });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          <TouchableHighlight
            style={styles.twitDisplayerBackButton}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <Ionicons name="ios-arrow-back" size={24} color="white" />
          </TouchableHighlight>
          <View
            style={{
              marginTop: 22,
            }}
          >
            <View>
              <TweetDisplayer tweets={this.state.tweets} />
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.tweets}> {this.props.tweetCount} </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
