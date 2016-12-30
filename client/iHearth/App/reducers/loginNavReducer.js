import { PUSH_ROUTE, POP_ROUTE } from '../constants/ActionTypes';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialState = {
  index: 0,
  key: 'loginRoot',
  routes: [
    {
      key: 'login',
      title: 'LoginView'
    }
  ]
}

// Export and define navReducer
export default function loginNavState(state = initialState, action) {
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

      // If only route on cardStack is { key: 'list', title: 'listView' } 
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