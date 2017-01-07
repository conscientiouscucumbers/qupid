import React, { Component } from 'react';
import LoginViewContainer from '../../containers/LoginViewContainer';
import SignupViewContainer from '../../containers/SignupViewContainer';
import Home from '../../containers/nav-containers/TabsRootContainer.js';
import {
  // BackAndroid,
  NavigationExperimental
} from 'react-native';
const {
  CardStack: NavigationCardStack
} = NavigationExperimental;
import {
  _handleBackAction,
  _handleNavigate
} from '../../lib/utils/navUtils';
import DeviceInfo from 'react-native-device-info';

// Use this route once authorized
const authRoute = {
  type: 'push',
  route: {
    key: 'list',
    title: 'ListView'
  }
};

export default class LoginNavRoot extends Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleBackAction = _handleBackAction.bind(this, 'loginNavigation');
    this._handleNavigate = _handleNavigate.bind(this);
  }

  componentWillMount(){
    this.props.fetchUserInfoByDevice(authRoute, this._handleNavigate);
    console.log('PROPS HERE....', this.props);
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
          <LoginViewContainer _handleNavigate= { this._handleNavigate } />
        )
      case 'signup':
        return (
          <SignupViewContainer _handleNavigate= { this._handleNavigate } _goBack={ this._handleBackAction } />
        )
      case 'list':
        return (
          <Home />
        )
    }
  }

  render() {
    return (
      <NavigationCardStack
      direction='horizontal'
      navigationState={ this.props.loginNavigation }
      onNavigate={ this._handleNavigate }
      renderScene={ this._renderScene } />
    )
  }
}
