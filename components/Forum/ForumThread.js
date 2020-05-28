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
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import {
  FORUM_COMMENTS_BASE_URL,
  FORUM_LIKE_BASE_URL,
  FORUM_BASE_URL,
} from '../../constants';
import { fetchForumComments, updateForumComments, } from '../../redux/reducers/forum/actions';


import styles from '../../assets/stylesheet';
import ForumComment from './ForumComment';

class ForumThread extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      loading: true,
      tweets: [],
      comments: [],
    };
    this.renderQuestion = this.renderQuestion.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.onLikeClick = this.onLikeClick.bind(this);
  }

  async componentDidMount() {
    const { id, dispatch } = this.props;
    const url = `${FORUM_COMMENTS_BASE_URL}?postId=${id}`;
    this.props.fetchForumComments(url, dispatch).then(_ => this.setState({ loading: false }));
  }

  async onCommmentLikeClick(commentId) {
    const { id, dispatch, forumComments } = this.props;
    // Update data locally
    const updatedComments = forumComments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });
    const url = `${FORUM_LIKE_BASE_URL}?postId=${id}&id=${commentId}`;

    this.props.updateForumComments(
      url,
      dispatch,
      updatedComments
    );
    // dispatch update with new array ?
  }

  async onLikeClick() {
    const { id, app } = this.props;
    const response = await axios.put(
      `${FORUM_BASE_URL}?id=${id}&appTitle=${app}`
    );
    console.log(response);
  }

  async setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderComments() {
    const { likes, question, forumComments } = this.props;
    return forumComments.map((comment) => {
      const app = comment.appTitle;
      const post = comment.comment;
      return (
        <View style={styles.forumThreadCommentContainer}>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/user.png')}
          />
          <View>
            <TextInput
              editable={false}
              style={styles.forumThreadComment}
              value={question}
              multiline
            />
            <TouchableHighlight
              style={styles.likeCommentButton}
              onPress={() => this.onCommmentLikeClick(comment.id)}
            >
              <View style={styles.upButtonContainer}>
                <Ionicons name="ios-arrow-up" size={25} color="green" />
                <Text style={{ color: 'white' }}>{comment.likes || 0}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      );
    });
  }

  renderQuestion() {
    const { post, likes, title } = this.props;
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 28, color: 'white' }}>{title}</Text>
          <TouchableHighlight
            style={styles.likeCommentButton}
            onPress={() => this.onCommmentLikeClick(comment.id)}
          >
            <View style={styles.upButtonContainer}>
              <Ionicons name="ios-arrow-up" size={25} color="green" />
              <Text style={{ color: 'white' }}>{likes || 0}</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.forumThreadQuestionContainer}>
          <TextInput
            editable={false}
            style={styles.forumThreadQuestion}
            value={post}
            multiline
          />
        </View>
      </View>
    );
  }

  render() {
    const {
      title, likes, app, question, id
    } = this.props;

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          {/* {this.state.loading && (
          <View style={[styles.loadingContainer, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          )} */}

          <TouchableHighlight
            style={styles.twitDisplayerBackButton}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <Ionicons name="ios-arrow-back" size={24} color="black" />
          </TouchableHighlight>
          <View style={styles.forumThreadContentContainer}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
              {this.renderQuestion()}
              {this.renderComments()}
            </ScrollView>
          </View>
          <View>
            <LinearGradient
              colors={['#23aa8f', '#1c6373']}
              style={styles.forumThreadBottomComntainer}
            >
              <View style={styles.forumThreadBottomBar}>
                <TouchableHighlight
                  style={styles.likeQuestionButton}
                  onPress={this.onLikeClick}
                >
                  <View>
                    <Ionicons name="ios-thumbs-up" size={45} color="black" />
                    <Text>Like This Post</Text>
                  </View>
                </TouchableHighlight>
                <ForumComment app={app} question={question} postId={id} />
              </View>
            </LinearGradient>
          </View>
        </Modal>

        <TouchableHighlight
          style={localStyles.itemContainer}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View style={localStyles.itemContainer2}>
            <Text style={styles.itemText}>{title}</Text>
            <View style={styles.iosArrow}>
              <Ionicons
                style={styles.iosArrow}
                name="ios-arrow-forward"
                size={24}
                color="black"
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFF7',
  },
  itemText: {
    fontSize: 18,
    alignSelf: 'center',
  },
  postNumber: {
    alignSelf: 'center',
    position: 'absolute',
    right: 76,
  },
  itemContainer: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  itemContainer2: {
    flex: 1,
  },
  thumbnailContainer: {
    borderRadius: 5,
    marginLeft: 5,
  },
  thumbnail: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  iosArrow: {
    position: 'absolute',
    right: 10,
  },
});

const mapDispatchToProps = dispatch => ({
  fetchForumComments,
  updateForumComments,
  dispatch
});

const mapStateToProps = state => ({
  forumComments: state.forum.forumComments,
  user: state.user,
  error: state.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForumThread);
