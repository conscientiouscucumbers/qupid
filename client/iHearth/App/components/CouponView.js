import React from 'react';
import {
  View,
  Text
} from 'react-native'
import Button from './global-components/Button';
import styles from './../styles';

const CouponView = ({ _goBack }) => (
  <View style={ styles.container }>
    <Text style={ styles.title }>CouponView</Text>
    <Button onPress={ _goBack } label='Go back to ListView' />
  </View>
);

export default CouponView;