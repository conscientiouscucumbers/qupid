import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {NewCouponForm} from 'components';

// import {toggleForm} from 'redux/modules/newCoupon';

@connect(
  state => ({
    form: state.newCoupon.form,
    user: state.auth.user,
  }),
  {
    initialize
    // toggleForm: (current) => { dispatch(toggleForm(current)); },
  })
export default class NewCoupon extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
    // isValidCoupon: PropTypes.func.isRequired,
    // toggleForm: PropTypes.func.isRequired,
  }

  handleSubmit = (data) => {
    // TO DO: to clean up/delete
    // this.props.initialize('newCoupon', {});
  }

  handleState = (data) => {
    const {form} = this.props;
    // this.props.toggleForm(form);
    this.props.initialize('newCoupon', {});
  }

  handleInitialize = () => {
    const {user} = this.props;
    console.log('USER HERE...', user);
    this.props.initialize('newCoupon', {
      title: 'asdasdasd',
      image: '',
      item_name: 'asdasd',
      description: 'asdasdas',
      original_price: 5.00,
      coupon_savings: 2.00,
      start_at: '2017-01-25 12:00:00',
      end_at: '2017-01-30 12:00:00',
      business_id: user ? user.business_id : ''
    });
  }

  componentDidMount() {
    this.handleInitialize();
  }

  render() {
    const { form } = this.props;
    return (
      <div className="container">
        <h1>Create New Coupon</h1>
        <Helmet title="New Coupon"/>
        
        {this.props &&
          <div>
            <div style={{textAlign: 'left', margin: 15}}>
              <button className="btn btn-primary" onClick={this.handleInitialize}>
                <i className="fa fa-pencil"/> Initialize Form
              </button>
            </div>
            <div>
              <NewCouponForm customSubmit={this.handleState} onSubmit={this.handleSubmit.bind(this)} handleInitialize={this.props.initialize.bind(this)} />
            </div>
          </div>
        }
      </div>
    );
  }
}
