import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import {
  Badge,
  ListItem,
  Thumbnail,
  Card
} from 'native-base';
import { formatDollars, sqlToJsDate, toHHMMSS } from '../lib/utils/formatUtils.js';

export default ({ label, onPress, coupon }) => {
  // Image must be defined statically per docs
  // image = 'https://facebook.github.io/react/img/logo_og.png';
  return (
    <ListItem button style={ styles.listItem } onPress={ (event) => { onPress() }} >  
      <Card>
        <View style={ styles.container }>
          <Image style={{ width: 80, height: 80, alignSelf: 'flex-start' }} source={{ uri: coupon.image }} />
          <View style={ styles.descriptionContainer }>
            <View style={{ flexDirection: 'row' }}>
              <Text style={ styles.listItemTitle }> { coupon.title } </Text>
              <Text style={ styles.listItemName }>{ coupon.item_name }</Text>
            </View>
            <View>
              <View>
                <Text style={ styles.listItemDescription }>{ sqlToJsDate(coupon.start_at) + ' - ' + sqlToJsDate(coupon.end_at) }</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={ styles.listItemDescription }>{ formatDollars(coupon.original_price) }</Text>
                <Text style={ [styles.listItemDescription, styles.originalPrice] }>{ formatDollars(coupon.coupon_price) }</Text>
              </View>
            </View>
            <View>
              <Text>{ coupon.company_name }</Text>
            </View>
          </View>
        </View>

      </Card>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  descriptionContainer: {
    flexDirection: 'column',
  },
  listItem: {
    flex: 1,
    borderBottomWidth: 0,
    paddingBottom: 0,
    marginBottom: -10
  },
  originalPrice: {
    textDecorationLine: 'line-through'
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '100', 
  },
  listItemName: {
    fontSize: 16,
    color: '#FF3F4E'
  },
  listItemDescription: {
    fontSize: 12,
    color: '#484848'
  },
})