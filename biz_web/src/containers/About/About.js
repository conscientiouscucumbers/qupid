import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  state = {
    showCoupon: false
  }

  handleToggleCoupon = () => this.setState({showCoupon: !this.state.showCoupon});

  render() {
    const {showCoupon} = this.state;
    const coupon = require('./couponimage.jpg');
    const james = require('./JamesGu.jpg');
    const josh = require('./JoshuaPeng.jpg');
    const susan = require('./Susan.jpg');
    const blake = require('./Blake.jpg');
    const styles = require('./About.scss');

    return (
      <div className="container">
        <h1>Meet The Team</h1>
        <Helmet title="Meet The Team"/>

        <p>Coupons and great deals get washed out by the noise of everyday life. Instead of alerting your customers of deals in the local paper where the potential transaction is 4-5 hours away. iHearth gives the customer a notification of the coupon when it is most pertinant for them... In the store, making the decision.
        </p>

        <p><img src={james} align="left"/>
        <font className={styles.about}>James Gu</font></p>

        <p><img src={josh} align="left"/>
        <font className={styles.about}>Josh Peng</font></p><br></br>

        <p><img src={susan} align="left"/>
        <font className={styles.about}>Susan Hong</font></p><br></br>

        <p><img src={blake} align="left"/>
        <font className={styles.about}>Blake Fleck</font></p>

         <h3>Coupon Image</h3>

        <p>
          Psst! Would you like to see an example coupon?

          <button className={'btn btn-' + (showCoupon ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggleCoupon}>
            {showCoupon ? 'Okay, Thanks!' : 'Yes! Please!'}</button>
        </p>

        {showCoupon && <div><img src={coupon}/></div>}

      </div>
    );
  }
}
