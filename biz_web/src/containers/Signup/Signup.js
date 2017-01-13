import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {SignupForm} from 'components';

@connect(
  () => ({}),
  {initialize})
export default class Signup extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  handleSubmit = (data) => {
    window.alert('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('signup', {});
  }

  handleInitialize = () => {
    this.props.initialize('signup', {
      company_name: 'Company',
      email: 'company@gmail.com',
      password: 'password',
      address: 'address',
      city: 'city',
      state: 'state',
      zipcode: '12345'
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Create New Account</h1>
        <Helmet title="Signup"/>

        <div style={{textAlign: 'left', margin: 15}}>
          <button className="btn btn-primary" onClick={this.handleInitialize}>
            <i className="fa fa-pencil"/> Initialize Form
          </button>
        </div>

        <SignupForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
