import { connect } from 'react-redux';
import QRCodeImageView from '../components/QRCodeImageView';
// import { useCoupon } from '../actions/loginViewActions.js';

function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // useCoupon: () => { dispatch(useCoupon()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QRCodeImageView);