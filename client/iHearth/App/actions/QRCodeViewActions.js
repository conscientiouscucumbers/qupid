import { REQUEST_USE_COUPON, RECEIVE_USE_COUPON } from '../constants/ActionTypes';
import { URL } from '../constants/NetworkUrls';

// Will change isFetching state of list to true
function requestUseCoupon() {
  return {
    type: REQUEST_USE_COUPON,
  }
}

function receiveUseCoupon(json) {
  return {
    type: RECEIVE_USE_COUPON,
    couponInfo: json.couponInfo
  }
}

export function useAuth() {
  
  return dispatch => {
    dispatch(requestUseCoupon());
    var request = new Request(URL + 'user/1/coupon/1', {
      method: 'PUT', 
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({})
    });

    return fetch(request)
      .then(response => response.json())
      .then(json => {
          return dispatch(receiveUseCoupon(json));
        })
      .catch((err) => {
        console.error('Error in authorizing login in loginViewActions.js', err.message);
      })
  }
}