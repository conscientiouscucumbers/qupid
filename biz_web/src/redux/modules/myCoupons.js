const FETCH = 'redux-example/mycoupons/FETCH';
const FETCH_SUCCESS = 'redux-example/mycoupons/FETCH_SUCCESS';
const FETCH_FAIL = 'redux-example/mycoupons/FETCH_FAIL';

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH:
      return {
        ...state, // 'saving' flag handled by redux-form
        loading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function retrieveBizCoupons(user) {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: (client) => client.post('/retrieveBizCoupons', {
      data: {
        id: user.business_id,
      }
    })
  };
}
