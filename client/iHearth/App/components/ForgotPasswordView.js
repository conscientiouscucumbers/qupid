import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Button from './global-components/Button';
import { List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
import { Sae, Fumi, Kohana, Makiko, Isao, Hoshi, Jiro, Kaede,
         Akira, Madoka, Hideo, } from 'react-native-textinput-effects';
import LinearGradient from 'react-native-linear-gradient';

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

  render() {
    return (
      <LinearGradient colors={['#FAF1D6', '#FF9D81']} style={styles.linearGradient}>
        <View style={styles.gradient}>
          <Text style={styles.title}>Forgot your password?</Text>
          <View style={{ marginTop: 20, marginBottom: 20 }}></View>
          <Text style={styles.password}>Please enter your email</Text>
          <View style={{ marginTop: 5, marginBottom: 5 }}></View>
          <Kaede
            label={'Email'}
            borderColor={'#a30180'}
            labelStyle={{ color: '#f80046' }}
            value={this.state.email}
            autoCapitalize="none"
            onChangeText={(text) => this.setState({email: text})}
          />
          <View style={{ marginTop: 5, marginBottom: 5 }}></View>
          { this.state.password.length>0 && (<Text style={styles.password}> Your password is: {this.state.password}</Text>) }
          <Button onPress={ () => this.props.fetchPasswordInfo(this.state.email, (password) => this.setState({password:password}))} label='Retrieve Password'/>
          <View style={{ marginTop: 5, marginBottom: 5 }}></View>
          <Button onPress={ this.props._goBack } label='Cancel'></Button>
        </View>
      </LinearGradient>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    paddingTop: 100,
    fontSize: 40,
    fontWeight: '100',
    textAlign: 'center',
    color: '#FF3F4E',
    backgroundColor: 'transparent'
  },
  password: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    color: '#FF3F4E',
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 5
  },
  gradient: {
    textAlign: 'center',
    zIndex: 0
  },
  linearGradient: {
    flex: 1
  }
});
