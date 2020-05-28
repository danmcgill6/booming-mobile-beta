import React from 'react';
import {
  Text, View, FlatList, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { THEME_COLOR } from '../../../../constants';


export default function renderApps(item, props) {
  const app = { ...item };
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => props.navigation.push('SingleForum', {
        app,
      })}
    >
      <View style={styles.thumbnailContainer}>
        <Image
          style={styles.thumbnail}
          source={{
            uri:
              'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png',
          }}
        />
      </View>
      <Text style={styles.itemText}>{item.title}</Text>
      <Text style={styles.postNumber}>
        {item.posts}
        {' '}
          43 Posts
      </Text>
      <View style={styles.iosArrow}>
        <Ionicons name="ios-arrow-forward" size={24} color={THEME_COLOR} />
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFF7'
  },
  itemText: {
    fontSize: 18,
    alignSelf: 'center'
  },
  postNumber: {
    alignSelf: 'center',
    position: 'absolute',
    right: 76
  },
  itemContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  thumbnailContainer: {
    borderRadius: 5,
    marginLeft: 5
  },
  thumbnail: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10
  },
  iosArrow: {
    position: 'absolute',
    right: 10

  }
});
