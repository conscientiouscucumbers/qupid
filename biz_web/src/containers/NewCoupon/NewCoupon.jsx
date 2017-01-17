import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {NewCouponForm} from 'components';

import * as newCouponActions from 'redux/modules/newCoupon';

@connect(
  () => ({}),
  {initialize})
export default class NewCoupon extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
    isValidCoupon: PropTypes.func.isRequired
  }

  handleSubmit = (data) => {
    window.alert('Data submitted! ' + JSON.stringify(data));
    console.log('HANDLE SUBMIT BEING CALLED')
    this.props.initialize('newCoupon', {});
  }

  handleState = (data) => {
    window.alert('Data submitted! ' + JSON.stringify(data));
  }

  handleInitialize = () => {
    this.props.initialize('newCoupon', {
      title: '$5 off Beard Papas',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Banana_Peel.JPG',
      item_name: 'Cream Puff',
      description: 'Lorem Ipsum',
      original_price: 5,
      coupon_savings: 2,
      start_at: '2017-05-21 12:00:00',
      end_at: '2017-05-21 12:00:00',
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Create New Coupon</h1>
        <Helmet title="New Coupon"/>

        <div style={{textAlign: 'left', margin: 15}}>
          <button className="btn btn-primary" onClick={this.handleInitialize}>
            <i className="fa fa-pencil"/> Initialize Form
          </button>
        </div>
          <NewCouponForm customSubmit={this.handleState} onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}
