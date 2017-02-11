// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch';

import { REQUEST_NEWUSER, RECEIVE_NEWUSER } from '../constants/ActionTypes';
import { URL } from '../constants/NetworkUrls';

// Will change isFetching state of list to true
function requestNewUser() {
  return {
    type: REQUEST_NEWUSER,
  }
}

function receiveNewUser(json) {
  return {
    type: RECEIVE_NEWUSER,
    newUserInfo: json // TODO [{email: }]
  }
}

// Thunk action creator -- allows to pass function as action to further
// customize dispatches, in this case, delay until response is received
// Use like other action creators
// store.dispatch(fetchPosts('reactjs'))
export function fetchNewUser(newUserInfo, route, callback) {
  // Pass dispatch method as an argument
  // Allowing the thunk to dispatch actions itself

  return dispatch => {
    // First synchronously dispatch updates to signal
    // the start of the API call
    dispatch(requestNewUser());

    var request = new Request(URL + 'user/signup', {
      method: 'POST',
      // mode: 'cors',
      // redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(newUserInfo)
    });

    return fetch(request)
      .then(response => response.json())
      .then(json => {
          // Update app state with results of API call
          callback(route);
          return dispatch(receiveNewUser(json))
        })

      // Catch errors
      .catch((err) => {
        console.error('Error in authorizing signup in signupViewActions.js', err.message);
      })
  }
}
