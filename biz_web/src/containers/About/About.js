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
    const myCoup = require('./myCouponView.jpg');

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
              <td><font className={styles.aboutJames}>James Gu</font></td>
              <td><font className={styles.aboutJosh}>Joshua Peng</font></td>
              <td><font className={styles.aboutSusan}>Susan Hong</font></td>
              <td><font className={styles.aboutBlake}>Blake Fleck</font></td>
            </tr>
          </tbody>
        </table>

        <p className={styles.headingTwo}>
          Psst! Would you like to see an example coupon?

          <button className={'btn btn-' + (showCoupon ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggleCoupon}>
            {showCoupon ? 'Sign me up!' : 'Yes! Please!'}</button>
        </p>

        {showCoupon &&
        <table className="table">
          <tbody>
            <tr>
              <td><font className={styles.aboutOne}>List View</font></td>
              <td><font className={styles.aboutThree}>Coupon View</font></td>
              <td><font className={styles.aboutTwo}>QR Code View</font></td>
            </tr>
            <tr>
              <td><img style={{width:300, height:'auto'}} src={myCoup}/></td>
              <td><img style={{width:300, height:'auto'}} src={coupon}/></td>
              <td><img style={{width:300, height:'auto'}} src={backCoupon}/></td>
            </tr>
          </tbody>
        </table>}
        {showCoupon && <p id="summary" className={styles.footer}>Qupid gives retailers the ability to create and distribute customized coupons with in-store customers</p>}

      </div>
    );
  }
}
