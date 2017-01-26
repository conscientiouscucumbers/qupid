import { connect } from 'react-redux';
import NavRoot from '../../components/nav-components/NavRoot';
import { push, pop } from '../../actions/nav-actions/navRootActions'

function mapStateToProps(state) {
  return {
    navigation: state.navReducer
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
)(NavRoot);