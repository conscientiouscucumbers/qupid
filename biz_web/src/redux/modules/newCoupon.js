const IS_VALID = 'redux-example/newcoupon/IS_VALID';
const IS_VALID_SUCCESS = 'redux-example/newcoupon/IS_VALID_SUCCESS';
const IS_VALID_FAIL = 'redux-example/newcoupon/IS_VALID_FAIL';

const initialState = {
  saveError: null
};

export default function reducer(state = initialState, action = {}) {
  console.log('action send to reducer...', action);
  switch (action.type) {
    case IS_VALID:
      console.log('REDUCER IS_VALID CASE');
      return state; // 'saving' flag handled by redux-form
    case IS_VALID_SUCCESS:
      console.log('REDUCER IS_VALID_SUCCESS CASE');
      const data = [...state.data];
      data[action.result.id - 1] = action.result;
      return {
        ...state,
        data: data,
        saveError: null
      };
    case IS_VALID_FAIL:
      console.log('REDUCER IS_VALID_FAIL CASE');
      return typeof action.error === 'string'
        ? {
          ...state,
          saveError: action.error
        }
        : state;
    default:
      console.log('DEFAULT CASE IN NEWCOUPON');
      return state;
  }
}

export function isValidCoupon(data) {
  console.log('ISVALIDCOUPON CALLED', data);
  return {
    types: [
      IS_VALID, IS_VALID_SUCCESS, IS_VALID_FAIL
    ],
    // data: data
    // promise: (client) => client.post('/newcoupon/isValidNewCoupon', {data})
    promise: (client) => client.post('/newcoupon/isValidNewCoupon', {"title":"$10 off Beard Papas","image":"https://upload.wikimedia.org/wikipedia/commons/6/64/Banana_Peel.JPG","item_name":"Cream Puff","description":"Lorem Ipsum","original_price":5,"coupon_savings":2,"start_at":"2017-05-21 12:00:00","end_at":"2017-05-21 12:00:00"})
  };
}
