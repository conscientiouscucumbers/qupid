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
    const backCoupon = require('./backsideCoupon.jpg');
    const james = require('./JamesGu.jpg');
    const josh = require('./JoshuaPeng.jpg');
    const susan = require('./SusanHong.jpg');
    const blake = require('./BlakeFleck.jpg');
    const styles = require('./About.scss');

    return (
      <div className="container">
        <h1 className={styles.heading}>Meet The Team</h1>
        <Helmet title="Meet The Team"/>

        <table className="table">
          <tbody>
            <tr>
              <td><img src={james} className="img-circle"/></td>
              <td><img src={josh} className="img-circle"/></td>
              <td><img src={susan} className="img-circle"/></td>
              <td><img src={blake} className="img-circle"/></td>
            </tr>
            <tr>
              <td><font className={styles.about}>James Gu</font></td>
              <td><font className={styles.about}>Joshua Peng</font></td>
              <td><font className={styles.about}>Susan Hong</font></td>
              <td><font className={styles.about}>Blake Fleck</font></td>
            </tr>
          </tbody>
        </table>

        <p className={styles.headingTwo}>
          Psst! Would you like to see an example coupon?

          <button className={'btn btn-' + (showCoupon ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggleCoupon}>
            {showCoupon ? 'Okay, Thanks!' : 'Yes! Please!'}</button>
        </p>

        {showCoupon &&    <table className="table">
          <tbody>
            <tr>
              <td><img className={styles.headingTwo} src={coupon}/></td>
              <td><img className={styles.heading} src={backCoupon}/></td>
            </tr>
            <tr>
              <td><font className={styles.about}>Coupon View</font></td>
              <td><font className={styles.about}>QR Scanner View</font></td>
            </tr>
          </tbody>
        </table>}

         <p className={styles.headingTwo}>Coupons and great deals get washed out by the noise of everyday life. Instead of alerting your customers of deals in the local paper where the potential transaction is 4-5 hours away. iHearth gives the customer a notification of the coupon when it is most pertinent for them... In the store, making the decision.
        </p>

      </div>
    );
  }
}
