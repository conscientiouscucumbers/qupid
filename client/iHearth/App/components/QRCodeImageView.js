import React, { Component } from 'react';
import { Image } from 'react-native';
// import ListViewEntry from './ListViewEntry';
import { Container, Content, Card, CardItem, Text, Button } from 'native-base';

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
              <Image style={{width: 200, height: 200, alignSelf: 'center'}} source={require('iHearth/assets/img/QRcode.png')} />
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>QR Code to Scan</Text>
              <Button onPress={ () => { this.props.useCoupon(
                this.user_id,
                this.coupon_id)
              }} block>Use QR Placeholder</Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}