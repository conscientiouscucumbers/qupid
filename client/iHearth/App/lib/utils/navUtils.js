// Pops off top scene
// * Needs popRoute to be defined in props 
// Input: (1) string name of navigation prop found in respective container
// Output: Boolean
export function _handleBackAction(navigationProp) {
  if (this.props[navigationProp].index === 0) {
    return false;
  }
  this.props.popRoute();
  return true;
}