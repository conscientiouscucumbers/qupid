import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import signupValidation from './signupValidation';
import * as signupActions from 'redux/modules/signup';

function asyncValidate(data, dispatch, {isValidEmail}) {
  console.log('CALLING ASYNC VALIDATE....', data, dispatch, {isValidEmail} );
  if (!data.email) {
    return Promise.resolve({});
  }
  return isValidEmail(data);
}
@connect(() => ({}),
  dispatch => bindActionCreators(signupActions, dispatch)
)
@reduxForm({
  form: 'signup',
  fields: ['company_name', 'email', 'password', 'address', 'city', 'state', 'zipcode'],
  validate: signupValidation,
  asyncValidate,
  asyncBlurFields: ['email']
})
export default
class SignupForm extends Component {
  static propTypes = {
    active: PropTypes.string,
    asyncValidating: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired,
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  }

  render() {
    const {
      asyncValidating,
      dirty,
      fields: {company_name, email, password, address, city, state, zipcode},
      active,
      handleSubmit,
      invalid,
      resetForm,
      pristine,
      valid
      } = this.props;
    const styles = require('./SignupForm.scss');
    const renderInput = (field, label, showAsyncValidating) =>
      <div className={'form-group' + (field.error && field.touched ? ' has-error' : '')}>
        <label htmlFor={field.name} className="col-sm-2">{label}</label>
        <div className={'col-sm-8 ' + styles.inputGroup}>
          {showAsyncValidating && asyncValidating && <i className={'fa fa-cog fa-spin ' + styles.cog}/>}
          { (label === 'Company Name') && <input type="text" ref="company_name" className="form-control name" id={field.name} {...field}/> }
          { (label === 'Email') && <input type="email" ref="email" className="form-control email" id={field.name} {...field}/> }
          { (label === 'Password') && <input type="password" ref="password" className="form-control password" id={field.name} {...field}/> }
          { (label === 'Address') && <input type="text" ref="text" className="form-control address" id={field.name} {...field}/> }
          { (label === 'City') && <input type="text" ref="text" className="form-control city" id={field.name} {...field}/> }
          { (label === 'State') && <input type="text" ref="text" className="form-control state" id={field.name} {...field}/> }
          { (label === 'Zip Code') && <input type="text" ref="number" className="form-control zip" id={field.name} {...field}/> }
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
      <div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {renderInput(company_name, 'Company Name')}
          {renderInput(email, 'Email', true)}
          {renderInput(password, 'Password')}
          {renderInput(address, 'Address')}
          {renderInput(city, 'City')}
          {renderInput(state, 'State')}
          {renderInput(zipcode, 'Zip Code')}
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={handleSubmit}>
                <i className="fa fa-paper-plane"/> Submit
              </button>
              <button className="btn btn-danger" onClick={resetForm} style={{marginLeft: 15}}>
                <i className="fa fa-undo"/> Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
