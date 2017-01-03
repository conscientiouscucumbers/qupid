import React, { Component } from 'react';
import { Image } from 'react-native';
import CouponDescriptionContainer from '../containers/CouponDescriptionContainer'

import { Container, Header, Icon, Title, Content, Card, CardItem, Text, Button } from 'native-base';

const CouponView = ({ _goBack }) => (
  <Container>
    <Header>
      <Button transparent onPress={ _goBack }>
          <Icon name='ios-arrow-back' />
      </Button>
      <Title>Selected Coupon</Title>
    </Header>
    <Content>
      <CouponDescriptionContainer />
    </Content>
  </Container>
);

export default CouponView;