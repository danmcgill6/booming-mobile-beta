import React, { Component } from 'react';
import {
  StyleSheet, View
} from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo';
import axios from 'axios';

export default class ImageUploader extends Component {
  constructor() {
    super();
    this.state = {
      result: {},
    };
    this.uploadToS3 = this.uploadToS3.bind(this);
  }


  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
  };

  useLibraryHandler = async () => {
    await this.askPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });
    this.setState({ result });
  };

  useCameraHandler = async () => {
    await this.askPermissionsAsync();
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });

    this.setState({ result });
  };

  uploadToS3() {
    const fd = new FormData();
    fd.append('image', this.state.result, 'image');
    axios.post('https://597vlhru7f.execute-api.us-east-2.amazonaws.com/dev/apps/thumbnail', fd)
      .then(res => console.log(res));
  }

  render() {
    return (
      <View>
        <Button
          raised
          icon={{ name: 'cached' }}
          title="Choose Image"
          onPress={this.useLibraryHandler}
        />
        <Button
          title="upload"
          onPress={this.uploadToS3}
        />
      </View>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    height: 1000,
  },
  paragraph: {
    marginHorizontal: 15,
    marginTop: 30,
    fontSize: 18,
    color: '#000',
  },
});
