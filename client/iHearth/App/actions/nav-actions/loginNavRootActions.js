// Actions to be dispatched to reducers to signify change of nav state
import { AUTH_PUSH_ROUTE,
         AUTH_POP_ROUTE,
       } from '../../constants/ActionTypes';

export function authPush(route) {
  return {
    type: AUTH_PUSH_ROUTE,
    route
  }
};

export function authPop(route) {
  return {
    type: AUTH_POP_ROUTE,
    route
  }
};