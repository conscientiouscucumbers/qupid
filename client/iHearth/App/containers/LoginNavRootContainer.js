import { connect } from 'react-redux';
import LoginNavRoot from '../components/nav-components/LoginNavRoot';
import { authPush, authPop } from '../actions/navActions';

function mapStateToProps(state) {
  // console.log(state);
  return {
    loginNavigation: state.loginNavReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route) => dispatch(authPush(route)),
    popRoute: () => dispatch(authPop()),
    // authRoute: () => dispatch(auth())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginNavRoot);