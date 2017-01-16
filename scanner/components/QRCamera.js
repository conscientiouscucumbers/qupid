import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import _ from 'lodash';
const URL = 'https://lit-brushlands-36263.herokuapp.com/; 


class QRCamera extends Component {
  constructor(props) {
    super(props);
    // this.state = { onCamera: true };
  }

  useCoupon(user_qrcode) {
    console.log('calling useCoupon with URL', URL + `business/${user_qrcode}`);
    var request = new Request(URL + `business/${user_qrcode}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    return fetch(request)
      .then(response => response.json())
      .then(json => {
          console.log('Successfully updated user_coupon tables: ', json);
          // this.setState({ onCamera: false });
          this.props.cancelCamera();
        })
      .catch((err) => {
        console.error('Error! in updating user coupon in QRCamera.js', err.message);
      })
  }

  componentDidMount() {
    // if (this.state.onCamera === true) {
      // setInterval(() => { this.useCoupon('qrcode1:1') }, 1000);
    // }
  }

  onBarCodeRead(e) {
    // _.throttle(() => { this.useCoupon(e.data) }, 1000);
    this.useCoupon(e.data);
    // this.useCoupon('qrcode1:1');

    // console.log(
    //   "Barcode Found!",
    //   "Type: " + e.type + "\nData: " + e.data
    // );

    // 'Barcode Found!', 'Type: org.iso.QRCode\nData: qrcode1:1'
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>Capture</Text>
        </Camera>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default QRCamera;
