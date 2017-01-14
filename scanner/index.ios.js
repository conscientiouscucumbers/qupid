import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import QRCamera from './components/QRCamera';
import { Button } from 'react-native-material-design';

export default class scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: false
    }
  }

  activateCamera() {
    this.setState({ camera: true });
  }

  cancelCamera() {
    this.setState({ camera: false });
  }

  componentWillMount() {
    this.setState({ camera: false });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text> */}
        { this.state.camera ?
        <View style={{ marginTop: 20 }}>
          <Button text="Cancel" raised={true} onPress={ () => this.cancelCamera() }/>
        </View>
        :
        <View>
          <Button text="Camera" raised={true} onPress={ () => this.activateCamera() }/>
        </View>
        }
        { this.state.camera && <QRCamera /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('scanner', () => scanner);
