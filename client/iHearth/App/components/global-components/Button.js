import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './../../styles';

export default ({ label, onPress }) => (
  <TouchableHighlight
    underlayColor='#35b5ff'
    onPress={ onPress } style={ styles.button }>
    <Text style={ styles.label }>{ label }</Text>
  </TouchableHighlight>
);