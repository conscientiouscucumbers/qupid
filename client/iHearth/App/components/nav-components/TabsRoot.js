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
  }
  _changeTab(i) {
    const { changeTab } = this.props;
    changeTab(i);
  }

  _listenBeacon(beacons) {
    const { listenBeacon } = this.props;
    listenBeacon(beacons);
  }

  _renderTabContent(key) {
    switch (key) {
      case 'home':
        return <Home />
      case 'settings':
        return <Settings _handleNavigate={ this._handleNavigate } _goBack={ this._handleBackAction} />
    }
  }

  componentDidMount() {
    Beacons.requestWhenInUseAuthorization();
    Beacons.startRangingBeaconsInRegion(this.props.region);
    Beacons.startUpdatingLocation();
    DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        if(data['beacons'].length!==0){
          if(data['beacons'][0]['proximity'] === 'far' || data['beacons'][0]['proximity'] === 'near'){
            this._listenBeacon(data['beacons'][0]);
            Beacons.stopUpdatingLocation(); // doesn't seem like it's working.. but it's okay for now.
          }
        }
      }
    );
  }

  render() {
    const tabs = this.props.tabs.map((tab, i) => {
      return (
        <TabBarIOS.Item key={ tab.key }
          icon={ tab.icon }
          selectedIcon={ tab.selectedIcon }
          title={ tab.title }
          onPress={ () => this._changeTab(i) }
          selected={ this.props.index === i } >
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
