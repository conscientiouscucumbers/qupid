import { connect } from 'react-redux';
import ForgotPasswordView from '../components/ForgotPasswordView';
import { fetchPasswordInfo } from '../actions/forgotPasswordViewActions.js';

function mapStateToProps(state) {
  return {
    userInfo: state.forgotPasswordReducer
  }
}

function mapDispatchToProps(dispatch) {
  console.log('got inside of container')
  return {
    fetchPasswordInfo: (newUserInfo, callback) => dispatch(fetchPasswordInfo(newUserInfo, callback)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordView);