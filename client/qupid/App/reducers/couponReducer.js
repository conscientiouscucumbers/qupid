import { REQUEST_SINGLE_COUPON, RECEIVE_SINGLE_COUPON } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,

  // State related to coupons
  couponInfo: {
    id: 1,
    title: '',
    image:'null',
    item_name: '',
    description: '',
    original_price: '',
    coupon_price: '',
    coupon_savings: '',
    start_at: '',
    end_at: '',
    created_at: '',
    business_id: '',
    company_name: ''
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
      }
    default:
      return state;
  }
}
