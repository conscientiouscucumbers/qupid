import { REQUEST_NEWUSER, RECEIVE_NEWUSER } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  userInfo: []
}

export default function listState(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NEWUSER:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_NEWUSER:
      return {
        ...state,
        isFetching: false,
        userInfo: action.userInfo,
      }

    default:
      return state;
  }
}