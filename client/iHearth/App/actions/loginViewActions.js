// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch';

import { REQUEST_AUTH, RECEIVE_AUTH } from '../constants/ActionTypes';
import { URL } from '../constants/NetworkUrls';

// Will change isFetching state of list to true
function requestAuth() {
  return {
    type: REQUEST_AUTH,
  }
}

function receiveAuth(json) {
  return {
    type: RECEIVE_AUTH,
    userInfo: json // TODO [{email: }]
  }
}

// Thunk action creator -- allows to pass function as action to further
// customize dispatches, in this case, delay until response is received
// Use like other action creators
// store.dispatch(fetchPosts('reactjs'))
export function fetchAuth(route, callback) {
  console.log('HERE IN FETCHAUTH')
  // Pass dispatch method as an argument
  // Allowing the thunk to dispatch actions itself

  callback(route); // TO DO//////////////////////////
  
  return dispatch => {

    // First synchronously dispatch updates to signal
    // the start of the API call
    dispatch(requestAuth());

    return fetch(URL + '/user/login')
      .then(response => response.json())
      .then(json => {

          // Update app state with results of API call
          return dispatch(receiveAuth(json))
        })

      // Catch errors
      .catch((err) => {
        console.error('Error in authorizing login in loginViewActions.js', err.message);
      })
  }
}