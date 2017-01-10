//Coupon Auth View not triggered from CouponDescrption yet
import React from 'react';
import { Container, Header, Icon, Title, Content, Text, Button } from 'native-base';

const CouponAuthView = () => (
  <Container>
    <Header>
      <Button transparent onPress={ _goBack }>
        <Icon name='ios-arrow-back' />
      </Button>
      <Title>Use Selected Coupon</Title>
    </Header>
    <Content>
      <Text>Use coupon!</Text>
    </Content>
  </Container>
);

export default CouponAuthView;
