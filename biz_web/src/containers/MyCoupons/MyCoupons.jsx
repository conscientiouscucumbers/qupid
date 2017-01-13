import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import FlipCouponGrid from '../../components/FlipCouponGrid/FlipCouponGrid';

class MyCoupons extends Component {
  render() {
    const style = require('./MyCoupons.scss');
    const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolores facilis perspiciatis. Excepturi temporibus laborum odio possimus error.';
    return (
      <section style={{ width: '80%' }}>
        <h1>My Coupons</h1>
        <Helmet title="My Coupons" />
        <div className={style.Cards}>
          <FlipCouponGrid title="Shoes">
            <p>{content}</p>
          </FlipCouponGrid>
          <FlipCouponGrid title="Hoodie">
            <p>{content}</p>
          </FlipCouponGrid>
          <FlipCouponGrid title="Shampoo">
            <p>{content}</p>
          </FlipCouponGrid>
          <FlipCouponGrid title="Cookie">
            <p>{content}</p>
          </FlipCouponGrid>
        </div>
      </section>
    );
  }
}

// TODO: fetch
export default connect(
  undefined,
  undefined
)(MyCoupons);
