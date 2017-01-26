import { connect } from 'react-redux';
import SignupView from '../components/SignupView';
import { fetchNewUser } from '../actions/signupViewActions.js';

function mapStateToProps(state) {
  return {
    newUser: state.signupReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNewUser: (newUserInfo, route, callback) => dispatch(fetchNewUser(newUserInfo, route, callback)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupView);
