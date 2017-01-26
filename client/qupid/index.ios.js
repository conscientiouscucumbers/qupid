import 'babel-polyfill';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import configureStore from './App/store/configureStore';
const store = configureStore();

import LoginNavRootContainer from './App/containers/nav-containers/LoginNavRootContainer'
import TabsRootContainer from './App/containers/nav-containers/TabsRootContainer'
import { Provider } from 'react-redux';

console.disableYellowBox = true;

const qupid = () => (
  <Provider store={ store }>
    <LoginNavRootContainer />
  </Provider>
)

AppRegistry.registerComponent('qupid', () => qupid);
