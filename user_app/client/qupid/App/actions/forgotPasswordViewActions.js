// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch';

import {
  REQUEST_PASSWORDINFO,
  RECEIVE_PASSWORDINFO,
  RECEIVE_FAILED_PASSWORDINFO
} from '../constants/ActionTypes';
import { URL } from '../constants/NetworkUrls';

// Will change isFetching state of list to true
function requestPasswordInfo() {
  return {
    type: REQUEST_PASSWORDINFO,
  }
}

// Receive json and make isFetching false
function receivePasswordInfo(json) {
  return {
    type: RECEIVE_PASSWORDINFO,
    usernameInfo: json // TODO [{email: }]
  }
}

// Make isFetching false
function receiveFailedAuth() {
  return {
    type: RECEIVE_FAILED_PASSWORDINFO,
  }
}

// Thunk action creator -- allows to pass function as action to further
// customize dispatches, in this case, delay until response is received
// Use like other action creators
// store.dispatch(fetchPosts('reactjs'))
export function fetchPasswordInfo(UsernameInfo, callback) {
  console.log(UsernameInfo, 'inside of forgotPasswordViewActions.js')
  // Pass dispatch method as an argument
  // Allowing the thunk to dispatch actions itself

  return dispatch => {
    // First synchronously dispatch updates to signal
    // the start of the API call
    dispatch(requestPasswordInfo());

    var request = new Request(URL + 'user/forgot/' + UsernameInfo, {
      method: 'GET',
      // mode: 'cors',
      // redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),

    });

    console.log(request, 'this is request')

    return fetch(request)
      .then(response => response.json())
      .then(json => {
          // Update app state with results of API call
          if (json.error) {
            return dispatch(receivePasswordInfo());
          }
          dispatch(receivePasswordInfo(json));
          callback(json[0].password);
          return;
        })

      // Catch errors
      .catch((err) => {
        console.error('Error in authorizing login in forgotPasswordViewActions.js', err.message);
      })
  }
}
