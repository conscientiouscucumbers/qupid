import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native'
import Button from './global-components/Button'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Picker } from 'native-base';
import styles from './../styles';
import { URL } from '../constants/NetworkUrls';
import DeviceInfo from 'react-native-device-info';

const Item = Picker.Item;

const route = {
  type: 'pop',
  route: {
    key: 'logout',
    title: 'LogoutView'
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

export default class LogoutView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device_id: ''
    };
  }

  componentWillMount() {
    console.log('DEVICE INFO...', DeviceInfo);
    this.setState({ device_id: DeviceInfo.getUniqueID() });
    // function to check logged_in state using device_id
  }

  render() {
    console.log('logout this.props', this.props);
    return (
      <Container>
        <Content>
          <Text style={styles.titleTwo}>LogoutView</Text>
          <Button onPress={ () => this.props.fetchAuth(this.state, authRoute, this.props.popRoute) } label="Log out" />
        </Content>
      </Container>
    )
  }
}
