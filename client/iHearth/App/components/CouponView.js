import React from 'react';
import CouponDescriptionContainer from '../containers/CouponDescriptionContainer'

import { Container, Header, Button, Icon, Title, Content } from 'native-base';

const CouponView = ({ _goBack, _handleNavigate }) => (
  <Container style={{ backgroundColor: '#ffbaba' }}>
    <Header>
      <Button transparent onPress={ _goBack }>
          <Icon name='ios-arrow-back' />
      </Button>
      <Title>Selected Coupon</Title>
    </Header>
    <Content>
      <CouponDescriptionContainer _handleNavigate={ _handleNavigate } />
    </Content>
  </Container>
);

export default CouponView;
