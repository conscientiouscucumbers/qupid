import { connect } from 'react-redux';
import CouponDescriptionView from '../components/CouponDescriptionView';

function mapStateToProps(state) {
  return {
    couponInfo: state.couponReducer.couponInfo,
  }
}

export default connect(
  mapStateToProps
)(CouponDescriptionView);
