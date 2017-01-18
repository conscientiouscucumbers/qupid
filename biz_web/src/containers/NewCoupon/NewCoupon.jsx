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
      title: '',
      image: '',
      item_name: '',
      description: '',
      original_price: '',
      coupon_savings: '',
      start_at: '',
      end_at: '',
      business_id: user.business_id
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
        {this.props.user !== null &&
          <div>
            <div style={{textAlign: 'left', margin: 15}}>
              <button className="btn btn-primary" onClick={this.handleInitialize}>
                <i className="fa fa-pencil"/> Initialize Form
              </button>
            </div>
            <div>
              <NewCouponForm customSubmit={this.handleState} onSubmit={this.handleSubmit.bind(this)}/>
            </div>
          </div>
        }
      </div>
    );
  }
}
