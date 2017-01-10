import React from 'react';
import CouponDescriptionContainer from '../containers/CouponDescriptionContainer';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Button, Icon, Title, Content } from 'native-base';

const CouponView = ({ _goBack, _handleNavigate }) => (
  <Container style={{ backgroundColor: '#ffbaba' }}>
    <Header>
      <Title style={styles.title}>Selected Coupon</Title>
      <Button transparent onPress={ _goBack }>
        <Icon name='ios-arrow-back' style={styles.arrow} />
      </Button>
    </Header>
    <Content>
      <CouponDescriptionContainer _handleNavigate={ _handleNavigate } />
    </Content>
  </Container>
);

export default CouponView;

var styles = StyleSheet.create({
  title: {
    lineHeight: 50,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '300',
    color: '#FF3F4E'
  },
  arrow: {
    color: '#FF3F4E'
  }
});
