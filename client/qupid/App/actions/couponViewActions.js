import { REQUEST_SINGLE_COUPON, RECEIVE_SINGLE_COUPON } from '../constants/ActionTypes';
import { URL } from '../constants/NetworkUrls';

// Will change isFetching state of list to true
function requestSingleCoupon() {
  return {
    type: REQUEST_SINGLE_COUPON,
  }
}

function receiveSingleCoupon(json) {
  return {
    type: RECEIVE_SINGLE_COUPON,
    couponInfo: json.couponInfo[0]
  }
}

// Thunk action creator -- allows to pass function as action to further
// customize dispatches, in this case, delay until response is received
// Use like other action creators
// store.dispatch(fetchPosts('reactjs'))
export function fetchCoupon(coupon_id) {

  // Pass dispatch method as an argument
  // Allowing the thunk to dispatch actions itself

  return dispatch => {

    // First synchronously dispatch updates to signal
    // the start of the API call
    dispatch(requestSingleCoupon());

    return fetch(URL + 'coupon/' + coupon_id)
      .then(response => response.json())
      .then(json => {
          // Update app state with results of API call
          return dispatch(receiveSingleCoupon(json))
        })

      // Catch errors
      .catch((err) => {
        console.error('Error in fetching single coupon in couponViewActions.js', err.message);
      })
  }
}
