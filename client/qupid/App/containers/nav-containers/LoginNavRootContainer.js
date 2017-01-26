import { connect } from 'react-redux';
import LoginNavRoot from '../../components/nav-components/LoginNavRoot';
import { authPush, authPop, fetchUserInfoByDevice } from '../../actions/nav-actions/loginNavRootActions';

function mapStateToProps(state) {
  return {
    loginNavigation: state.loginNavReducer,
    userInfo: state.loginReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route) => dispatch(authPush(route)),
    popRoute: () => dispatch(authPop()),
    fetchUserInfoByDevice: (route, callback) => dispatch(fetchUserInfoByDevice(route, callback))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginNavRoot);