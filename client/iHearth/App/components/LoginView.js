import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text
} from 'react-native'
import Button from './global-components/Button'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
import styles from './../styles';
import axios from 'axios';
import { URL } from '../constants/NetworkUrls';

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
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillMount() {
    axios.post(URL + 'user/login')
    .then((res) => {
      console.log('user already logged in, directing to HomeView');
      this.props.fetchAuth(this.state, authRoute, this.props._handleNavigate);
    }).catch((err) => {
      console.log('user not already logged in');
    });
  }

  render() {
  return(
  <Container>
    <Content>
      <Text style={styles.titleTwo}>LoginView</Text>
        <List style={styles.login}>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" style={{ color: '#0A69FE' }} />
              <Input placeholder="Email" value={this.state.email} autoCapitalize="none" onChangeText={(text) => this.setState({email:text})} />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input placeholder="Password" value={this.state.password} onChangeText={(text) => this.setState({password:text})} secureTextEntry />
            </InputGroup>
          </ListItem>
        </List>
      <Button onPress={ () => this.props._handleNavigate(route) } label='New User? Sign up!' />
      <Button onPress={ () => this.props.fetchAuth(this.state, authRoute, this.props._handleNavigate) } label="Log in" />
      </Content>
    </Container>
   )
  }
}
