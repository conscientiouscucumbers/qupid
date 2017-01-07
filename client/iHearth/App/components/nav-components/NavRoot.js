import React, { Component } from 'react';
import HomeView from '../HomeView';
import CouponView from '../CouponView';
import QRViewContainer from '../../containers/QRViewContainer';
// import CouponViewContainer from '../../containers/CouponViewContainer';
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

export default class NavRoot extends Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleBackAction = _handleBackAction.bind(this, 'navigation');
    this._handleNavigate = _handleNavigate.bind(this);
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
      case 'list':
        return (
          <HomeView _handleNavigate= { this._handleNavigate } />
        )
      case 'coupon':
        return (
          <CouponView _handleNavigate= { this._handleNavigate } _goBack={ this._handleBackAction } />
        )
      case 'QR':
        return (
          <QRViewContainer _goBack={ this._handleBackAction } />
        )
    }
  }

  render() {
    return (
      <NavigationCardStack
      direction='horizontal'
      navigationState={ this.props.navigation } // set as navReducer
      onNavigate={ this._handleNavigate }
      renderScene={ this._renderScene } />
    )
  }
}