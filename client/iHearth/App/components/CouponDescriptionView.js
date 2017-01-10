import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Button1 from './global-components/Button';
import { Container, Content, Card, CardItem, Text, Button } from 'native-base';

const route = {
  type: 'push',
  route: {
    key: 'QR',
    title: 'QRView'
  }
}

export default class CouponDescriptionView extends Component {
  constructor(props) {
    super(props);
    _handleNavigate = this.props._handleNavigate;
  }

  // Coupon rendering will be handled from listView due to the need to fetch the
  // corresponding coupon to which was clicked
  render() {
    let couponInfo = this.props.couponInfo;
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Text style={{fontWeight: '300', textAlign: 'center'}}>{ couponInfo ? couponInfo.title : '' }</Text>
              <Text style={{fontWeight: '300', color: 'red', textAlign: 'center'}}>{couponInfo ? couponInfo.start_at : ''}-{couponInfo ? couponInfo.end_at : ''}</Text>
            </CardItem>

            <CardItem cardBody>
              <Image style={{width: 200, height: 200, alignSelf: 'center'}} source={{ uri: couponInfo ? couponInfo.image : 'null' }} />
              <Text style={{fontWeight: '300', textAlign: 'center'}}>{couponInfo ? couponInfo.item_name : ''}</Text>
              <Text style={{fontWeight: '300', textAlign: 'center'}}>purchase at {couponInfo ? couponInfo.storeName : ''}</Text>
              <Text style={{fontWeight: '300', textAlign: 'center'}}>{couponInfo ? couponInfo.description : ''}</Text>
              <CardItem>
                <Text style={{fontWeight: '300', textDecorationLine: 'line-through', textAlign: 'center'}}>{couponInfo ? couponInfo.original_price : ''}</Text>
                <Text style={{fontWeight: '300', textAlign: 'center'}}>{couponInfo ? couponInfo.coupon_price : ''}</Text>
              </CardItem>
              <View style={{ marginTop: 5, marginBottom: 5 }}></View>
              <Button1 onPress={ () => { _handleNavigate(route) }} label='Use Coupon'></Button1>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
