import { connect } from 'react-redux';
import QRView from '../components/QRView';
import { clearQRState } from '../actions/QRCodeViewActions.js';

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    clearQRState: () => { dispatch(clearQRState()) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QRView);
