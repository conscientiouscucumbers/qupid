import React, { Component } from 'react';
import LoginView from '../LoginView';
import SignupView from '../SignupView';
import Home from '../../containers/TabsRootContainer.js';

import {
  // BackAndroid,
  NavigationExperimental
} from 'react-native';

const {
  CardStack: NavigationCardStack
} = NavigationExperimental;

export default class LoginNavRoot extends Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleBackAction = this._handleBackAction.bind(this);
  }

  componentDidMount(){
    // Add BackAndroid listener
  }

  componentWillUnmount(){
    // Remove BackAndroid listener 
  }

  _renderScene(props) {
    const { route } = props.scene;
    switch (route.key) {
      case 'login':
        return (
          <LoginView _handleNavigate= { this._handleNavigate.bind(this) } />
        )
      case 'signup':
        return (
          <SignupView _goBack={ this._handleBackAction.bind(this) } />
        )
      case 'home':
        return (
          <Home />
        )
    }
  }

  _handleBackAction() {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  }

  _handleNavigate(action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route);
        return true;

      case 'back':

      case 'pop':
        return this._handleBackAction();

      default:
        return false;
    }
  }

  render() {
    return (
      <NavigationCardStack
      direction='horizontal'
      navigationState={ this.props.navigation } // set as navReducer
      onNavigate={ this._handleNavigate.bind(this) }
      renderScene={ this._renderScene } />
    )
  } 
}