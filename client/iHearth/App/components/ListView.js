import React from 'react';
import {
  View,
  Text
} from 'react-native'
import ListViewEntry from './ListViewEntry';
import styles from './../styles';

const route = {
  type: 'push',
  route: {
    key: 'coupon',
    title: 'CouponView'
  }
};

const ListView = ({ _handleNavigate }) => (
  <View style={ styles.container }>
    <Text style={ styles.title }>ListView</Text>
    <ListViewEntry onPress={ () => _handleNavigate(route) } label='Go to CouponView' />
  </View>
);

export default ListView;