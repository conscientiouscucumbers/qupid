import React, { Component, PropTypes } from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import newCouponValidation from './newCouponValidation';
import * as newCouponActions from 'redux/modules/newCoupon';
import Dropzone from 'react-dropzone';
import Spinner from '../../../static/light_blue_material_design_loading.gif'

const FILE_FIELD_NAME = 'files';
const url = `https://mighty-wildwood-43490.herokuapp.com/img/image-upload`;

// Can insert asyncValidation here if we want validation as user is entering info
// (redux form compliant)
function asyncValidate(data, dispatch, {isValidCoupon}) {
  if (!data.title) {
    return Promise.resolve({});
  }
  return isValidCoupon(data);
}
@connect(
  state => ({
  }),
  // Wraps every action creator (values in obj passed in) in dispatches
  // In this case { isValidCoupon: fn }
  dispatch => bindActionCreators(newCouponActions, dispatch)
)

// Define fields in props
@reduxForm({
  // initialize must refer to this form property in container
  form: 'newCoupon',
  fields: [
    'title',
    'image',
    'item_name',
    'description',
    'original_price',
    'coupon_savings',
    'start_at',
    'end_at',
    'business_id',
    'dropzone'
  ],
  validate: newCouponValidation,
  asyncValidate,
  // asyncBlurFields: ['title']
})

export default class NewCouponForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  static propTypes = {
    active: PropTypes.string,
    asyncValidating: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired,
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
    isValidCoupon: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired
  }

  // Takes acceptedFiles and passes image url in the form of
  // "https://storage.googleapis.com/qupid-image/Screen%20Shot%202017-01-17%20at%204.59.37%20PM.png"
  getPhotoURL(acceptedFiles, callback) {

    const imgBody = new FormData();
    imgBody.append('image', acceptedFiles[0]);

    fetch(url, {
      method: 'POST',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'multipart/form-data',
      // },
      body: imgBody
    })
    .then((res) => res.json())
    .then((results) => {
      callback(results.imageUrl);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  // Once user drops in an image file
  // Updated state updates view
  // And reinitializes form with updated google url once http call resolves
  onDrop(acceptedFiles, rejectedFiles) {
    this.setState({
      files: acceptedFiles
    }, () => {
      this.getPhotoURL(acceptedFiles, (url) => {
        this.props.handleInitialize('newCoupon', {
          title: this.props.fields.title.value,
          image: url,
          item_name: this.props.fields.item_name.value,
          description: this.props.fields.description.value,
          original_price: this.props.fields.original_price.value,
          coupon_savings: this.props.fields.coupon_savings.value,
          start_at: this.props.fields.start_at.value,
          end_at: this.props.fields.end_at.value,
          business_id: this.props.fields.business_id.value,
        });
      })
    });
  }

  // Called on submit for UI rendering purposes
  clearState() {
    this.setState({
      files: []
    });
  }

  render() {
    const {
      asyncValidating,
      // dirty,
      fields: {
        title,
        image,
        item_name,
        description,
        original_price,
        coupon_savings,
        start_at,
        end_at,
        business_id,
        dropzone
      },
      handleSubmit,
      resetForm,
      customSubmit,
      user
      // active,
      // invalid,
      // pristine,
      // valid
    } = this.props;

    const {
      files
    } = this.state;

    const styles = require('./NewCouponForm.scss');
    const renderInput = (field, label, placeholder, showAsyncValidating, value) =>
      <div className={'form-group' + (field.error && field.touched ? ' has-error' : '')}>
        <label htmlFor={field.name} className="col-sm-2">{label}</label>
        <div className={'col-sm-8 ' + styles.inputGroup}>
          {showAsyncValidating && asyncValidating && <i className={'fa fa-cog fa-spin ' + styles.cog}/>}
          { (label === 'Coupon Title') && <input type="text" ref="company_name" className="form-control title" placeholder={placeholder} id={field.name} {...field}/> }
          { (label === 'Item Name') && <input type="text" ref="company_name" className="form-control item_name" placeholder={placeholder} id={field.name} {...field}/> }
          { (label === 'Description') && <input type="text" ref="company_name" className="form-control description" placeholder={placeholder} id={field.name} {...field}/> }
          { (label === 'Original') && <input type="text" ref="company_name" className="form-control original" placeholder={placeholder} id={field.name} {...field}/> }
          { (label === 'Savings') && <input type="text" ref="company_name" className="form-control savings" placeholder={placeholder} id={field.name} {...field}/> }
          { (label === 'Start Time') && <input type="text" ref="company_name" className="form-control start_time" placeholder={placeholder} id={field.name} {...field}/> }
          { (label === 'End Time') && <input type="text" ref="company_name" className="form-control end_time" placeholder={placeholder} id={field.name} {...field}/> }
          { (label === 'Business ID') && <input type="text" ref="company_name" className="form-control business_id" placeholder={placeholder} id={field.name} {...field}/> }
          { (label === 'Coupon Image') &&
                                        <div>
                                          <Dropzone
                                            name={field.name}
                                            onDrop={(acceptedFiles, rejectedFiles) => this.onDrop(acceptedFiles, rejectedFiles)}
                                          >
                                            <div>Try dropping some files here, or click to select files to upload.</div>
                                          </Dropzone>
                                        </div> }
          { (label === 'Image URL') && <input type="text" className="form-control image" value={placeholder} id={field.name} {...field}/> }
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
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {renderInput(title, 'Coupon Title', '$5 off Beard Papas', true)}
          {renderInput(item_name, 'Item Name', 'Cream Puff')}
          {renderInput(description, 'Description', 'Lorem Ipsum')}
          {renderInput(original_price, 'Original', '5.00')}
          {renderInput(coupon_savings, 'Savings', '2.50')}
          {renderInput(start_at, 'Start Time', '2017-05-21 12:00:00')}
          {renderInput(end_at, 'End Time', '2017-05-21 12:00:00')}
          {!files[0] && renderInput(dropzone, 'Coupon Image', '')}
          {files[0] && image.value && renderInput(image, 'Image URL', 'FILE URL')}
          {files[0] && !image.value && <div><img width="100" src={Spinner} /></div>}
          {files[0] && image.value && <div>{this.state.files.map((file) => <img width="400" src={file.preview} /> )}</div>}
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={() => {handleSubmit(); customSubmit(); this.clearState(); }}>
                <i className="fa fa-paper-plane"/> Submit
              </button>
              <button className="btn btn-warning" onClick={resetForm} style={{marginLeft: 15}}>
                <i className="fa fa-undo"/> Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
