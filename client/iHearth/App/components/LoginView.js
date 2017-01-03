import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput
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

// Use this route once authorized
const authRoute = {
  type: 'push',
  route: {
    key: 'list',
    title: 'ListView'
  }
};

class LoginView extends Component {
  constructor(props){
    super(props);
    this.state = { email: 'Please Enter Email', password: 'Please Enter Password' };
  }
  // handleLogin = () => {
  //   var context = this;
  //   var returningUser = {
  //     email: this.state.email,
  //     password: this.state.password
  //   };
  //   loginCtrl.login(returningUser)
  //   .then(function(res) {
  //     context.setState({loginIsOpen: false});
  //     context.props.main.setState({isLoggedIn: true});
  //     // plugs in email and password in an object into dispatch
  //     context.props.dispatch(logUser(res.data.userData));
  //   })
  //   .catch(err => {
  //     const msg = err.response.data.message;
  //     this.setState({ submitError: msg });
  //   })
  // };
  render() {
   return(
      <View style={ styles.container }>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({email})}
        onFocus= {() => this.setState({email : ''})}
        value={this.state.email}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({password})}
        onFocus= {() => this.setState({password : ''})}
        value={this.state.password}
      />
        <Text style={ styles.title }>LoginView</Text>
        <Button onPress={ () => this.props._handleNavigate(route) } label='New User? Signup!' />
        <Button onPress={ () => this.props._handleNavigate(authRoute) } label="Gather 'Round the Hearth" />
      </View>
   )
  }
}

export default LoginView;