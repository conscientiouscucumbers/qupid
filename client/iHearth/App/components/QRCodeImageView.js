import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Button from './global-components/Button';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import QRCode from 'react-native-qrcode';
import ioClient from 'socket.io-client';
import { scannerURL } from '../constants/NetworkUrls';

const route = {
  type: 'push',
  route: {
    key: 'home',
    title: 'ListView'
  }
};

export default class QRCodeImageView extends Component {
  constructor(props) {
    super(props);
    this.user_id = this.props.userInfo.userInfo.user_id;
    this.coupon_id = this.props.currentCoupon.couponInfo.coupon_id;
    
    // Setup socket
    this.io = ioClient(scannerURL);
    _handleNavigate = this.props._handleNavigate;
    _goBack = this.props._goBack;
  }

  componentWillMount() {
    this.props.fetchCoupon(this.user_id, this.coupon_id);
  }

  componentDidUpdate() {
    console.log('CHANNEL NAME HERE:', this.props.QRInfo.QRCode);
    // _handleNavigate(route);

    // Upon open will fetch QRInfo and set channel as undefined
    // On rerender will set new socket with channel of user_qrcode 
    this.io.removeAllListeners();
    console.log('TRYING TO CONNECT TO SOCKET......', this.io.connected);
    this.io.on('connect', (socket) => {
      console.log('Connected to socket: ', socket.id);
    })
    this.io.on(this.props.QRInfo.QRCode, (message) => {
      console.log('Message from server socket: ', message);
      _goBack();
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem cardBody>
              <View style={{ alignSelf: 'center' }}>
                <QRCode
                  value={this.props.QRInfo.QRCode}
                  size={200}
                  bgColor='#484848'
                  fgColor='white'
                />
              </View>
              <Text style={{fontWeight: '300', textAlign: 'center'}}>Scan QR Code</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
