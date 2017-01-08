// Actions to be dispatched to reducers to signify change of nav state
import { CHANGE_TAB, LISTEN_BEACON } from '../../constants/ActionTypes';

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