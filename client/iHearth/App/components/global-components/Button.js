// import React from 'react';
// import { Text, TouchableHighlight } from 'react-native';
// import styles from './../../styles';
//
// export default ({ label, onPress }) => (
//   <TouchableHighlight
//     underlayColor='#35b5ff'
//     onPress={ onPress } style={ styles.button }>
//     <Text style={ styles.label }>{ label }</Text>
//   </TouchableHighlight>
// );

import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './../../styles';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

export default ({ label, onPress }) => (
  <View style={{ alignItems: 'center'}}>
  <ButtonComponent
    style={{width: 200, height: 50}}
    type="primary"
    shape="round"
    backgroundColors={['#a30180', '#f80046']}
    gradientStart={{ x: 0.5, y: 1 }}
    gradientEnd={{ x: 1, y: 1 }}
    height={80}
    onPress={ onPress }
    text={ label }
  >
  </ButtonComponent>
</View>
);
