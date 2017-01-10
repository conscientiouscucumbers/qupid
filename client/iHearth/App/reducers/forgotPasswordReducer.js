import {
  REQUEST_PASSWORDINFO,
  RECEIVE_PASSWORDINFO,
  RECEIVE_FAILED_PASSWORDINFO
} from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  userInfo: []
}

export default function listState(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PASSWORDINFO:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_PASSWORDINFO:
      return {
        ...state,
        isFetching: false,
        userInfo: action.userInfo,
      }

    case RECEIVE_FAILED_PASSWORDINFO:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}