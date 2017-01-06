import { connect } from 'react-redux';
import LoginView from '../components/LoginView';
import { fetchAuth } from '../actions/loginViewActions.js';

function mapStateToProps(state) {
  return {
    activeUser: state.loginReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAuth: (loginInfo, route, callback) => dispatch(fetchAuth(loginInfo, route, callback)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);