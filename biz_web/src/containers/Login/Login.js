import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.refs.email;
    const inputPassword = this.refs.password;
    this.props.login(input.value, inputPassword.value);
    input.value = '';
    inputPassword.value = '';
  }

  render() {
    const {user, logout} = this.props;
    const styles = require('./Login.scss');
    return (
      <div className={styles.loginPage + ' container'}>
        <Helmet title="Login"/>
        <h1>Business Owner Portal</h1>
        {!user &&
        <div>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="col-sm-2">Email</label>
              <div className="col-sm-8">
                <input type="email" ref="email" className="form-control email"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-2">Password</label>
              <div className="col-sm-8">
                <input type="password" ref="password" className="form-control password"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-success" onClick={this.handleSubmit} style={{ marginLeft: 0 }}>
                  <i className="fa fa-sign-in"/> Log In
                </button>
              </div>
            </div>
          </form>
        </div>
        }
        {user &&
        <div>
          <p>You are currently logged in as {user.email}.</p>

          <div>
            <button className="btn btn-danger" onClick={logout}><i className="fa fa-sign-out"/>{' '}Log Out</button>
          </div>
        </div>
        }
      </div>
    );
  }
}
