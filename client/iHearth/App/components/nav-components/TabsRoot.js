import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import Home from '../../containers/nav-containers/NavRootContainer';
import Settings from '../../components/Settings';

// BeaconListener
import Beacons from 'react-native-ibeacon';
import { DeviceEventEmitter } from 'react-native';

class Tabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      beacons: []
    };
  }
  componentDidMount() {
    const region = {
      identifier: 'Estimotes',
      uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
    };
    Beacons.requestWhenInUseAuthorization();
    Beacons.startRangingBeaconsInRegion(region);
    Beacons.startUpdatingLocation();
    DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        // console.log(data);
        if(data['beacons'].length!==0){

          console.log(data['beacons'][0]['proximity']);
          if(data['beacons'][0]['proximity'] === 'far' || data['beacons'][0]['proximity'] === 'near'){
            console.log('got you!');
            Beacons.stopUpdatingLocation(); // doesn't seem like it's working.. but it's okay for now.
          }
        }
      }
    );
  }

  _changeTab(i) {
    const { changeTab } = this.props;
    changeTab(i);
  }

  _renderTabContent(key) {
    switch (key) {
      case 'home':
        return <Home />
      case 'settings':
        return <Settings _handleNavigate={ this._handleNavigate } _goBack={ this._handleBackAction} />
    }
  }

  render() {
    const tabs = this.props.tabs.tabs.map((tab, i) => {
      return (
        <TabBarIOS.Item key={ tab.key }
          icon={ tab.icon }
          selectedIcon={ tab.selectedIcon }
          title={ tab.title }
          onPress={ () => this._changeTab(i) }
          selected={ this.props.tabs.index === i } >
          { this._renderTabContent(tab.key) }
        </TabBarIOS.Item>
      )
    })
    return (
      <TabBarIOS tintColor='black'>
        {tabs}
      </TabBarIOS>
    )
  }
}

export default Tabs;
