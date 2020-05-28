import React from 'react';
import {
  Button, Text, View, TextInput,
  AsyncStorage
} from 'react-native';
import axios from 'axios';

import { connect } from 'react-redux';
import styles from '../assets/stylesheet';
import { login } from '../redux/reducers/user';

class SignupScreen extends React.Component {
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
      email: '',
      firstName: '',
      lastName: '',
      error: '',
    };
    this.onSignup = this.onSignup.bind(this);
    this.validate = this.validate.bind(this);
  }

  async onSignup() {
    const {
      username, password, email, firstName, lastName
    } = this.state;
    const validated = this.validate(
      username,
      password,
      email,
      firstName,
      lastName
    );

    if (validated) {
      try {
        const response = await axios.put(
          'https://6hqudqyuu6.execute-api.us-east-2.amazonaws.com/develop/signup/email',
          {
            username,
            password,
            email,
            firstName,
            lastName,
          }
        );
        const { data } = response;
        const { token } = data;
        await AsyncStorage.setItem('token', token);
        this.props.setToken(token);
        this.props.navigation.navigate('Main');
      } catch (error) {
        console.log(error);
      }
    }
  }

  validateConditon = (condition, error) => {
    if (condition) {
      this.setState({ error });
      return false;
    }
    return true;
  };

  validateField(field, error) {
    if (!field) {
      this.setState({ error });
      return false;
    }
    return true;
  }

  validate(username, password, email, firstName, lastName) {
    let isValidated = true;
    isValidated = this.validateField(username, 'Missing username');
    isValidated = this.validateField(password, 'Missing password');
    isValidated = this.validateField(email, ' Missing email');
    isValidated = this.validateField(firstName, 'Missing first name');
    isValidated = this.validateField(lastName, 'Missing last name');
    isValidated = this.validateConditon(
      password.length < 5,
      'Password must be longer than 5 charecters'
    );
    isValidated = this.validateConditon(
      password.length < 5,
      'Password must be longer than 5 charecters'
    );
    isValidated = this.validateConditon(
      !email.includes('@'),
      'Missing @ in email'
    );
    isValidated = this.validateConditon(
      !email.includes('.com'),
      'Missing .com in email'
    );
    return isValidated;
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <TextInput
          value={this.state.firstName}
          onChangeText={firstName => this.setState({ firstName })}
          placeholder="First Name"
          style={styles.loginInput}
        />
        <TextInput
          value={this.state.lastName}
          onChangeText={lastName => this.setState({ lastName })}
          placeholder="Last name"
          style={styles.loginInput}
        />
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder="Email"
          style={styles.loginInput}
        />
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder="Username"
          style={styles.loginInput}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          secureTextEntry
          style={styles.loginInput}
        />

        <Button
          title="SIgnup!"
          style={styles.loginInput}
          onPress={this.onSignup.bind(this)}
        />
        <Text>{this.state.error}</Text>
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
)(SignupScreen);
