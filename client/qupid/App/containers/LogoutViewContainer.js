import { connect } from 'react-redux';
import LogoutView from '../components/LogoutView';
import { fetchAuth } from '../actions/logoutViewActions.js';
import { authPush, authPop, fetchUserInfoByDevice } from '../actions/nav-actions/loginNavRootActions';

function mapStateToProps(state) {
  return {
    activeUser: state.logoutReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route) => dispatch(authPush(route)),
    popRoute: () => dispatch(authPop()),
    fetchAuth: (logoutInfo, route, callback) => dispatch(fetchAuth(logoutInfo, route, callback)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutView);
