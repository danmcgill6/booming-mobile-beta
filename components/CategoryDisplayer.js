import React from 'react';
import axios from 'axios';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import { Card } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/stylesheet';


export default class CategoryDisplayer extends React.Component {
  constructor(props) {
    super();
  }


  render() {
    const data = [
      {
        category: 'Games',
        pictureURL: 'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png'
      },
      {
        category: 'Entertainment',
        pictureURL: 'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png'
      },
      {
        category: 'Social',
        pictureURL: 'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png'
      },
      {
        category: 'Lifestyle',
        pictureURL: 'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png'
      },
      {
        category: 'Tools',
        pictureURL: 'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png'
      },
      {
        category: 'Food',
        pictureURL: 'https://s3.us-east-2.amazonaws.com/booming-apps/new-ios-store.png'
      }
    ];

    const { navigation } = this.props;
    return (


      <View style={styles.categoryContainer}>
        {
          data.map(x => (
            <View>
              <Card>
                <TouchableOpacity
                  style={styles.categoryCard}
                  onPress={x => this.props.navigation.navigate('Apps', {
                    navigation,
                    appType: x.category
                  })}
                >
                  <Text style={styles.categoryText}>{x.category}</Text>
                </TouchableOpacity>
              </Card>
            </View>
          ))
        }

      </View>

    );
  }
}
