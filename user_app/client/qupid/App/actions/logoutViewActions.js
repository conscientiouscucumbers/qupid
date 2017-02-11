// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch';

import { USER_LOGOUT, REQUEST_AUTH, RECEIVE_AUTH } from '../constants/ActionTypes';
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

function resetState() {
  return {
    type: USER_LOGOUT
  }
}

// Thunk action creator -- allows to pass function as action to further
// customize dispatches, in this case, delay until response is received
// Use like other action creators
// store.dispatch(fetchPosts('reactjs'))
export function fetchAuth(logoutInfo, route, callback) {
  // Pass dispatch method as an argument
  // Allowing the thunk to dispatch actions itself

  return dispatch => {
    // First synchronously dispatch updates to signal
    // the start of the API call
    dispatch(requestAuth());

    var request = new Request(URL + 'user/logout', {
      method: 'POST',
      // mode: 'cors',
      // redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(logoutInfo)
    });

    return fetch(request)
      .then(response => response.json())
      .then(json => {
          // Update app state with results of API call
          if (json.error) {
            // TO DO ///////////////////////////////
            return;
          }
          callback(route);
          dispatch(receiveAuth(json));
          
          // Reset all state at rootReducer level
          dispatch(resetState());
          return;
        })

      // Catch errors
      .catch((err) => {
        console.error('Error in authorizing logout in logoutViewActions.js', err.message);
      })
  }
}
