import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ListViewEntry from './ListViewEntry';
import { Container, List, Content, Spinner } from 'native-base';
import DropdownAlert from 'react-native-dropdownalert'
import { sqlToJsDate } from '../lib/utils/formatUtils';
import {
  DATE,
  TIME_LEFT,
  SAVINGS
} from '../constants/SortByOptions';

const route = {
  type: 'push',
  route: {
    key: 'coupon',
    title: 'CouponViewEntry'
  }
};

export default class ListView extends Component {
  constructor(props) {
    super(props);
    _handleNavigate = this.props._handleNavigate;
    this.showAlert = this.showAlert.bind(this);
  }

  // Before rendering, get state from server
  componentWillMount() {
    this.user_id = this.props.userInfo.userInfo.user_id;
    this.props.fetchCoupons(this.user_id);
  }

  static timeNow = new Date();

  render() {
    if(this.props.pushedCoupons.pushedCoupons[0] !== undefined && !this.props.pushedCoupons.pushedCoupons[0].empty){
      console.log('alert called');
      this.showAlert('custom');
      // this.props.fetchCoupons(this.user_id);
    }
    return (
      <View style={ styles.container }>
        {}
        <Text style={{ textAlign: 'center' }}>{this.props.pushedCoupons.pushedCoupons[0] ? this.props.pushedCoupons.pushedCoupons[0].title : "Searching for coupons..." }</Text>
        <List>
          {/* Render spinner */}
          { this.props.coupons.isFetching && (<Spinner color='#484848' style={styles.spinner} />)}
          {/* Render based on sortBy state -- by creation_time/coupon_id */}
          { this.props.coupons.items && this.props.coupons.sortBy === DATE.key &&
              this.props.coupons.items.sort((a, b) => {
                return a.coupon_id - b.coupon_id;
              }).map((coupon) => (
                <ListViewEntry
                  key={ coupon.coupon_id }
                  onPress={ (event) => { _handleNavigate(route); this.props.fetchCoupon(coupon.coupon_id) }}
                  coupon={ coupon } />
              ))
          }
          {/* Render based on sortBy state -- by time left */}
          { this.props.coupons.items && this.props.coupons.sortBy === TIME_LEFT.key &&
              this.props.coupons.items.sort((a, b) => {
                // compare time left for item a and b
                let tl1 = sqlToJsDate(a.end_at) - this.constructor.timeNow;
                let tl2 = sqlToJsDate(b.end_at) - this.constructor.timeNow;
                return  tl1 - tl2;
              }).map((coupon) => (
                <ListViewEntry
                  key={ coupon.coupon_id }
                  onPress={ (event) => { _handleNavigate(route); this.props.fetchCoupon(coupon.coupon_id) }}
                  coupon={ coupon } />
              ))
          }
          {/* Render based on sortBy state -- by savings */}
          { this.props.coupons.items && this.props.coupons.sortBy === SAVINGS.key &&
              this.props.coupons.items.sort((a, b) => {
                return b.coupon_savings - a.coupon_savings;
              }).map((coupon) => (
                <ListViewEntry
                  key={ coupon.coupon_id }
                  onPress={ (event) => { _handleNavigate(route); this.props.fetchCoupon(coupon.coupon_id) }}
                  coupon={ coupon } />
              ))
          }
        </List>
        <DropdownAlert
          ref={(ref) => this.dropdown = ref}
          titleNumOfLines={1}
          messageNumOfLines={5}

          containerStyle={{
            backgroundColor: "#6441A4",
            margin: 30,
            borderRadius: 8
          }}
          onClose={(data) => {
            this.onClose(data);
          }}
          onCancel={(data) => this.onClose(data)}
          showCancel={true}
          tapToCloseEnabled={true}
        />
      </View>
    );
  }

  showAlert(type) {
    console.log('alert!!');
    // customize alert window if more types needed
     switch (type) {
      case 'custom':
        this.dropdown.alert('A new coupon has arrived!', this.props.pushedCoupons.pushedCoupons[0].title);
      break;
    }

  }
  closeAlert() {
    console.log('YOOOOOO ON CLOSE BEING CALLED NOW........')
    this.dropdown.onClose()
  }
  onClose(data) {
    console.log('YOOOOOO ON CLOSE BEING CALLED NOW tap........')
    this.props.fetchCoupons(this.props.userInfo.userInfo.user_id);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    marginTop: 22,
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  spinner: {
    alignSelf: 'center'
  }
});
