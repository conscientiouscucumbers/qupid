import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import configureStore from './App/store/configureStore';
const store = configureStore();

// import NavRootContainer from './App/containers/NavRootContainer';
import TabsRootContainer from './App/containers/TabsRootContainer'
import { Provider } from 'react-redux';
// <NavRootContainer />
const iHearth = () => (
  <Provider store={ store }>
    <TabsRootContainer />
  </Provider>
)

AppRegistry.registerComponent('iHearth', () => iHearth);