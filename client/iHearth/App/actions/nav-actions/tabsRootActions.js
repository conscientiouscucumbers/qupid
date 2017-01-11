// Actions to be dispatched to reducers to signify change of nav state
import { CHANGE_TAB, LISTEN_BEACON, BEACON_REQUEST_COUPONS, BEACON_RECEIVE_COUPONS } from '../../constants/ActionTypes';
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

export function fetchBeaconCoupons(user_id, beacon_uuid) {
  return dispatch => {
    dispatch(beaconRequestCoupons());
    return fetch(URL + 'user/' + user_id + '/beacon/' + beacon_uuid)
      .then(response => {
        console.log('this is it!!!!!!222');
        console.log(response);
        if(response.status === 204){
          return null;
        }
        if(response.status === 200){
          console.log('======+GOOOOOD====');
          console.log('response:'+response);
          console.log('respon.title'+response.title);
          console.log('json[0]'+response[0]);
        }
      })
      .then(json => {
        console.log("this is it!!!!!!");
        console.log(json);
        if(json===null){
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