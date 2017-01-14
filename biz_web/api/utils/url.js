export function mapUrl(availableActions = {}, url = []) {
  const notFound = {action: null, params: []};

  // test for empty input
  if (url.length === 0 || Object.keys(availableActions).length === 0) {
    return notFound;
  }

  console.log('AVAILABLE ACTIONS....', url, availableActions);
  // url = ['newcoupon', isValidNewCoupon]
  // availableActions = { loadInfo: }

  /*eslint-disable */
  const reducer = (prev, current) => {
    if (prev.action && prev.action[current]) {
      // console.log('PREV ACTIONS....', prev.action); // gives all actions
      // console.log('PREV.ACTION[CURRENT]....', prev.action[current]);
      return {action: prev.action[current], params: []}; // go deeper
    } else {
      if (typeof prev.action === 'function') {
        console.log('PARAMS', prev.params.concat(current));
        return {action: prev.action, params: prev.params.concat(current)}; // params are found
      } else {
        return notFound;
      }
    }
  };
  /*eslint-enable */

  const actionAndParams = url.reduce(reducer, {action: availableActions, params: []});

  return (typeof actionAndParams.action === 'function') ? actionAndParams : notFound;
}
