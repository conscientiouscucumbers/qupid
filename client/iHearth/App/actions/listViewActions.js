import fetch from 'isomorphic-fetch';

// Fetch coupons from server
import { REQUEST_COUPONS, RECEIVE_COUPONS } from '../constants/ActionTypes';

function requestPosts(subreddit) {
  return {
    type: REQUEST_COUPONS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
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

