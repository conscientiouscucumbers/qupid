import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ListViewEntry from './ListViewEntry';
import styles from './../styles';
import { Container, List, Content } from 'native-base';
import DropdownAlert from 'react-native-dropdownalert'

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
    console.log('USER INFO...', this.props);
    console.log(this.props.userInfo.userInfo.user_id)
    this.user_id = this.props.userInfo.userInfo.user_id;
    this.props.fetchCoupons(this.user_id);
  }

  componentDidMount() {
    // if (this.props.pushedCoupons.pushedCoupons[0]) {
    //   this.showAlert('custom');
    //   console.log('showing alert!');
    // }

    if(this.props.pushedCoupons.pushedCoupons[0])
      console.log('====TITLE'+ this.props.pushedCoupons.pushedCoupons[0].title);
    else
      console.log("null");
  }

  render() {
    // console.log('LISTVIW PROPS...', this.props.pushedCoupons);
    // console.log('CHANGES?');
    this.props.pushedCoupons.pushedCoupons[0] ? this.showAlert('custom') : null
    return (
      <View>
        <Text>{this.props.pushedCoupons.pushedCoupons[0] ? this.props.pushedCoupons.pushedCoupons[0].title : "null" }</Text>
        <List>
          {this.props.coupons.items.map((coupon) => (
            <ListViewEntry
              key={ coupon.coupon_id }
              onPress={ (event) => { _handleNavigate(route); this.props.fetchCoupon(coupon.coupon_id) }}
              coupon={ coupon } />
          ))}
        </List>
        <DropdownAlert
          ref={(ref) => this.dropdown = ref}
          titleNumOfLines={1}
          messageNumOfLines={5}
          closeInterval={0}
          containerStyle={{
            backgroundColor: "#6441A4",
            margin: 30,
            borderRadius: 8
          }}
          onClose={(data) => this.onClose(data)}
          onCancel={(data) => this.onClose(data)}
          showCancel={true}
          imageSrc={'https://facebook.github.io/react/img/logo_og.png'}
        />
      </View>
    );
  }

  showAlert(type) {
    // customize alert window if more types needed
     // data = {type, title, message}
     switch (type) {
      case 'custom':
        this.dropdown.alert('A new coupon has arrived!', this.props.pushedCoupons.pushedCoupons[0].title);
        // this.dropdown.alert('Custom','A new coupon has arrived!', 'eyy');
        // this.dropdown.alertWithType(type, 'Error', 'A new coupon has arrived!', 'eyy');
      break;
    }

  }
  closeAlert() {
    this.dropdown.onClose()
  }
  onClose(data) {
    console.log(data)
  }
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems:'center'
    // backgroundColor: 'honeydew'
  },
  contentContainer: {
    marginTop: 22,

  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
});

