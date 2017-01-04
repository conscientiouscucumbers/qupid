import React from 'react';
import CouponDescriptionContainer from '../containers/CouponDescriptionContainer'

import { Container, Header, Button, Icon, Title, Content } from 'native-base';

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