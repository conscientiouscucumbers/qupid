import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import {
  Badge,
  ListItem,
  Thumbnail,
  Card
} from 'native-base';
import { formatDollars, formatSQLTime, formatSQLDate, timeLeft } from '../lib/utils/formatUtils.js';

export default ({ label, onPress, coupon }) => {
  // Image must be defined statically per docs
  // image = 'https://facebook.github.io/react/img/logo_og.png';
  return (
    <ListItem button style={ styles.listItem } onPress={ (event) => { onPress() }} >
      <View style={ styles.card }>

        <View style={ styles.topContainer }>
          <Image style={ styles.image } source={{ uri: coupon.image }} />
          <View style={ styles.descriptionContainer }>
            <View style={ styles.splitContainer }>
              <View>
                <Text style={ styles.listItemTitle }> { coupon.title } </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={ styles.newPrice }>{ formatDollars(coupon.original_price) + '  ' }</Text>
                <Text style={ styles.originalPrice }>{ formatDollars(coupon.coupon_price) }</Text>
              </View>
            </View>
            <View>
              <Text style={ styles.listItemName }>{ coupon.item_name }</Text>
            </View>
            <View>
              <Text style={ styles.listItemBusiness }>{ coupon.company_name }</Text>
            </View>
            <View>
              <View style={ styles.splitContainer }>
                <Text style={ styles.listItemDescription }>
                {
                  formatSQLTime(coupon.start_at) + ' - ' + formatSQLTime(coupon.end_at) +
                  ' ' + formatSQLDate(coupon.start_at)
                }
                </Text>
                <Text style={{ color: '#FF3F4E' }}>{ timeLeft(coupon.end_at) }</Text>
              </View>
              <View style={ styles.container }>
              </View>
            </View>
            <View>
            </View>
          </View>
        </View>

      </View>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
  },
  splitContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300
  },
  descriptionContainer: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  listItem: {
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 4,
    marginBottom: -8,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#484848',
    fontSize: 12,
  },
  newPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00A699'
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '100',
  },
  listItemName: {
    fontSize: 16,
    color: '#484848',
    fontWeight: '100',
  },
  listItemBusiness: {
    fontSize: 12,
    color: '#484848',
    fontWeight: '100',
  },
  listItemDescription: {
    fontSize: 12,
    color: '#484848'
  },
  image: {
    width: 95,
    height: 95,
    alignSelf: 'flex-start',
    // borderRadius: 47.5
  },
  card: {
    borderWidth: 0,
    // borderRadius: 10,
    borderColor: '#dddddd',
    backgroundColor: 'white'
  },
})
