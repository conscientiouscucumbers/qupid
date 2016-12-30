import React from 'react';
import {
  View,
  Text
} from 'react-native'
import Button from './global-components/Button';
import styles from './../styles';

const SignupView = ({ _goBack }) => (
  <View style={ styles.container }>
    <Text style={ styles.title }>SignupView</Text>
    <Button onPress={ _goBack } label='Go back to Login' />
  </View>
);

export default SignupView;