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

  return store;
}