import { REQUEST_USE_COUPON, RECEIVE_USE_COUPON } from '../constants/ActionTypes';
import { URL } from '../constants/NetworkUrls';
import { fetchPosts } from '../actions/listViewActions'
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

export function useCoupon(user_id, coupon_id) {
  
  return dispatch => {
    dispatch(requestUseCoupon());
    var request = new Request(URL + `user/${user_id}/coupon/${coupon_id}`, {
      method: 'PUT', 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    return fetch(request)
      .then(response => response.json())
      .then(json => {
          // Dispatch to update state of listView
          dispatch(fetchPosts(user_id));

          // Dispatch to update QR reducer state
          return dispatch(receiveUseCoupon(json));
        })
      .catch((err) => {
        console.error('Error in updating user coupon in QRCodeViewActions.js', err.message);
      })
  }
}