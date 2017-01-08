import {
  REQUEST_AUTH,
  RECEIVE_AUTH,
  RECEIVE_FAILED_AUTH
} from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  userInfo: []
}

export default function listState(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_AUTH:
      return {
        ...state,
        isFetching: false,
        userInfo: action.userInfo,
      }

    case RECEIVE_FAILED_AUTH:
      return {
        ...state,
        isFetching: false
      }

    default:
      return state;
  }
}