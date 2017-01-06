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
    fetchAuth: () => dispatch(fetchAuth()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);