import { connect } from 'react-redux';
import LoginNavRoot from '../components/nav-components/LoginNavRoot';
import { push, pop } from '../actions/navActions';

function mapStateToProps(state) {
  // console.log(state);
  return {
    loginNavigation: state.loginNavReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginNavRoot);