import React from 'react';
// import styles from './../styles';
import { Image } from 'react-native';
import { Container, Header, Icon, Title, Content, Card, CardItem, Text, Button } from 'native-base';

const CouponDescriptionView = ({ couponInfo }) => (
  <Container>
    <Content>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{couponInfo.title}</Text>
          <Text style={{color: 'red', textAlign: 'center'}}>{couponInfo.start_at}-{couponInfo.end_at}</Text>
        </CardItem>

        <CardItem cardBody>
          <Image style={{width: 200, height: 200, alignSelf: 'center'}} source={require('iHearth/App/lib/img/jacket.jpeg')} />
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{couponInfo.item_name}</Text>

          <Text style={{textAlign: 'center'}}>purchase at {couponInfo.storeName}</Text>

          <Text>{couponInfo.description}</Text>
          <CardItem>
            <Text style={{textDecorationLine: 'line-through'}}>{couponInfo.original_price}</Text>
            <Text style={{fontWeight: 'bold'}}>{couponInfo.coupon_price}</Text>
          </CardItem>
          <Button block>Use Coupon</Button>
        </CardItem>
      </Card>
    </Content>
  </Container>

);

export default CouponDescriptionView;

          // <Image style={{width: 200, height: 200, alignSelf: 'center'}} source={require('iHearth/App/lib/img/'+couponInfo.image)} />
  //         <Image style={{width: 200, height: 200, alignSelf: 'center'}} source={require('iHearth/App/lib/img/jacket.jpeg')} />
