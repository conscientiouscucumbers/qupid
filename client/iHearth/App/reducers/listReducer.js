import { push, pop } from '../constants/ActionTypes';

const initialState = {
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

// TODO: Revise reducer to fetch from server
export default function listState(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}