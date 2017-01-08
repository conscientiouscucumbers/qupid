import { REQUEST_SINGLE_COUPON, RECEIVE_SINGLE_COUPON } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  // items: [], // temporary for testing

  // State related to coupons
  couponInfo: {
    id: 1,
    title: '',
    // image:'iHearth/App/lib/img/jacket.jpeg',
    // image:'../lib/img/jacket.jpeg',
    image:'null',
    item_name: '',
    description: '',
    original_price: '',
    coupon_price: '',
    coupon_savings: '',
    start_at: '',
    end_at: '',
    created_at: '',
    id_business: '',
    storeName: '', // include store name when fetching from server
  }
}

export default function couponReducer(state=initialState, action) {
  switch (action.type){
    case REQUEST_SINGLE_COUPON:
      console.log('calling couponReducer')
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_SINGLE_COUPON:
      return {
        ...state,
        isFetching: false,
        couponInfo: action.couponInfo
        // items: action.coupons,
        // lastUpdated: action.receivedAt
      }
    default:
      return state;
  }
}
