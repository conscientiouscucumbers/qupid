// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch';

import { REQUEST_COUPONS, RECEIVE_COUPONS } from '../constants/ActionTypes';
import { URL } from '../constants/NetworkUrls';

// Will change isFetching state of list to true
function requestCoupons() {
  return {
    type: REQUEST_COUPONS,
  }
}

function receiveCoupons(json) {
  return {
    type: RECEIVE_COUPONS,
    coupons: json,
    receivedAt: Date.now()
  }
}

// Thunk action creator -- allows to pass function as action to further
// customize dispatches, in this case, delay until response is received
// Use like other action creators
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(user_id) {

  // Pass dispatch method as an argument
  // Allowing the thunk to dispatch actions itself

  return dispatch => {

    // First synchronously dispatch updates to signal
    // the start of the API call
    dispatch(requestCoupons());

    return fetch(URL + `user/${ user_id }/coupon`)
      .then(response => response.json())
      .then(json => {

          // Update app state with results of API call
          console.log('JSON FROM SERVER...', json);
          return dispatch(receiveCoupons(json))
        })

      // Catch errors
      .catch((err) => {
        console.error('Error in fetching coupons in listViewActions.js', err.message);
      })
  }
}
