import { connect } from 'react-redux';
import QRCodeImageView from '../components/QRCodeImageView';
import { useCoupon } from '../actions/QRCodeViewActions.js';

function mapStateToProps(state) {
  return {
    QRInfo: state.QRReducer,
    currentCoupon: state.couponReducer,
    userInfo: state.loginReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    useCoupon: (user_id, coupon_id) => { dispatch(useCoupon(user_id, coupon_id)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QRCodeImageView);