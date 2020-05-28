import React from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/stylesheet';


const DisplayApps = (props) => {
  const apps = props.apps;
  return (
    <ScrollView style={styles.appListContainer}>
      {
        apps.map((app, i) => (
          <TouchableOpacity
            key={i}
            containerStyle={{ marginBottom: 20, borderRadius: 10 }}
            onPress={() => props.navigation.push('SingleApp', {
              app
            })}
          >
            <View style={styles.tableRowContainer}>
              <Text style={styles.appPlaceText}>
#
                {i + 1}
              </Text>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={{ uri: 'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png' }}
                />
              </View>
              <Text style={styles.appTitle}>{app.title}</Text>
              <View style={styles.iosArrow}>
                <Ionicons name="ios-arrow-forward" size={24} color="white" />
              </View>

            </View>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
};

export default DisplayApps;
