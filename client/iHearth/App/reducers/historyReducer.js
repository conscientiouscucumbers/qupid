import {
  REQUEST_COUPONS,
  RECEIVE_COUPONS,
  SORT_BY_DATE,
  SORT_BY_TIME_LEFT,
  SORT_BY_SAVINGS,
  // SORT_BY_USED,
  // SORT_BY_EXPIRED,
  // SORT_BY_ACTIVATED
} from '../constants/ActionTypes';
import {
  DATE,
  TIME_LEFT,
  SAVINGS,
  // USED,
  // EXPIRED,
  // ACTIVATED
} from '../constants/SortByOptions';

const initialState = {
  isFetching: false,
  sortBy: 'date',
  items: []
}

export default function listState(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COUPONS:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_COUPONS:
      return {
        ...state,
        isFetching: false,
        items: action.coupons,
        lastUpdated: action.receivedAt
      }

    case SORT_BY_DATE:
      if (state.sortBy === 'date') return state;
      return {
        ...state,
        sortBy: DATE.key
      }

    case SORT_BY_TIME_LEFT:
      if (state.sortBy === 'time_left') return state;
      return {
        ...state,
        sortBy: TIME_LEFT.key
      }

    case SORT_BY_SAVINGS:
      if (state.sortBy === 'savings') return state;
      return {
        ...state,
        sortBy: SAVINGS.key
      }

    // case SORT_BY_USED:
    //   if (state.sortBy === 'used') return state;
    //   return {
    //     ...state,
    //     sortBy: USED.key
    //   }
    //
    // case SORT_BY_EXPIRED:
    //   if (state.sortBy === 'expired') return state;
    //   return {
    //     ...state,
    //     sortBy: EXPIRED.key
    //   }
    //
    // case SORT_BY_ACTIVATED:
    //   if (state.sortBy === 'activated') return state;
    //   return {
    //     ...state,
    //     sortBy: ACTIVATED.key
    //   }

    default:
      return state;
  }
}
