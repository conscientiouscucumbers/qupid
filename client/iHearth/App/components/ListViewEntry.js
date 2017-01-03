import React from 'react';
import { Text, TouchableHighlight, Image } from 'react-native';
import styles from './../styles';
import {
  Button,
  ListItem,
  Thumbnail
} from 'native-base';

export default ({ label, onPress, image }) => {
  // Image must be defined statically per docs
  image = require('../../assets/img/socks.png');
  return (
    <ListItem button onPress={ onPress } >  
      <Thumbnail square size={ 80 } source={ image } />
    </ListItem>
  );
}