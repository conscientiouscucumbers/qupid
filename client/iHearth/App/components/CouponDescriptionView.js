import React, { Component } from 'react';
import { Image } from 'react-native';
// import ListViewEntry from './ListViewEntry';
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

  // Before rendering, get state from server
  componentWillMount() {
    this.props.fetchCoupons();
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{this.props.couponInfo.title}</Text>
              <Text style={{color: 'red', textAlign: 'center'}}>{this.props.couponInfo.start_at}-{this.props.couponInfo.end_at}</Text>
            </CardItem>

            <CardItem cardBody>
              <Image style={{width: 200, height: 200, alignSelf: 'center'}} source={require('iHearth/App/lib/img/jacket.jpeg')} />
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{this.props.couponInfo.item_name}</Text>

              <Text style={{textAlign: 'center'}}>purchase at {this.props.couponInfo.storeName}</Text>

              <Text>{this.props.couponInfo.description}</Text>
              <CardItem>
                <Text style={{textDecorationLine: 'line-through'}}>{this.props.couponInfo.original_price}</Text>
                <Text style={{fontWeight: 'bold'}}>{this.props.couponInfo.coupon_price}</Text>
              </CardItem>
              <Button onPress={ () => { _handleNavigate(route) }} block>Use Coupon</Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}