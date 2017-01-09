import React from 'react';
// import styles from './../styles';
import { View, Text, StyleSheet } from 'react-native';
import LogoutViewContainer from '../containers/LogoutViewContainer'

const Settings = () => (
  <View style={ styles.settings }>
    <Text style={ styles.title }>Settings</Text>
    <LogoutViewContainer />
  </View>
);

var styles = StyleSheet.create({
  settings: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center'
  },
  title: {
    paddingTop: 60,
    fontSize: 44,
    fontWeight: '100',
    textAlign: 'center',
    color: '#FF3F4E'
  }
});

export default Settings;
