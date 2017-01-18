// Actions to be dispatched to reducers to signify change of nav state
import {
  CHANGE_TAB,
  LISTEN_BEACON,
  BEACON_REQUEST_COUPONS,
  BEACON_RECEIVE_COUPONS,
  REQUEST_USER_INFO_BY_DEVICE,
  RECEIVE_USER_INFO_BY_DEVICE
} from '../../constants/ActionTypes';
import { URL } from '../../constants/NetworkUrls';

export function changeTab(index) {
  return {
    type: CHANGE_TAB,
    index
  }
};

export function listenBeacon(beacons) {
  return {
    type: LISTEN_BEACON,
    beacons
  }
};

export function beaconRequestCoupons() {
  console.log('requesting coupons from beacon');
  return {
    type: BEACON_REQUEST_COUPONS
  }
};

export function beaconReceiveCoupons(json) {
  console.log('receiving coupons from beacon');
  console.log(json);
  return {
    type: BEACON_RECEIVE_COUPONS,
    pushedCoupons: json // array of obj. but unsure.. json[0] maybe?
  }
}

function requestUserInfoByDevice() {
  return {
    type: REQUEST_USER_INFO_BY_DEVICE
  }
}

function receiveUserInfoByDevice() {
  return {
    type: RECEIVE_USER_INFO_BY_DEVICE
  }
}

export function fetchBeaconCoupons(user_id, beacon_uuid) {
  return dispatch => {
    dispatch(beaconRequestCoupons());
    return fetch(URL + 'user/' + user_id + '/beacon/' + beacon_uuid)
      .then(response => response.json())
      .then(json => {
        if(json === null){
          console.log('json has error in fetchBeaconCoupons');
          return;
        }
        return dispatch(beaconReceiveCoupons(json))
      })
      .catch((err) => {
        console.error('Error in fetching coupons from beacon in tabsRootActions.js' + err.message);
      });
  }
}

// Thunk action creator -- allows to pass function as action to further
// customize dispatches, in this case, delay until response is received
// Use like other action creators
// store.dispatch(fetchPosts('reactjs'))
export function fetchUserInfoByDevice(route, callback) {

  // Pass dispatch method as an argument
  // Allowing the thunk to dispatch actions itself

  return dispatch => {

    // First synchronously dispatch updates to signal
    // the start of the API call
    dispatch(requestUserInfoByDevice());
    return fetch(URL + 'user/device_id/' + DeviceInfo.getUniqueID())
      .then(response => response.json())
      .then(json => {

          // Change isFetching to false
          dispatch(receiveUserInfoByDevice());

          // if no error then navigate to home page
          if (json.error) {
            console.log('error found in json from fetchUserInfoByDevice')
            return;
          } else {
            // On success dispatch to set loginView state if automatically signed in
            console.log('inside fetchUserInfoByDevice');
            console.log(json);
            console.log(json[0]);
            dispatch(receiveAuth(json[0]));
            // Navigate automatically to tabsroot
            callback(route);
            return;
          }
        })
      // Catch errors
      .catch((err) => {
        console.error('Error in fetching user info by device in loginNavRootActions.js', err.message);
      })
  }
}
