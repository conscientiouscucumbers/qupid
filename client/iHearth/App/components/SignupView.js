import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './global-components/Button';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
import Foundation from 'react-native-vector-icons/Foundation';
// import styles from './../styles';
import DeviceInfo from 'react-native-device-info';
import DatePicker from 'react-native-datepicker';
const Item = Picker.Item;
import { Sae, Fumi, Kohana, Makiko, Isao, Hoshi, Jiro, Kaede,
         Akira, Madoka, Hideo, } from 'react-native-textinput-effects';
import { SegmentedControls } from 'react-native-radio-buttons';
import createFragment from 'react-addons-create-fragment';

const authRoute = {
  type: 'push',
  route: {
    key: 'list',
    title: 'ListView'
  }
};

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      device_id: '',
      logged_in: true,
      email: '',
      password: '',
      gender: 'male',
      dob: ''
    };
  }

  componentDidMount() {
    this.setState({ device_id: DeviceInfo.getUniqueID() });
    // function to check logged_in state using device_id
  }

  // onValueChange(value: string) {
  //   this.setState({ gender: value });
  // }
  allFilled() {
    console.log('signup state', this.state);
    console.log('signup props', this.props);
    if (this.state.first_name.length === 0 || this.state.last_name.length === 0 || this.state.email.length === 0 || this.state.password.length === 0 || this.state.dob.length === 0 ){
      return false;
    } else {
      return true;
    }
  }

  setSelectedOption(gender) {
    this.setState({ gender });
  }

  render() {
    var options = createFragment(
      {
        left: 'male',
        right: 'female'
      }
    );
    var addSignInButton = this.allFilled() ?
      (<View style={{ marginTop: 5, marginBottom: 5 }}>
        <Button onPress={ () => this.props.fetchNewUser(this.state, authRoute, this.props._handleNavigate) } label="Sign Up"></Button>
      </View>) :
      (<View style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={{ textAlign: 'center', marginTop: 5, marginBottom: 5, fontSize: 16, color: '#FF3F4E' }}>Please fill out all fields</Text>
      </View>);
    return (
      <Container style={{ backgroundColor: '#dddddd' }}>
        <Content>
          <Text style={styles.title}>Create New User</Text>
          <View style={{ marginTop: 5, marginBottom: 5 }}></View>
            <Kaede
              label={'First Name'}
              borderColor={'#dddddd'}
              labelStyle={{ color: '#FF3F4E' }}
              value={this.state.first_name}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({first_name: text})}
            />
          <View style={{ marginTop: 5, marginBottom: 5 }}></View>
          <Kaede
              label={'Last Name'}
              borderColor={'#dddddd'}
              labelStyle={{ color: '#FF3F4E' }}
              value={this.state.last_name}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({last_name: text})}
            />
            <List>
              <ListItem>
                <Text style={{left: 10, top: 10, fontSize: 16, color: '#FF3F4E'}}>Date of Birth</Text>
                  <DatePicker
                    style={{width: 250, left: 50, backgroundColor: '#FF3F4E'}}
                    date={this.state.dob}
                    mode="date"
                    placeholder="Select Date of Birth"
                    format="YYYY-MM-DD"
                    minDate="1917-01-01"
                    maxDate="2017-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => {this.setState({dob: date})}}
                  />
              </ListItem>
            </List>
            <Kaede
              label={'Email'}
              borderColor={'#dddddd'}
              labelStyle={{ color: '#FF3F4E' }}
              value={this.state.email}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({email: text})}
            />
          <View style={{ marginTop: 5, marginBottom: 5 }}></View>
          <Kaede
              label={'Password'}
              borderColor={'#dddddd'}
              labelStyle={{ color: '#FF3F4E' }}
              value={this.state.password}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry
            />
          <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 16, color: '#dddddd' }}>Gender</Text>
            <List>
              <ListItem>
                <SegmentedControls
                  tint={'#FF3F4E'}
                  selectedTint= {'white'}
                  backTint= {'#dddddd'}
                  options={ options }
                  allowFontScaling={ false }
                  onSelection={this.setSelectedOption.bind(this)}
                  selectedOption={ this.state.gender }
                  optionStyles={{fontFamily: 'AvenirNext-Medium'}}
                  optionContainerStyle={{flex: 1}}
                />
            </ListItem>
          </List>
          <View>
          {addSignInButton}
          <View style={{ marginTop: 5, marginBottom: 5 }}><Button onPress={ this.props._goBack } label='Cancel'></Button></View>
          </View>
        </Content>
      </Container>
    );
  }
};

var styles = StyleSheet.create({
  title: {
    paddingTop: 60,
    fontSize: 44,
    fontWeight: '100',
    textAlign: 'center',
    color: '#FF3F4E'
  }
});

export default SignupView;
