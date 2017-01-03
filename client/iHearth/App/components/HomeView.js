import React from 'react';
import {
  View,
  Text
} from 'react-native'
import ListViewContainer from '../containers/ListViewContainer';
import styles from './../styles';
import {
  Container,
  Header,
  Title,
  Content,
} from 'native-base';

const HomeView = ({ _handleNavigate }) => (
  <Container>
    <Header>
      <Text>iHearth</Text>
    </Header>
    <Content>
      <Text style={ styles.title }>Coupons</Text>
      <ListViewContainer _handleNavigate={ _handleNavigate } />
    </Content>
  </Container>
);

export default HomeView;

// <View style={ styles.container }>
//   <Text style={ styles.title }>HomeView</Text>
//   <ListViewContainer _handleNavigate={ _handleNavigate } />
// </View>