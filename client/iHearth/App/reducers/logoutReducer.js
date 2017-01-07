import { REQUEST_AUTH, RECEIVE_AUTH } from '../constants/ActionTypes';

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

    default:
      return state;
  }
}
