// Fetch coupons from server
import { REQUEST_POSTS } from '../constants/ActionTypes';

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}