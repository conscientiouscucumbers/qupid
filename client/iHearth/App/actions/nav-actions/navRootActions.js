// Actions to be dispatched to reducers to signify change of nav state
import { POP_ROUTE,
         PUSH_ROUTE
       } from '../../constants/ActionTypes';

export function push(route) {
  return {
    type: PUSH_ROUTE,
    route
  }
};

export function pop(route) {
  return {
    type: POP_ROUTE,
    route
  }
};

// Thunk action creator -- allows to pass function as action to further
// customize dispatches, in this case, delay until response is received
// Use like other action creators
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts() {

  // Pass dispatch method as an argument
  // Allowing the thunk to dispatch actions itself

  return dispatch => {

    // First synchronously dispatch updates to signal
    // the start of the API call
    dispatch(requestCoupons());

    return fetch(URL + 'coupon')
      .then(response => response.json())
      .then(json => {

          // Update app state with results of API call
          return dispatch(receiveCoupons(json))
        })

      // Catch errors
      .catch((err) => {
        console.error('Error in fetching coupons in listViewActions.js', err.message);
      })
  }
}
