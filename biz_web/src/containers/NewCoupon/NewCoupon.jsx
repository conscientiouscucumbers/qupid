import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {NewCouponForm} from 'components';

@connect(
  () => ({}),
  {initialize})
export default class NewCoupon extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  handleSubmit = (data) => {
    window.alert('Data submitted! ' + JSON.stringify(data));
    // if (callback) {
    //   callback(data);
    // }
    this.props.initialize('newCoupon', {});
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
          <NewCouponForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
