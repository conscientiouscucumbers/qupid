import fetch from 'isomorphic-fetch';

// Fetch coupons from server
import { REQUEST_COUPONS, RECEIVE_COUPONS } from '../constants/ActionTypes';

function requestCoupons(subreddit) {
  return {
    type: REQUEST_COUPONS,
    subreddit
  }
}

function receiveCoupons(subreddit, json) {
  return {
    type: RECEIVE_COUPONS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

// Thunk action creator
// Use like other action creators
// store.dispatch(fetchPosts('reactjs'))

function fetchPosts(subreddit) {
  // Pass dispatch method as an argument
  // Allowing the thunk to dispatch actions itself

  return function (dispatch) {
    // First dispatch updates the state to signal the start of the API call
    dispatch(requestCoupons(subreddit));
  }
}