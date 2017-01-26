import { connect } from 'react-redux';
import FilterView from '../components/FilterView';

function mapStateToProps(state) {
  return {
    coupons: state.listReducer,
    userInfo: state.loginReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterView);