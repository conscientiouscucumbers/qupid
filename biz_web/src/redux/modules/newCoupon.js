const IS_VALID = 'redux-example/newCoupon/IS_VALID';
const IS_VALID_SUCCESS = 'redux-example/newCoupon/IS_VALID_SUCCESS';
const IS_VALID_FAIL = 'redux-example/newCoupon/IS_VALID_FAIL';

const initialState = {
  saveError: null
};

export default function reducer(state = initialState, action = {}) {
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
      console.log('DEFAULT CASE');
      return state;
  }
}

export function isValidCoupon(data) {
  console.log('ISVALIDCOUPON CALLED');
  return {
    types: [
      IS_VALID, IS_VALID_SUCCESS, IS_VALID_FAIL
    ],
    promise: (client) => client.post('/newcoupon/isValid', {data})
  };
}
