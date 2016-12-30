import React from 'react';
import {
  View,
  Text
} from 'react-native'
import Button from './global-components/Button'
import styles from './../styles';

const route = {
  type: 'push',
  route: {
    key: 'signup',
    title: 'SignupView'
  }
};

const LoginView = ({ _handleNavigate }) => (
  <View style={ styles.container }>
    <Text style={ styles.title }>LoginView</Text>
    <Button onPress={ () => _handleNavigate(route) } label='New User? Signup!' />
  </View>
);

export default LoginView;