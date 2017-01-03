import { GET_COUPON_INFO } from '../constants/ActionTypes';

const initialState = {
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

const couponReducer = (state=initialState, action) => {
  switch (action.type){
    case GET_COUPON_INFO:
      return {
        ...state,
        couponInfo: action.couponInfo
      }
    default:
      return state;
  }
}

export default couponReducer;