import React, {Component} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class MyCouponsNavPanel extends Component {

  render() {
    // const {user, logout} = this.props;
    const styles = require('./MyCouponsNavPanel.scss');
    return (
      <div className={ styles.navPanel + ' container' }>
        <section>
          <Helmet title="My Coupons"/>
          <button className="btn btn-success createCoupon" onClick={this.handleSubmit}><i className="fa fa-sign-in"/>{' '}Create New Coupon
          </button>
        </section>
      </div>
    );
  }
}
