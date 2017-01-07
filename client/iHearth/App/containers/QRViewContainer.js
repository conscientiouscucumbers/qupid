import { connect } from 'react-redux';
import QRView from '../components/QRView';
import { useCoupon } from '../actions/QRCodeViewActions.js';

function mapStateToProps(state) {
  return {
    currentCoupon: state.couponReducer.couponInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    useCoupon: () => { dispatch(useCoupon()) }
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(QRView);