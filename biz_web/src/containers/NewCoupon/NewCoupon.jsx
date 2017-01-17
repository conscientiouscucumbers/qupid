import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {NewCouponForm} from 'components';

import {toggleForm} from 'redux/modules/newCoupon';

@connect(
  state => ({
    form: state.newCoupon.form
  }),
  dispatch => ({
    initialize,
    toggleForm: (current) => { dispatch(toggleForm(current)); },
  })
  )
export default class NewCoupon extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
    isValidCoupon: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
  }

  handleSubmit = (data) => {
    this.props.initialize('newCoupon', {});
  }

  handleState = (data) => {
    const {form} = this.props;
    this.props.toggleForm(form);
    // this.props.initialize('newCoupon', {});
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
    const { form } = this.props;
    return (
      <div className="container">
        <h1>Create New Coupon</h1>
        <Helmet title="New Coupon"/>
        {form &&
          <div>
            <div style={{textAlign: 'left', margin: 15}}>
              <button className="btn btn-primary" onClick={this.handleInitialize}>
                <i className="fa fa-pencil"/> Initialize Form
              </button>
            </div>
            <div>
              <NewCouponForm customSubmit={this.handleState} onSubmit={this.handleSubmit.bind(this)}/>
            </div>
          </div>
        }
      </div>
    );
  }
}
