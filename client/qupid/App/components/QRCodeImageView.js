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

    // Setup socket
    // this.socket = SocketIOClient(scannerURL);
  }

  useQRCode() {
    // console.log('USE QR CODE CALLED', this.props);
    var context = this;
    this.props.fetchCoupon(this.user_id, this.coupon_id);

    if (context.props.QRInfo.used === 1) {
      console.log('SUCCESS')
      this.props.clearQRState();
      this.props.fetchCoupons(this.user_id);
      _goBack();
      _goBack();
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.useQRCode();
    }, 250);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidUpdate(prevProps, prevState) {
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
