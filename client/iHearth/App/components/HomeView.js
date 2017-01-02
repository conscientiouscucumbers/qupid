import React from 'react';
import {
  View,
  Text
} from 'react-native'
import ListViewContainer from '../containers/ListViewContainer';
import styles from './../styles';

const HomeView = ({ _handleNavigate }) => (
  <View style={ styles.container }>
    <Text style={ styles.title }>HomeView</Text>
    <ListViewContainer _handleNavigate={ _handleNavigate } />
  </View>
);

export default HomeView;