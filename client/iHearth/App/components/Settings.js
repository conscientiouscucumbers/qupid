import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoutViewContainer from '../containers/LogoutViewContainer';
import LinearGradient from 'react-native-linear-gradient';

const Settings = () => (
  <LinearGradient colors={['#FAF1D6', '#FF9D81']} style={styles.linearGradient}>
    <View style={styles.gradient}>
      <Text style={ styles.title }>Settings</Text>
      <LogoutViewContainer />
    </View>
  </LinearGradient>
);

var styles = StyleSheet.create({
  title: {
    paddingTop: 60,
    fontSize: 44,
    fontWeight: '100',
    textAlign: 'center',
    color: '#FF3F4E',
    backgroundColor: 'transparent'
  },
  gradient: {
    textAlign: 'center',
    zIndex: 0
  },
  linearGradient: {
    flex: 1
  }
});

export default Settings;
