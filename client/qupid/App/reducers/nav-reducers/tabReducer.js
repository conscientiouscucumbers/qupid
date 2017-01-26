import {
  CHANGE_TAB,
  LISTEN_BEACON,
  BEACON_REQUEST_COUPONS,
  BEACON_RECEIVE_COUPONS,
  REQUEST_USER_INFO_BY_DEVICE,
  RECEIVE_USER_INFO_BY_DEVICE
} from '../../constants/ActionTypes';

const settingsIcon = {
  scale: 2.3,
}

const homeIcon = {
  scale: 2.3,
}

const historyIcon = {
  scale: 2.3,
}

const tabs = [
  { key: 'home', icon: homeIcon, title: 'Home' },
  { key: 'history', icon: historyIcon, title: 'History' },
  { key: 'settings', icon: settingsIcon, title: 'Settings' },
]

const region = {
  identifier: 'Estimotes',
  uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
}

const beacons = {}
// beacons example
// { accuracy: 3.231749966697757,
//   major: 25145,
//   minor: 2589,
//   proximity: "far",
//   rssi: -67,
//   uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D"
// }

const initialState = {
  index: 0,
  tabs,
  region,
  beacons,
  isFetching: false,
  pushedCoupons: []
}

function tabsNav (state = initialState, action) {
  if (action.index === state.index) return state;
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        index: action.index
      }
    case LISTEN_BEACON:
      return {
        ...state,
        beacons: action.beacons
      }
    case BEACON_REQUEST_COUPONS:
      return {
        ...state,
        isFetching: true
      }
    case BEACON_RECEIVE_COUPONS:
      console.log(action);
      return {
        ...state,
        isFetching: false,
        pushedCoupons: action.pushedCoupons
      }
    case REQUEST_USER_INFO_BY_DEVICE:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_USER_INFO_BY_DEVICE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

export default tabsNav;
