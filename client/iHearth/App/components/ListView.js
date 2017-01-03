import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native'
import ListViewEntry from './ListViewEntry';
import styles from './../styles';
import {
  Container,
  List,
  Content,
} from 'native-base';

const route = {
  type: 'push',
  route: {
    key: 'coupon',
    title: 'CouponViewEntry'
  }
};

const ListView = ({ _handleNavigate, coupons }) => (
  <List>
    {coupons.data.map((coupon) => (
      <ListViewEntry
        key={ coupon.coupon_id }
        onPress={ () => _handleNavigate(route) }
        coupon={ coupon } />
    ))}
  </List>
);

export default ListView;