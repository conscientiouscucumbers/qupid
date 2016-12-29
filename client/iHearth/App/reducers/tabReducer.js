import { CHANGE_TAB } from '../constants/ActionTypes';

const settingsIcon = {
  scale: 2.3,
}

const homeIcon = {
  scale: 2.3,
}

const tabs = [
  { key: 'home', icon: homeIcon, title: 'HOME' },
  { key: 'settings', icon: settingsIcon, title: 'SETTINGS' }
]

const initialState = {
  index: 0,
  tabs
}

function tabsNav (state =  initialState, action) {
  if(action.index === state.index) return state;
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        index: action.index
      }
    default:
      return state;
  }
}

export default tabsNav;