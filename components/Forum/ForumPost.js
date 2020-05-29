import React, { useState } from 'react';
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';

import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/stylesheet';

async function submitPost(setter) {
  try {
    const { question } = this.state;
    const { title } = this.state;

    if (!title.length) {
      setter('Please provide a title for your post');
      return;
    }

    if (!question.length) {
      setter('Please provide a question for your post');
      return;
    }

    await axios.post(
      'https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/forum',
      {
        post: question,
        title,
        appTitle: 'Gacha Life',
        userName: 'Test',
      }
    );
  } catch (error) {
    console.log('ERROR', error);
    setter('Oops! Something went wrong.');
  }
}


const ForumPost = (props) => {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [errorText, seterrorText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <TouchableHighlight
          style={styles.twitDisplayerBackButton}
          onPress={() => {
            setModalVisible(setModalVisible, !modalVisible);
          }}
        >
          <Ionicons name="ios-arrow-back" size={24} color="black" />
        </TouchableHighlight>
        <View style={styles.forumInputContainer}>
          <View>
            <Text style={styles.forumPostTitle}> Title </Text>
            <TextInput
              style={styles.titleInput}
              onChangeText={text => setTitle(text)}
              value={title}
              placeholder="Ex. How do you pass level 9 ? "
            />
            <Text style={styles.forumPostTitle}> Question </Text>
            <TextInput
              style={styles.questionInput}
              onChangeText={text => setQuestion(text)}
              value={question}
              placeholder="Put your question here"
              multiline
            />
            <TouchableOpacity
              style={styles.forumPostSubmit}
              onPress={() => submitPost(seterrorText)}
              underlayColor="#fff"
            >
              <Text style={styles.forumPostSubmitText}>Submit</Text>
            </TouchableOpacity>
            <Text style={styles.forumPostErrortText}>
              {errorText}
            </Text>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Ionicons name="ios-add" size={40} color="black" />
      </TouchableHighlight>
    </View>
  );
};


export default reduxForm({ form: 'ForumPost' })(ForumPost);
