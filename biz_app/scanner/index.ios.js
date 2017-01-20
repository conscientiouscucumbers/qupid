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
import ExplodingHearts from './components/ExplodingHearts';
import LinearGradient from 'react-native-linear-gradient';

console.disableYellowBox = true;

var {
  width: deviceWidth,
  height: deviceHeight
} = Dimensions.get('window');

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
      <LinearGradient colors={['#FAF1D6', '#FF9D81']} style={styles.linearGradient}>
        <View style={styles.container}>
          {/* <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text> */}
          { this.state.camera ?
          <View style={{ flexDirection: 'row', marginTop: 25, marginBottom: 5, backgroundColor: 'transparent' }}>
            <Button label="Cancel" raised={true} onPress={ () => this.cancelCamera() }/>
          </View>
          :
          <View>
            <Text style={styles.title}>Qupid</Text>
            <Text style={styles.text}>QR Code Scanner</Text>
            <Button label="Camera" raised={true} onPress={ () => this.activateCamera() }/>
          </View>
          }
          { this.state.camera && <QRCamera cancelCamera={ this.cancelCamera.bind(this) }/> }
          <ExplodingHearts />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: deviceHeight * (.30)
    // zIndex: 0,
    // backgroundColor: '#F5FCFF',
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
  title: {
    fontSize: 44,
    fontWeight: '100',
    color: '#FF3F4E',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 20,
    fontWeight: '300',
    color: '#484848',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'transparent',
  }
});

AppRegistry.registerComponent('scanner', () => scanner);
