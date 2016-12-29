import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import configureStore from './App/store/configureStore';
const store = configureStore();

import NavRootContainer from './App/containers/NavRootContainer';
import tabsRootContainer from './App/containers/tabsRootContainer'
import { Provider } from 'react-redux';
// <NavRootContainer />
const iHearth = () => (
  <Provider store={ store }>

    <tabsRootContainer />
  </Provider>
)

AppRegistry.registerComponent('iHearth', () => iHearth);