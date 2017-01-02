import React from 'react';
// import {
//   View,
//   Text
// } from 'react-native'
import { Image } from 'react-native';

// import Button from './global-components/Button';
import styles from './../styles';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button } from 'native-base';

const CouponView = ({ _goBack }) => (
  <Container>
    <Content>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>WOMEN’S SHELLISTA II TALL BOOTS</Text>
          <Text style={{color: 'red', textAlign: 'center'}}>3pm-4pm Jan 1, 2017</Text>
        </CardItem>

        <CardItem cardBody>
          <Image style={{width: 200, height: 200, alignSelf: 'center'}} source={require('../lib/img/boots.jpeg')} />
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}> 50% discount </Text>
          <Text>Ideal for icy, cold commutes, these incredibly warm and stylish above-the-calf winter boots are crafted of waterproof suede and leather, and feature a waterproof shell bottom for durable protection.</Text>
          <CardItem>
            <Text style={{textDecorationLine: 'line-through'}}>$150.00</Text>
            <Text style={{fontWeight: 'bold'}}>$75.00</Text>
          </CardItem>

          <Button block>Use Coupon</Button>
        </CardItem>
      </Card>
    </Content>
  </Container>
);

export default CouponView;

// <Text style={ styles.title }>CouponView</Text>
// <Button onPress={ _goBack } label='Go back to ListView' />
