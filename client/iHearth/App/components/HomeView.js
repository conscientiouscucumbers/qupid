// import React from 'react';
// import {
//   View,
//   Text
// } from 'react-native'
// import ListViewContainer from '../containers/ListViewContainer';
// import styles from './../styles';
// import {
//   Container,
//   Header,
//   Title,
//   Content,
// } from 'native-base';
//
// const HomeView = ({ _handleNavigate }) => (
//   <Container>
//     <Header>
//       <Text>iHearth</Text>
//     </Header>
//     <Content>
//       <Text style={ styles.title }>Coupons</Text>
//       <ListViewContainer _handleNavigate={ _handleNavigate } />
//     </Content>
//   </Container>
// );
//
// export default HomeView;

// <View style={ styles.container }>
//   <Text style={ styles.title }>HomeView</Text>
//   <ListViewContainer _handleNavigate={ _handleNavigate } />
// </View>

// .............................................................

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, DeviceEventEmitter } from 'react-native';
import Beacons from 'react-native-ibeacon';
import ListViewContainer from '../containers/ListViewContainer';
import styles from './../styles';
import { Container, Header, Title, Content } from 'native-base';

Beacons.requestWhenInUseAuthorization();

var region = {
  identifier: 'Estimotes',
  uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
  major: 49607,
  minor: 30744
};

Beacons.startRangingBeaconsInRegion(region);

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beacons: []
    };
  }

  componentDidMount() {
    DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        this.setState({
          beacons: data.beacons.filter(item => item.rssi < 0).map(item => item.rssi)
        });
      }
    );
  }

  render() {
    var beacons = this.state.beacons.map(function(strength, index) {
      var beaconPosition = {
        marginTop: Math.pow(strength, 3) / (Math.pow(-100, 3) / 250)
      };
      return <View key={index} style={[stylesBeacon.beacon, beaconPosition]} />
    }, this);

    return (
      <Container>
        <Header>
          <Text>iHearth</Text>
        </Header>
        {beacons}
        <Content>
          <Text style={ styles.title }>Coupons</Text>
          <ListViewContainer _handleNavigate={ this.props._handleNavigate } />
        </Content>
      </Container>
    );
  }
};

var stylesBeacon = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  device: {
    width: 80,
    height: 80,
    backgroundColor: '#6cab36'
  },
  beaconContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  beacon: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 200,
    backgroundColor: '#7c7c81'
  }
});

DeviceEventEmitter.addListener(
  'beaconsDidRange',
  (data) => {
    console.log(data);
  }
);

export default HomeView;
