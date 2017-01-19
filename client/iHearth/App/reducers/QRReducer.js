import { REQUEST_USE_COUPON, RECEIVE_USE_COUPON, CLEAR_QR_STATE } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  coupons: [],
  QRCode: [],
  used: null,
}

export default function QRState(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USE_COUPON:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_USE_COUPON:
      return {
        ...state,
        isFetching: false,
        coupon: action.coupons,
        QRCode: action.QRCode,
        used: action.used,
      }

    case CLEAR_QR_STATE:
      console.log('CALLING CLEAR QR STATE!!!!!!!!!!!!!!!!!!!!!!!!!')
      return {
        ...state,
        isFetching: false,
        coupons: [],
        QRCode: [],
        used: null,
      }

    default:
      return state;
  }
}
