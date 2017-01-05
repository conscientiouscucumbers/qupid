import React from 'react';
import {
  View,
  Text
} from 'react-native'
import Button from './global-components/Button';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
import styles from './../styles';

const Item = Picker.Item;
class SignupView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
            selectedItem: undefined,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: 'key0',
            dob: ''

  };
}
 onValueChange(value: string) {
    this.setState({ gender: value });
  }
  render(){
      console.log(this.state)
       return (
            <Container>
                <Content>
                <Text style={ styles.titleTwo }>SignUpView</Text>
                    <List style={styles.login}>
                        <ListItem>
                            <InputGroup>
                                <Input value={this.state.firstName}  onChangeText={(text) => this.setState({firstName:text})}inlineLabel label="First Name" placeholder="John" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Input value={this.state.lastName}  onChangeText={(text) => this.setState({lastName:text})}inlineLabel label="Last Name" placeholder="Doe" />
                            </InputGroup>

                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Input value={this.state.dob}  onChangeText={(text) => this.setState({dob:text})}inlineLabel label="Date of Birth" placeholder="YYYY-MM-DD" />
                            </InputGroup>

                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                                <Input placeholder="Email" value={this.state.email}  onChangeText={(text) => this.setState({email:text})} />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input value={this.state.password}  onChangeText={(text) => this.setState({password:text})}placeholder="Password" secureTextEntry />
                            </InputGroup>
                        </ListItem>
                        <ListItem iconLeft>
                            <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                            <Text>GENDER</Text>
                            <Picker
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.gender}
                              onValueChange={this.onValueChange.bind(this)} >
                                <Item label="Male" value="key0" />
                                <Item label="Female" value="key1" />
                            </Picker>
                        </ListItem>
                    </List>
                    <Button onPress={ this.props._goBack } label='Go back to Login' ></Button>
                </Content>
            </Container>
        );
  }
};

export default SignupView;