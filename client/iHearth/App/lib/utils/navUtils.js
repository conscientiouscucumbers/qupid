// Pops off top scene
// * Requires: popRoute
// * Include in constructor "this._handleBackAction = _handleBackAction.bind(this, 'navigationProp');"
// Input: (1) string name of navigation prop found in respective container
// Output: Boolean
export function _handleBackAction(navigationProp) {
  if (this.props[navigationProp].index === 0) {
    return false;
  }
  this.props.popRoute();
  return true;
}

// Handles navigation depending on action being passed in (defined in components as route)
// * Requires: pushRoute, _handleBackAction
// * Include in constructor "this._handleNavigate = _handleNavigate.bind(this);"
// Input: Action object in the following form:
// const route = {
//   type: 'push',
//   route: {
//     key: 'coupon',
//     title: 'CouponView'
//   }
// };
// Output: Boolean
export function _handleNavigate(action) {
  switch (action && action.type) {
    case 'push':
      this.props.pushRoute(action.route);
      return true;

    case 'back':

    case 'pop':
      return this._handleBackAction();

    default:
      return false;
  }
}