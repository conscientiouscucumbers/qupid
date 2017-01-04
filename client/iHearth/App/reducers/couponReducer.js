import { REQUEST_SINGLE_COUPON, RECEIVE_SINGLE_COUPON } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  // items: [], // temporary for testing

  // State related to coupons
  couponInfo: {
    id: 1,
    title: 'Keep your body warm and GET $20 OFF!',
    // image:'iHearth/App/lib/img/jacket.jpeg',
    // image:'../lib/img/jacket.jpeg',
    image:'jacket.jpeg',
    item_name: 'MEN’S SKOKIE INSULATED FULL ZIP',
    description: 'For extra coverage during chilly days in the city, layer with this smooth-face fleece jacket that\'s lightly insulated through the core and sleeves.',
    original_price: '$149.00',
    coupon_price: '$129.00',
    coupon_savings: '$20',
    start_at: '2pm',
    end_at: '4pm',
    created_at: '01/02/2017',
    id_business: '001',
    storeName: 'The North Face', // include store name when fetching from server
  }
}

export default function couponReducer(state=initialState, action) {
  switch (action.type){
    case REQUEST_SINGLE_COUPON:
      return {
        ...state,
        isFetching: true
      }
      // Object.assign({}, state, {
      //   isFetching: true
      // })
    case RECEIVE_SINGLE_COUPON:
      return {
        ...state,
        isFetching: false,
        items: action.coupons,
        lastUpdated: action.receivedAt
      }
      // Object.assign({}, state, {
      //   isFetching: false,
      //   items: action.coupons,
      //   lastUpdated: action.receivedAt
      // })
    default:
      return state;
  }
}
