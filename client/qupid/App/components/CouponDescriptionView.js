import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Button1 from './global-components/Button';
import { Container, Content, Card, CardItem, Text, Button } from 'native-base';
import { formatSQLTime, formatSQLDate } from '../lib/utils/formatUtils';

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
    const {
      couponInfo,
      clearQRState,
    } = this.props
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Text style={{fontWeight: '500', fontSize:20, textAlign: 'center'}}>{ couponInfo ? couponInfo.title : '' }</Text>
              <Text style={{fontWeight: '300', textAlign: 'center', fontSize: 17}}>{couponInfo.company_name ? couponInfo.company_name : ''}</Text>
            </CardItem>

            <CardItem cardBody>
              <Image style={{width: 200, height: 200, alignSelf: 'center'}} source={{ uri: couponInfo ? couponInfo.image : 'null' }} />
              <Text style={{fontWeight: '300', textAlign: 'center', fontSize: 18 }}>{couponInfo ? couponInfo.item_name : ''}</Text>
              <Text style={{fontWeight: '300', textAlign: 'left'}}>{couponInfo ? couponInfo.description : ''}</Text>
              <Text style={{fontWeight: '300', color: 'red', textAlign: 'center'}}>{couponInfo.start_at ? formatSQLTime(couponInfo.start_at) : ''}-{couponInfo.end_at ? formatSQLTime(couponInfo.end_at) : ''}</Text>
              <CardItem>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>

                  <Text style={{fontWeight: '300', textDecorationLine: 'line-through', color:'#484848'}}>${couponInfo ? couponInfo.original_price : ''}</Text>

                </View>
                <Text style={{fontWeight: '400', fontSize:20, textAlign: 'center', color: '#FF3F4E'}}>NOW ${couponInfo ? couponInfo.coupon_price : ''}</Text>
              </CardItem>
              <View style={{ marginTop: 5, marginBottom: 5 }}></View>
              <Button1 onPress={ () => { _handleNavigate(route); clearQRState() }} label='Use Coupon'></Button1>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
