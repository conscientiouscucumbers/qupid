// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch';

// Fetch coupons from server
import { REQUEST_COUPONS, RECEIVE_COUPONS } from '../constants/ActionTypes';
import { URL } from '../constants/NetworkUrls';

// Will change isFetching state of list to true (activate spinner)
function requestCoupons() {
  return {
    type: REQUEST_COUPONS,
  }
}

function receiveCoupons(json) {
  return {
    type: RECEIVE_COUPONS,
    coupons: json.coupons,
    receivedAt: Date.now()
  }
}

// Thunk action creator -- allows to pass function as action to further
// customize dispatches, in this case, delay until response is received
// Use like other action creators
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(subreddit) {
  
  // Pass dispatch method as an argument
  // Allowing the thunk to dispatch actions itself

  return dispatch => {
    
    // First dispatch updates the state to signal the start of the API call
    dispatch(requestCoupons());

    return fetch(URL + 'coupon')
      .then(response => response.json())
      .then(json => {

          console.log('RECEIVED JSON', json);
          // Update app state with results of API call
          return dispatch(receiveCoupons(json))
        }) 

      .catch((err) => {
        console.error('Error in fetching coupons in listViewActions.js', err.message);
      })
  }
}