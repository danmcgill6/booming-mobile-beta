import React from 'react';
import {
  View, Text, TouchableHighlight, Image, ScrollView, TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/stylesheet';


const AboutUs = props => (
  <View>
    <Text style={styles.aboutUsText}>
            Booming Apps goal is to find the up and coming mobile applications based on data gathered from twitter.
            We have an algorithm designed to find positive and authentic tweets about mobile apps. We sort these tweets anc
            calculate what apps people are talking about in a positive way. You can find our top tewn board on the home page.
            We also have the hot 100 where you cans see out top 100 apps. When you view an app you can see description, as well as the
            twitter data we have been analyzing. The goal of booming apps is to bring you a short compact list of the apps you should be
            looking at.
    </Text>
  </View>
);
export default AboutUs;
