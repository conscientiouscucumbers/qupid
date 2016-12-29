import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import configureStore from './App/store/configureStore';
const store = configureStore();

import NavRootContainer from './App/containers/NavRootContainer';
import { Provider } from 'react-redux';

const iHearth = () => (
  <Provider store={ store }>
    <NavRootContainer />
  </Provider>
)

AppRegistry.registerComponent('iHearth', () => iHearth);