import React from 'react';
import {
  Button, Text, View, TextInput
} from 'react-native';
import axios from 'axios';

import { connect } from 'react-redux';
import styles from '../assets/stylesheet';

class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 36,
      color: 'black',
      fontFamily: 'Cochin',
    },
    tabBarOptions: {
      activeTintColor: '#293462',
      labelStyle: {
        fontSize: 12,
      },
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onLogin = this.onLogin.bind(this);
    this.goToSignup = this.goToSignup.bind(this);
  }

  onLogin() {
    const { username, password } = this.state;
  }

  goToSignup() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    const { props } = this;
    console.log(this.props);
    const { username, password } = this.state;
    return (
      <View style={styles.loginContainer}>
        <TextInput
          value={username}
          onChangeText={username => this.setState({ username })}
          placeholder="Username"
          style={styles.loginInput}
        />
        <TextInput
          value={password}
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          secureTextEntry
          style={styles.loginInput}
        />

        <Button
          title="Login"
          style={styles.loginInput}
          onPress={this.onLogin}
        />
        <Text>Or</Text>
        <Button
          title="Signup"
          style={styles.loginInput}
          onPress={this.goToSignup}
        />
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(login(token)),
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
