import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { MyCouponsNavPanel, FlipCouponGrid } from 'components';
import * as authActions from 'redux/modules/auth';
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
    top: '5%',
    padding: '5px 5px 0 5px',
  },
  originalPrice: {
    fontSize: '20px',
    fontWeight: '400',
    color: '#484848',
    position: 'relative',
    top: '5%',
    padding: '20px 5px 0 5px',
  },
  couponPrice: {
    fontSize: '24px',
    fontWeight: '400',
    color: '#B5305D',
    position: 'relative',
    top: '5%',
    padding: '10px 5px 0 5px',
  },
  startsAt: {
    fontSize: '16px',
    fontWeight: '40',
    position: 'relative',
    top: '5%',
    color: 'blue',
    padding: '20px 5px 0 5px',
  },
  endsAt: {
    fontSize: '16px',
    fontWeight: '400',
    position: 'relative',
    top: '5%',
    color: 'red',
    padding: '10px 5px 0 5px',
  }
 // footer: {
 //    position: 'absolute',
 //    bottom: 0,
 //    right: "5%",
 //    fontSize: "130%"
 //  },
 //  footerLeft: {
 //    position: 'absolute',
 //    bottom: 0,
 //    left: "5%",
 //    fontSize: "130%"
 //  }
};


@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class MyCoupons extends Component {

  constructor(props){
    super(props);

    this.state = {
    coupons: [{
    coupon_id: 3,
    business_id: 3,
    qrcode: "qrcode3",
    title: "$4 OFF Shampoo",
    image: "https://facebook.github.io/react/img/logo_og.png",
    item_name: "Amino Acid Shampoo",
    description: "A naturally-derived shampoo that cleanses and softens hair. Creates a rich, creamy lather for a delightful shampoo experience. A special blend of moisturizing ingredients imparts softness and shine as the formula adds body and fullness. Suitable for all hair and scalp types when mildness is desired.",
    original_price: 8,
    coupon_price: 4,
    coupon_savings: 4,
    start_at: "2017-01-06T11:00:00.000Z",
    end_at: "2017-01-11T05:25:00.000Z",
    created_at: "2017-01-12T00:16:19.000Z"
  }]
    }
  }
  componentWillMount(){
    if(Array.isArray(this.props.user) ){
      this.setState({coupons:this.props.user})

    }else{

    console.log(this.props, 'this is props')
    this.props.retrieveBizCoupons(this.props.user)
    .then((coupons) => {
      this.setState({coupons: coupons});
    })
    }
  }

  render() {
    const style = require('./MyCoupons.scss');
    const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolores facilis perspiciatis. Excepturi temporibus laborum odio possimus error.';
    const {user} = this.props;
    return (
      <div className="container">
      <section>
        <h1>My Coupons</h1>
        <Helmet title="My Coupons" />
        <MyCouponsNavPanel />
        <div className={style.Cards}>
        {this.state.coupons.map((item) => {
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
