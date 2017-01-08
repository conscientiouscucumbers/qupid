import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Button from './global-components/Button';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
import styles from './../styles';
import { URL } from '../constants/NetworkUrls';
import DeviceInfo from 'react-native-device-info';
import { Sae, Fumi, Kohana, Makiko, Isao, Hoshi, Jiro, Kaede,
         Akira, Madoka, Hideo, } from 'react-native-textinput-effects';

const Item = Picker.Item;

const route = {
  type: 'push',
  route: {
    key: 'signup',
    title: 'SignupView'
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
      <Container>
        <Content>
          <Text style={styles.titleTwo}>LoginView</Text>
            <List style={{ marginBottom: 40 }}>
              <Isao
                label={'Email'}
                activeColor={'#a30180'}
                passiveColor={'#f80046'}
                value={this.state.email}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({email: text})}
              />
              <Isao
                label={'Password'}
                activeColor={'#a30180'}
                passiveColor={'#f80046'}
                value={this.state.password}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({password: text})}
                secureTextEntry
              />
          </List>
          <List>
            <Button onPress={ () => this.props._handleNavigate(route) } label='New User? Sign up!' />
          </List>
          <List style={{ marginTop: 10 }}>
            <Button onPress={ () => this.props.fetchAuth(this.state, authRoute, this.props._handleNavigate) } label="Log in" />
          </List>
        </Content>
      </Container>
    )
  }
}
