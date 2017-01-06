import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware
    )
  );

  // Module for hot reloading
  // if(module.hot) {
  //   module.hot.accept{( => {
  //     const nextRootReducer = require('../reducers/index').default;
  //     store.replaceReducer(nextRootReducer);
  //   })}
  // }
  return store;
}