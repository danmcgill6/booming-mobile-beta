import React from "react";
import axios from "axios";
import { reduxForm, Field } from "redux-form";

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

class ForumPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      title: "",
      question: "",
      errorText: "",
    };

    this.submitPost = this.submitPost.bind(this);
  }

  async setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  async submitPost() {
    try {
      const { question } = this.state;
      const { title } = this.state;

      if (!title.length) {
        this.setState({ errorText: "Please provide a title for your post" });
        return;
      }

      if (!question.length) {
        this.setState({ errorText: "Please provide a question for your post" });
        return;
      }

      await axios.post(
        "https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/forum",
        {
          post: question,
          title,
          appTitle: "Gacha Life",
          userName: "Test",
        }
      );
    } catch (error) {
      console.log("ERROR", error);
      this.setState({ errorText: "Oops! Something went wrong. " });
    }
  }

  render() {
    const { likes } = this.props;
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
          <View style={styles.forumInputContainer}>
            <View>
              <Text style={styles.forumPostTitle}> Title </Text>
              <TextInput
                style={styles.titleInput}
                onChangeText={(text) => this.setState({ title: text })}
                value={this.state.title}
                placeholder="Ex. How do you pass level 9 ? "
              />
              <Text style={styles.forumPostTitle}> Question </Text>
              <TextInput
                style={styles.questionInput}
                onChangeText={(text) => this.setState({ question: text })}
                value={this.state.question}
                placeholder="Put your question here"
                multiline
              />
              <TouchableOpacity
                style={styles.forumPostSubmit}
                onPress={this.submitPost}
                underlayColor="#fff"
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
          <Ionicons name="ios-add" size={40} color="black" />
        </TouchableHighlight>
      </View>
    );
  }
}


export default reduxForm({ form: 'ForumPost' })(ForumPost);
