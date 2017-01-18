// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import LogoutViewContainer from '../containers/LogoutViewContainer';
// import LinearGradient from 'react-native-linear-gradient';

// const Settings = () => (
//   <LinearGradient colors={['#FAF1D6', '#FF9D81']} style={styles.linearGradient}>
//     <View style={styles.gradient}>
//       <Text style={ styles.title }>Settings</Text>
//       <LogoutViewContainer />
//     </View>
//   </LinearGradient>
// );

// var styles = StyleSheet.create({
//   title: {
//     paddingTop: 60,
//     fontSize: 44,
//     fontWeight: '100',
//     textAlign: 'center',
//     color: '#FF3F4E',
//     backgroundColor: 'transparent'
//   },
//   gradient: {
//     textAlign: 'center',
//     zIndex: 0
//   },
//   linearGradient: {
//     flex: 1
//   }
// });

// export default Settings;

import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, AppState, Platform } from 'react-native';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  picker: {
    width: 100,
  },
});

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
      seconds: 5,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    console.log('appState: '+ appState);
    console.log(Date.now());
    if (appState === 'background') {
      // let date = new Date(Date.now() + (this.state.seconds * 1000));

      // if (Platform.OS === 'ios') {
        // date = date.toISOString();
      // }
      let date = new Date(Date.now() + this.state.seconds*1000);
        console.log(date);

      PushNotification.localNotificationSchedule({
        message: "My Notification Message",
        date,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Choose your notification time in seconds.
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={(seconds) => this.setState({ seconds })}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="15" value={15} />
        </Picker>
        <PushController />
      </View>
    );
  }
}

