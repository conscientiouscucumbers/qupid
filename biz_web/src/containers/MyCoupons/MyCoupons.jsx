import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { MyCouponsNavPanel, FlipCouponGrid } from 'components';
import * as fetchActions from 'redux/modules/myCoupons';
import { formatDollars, formatSQLTime, formatSQLDate, timeLeft, timeLeftInterval } from '../../utils/formatUtils.js';

const styles = {
  title: {
    fontSize: '24px',
    fontWeight: '400',
    top: '10%',
    padding: '10px 5px 0 5px',
  },
  description: {
    fontSize: '12px',
    fontWeight: '400',
    position: 'relative',
    top: '2%',
    padding: '5px 5px 0 5px',
  },
  originalPrice: {
    fontSize: '20px',
    fontWeight: '400',
    color: '#484848',
    position: 'relative',
    top: '2%',
    padding: '5px 5px 0 5px',
  },
  couponPrice: {
    fontSize: '24px',
    fontWeight: '400',
    color: '#B5305D',
    position: 'relative',
    top: '2%',
    padding: '5px 5px 0 5px',
  },
  startsAt: {
    fontSize: '16px',
    fontWeight: '400',
    position: 'relative',
    top: '2%',
    color: 'blue',
    padding: '10px 5px 0 5px',
  },
  endsAt: {
    fontSize: '16px',
    fontWeight: '400',
    position: 'relative',
    top: '2%',
    color: 'red',
    padding: '5px 5px 0 5px',
  }
};

@connect(
  state => ({
    user: state.auth.user,
    mycoupons: state.myCoupons.data
  }),
  fetchActions)
export default class MyCoupons extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.retrieveBizCoupons(this.props.user);
  }

  render() {
    const style = require('./MyCoupons.scss');
    const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolores facilis perspiciatis. Excepturi temporibus laborum odio possimus error.';
    const {
      user,
      mycoupons
    } = this.props;
    return (
      <div className="container">
      <section>
        <h1>My Coupons</h1>
        <Helmet title="My Coupons" />
        <MyCouponsNavPanel />
        <div>
          {mycoupons && mycoupons.map((item) => {
            return(
              <FlipCouponGrid title={item.item_name} img={item.image}>
                <div style={styles.title}>{item.title}</div>
                <div style={styles.description}>{item.description}</div>
                <div style={styles.originalPrice}><strike>{formatDollars(item.original_price)}</strike></div>
                <div style={styles.couponPrice}>{formatDollars(item.coupon_price)}</div>
                <div style={styles.startsAt}>Starts at: {formatSQLDate(item.start_at)}</div>
                <div style={styles.endsAt}>Ends at: {formatSQLDate(item.end_at)}</div>
              </FlipCouponGrid>
              )
          })}
        </div>

      </section>
    </div>
    );
  }
}
