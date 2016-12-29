import React, { Component } from 'react';
import ListView from './ListView';
import CouponView from './CouponView';

import {
  // BackAndroid,
  NavigationExperimental
} from 'react-native';

const {
  CardStack: NavigationCardStack
} = NavigationExperimental;

export default class NavRoot extends Component {
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
      case 'list':
        return (
          <ListView _handleNavigate= { this._handleNavigate.bind(this) } />
        )
      case 'coupon':
        return (
          <CouponView _goBack={ this._handleBackAction.bind(this) } />
        )
    }
  }
}