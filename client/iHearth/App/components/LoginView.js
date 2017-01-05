import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text
} from 'react-native'
import Button from './global-components/Button'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
import styles from './../styles';

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

class LoginView extends Component {
  constructor(props){
    super(props);
    this.state = {
            email: '',
            password: '',
  };
  }
 // handleLogin = () => {
 //    var context = this;
 //    var returningUser = {
 //      email: this.state.email,
 //      password: this.state.password
 //    };
 //    loginCtrl.login(returningUser)
 //    .then(function(res) {
 //      context.setState({loginIsOpen: false});
 //      context.props.main.setState({isLoggedIn: true});
 //      // plugs in email and password in an object into dispatch
 //      context.props.dispatch(logUser(res.data.userData));
 //    })
 //    .catch(err => {
 //      const msg = err.response.data.message;
 //      this.setState({ submitError: msg });
 //    })
 // };
  render() {
   return(
     <Container>
                <Content>
                <Text style={ styles.titleTwo }>LoginView</Text>
                    <List style={styles.login}>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                                <Input placeholder="Email" value={this.state.email}  onChangeText={(text) => this.setState({email:text})} />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input placeholder="Password" value={this.state.password}  onChangeText={(text) => this.setState({password:text})} secureTextEntry />
                            </InputGroup>
                        </ListItem>
                    </List>
                  <Button onPress={ () => this.props._handleNavigate(route) } label='New User? Signup!' />
                  <Button onPress={ () => this.props._handleNavigate(authRoute) } label="Gather 'Round the Hearth" />
                </Content>
            </Container>
   )
  }
}

export default LoginView;