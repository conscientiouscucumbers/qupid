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