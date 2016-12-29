import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import configureStore from './app/store/configureStore';
const store = configureStore();

import NavRootContainer from './app/containers/NavRootContainer';
import { Provider } from 'react-redux';

const iHearth = () => (
  <Provider store={ store }>
    <NavRootContainer />
  </Provider>
)

AppRegistry.registerComponent('iHearth', () => iHearth);