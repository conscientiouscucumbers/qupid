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

import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
// import styles from './../../styles';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var secondary = ['Cancel', 'Log In'];
    var tertiary = ['Forgot Password'];
    if (secondary.indexOf(this.props.label) === -1) {
      return (
        <View style={styles.button}>
          <TouchableHighlight
            underlayColor='#dddddd'
            onPress={ this.props.onPress }
            style={ styles.primary }>
            <Text style={ styles.secondaryText }>{ this.props.label }</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={styles.button}>
          <TouchableHighlight
            underlayColor='#dddddd'
            onPress={ this.props.onPress }
            style={ styles.secondary }>
            <Text style={ styles.primaryText }>{ this.props.label }</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }
};

var styles = StyleSheet.create({
  primary: {
    flex: 1,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FF3F4E',
    backgroundColor: '#FF3F4E'
  },
  secondary: {
    flex: 1,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#cccccc',
  },
  button: {
    alignItems: 'center'
  },
  primaryText: {
    color: '#484848'
  },
  secondaryText: {
    color: 'white'
  }
});

export default Button;

// export default ({ label, onPress }) => (
//   <View style={{ alignItems: 'center'}}>
//     <ButtonComponent
//       style={{width: 200, height: 50}}
//       type="primary"
//       shape="round"
//       backgroundColors={['#a30180', '#f80046']}
//       gradientStart={{ x: 0.5, y: 1 }}
//       gradientEnd={{ x: 1, y: 1 }}
//       height={80}
//       onPress={ this.props.onPress }
//       text={ this.props.label }
//     >
//     </ButtonComponent>
//   </View>
// );
