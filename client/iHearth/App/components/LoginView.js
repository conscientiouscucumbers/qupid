import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Button from './global-components/Button';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
// import styles from './../styles';
import { URL } from '../constants/NetworkUrls';
import DeviceInfo from 'react-native-device-info';
import { Sae, Fumi, Kohana, Makiko, Isao, Hoshi, Jiro, Kaede,
         Akira, Madoka, Hideo, } from 'react-native-textinput-effects';
import ExplodingHearts from './ExplodingHearts';
import LinearGradient from 'react-native-linear-gradient';

const Item = Picker.Item;

const route = {
  type: 'push',
  route: {
    key: 'signup',
    title: 'SignupView'
  }
};
const route2 = {
  type: 'push',
  route: {
    key: 'forgotPassword',
    title: 'ForgotPasswordView'
  }
};

// Use this route once authorized
const authRoute = {
  type: 'push',
  route: {
    key: 'list',
    title: 'ListView'
  }
};

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      device_id: ''
    };
  }

  componentWillMount() {
    console.log('DEVICE INFO...', DeviceInfo);
    this.setState({ device_id: DeviceInfo.getUniqueID() });
    // function to check logged_in state using device_id
  }

  render() {
    return (
      <LinearGradient colors={['#FAF1D6', '#FF9D81']} style={styles.linearGradient}>
        <View style={styles.gradient}>
          <Text style={styles.title}>Cupid</Text>
            <List style={{ marginTop: 20, marginBottom: 20 }}>
              <Kaede
                label={'Email'}
                borderColor={'#dddddd'}
                labelStyle={{ color: '#FF3F4E' }}
                value={this.state.email}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({email: text})}
              />
            <View style={{ marginTop: 5, marginBottom: 5 }}></View>
            <Kaede
                label={'Password'}
                borderColor={'#dddddd'}
                labelStyle={{ color: '#FF3F4E' }}
                value={this.state.password}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({password: text})}
                secureTextEntry
              />
          </List>
          <List>
            <Button onPress={ () => this.props._handleNavigate(route) } label='Create New Account' />
          </List>
          <List>
            <Button onPress={ () => this.props._handleNavigate(route2) } label="Forgot Password" />
          </List>
          <List style={{ marginTop: 10 }}>
            <Button onPress={ () => this.props.fetchAuth(this.state, authRoute, this.props._handleNavigate) } label="Log In" />
          </List>
        </View>
      </LinearGradient>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    paddingTop: 160,
    fontSize: 44,
    fontWeight: '100',
    textAlign: 'center',
    color: '#FF3F4E',
    backgroundColor: 'transparent'
  },
  gradient: {
    textAlign: 'center',
    zIndex: 0
  },
  linearGradient: {
    flex: 1
  }
});
