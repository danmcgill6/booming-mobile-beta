import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import ImageUploader from '../components/ImageUploader';

export default class appUploaderScreen extends React.Component {
  static navigationOptions = {
    name: 'Upload',
    description: 'Upload',
    downloadLink: 'Upload',
    companyName: 'Upload',
  };

  nameHandler(e) {
    console.log(e);
  }

  descriptionHandler(e) {
    console.log(e);
  }

  downloadLinkHandler(e) {
    e._lastNativeText && console.log(e._lastNativeText);
  }

  companyNameHandler(e) {
    console.log(e);
  }

  render() {
    return (
      <View>
        <FormLabel>App Name</FormLabel>
        <FormInput onChange={this.nameHandler()} />
        <FormLabel>Company Name</FormLabel>
        <FormInput onChange={this.companyNameHandler()} />
        <FormLabel>Description</FormLabel>
        <FormInput ref={input => this.input = input} onChange={() => this.descriptionHandler(this.input)} />
        <FormLabel>Download Link</FormLabel>
        <FormInput onChange={this.downloadLinkHandler()} />
        <FormLabel>App Icon</FormLabel>
        <ImageUploader />
      </View>
    );
  }
}
