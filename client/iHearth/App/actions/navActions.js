import { POP_ROUTE, PUSH_ROUTE, CHANGE_TAB } from '../constants/ActionTypes';

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

export function changeTab(index) {
  return {
    type: CHANGE_TAB,
    index
  }
};

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