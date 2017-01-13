import React, { Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import newCouponValidation from './newCouponValidation';
import * as newCouponActions from 'redux/modules/newCoupon';

@connect(() => ({}),
  dispatch => bindActionCreators(newCouponActions, dispatch)
)

// Define fields in props
@reduxForm({
  // initialize must refer to this form property in container
  form: 'newCoupon',
  fields: [
  // TODO: will need to generate random QR code for coupon
    'title',
    'image',
    'item_name',
    'description',
    'original_price',
    'coupon_savings',
    'start_at',
    'end_at'
  ],
  validate: newCouponValidation
})

export default class NewCouponForm extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    active: PropTypes.string,
    dirty: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  }

  render() {
    const {
      handleSubmit,
      fields: {
        title,
        image,
        item_name,
        description,
        original_price,
        coupon_savings,
        start_at,
        end_at
      }
    } = this.props;
    console.log('THIS ONSUBMIT', handleSubmit);
    const styles = require('./NewCouponForm.scss');
    const renderInput = (field, label, placeholder) =>
      <div className={'form-group' + (field.error && field.touched ? ' has-error' : '')}>
        <label htmlFor={field.name} className="col-sm-2">{label}</label>
        <div className={'col-sm-8 ' + styles.inputGroup}>
          { label === 'Original' && (
            <input type="text" name="currency" className="form-control" id={field.name} {...field}
            pattern="^\d*(\.\d{2}$)?" title="CDA Currency Format - no dollar sign and no comma(s) - cents (.##) are optional"
            placeholder={placeholder}/>
            )}
          { (label !== 'Original' && label !== 'Currency') && <input type="text" className="form-control" id={field.name} placeholder={placeholder} {...field}/>}
          {field.error && field.touched && <div className="text-danger">{field.error}</div>}
          <div className={styles.flags}>
            {field.dirty && <span className={styles.dirty} title="Dirty">D</span>}
            {field.active && <span className={styles.active} title="Active">A</span>}
            {field.visited && <span className={styles.visited} title="Visited">V</span>}
            {field.touched && <span className={styles.touched} title="Touched">T</span>}
          </div>
        </div>
      </div>;

    return (
      <div className="container">
        <h1>NewCouponForm</h1>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {renderInput(title, 'Coupon Title', '$5 off Beard Papas')}
          {renderInput(image, 'Image Url', 'https://upload.wikimedia.org/wikipedia/commons/6/64/Banana_Peel.JPG')}
          {renderInput(item_name, 'Item Name', 'Cream Puff')}
          {renderInput(description, 'Description', 'Lorem Ipsum')}
          {renderInput(original_price, 'Original', '5.00')}
          {renderInput(coupon_savings, 'Savings', '2.50')}
          {renderInput(start_at, 'Start Time', '2017-05-21 12:00:00')}
          {renderInput(end_at, 'End Time', '2017-05-21 12:00:00')}
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={handleSubmit}>
                <i className="fa fa-paper-plane"/> Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
