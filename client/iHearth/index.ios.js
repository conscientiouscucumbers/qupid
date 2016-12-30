import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import configureStore from './App/store/configureStore';
const store = configureStore();

// import NavRootContainer from './App/containers/NavRootContainer';
import LoginNavRootContainer from './App/containers/LoginNavRootContainer'
import { Provider } from 'react-redux';
// <NavRootContainer />
const iHearth = () => (
  <Provider store={ store }>
    <LoginNavRootContainer />
  </Provider>
)

AppRegistry.registerComponent('iHearth', () => iHearth);