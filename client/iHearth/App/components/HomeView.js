import React from 'react';
import {
  View,
  Text
} from 'react-native'
import ListView from './ListView';
import styles from './../styles';

const HomeView = ({ _handleNavigate }) => (
  <View style={ styles.container }>
    <Text style={ styles.title }>HomeView</Text>
    <ListView _handleNavigate={ _handleNavigate } />
  </View>
);

export default HomeView;