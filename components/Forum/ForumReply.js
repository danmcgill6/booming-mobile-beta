import React from "react";
import axios from "axios";
import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../assets/stylesheet";
import { THEME_COLOR_ONE } from "../../constants";

export default class ForumReply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      comment: "",
      errorText: "",
    };

    this.submitResponse = this.submitResponse.bind(this);
  }

  async setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  async submitResponse() {
    try {
      const { comment } = this.state;
      const { app, postId } = this.props;
      if (!comment.length) {
        this.setState({ errorText: "Please provide a question for your post" });
        return;
      }

      await axios.post(
        "https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/forum/comments",
        {
          comment,
          appTitle: app,
          // TODO: make this a real username
          userName: "Test",
          postId,
        }
      );
      this.setModalVisible(false);
    } catch (error) {
      console.log("ERROR", error);
      this.setState({ errorText: "Oops! Something went wrong. " });
    }
  }

  render() {
    const { title } = this.props;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.twitDisplayerBackButton}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <Ionicons name="ios-arrow-back" size={24} color={THEME_COLOR_ONE} />
          </TouchableOpacity>

          <View style={styles.forumInputContainer}>
            <Text style={{ fontSize: 25, color: "black", paddingLeft: 15 }}>
              {title}
            </Text>
            <View>
              <Text style={styles.forumPostTitle}> </Text>
              <TextInput
                style={styles.questionInput}
                onChangeText={(text) => this.setState({ comment: text })}
                value={this.state.reply}
                placeholder="Lets here your reply"
                multiline
              />
              <TouchableOpacity
                style={styles.forumPostSubmit}
                onPress={this.submitResponse}
                underlayColor={THEME_COLOR_ONE}
              >
                <Text style={styles.forumPostSubmitText}>Submit</Text>
              </TouchableOpacity>
              <Text style={styles.forumPostErrortText}>
                {this.state.errorText}
              </Text>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View style={styles.commentButton}>
            <Ionicons name="ios-add-circle-outline" size={45} color="white" />
            <Text style={{ color: "white" }}> Add a Reply</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
