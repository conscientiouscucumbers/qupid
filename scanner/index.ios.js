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
import Button from './components/Button';

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
        <View style={{ marginTop: 25, marginBottom: 5, backgroundColor: 'transparent' }}>
          <Button label="Cancel" raised={true} onPress={ () => this.cancelCamera() }/>
        </View>
        :
        <View>
          <Button label="Camera" raised={true} onPress={ () => this.activateCamera() }/>
        </View>
        }
        { this.state.camera && <QRCamera cancelCamera={ this.cancelCamera.bind(this) }/> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
    backgroundColor: '#F5FCFF',
  },
  linearGradient: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('scanner', () => scanner);
