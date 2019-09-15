import React from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal,
  ScrollView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/stylesheet';
import ForumComment from './ForumComment';

export default class ForumThread extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      tweets: [],
      comments: [],
    };
    this.renderQuestion = this.renderQuestion.bind(this);
    this.getComments = this.getComments.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.onLikeClick = this.onLikeClick.bind(this);
  }

  async setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  async componentDidMount() {
    await this.getComments();
  }

  async getComments() {
    const { app, id } = this.props;
    const response = await axios.get(
      `https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/forum/comments?postId=${id}`
    );
    const comments = response.data;
    console.log(comments);
    this.setState({ comments });
  }

  async onCommmentLikeClick(commentId) {
    const { id } = this.props;
    const response = axios.put(
      `https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/forum/comment/like?postId=${id}&id=${commentId}`
    );
    console.log(response);
  }

  async onLikeClick() {
    const { likes, id, app } = this.props;

    const response = await axios.put(
      `https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/forum?id=${id}&appTitle=${app}`
    );
    console.log(response);
  }

  renderComments() {
    const { likes } = this.props;
    return this.state.comments.map((comment) => {
      const app = comment.appTitle;
      const post = comment.comment;
      return (
        <View style={styles.forumThreadQuestionContainer}>
          <Image
            style={styles.avatar}
            source={require('../assets/images/user.png')}
          />
          <View>
            <TextInput
              editable={false}
              style={styles.forumThreadQuestion}
              value={post}
              multiline
            />
            <TouchableHighlight
              style={styles.likeCommentButton}
              onPress={() => this.onCommmentLikeClick(comment.id)}
            >
              <View style={styles.upButtonContainer}>
                <Ionicons name="ios-arrow-up" size={25} color="green" />
                <Text>{comment.likes || 0}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      );
    });
  }

  renderQuestion() {
    const { question, likes } = this.props;
    return (
      <View style={styles.forumThreadQuestionContainer}>
        <Image
          style={styles.avatar}
          source={require('../assets/images/user.png')}
        />
        <TextInput
          editable={false}
          style={styles.forumThreadQuestion}
          value={question}
          multiline
        />
        <TouchableHighlight
          style={styles.likeCommentButton}
          onPress={() => this.onCommmentLikeClick(comment.id)}
        >
          <View style={styles.upButtonContainer}>
            <Ionicons name="ios-arrow-up" size={25} color="green" />
            <Text>{likes || 0}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    const { title, likes, app, question, id } = this.props;

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
            <Ionicons name="ios-arrow-back" size={24} color="black" />
          </TouchableHighlight>
          <View style={styles.forumThreadContentContainer}>
            {this.renderQuestion()}
            {this.renderComments()}
          </View>
          <View style={styles.forumThreadBottomComntainer}>
            <View style={styles.forumThreadBottomBar}>
              <TouchableHighlight
                style={styles.likeQuestionButton}
                onPress={this.onLikeClick}
              >
                <View>
                  <Ionicons name="ios-thumbs-up" size={45} color="#bce1eb" />
                  <Text>Like This Post</Text>
                </View>
              </TouchableHighlight>
              <ForumComment app={app} question={question} postId={id} />
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View style={styles.forumThreadContainer}>
            <Ionicons name="ios-star" size={24} color="gold" />
            <Text style={styles.forumThreadLikes}> {likes} </Text>
            <Text style={styles.forumThreadText}>{title}</Text>
            <View style={styles.forumThreadIconContainer}>
              <Ionicons name="ios-arrow-forward" size={24} color="black" />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
