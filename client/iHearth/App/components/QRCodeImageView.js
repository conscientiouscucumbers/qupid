import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Button from './global-components/Button';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import QRCode from 'react-native-qrcode';
import SocketIOClient from 'socket.io-client';
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
    this.state = { qrcodeUsed: false };

    this.user_id = this.props.userInfo.userInfo.user_id;
    this.coupon_id = this.props.currentCoupon.couponInfo.coupon_id;

    _handleNavigate = this.props._handleNavigate;
    _goBack = this.props._goBack;

    this.interval = null;

    // Setup socket
    this.socket = SocketIOClient(scannerURL);
  }

  useQRCode() {
    // console.log('USE QR CODE CALLED', this.props);
    var context = this;
    this.props.fetchCoupon(this.user_id, this.coupon_id);
    // console.log('-----------------------this.props.QRInfo USING COUPON: ', this.props);
    // console.log('context HERE......', context.props)
    // console.log('context USED......', context.props.QRInfo.used)

    if (context.props.QRInfo.used === 1) {
      console.log('SUCCESS')
      this.props.clearQRState();
      _goBack();
      _goBack();
      console.log('PROPS HERE..............', this.props.QRInfo);
      this.props.fetchCoupons(this.user_id);
      // clearInterval(this.interval);
    }
  }

  componentWillMount() {
    setTimeout(() => {this.useQRCode()}, 1000);
    setTimeout(() => {this.useQRCode()}, 2000)
    setTimeout(() => {this.useQRCode()}, 3000)
    setTimeout(() => {this.useQRCode()}, 4000)
    setTimeout(() => {this.useQRCode()}, 5000)
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('CHANNEL NAME HERE:', this.props.QRInfo.QRCode);
    // this.socket.disconnect('connect');
    // this.socket.on('connect', () => {
    //   // console.log('Socket connected to server, this.props.QRInfo.QRCode);
    // });
    // this.socket.on(this.props.QRInfo.QRCode, (message) => {
    //   console.log('Message from server socket: ', message);
    //   _goBack();
    //   _goBack();
    //   this.props.fetchCoupons(this.user_id);
    // });
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
