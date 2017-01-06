import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './global-components/Button';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
import Foundation from 'react-native-vector-icons/Foundation';
import styles from './../styles';
const Item = Picker.Item;

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'male',
      dob: ''
    };
  }

  onValueChange(value: string) {
    this.setState({ gender: value });
  }

  render() {
    console.log('this.props', this.props);
    return (
      <Container>
        <Content>
          <Text style={styles.titleTwo}>SignUpView</Text>
          <List style={styles.login}>
            <ListItem>
              <InputGroup>
                <Input placeholder="first" inlineLabel label="First Name" value={this.state.firstName} autoCapitalize="none" borderType="rounded" onChangeText={(text) => this.setState({firstName:text})} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input placeholder="last" inlineLabel label="Last Name" value={this.state.lastName} autoCapitalize="none" borderType="rounded" onChangeText={(text) => this.setState({lastName:text})} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input value={this.state.dob} onChangeText={(text) => this.setState({dob:text})}inlineLabel label="Date of Birth" placeholder="YYYY-MM-DD" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                <Input placeholder="Email" value={this.state.email} autoCapitalize="none" onChangeText={(text) => this.setState({email:text})} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input value={this.state.password} onChangeText={(text) => this.setState({password:text})} placeholder="Password" secureTextEntry />
              </InputGroup>
            </ListItem>
            <ListItem iconLeft>
              <Foundation name="male-female" style={{ color: '#0A69FE', fontSize: 30 }} />
              <Text>  Gender</Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.gender}
                onValueChange={this.onValueChange.bind(this)}>
                <Item label="Male" value="male" />
                <Item label="Female" value="female" />
              </Picker>
            </ListItem>
          </List>
          <Button onPress={ this.props._goBack } label='Create Account'></Button>
          <Button onPress={ this.props._goBack } label='Cancel'></Button>
        </Content>
      </Container>
    );
  }
};

export default SignupView;
