import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './../styles';
import {
  Badge,
  ListItem,
  Thumbnail,
  Card
} from 'native-base';
import { formatDollars } from '../lib/utils/formatUtils.js';

export default ({ label, onPress, coupon }) => {
  // Image must be defined statically per docs
  image = require('../../assets/img/socks.png');
  return (
    <ListItem button onPress={ onPress } >  
      <Card style={{ flexDirection: 'row' }}>
        <Image style={{ width: 80, height: 80, alignSelf: 'flex-start' }} source={ image } />
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Badge textStyle={{ fontSize: 12 }} info> { coupon.title } </Badge>
            <Text style={ styles.listViewTitleText }>{ coupon.item_name }</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={ [styles.listViewText, styles.listViewDiscountPriceText] }>{ formatDollars(coupon.original_price) }</Text>
            <Text style={ styles.listViewText }>{ formatDollars(coupon.coupon_price) }</Text>
          </View>
          <Text style={ styles.listViewText }>Ends: { coupon.end_at }</Text>
        </View>
      </Card>
    </ListItem>
  );
}