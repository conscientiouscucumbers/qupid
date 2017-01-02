import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native'
import ListViewEntry from './ListViewEntry';
import styles from './../styles';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Content,
  Footer,
  FooterTab
} from 'native-base';

const route = {
  type: 'push',
  route: {
    key: 'coupon',
    title: 'CouponView'
  }
};


const ListView = ({ _handleNavigate, coupons }) => (
  <View>
    <Container> 
      <Header>
          <Title>Header</Title>
      </Header>

      <Content>
          {console.log('PROPS...', coupons)}
          <ListViewEntry onPress={ () => _handleNavigate(route) } label='Go to CouponView' />
      </Content>

      <Footer>
          <FooterTab>
              <Button transparent>
                  <Icon name='ios-call' />
              </Button>  
          </FooterTab>
      </Footer>
    </Container>
  </View>
);

export default ListView;