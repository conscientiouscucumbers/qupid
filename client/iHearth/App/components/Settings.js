import React from 'react';
import styles from './../styles';
import { View, Text } from 'react-native';
import LogoutViewContainer from '../containers/LogoutViewContainer'

const Settings = () => (
  <View style={ styles.containerSettings }>
    <Text style={ styles.text }>Hello from Settings</Text>
    <LogoutViewContainer />
  </View>
)

export default Settings;
