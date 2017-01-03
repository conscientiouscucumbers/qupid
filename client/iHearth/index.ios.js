import 'babel-polyfill';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import configureStore from './App/store/configureStore';
const store = configureStore();

import LoginNavRootContainer from './App/containers/nav-containers/LoginNavRootContainer'
import TabsRootContainer from './App/containers/nav-containers/TabsRootContainer'
import { Provider } from 'react-redux';

////////////////////////////////////////////////////////////
// TO REFACTOR OUT
import { fetchPosts } from './App/actions/listViewActions';
////////////////////////////////////////////////////////////

const iHearth = () => (
  <Provider store={ store }>
    <LoginNavRootContainer />
  </Provider>
)

store.dispatch(fetchPosts())
.then(() => 
  console.log('STORE STATE', store.getState())
)

AppRegistry.registerComponent('iHearth', () => iHearth);