import { REQUEST_COUPONS, RECEIVE_COUPONS } from '../constants/ActionTypes';

const initialState = {
  isFetching: true,
  lastUpdated: 1439478405547,
  data: [
    {
      coupon_id: 1,
      title: '$5 off socks',
      image: '../../assets/img/socks.png',
      item_name: 'Socks',
      original_price: 10,
      coupon_price: 5,
      coupon_savings: 5,
      start_at: 'start_date',
      end_at: 'end_date',
      created_at: 'created_at_date',
    },
    {
      coupon_id: 2,
      title: '$5 off socks',
      image: '../../assets/img/socks.png',
      item_name: 'Socks',
      original_price: 10,
      coupon_price: 5,
      coupon_savings: 5,
      start_at: 'start_date',
      end_at: 'end_date',
      created_at: 'created_at_date',
    },
    {
      coupon_id: 3,
      title: '$5 off socks',
      image: '../../assets/img/socks.png',
      item_name: 'Socks',
      original_price: 10,
      coupon_price: 5,
      coupon_savings: 5,
      start_at: 'start_date',
      end_at: 'end_date',
      created_at: 'created_at_date',
    }
  ]
}

export default function listState(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COUPONS:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_COUPONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.coupons,
        lastUpdated: action.receivedAt
      })

    default:
      return state;
  }
}