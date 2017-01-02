import { PUSH_ROUTE, POP_ROUTE } from '../../constants/ActionTypes';
import { NavigationExperimental } from 'react-native';
const {
  // Allows you to call basic routing methods
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

// Define initial state for navigator
// Used to direct _renderScene in NavRoot.js
const initialState = {
  index: 0,
  key: 'root',
  routes: [
    {
      key: 'list',
      title: 'ListView'
    }
  ]
}

// Export and define navReducer
export default function navState(state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE:
      // Return same state if trying to push same route
      if (state.routes[state.index].key === (action.route && action.route.key)) {
        return state;
      }
      // Otherwise push route into state routes and update
      // Same as doing:
      // return {
      //   ...state,
      //   routes: [
      //     ...routes,
      //     action.route
      //   ],
      //   index: index + 1
      // }
      return NavigationStateUtils.push(state, action.route);

    case POP_ROUTE:
      // Return same state if nothing to pop
      if (state.index === 0 || state.routes.length === 1) {
        return state;
      }
      // Otherwise pop off top route and update
      return NavigationStateUtils.pop(state);

    default:
      return state;
  }
}