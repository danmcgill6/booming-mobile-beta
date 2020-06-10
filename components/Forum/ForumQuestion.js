import React from "react";
import axios from "axios";
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
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import {
  FORUM_COMMENTS_BASE_URL,
  FORUM_LIKE_BASE_URL,
  FORUM_BASE_URL,
} from "../../constants";
import {
  fetchForumComments,
  updateForumComments,
} from "../../redux/reducers/forum/actions";

import styles from "../../assets/stylesheet";
import ForumReply from "./Forum";

class ForumQuestion extends React.Component {
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

  // Cant use componentDidMount here due to the fact its a modal, state was overriding
  async componentDidUpdate(prevProps, prevState) {
    if (!prevState.modalVisible && this.state.modalVisible) {
      const { id, dispatch } = this.props;
      const url = `${FORUM_COMMENTS_BASE_URL}?postId=${id}`;
      this.props
        .fetchForumComments({ url, dispatch })
        .then((_) => this.setState({ loading: false }));
    }
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

    this.props.updateForumComments({
      url,
      dispatch,
      reduxData: updatedComments,
    });
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
    console.log("forumComments", forumComments);
    return forumComments.map((comment, i) => {
      const app = comment.appTitle;
      const post = comment.comment;
      return (
        <View
          style={{
            ...styles.forumThreadCommentContainer,
            backgroundColor: i % 2 === 0 ? "#f5f4f0" : "23aa8f",
          }}
        >
          <Image
            style={styles.avatar}
            source={require("../../assets/images/user.png")}
          />
          <View>
            <TextInput
              editable={false}
              style={styles.forumThreadComment}
              value={post}
              multiline
            />
          </View>
          <TouchableHighlight
            style={styles.likeCommentButton}
            onPress={() => this.onCommmentLikeClick(comment.id)}
          >
            <View style={styles.upButtonContainer}>
              <Ionicons name="ios-arrow-up" size={25} color="#4d16b5" />
              <Text style={{ color: "black" }}>{comment.likes || 0}</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    });
  }

  renderQuestion() {
    const { post, likes, title } = this.props;
    return (
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 25, color: "black", paddingLeft: 15 }}>
            {title}
          </Text>
          <TouchableHighlight
            style={styles.likeCommentButton}
            onPress={() => this.onCommmentLikeClick(comment.id)}
          >
            <View style={styles.upButtonContainer}>
              <Ionicons name="ios-arrow-up" size={25} color="#4d16b5" />
              <Text style={{ color: "black" }}>{likes || 0}</Text>
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
    const { title, likes, app, question, id } = this.props;

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
            <Ionicons name="ios-arrow-back" size={24} color="white" />
          </TouchableHighlight>
          <View style={styles.forumThreadContentContainer}>
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
              {this.renderQuestion()}
              {this.renderComments()}
            </ScrollView>
          </View>
          <View>
            <View style={styles.forumThreadBottomBar}>
              <ForumReply app={app} question={question} postId={id} />
            </View>
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
                color="#4d16b5"
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
    backgroundColor: "white",
  },
  itemText: {
    fontSize: 18,
    alignSelf: "center",
  },
  postNumber: {
    alignSelf: "center",
    position: "absolute",
    right: 76,
  },
  itemContainer: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "black",
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
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  iosArrow: {
    position: "absolute",
    right: 10,
  },
});

const mapDispatchToProps = (dispatch) => ({
  fetchForumComments,
  updateForumComments,
  dispatch,
});

const mapStateToProps = (state) => ({
  forumComments: state.forum.forumComments,
  user: state.user,
  error: state.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(ForumQuestion);
