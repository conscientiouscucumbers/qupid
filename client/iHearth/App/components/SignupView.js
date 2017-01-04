import React from 'react';
import {
  View,
  Text
} from 'react-native'
import Button from './global-components/Button';
import styles from './../styles';

class SignupView extends React.Componet {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <View style={ styles.container }>
      <Text style={ styles.title }>SignupView</Text>
      <Button onPress={ this.props._goBack } label='Go back to Login' />
    </View>
    )
  }
};

export default SignupView;