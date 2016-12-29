import { connect } from 'react-redux';
import NavRoot from '../components/NavRoot';
// push , pop

function mapStateToProps (state) {
  return {
    navigation: state.navReducer
  }
}

// function mapDispatchToProps

export default connect(
  mapStateToProps
)(NavRoot);