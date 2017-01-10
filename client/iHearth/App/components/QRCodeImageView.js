import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Button from './global-components/Button';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import QRCode from 'react-native-qrcode';

export default class QRCodeImageView extends Component {
  constructor(props) {
    super(props);
    this.user_id = this.props.userInfo.userInfo.user_id;
    this.coupon_id = this.props.currentCoupon.couponInfo.coupon_id;
  }

  render() {
    console.log(this.props);
    console.log(this.user_id, this.coupon_id)
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem cardBody>
              <View style={{ alignSelf: 'center' }}>
                <QRCode
                  value={this.props.currentCoupon.couponInfo.qrcode}
                  size={200}
                  bgColor='#484848'
                  fgColor='white'
                />
              </View>
              <Text style={{fontWeight: '300', textAlign: 'center'}}>Scan QR Code</Text>
              <Button onPress={ () => { this.props.useCoupon(
                this.user_id,
                this.coupon_id)
              }} label='Use Coupon'></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
