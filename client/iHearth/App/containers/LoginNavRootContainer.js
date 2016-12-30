import { connect } from 'react-redux';
import LoginNavRoot from '../components/nav-components/LoginNavRoot';
import { push, pop } from '../actions/navActions';

function mapStateToProps(state) {
  // console.log(state);
  return {
    navigation: state.navReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
    // authRoute: () => dispatch(auth())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginNavRoot);