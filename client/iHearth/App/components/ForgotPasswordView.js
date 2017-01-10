import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Button from './global-components/Button';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
import styles from './../styles';
import { Sae, Fumi, Kohana, Makiko, Isao, Hoshi, Jiro, Kaede,
         Akira, Madoka, Hideo, } from 'react-native-textinput-effects';

  const route2 = {
  type: 'push',
  route: {
    key: 'forgotPassword',
    title: 'ForgotPasswordView'
  }
};

export default class ForgotPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  render(){
    return(
      <Container>
            <Content>
              <Kaede
                label={'Email'}
                borderColor={'#a30180'}
                labelStyle={{ color: '#f80046' }}
                value={this.state.email}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({email: text})}
              />
              { this.state.password.length>0 && (<Text> Your passsword is: {this.state.password}</Text>) }
              <Button onPress={ () => this.props.fetchPasswordInfo(this.state.email, (password) => this.setState({password:password}))} label='Retrieve my Password'/>
              <Button onPress={ this.props._goBack } label='Cancel'></Button>
            </Content>
          </Container>)
    }
}

