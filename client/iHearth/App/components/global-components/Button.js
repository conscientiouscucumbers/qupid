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
import { Text, TouchableHighlight } from 'react-native';
import styles from './../../styles';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

export default ({ label, onPress }) => (
  <ButtonComponent
    type="primary"
    shape="rectangle"
    backgroundColors={['#4DC7A4', '#66D37A']}
    gradientStart={[0.5, 1]}
    gradientEnd={[1, 1]}
    height={80}
    onPress={ onPress }
    text={ label }
  >
  </ButtonComponent>
);
