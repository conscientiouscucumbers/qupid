// Actions to be dispatched to reducers to signify change of nav state
import { CHANGE_TAB,
       } from '../../constants/ActionTypes';

export function changeTab(index) {
  return {
    type: CHANGE_TAB,
    index
  }
};