import { REQUEST_USE_COUPON, RECEIVE_USE_COUPON } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  coupon: []
}

export default function QRState(state = initialState, action) {
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
        coupon: action.coupons,
        lastUpdated: action.receivedAt
      }

    default:
      return state;
  }
}