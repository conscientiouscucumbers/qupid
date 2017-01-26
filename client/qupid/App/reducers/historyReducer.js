import {
  HISTORY_REQUEST_COUPONS,
  HISTORY_RECEIVE_COUPONS,
  SORT_BY_DATE,
  SORT_BY_TIME_LEFT,
  SORT_BY_SAVINGS,

} from '../constants/ActionTypes';
import {
  DATE,
  TIME_LEFT,
  SAVINGS,
} from '../constants/SortByOptions';

const initialState = {
  isFetching: false,
  sortBy: 'date',
  items: []
}

export default function historyState(state = initialState, action) {
  switch (action.type) {
    case HISTORY_REQUEST_COUPONS:
      return {
        ...state,
        isFetching: true
      }

    case HISTORY_RECEIVE_COUPONS:
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

    default:
      return state;
  }
}
