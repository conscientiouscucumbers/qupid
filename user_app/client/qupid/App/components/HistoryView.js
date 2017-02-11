import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import HistoryViewEntry from './HistoryViewEntry';
import FilterViewContainer from '../containers/FilterViewContainer';
import { Container, List, Content, Spinner, Header, Title } from 'native-base';
import DropdownAlert from 'react-native-dropdownalert'
import { sqlToJsDate } from '../lib/utils/formatUtils';
import {
  DATE,
  SAVINGS,

} from '../constants/SortByOptions';

var {
  width: deviceWidth,
  height: deviceHeight
} = Dimensions.get('window');

const route = {
  type: 'push',
  route: {
    key: 'coupon',
    title: 'CouponViewEntry'
  }
};

export default class HistoryView extends Component {
  constructor(props) {
    super(props);
    _handleNavigate = this.props._handleNavigate;
    this.showAlert = this.showAlert.bind(this);
  }

  // Before rendering, get state from server
  componentWillMount() {
    this.user_id = this.props.userInfo.userInfo.user_id;
    this.props.fetchCoupons(this.user_id);
    console.log('coupons', this.props.coupons.items);
  }

  static timeNow = new Date();

  render() {
    if(this.props.pushedCoupons.pushedCoupons[0] !== undefined && !this.props.pushedCoupons.pushedCoupons[0].empty){
      console.log('alert called');
      this.showAlert('custom');
    }
    return (
      <Container>
        <Content>
        <Header style={{ backgroundColor: '#ffffff' }}>
          <Title style={ styles.title }>Coupon History</Title>
        </Header>
        <FilterViewContainer />
          <View style={ styles.container }>
            <Text style={{ textAlign: 'center', color: '#6BB1EA' }}>Used: blue</Text>
            <Text style={{ textAlign: 'center', color: '#FF3F4E' }}>Expired: red</Text>
            <List>
              {/* Render spinner */}
              { this.props.coupons.isFetching && (<Spinner color='#484848' style={styles.spinner} />)}
              {/* Render based on sortBy state -- by creation_time/coupon_id */}
              { this.props.coupons.items && this.props.coupons.sortBy === DATE.key &&
                  this.props.coupons.items
                  .filter((coupon) => {
                    return (coupon.used === 1 || coupon.expired === 1);
                  })
                  .sort((a, b) => {
                    return a.coupon_id - b.coupon_id;
                  }).map((coupon) => (
                    <HistoryViewEntry
                      used={ coupon.used }
                      key={ coupon.coupon_id }
                      onPress={ (event) => { _handleNavigate(route); this.props.fetchCoupon(coupon.coupon_id) }}
                      coupon={ coupon } />
                  ))
              }
              {/* Render based on sortBy state -- by savings */}
              { this.props.coupons.items && this.props.coupons.sortBy === SAVINGS.key &&
                  this.props.coupons.items
                  .filter((coupon) => {
                    return (coupon.used === 1 || coupon.expired === 1);
                  })
                  .sort((a, b) => {
                    return b.coupon_savings - a.coupon_savings;
                  }).map((coupon) => (
                    <HistoryViewEntry
                      used={ coupon.used }
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

              // imageSrc={'https://facebook.github.io/react/img/logo_og.png'}
            />
          </View>
        </Content>
      </Container>
    );
  }

  showAlert(type) {
    console.log('alert!!');
    // customize alert window if more types needed
     switch (type) {
      case 'custom':
        this.dropdown.alert('A new coupon has arrived!', this.props.pushedCoupons.pushedCoupons[0].title);
        // this.forceUpdate(); // Doesn't work
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
    backgroundColor: 'white',
    paddingBottom: 7,
    marginLeft: -15,
    marginRight: -15
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
  title: {
    lineHeight: 50,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '300',
    color: '#484848'
  },
  spinner: {
    alignSelf: 'center'
  }
});

// .filter((coupon) => {
//   return (coupon.used === true && coupon.expired === true);
// })
// .concat(this.props.coupons.items
// .filter((coupon) => {
//   return (coupon.used === false && coupon.expired === true);
// }))
