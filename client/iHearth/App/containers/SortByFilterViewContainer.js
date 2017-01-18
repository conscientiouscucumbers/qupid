import { connect } from 'react-redux';
import {
  sortCouponsByDate,
  sortCouponsByTimeLeft,
  sortCouponsBySavings,
  // sortCouponsByUsed,
  // sortCouponsByExpired,
  // sortCouponsByActivated
} from '../actions/historyViewActions'
import SortByFilterView from '../components/SortByFilterView';
import {
  DATE,
  TIME_LEFT,
  SAVINGS,
  // USED,
  // EXPIRED,
  // ACTIVATED
} from '../constants/SortByOptions';

function mapStateToProps(state) {
  return {
    coupons: state.listReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortBy: (type) => {
      switch (type) {
        case DATE.value:
          return dispatch(sortCouponsByDate())

        case TIME_LEFT.value:
          return dispatch(sortCouponsByTimeLeft())

        case SAVINGS.value:
          return dispatch(sortCouponsBySavings())

        // case USED.value:
        //   return dispatch(sortCouponsByUsed())
        //
        // case EXPIRED.value:
        //   return dispatch(sortCouponsByExpired())
        //
        // case ACTIVATED.value:
        //   return dispatch(sortCouponsByActivated())

        default:
          return;
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortByFilterView);
