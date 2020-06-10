import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import ForumQuestion from "../../../Forum/ForumQuestion";

export default function renderForumPosts(item, props) {
  console.log("item", item);
  const { title, likes, id, appTitle, post } = item;
  return (
    <ForumQuestion
      app={appTitle}
      title={title}
      likes={likes}
      post={post}
      id={id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFFF7",
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
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
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
