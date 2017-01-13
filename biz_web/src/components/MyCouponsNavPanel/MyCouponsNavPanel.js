import React, {Component} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class MyCouponsNavPanel extends Component {
  // static propTypes = {
  //   user: PropTypes.object,
  //   login: PropTypes.func,
  //   logout: PropTypes.func
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const input = this.refs.username;
  //   this.props.login(input.value);
  //   input.value = '';
  // }

  render() {
    // const {user, logout} = this.props;
    const styles = require('./MyCouponsNavPanel.scss');
    return (
      <div className={ styles.navPanel + ' container' }>
        <section>
          <Helmet title="MyCouponsNavPanel"/>
          <h3>MyCouponsNavPanel</h3>
          <button className="btn btn-success createCoupon" onClick={this.handleSubmit}><i className="fa fa-sign-in"/>{' '}Create New Coupon
          </button>
        </section>
      </div>
    );
  }
}
// {user &&
// <div>
//   <form className="login-form form-inline" onSubmit={this.handleSubmit}>
//     </button>
//   </form>
//   <p>Create new coupon.</p>
// </div>
// }
// {user &&
// <div>
//   <p>You are currently logged in as {user.name}.</p>
// </div>
// }
