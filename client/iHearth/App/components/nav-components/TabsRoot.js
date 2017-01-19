import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import Home from '../../containers/nav-containers/NavRootContainer';
import Settings from '../../components/Settings';
import History from '../../containers/HistoryViewContainer';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        return <Home _handleNavigate={ this._handleNavigate } _goBack={ this._handleBackAction} />
      case 'history':
        return <History _handleNavigate={ this._handleNavigate } _goBack={ this._handleBackAction} />
      case 'settings':
        return <Settings _handleNavigate={ this._handleNavigate } _goBack={ this._handleBackAction} />
    }
  }

  componentWillMount() {
    this.user_id = this.props.userInfo.user_id;
  }

  componentDidMount() {
    // Mimic beacon signal
    // setInterval(() => {
      // this.props.fetchBeaconCoupons(1, 'UUID1');
    // }, 5000);

    // Real Beacon signal
    // Beacons.requestWhenInUseAuthorization();
    Beacons.requestAlwaysAuthorization();
    console.log('beacon signal ongoing');
    Beacons.startRangingBeaconsInRegion(this.props.region);
    Beacons.startUpdatingLocation();
    Beacons.shouldDropEmptyRanges(true);
    console.log('beacon trying to work');
    DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        console.log('beacon works');
        if(data['beacons'].length !==0 ){
          if(data['beacons'][0]['proximity'] === 'far' || data['beacons'][0]['proximity'] === 'near'){
            this._listenBeacon(data['beacons'][0]);
            this.props.fetchBeaconCoupons(this.user_id, 'UUID3');
            Beacons.stopUpdatingLocation(); // doesn't seem like it's working.. but it's okay for now.
          }
        }
      }
    );
  }

  render() {

    const icons = ["heartbeat", "qrcode", "cart-arrow-down"];
    const tabs = this.props.tabs.map((tab, i) => {
      return (
        <Icon.TabBarItem key={ tab.key }
          iconName={ icons[i] }
          selectedIconName={ icons[i] }
          title={ tab.title }
          onPress={ () => this._changeTab(i) }
          selected={ this.props.index === i } >
          { this._renderTabContent(tab.key) }
        </Icon.TabBarItem>
      )
    })
    return (
      <TabBarIOS tintColor='#FF3F4E' barTintColor='#ffffff'>
        {tabs}
      </TabBarIOS>
    )
  }
}

export default Tabs;
