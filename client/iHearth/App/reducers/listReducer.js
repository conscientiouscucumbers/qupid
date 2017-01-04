import { REQUEST_COUPONS, RECEIVE_COUPONS } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
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

    default:
      return state;
  }
}