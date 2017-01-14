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
      return state; // 'saving' flag handled by redux-form
    case IS_VALID_SUCCESS:
      const data = [...state.data];
      data[action.result.id - 1] = action.result;
      return {
        ...state,
        data: data,
        saveError: null
      };
    case IS_VALID_FAIL:
      console.log("REDUCER IS_VALID_FAIL CASE");
      return typeof action.error === 'string'
        ? {
          ...state,
          saveError: action.error
        }
        : state;
    default:
      return state;
  }
}

export function isValidCoupon(data) {
  console.log("ISVALIDCOUPON CALLED", data);
  return {
    types: [
      IS_VALID, IS_VALID_SUCCESS, IS_VALID_FAIL
    ],
    promise: (client) => client.post('/newcoupon/isValidNewCoupon', {data})
  };
}
