import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {
  DATE,
  TIME_LEFT,
  SAVINGS,
} from '../constants/SortByOptions';

export default class SortByFilterView extends Component {

  static options = [ DATE.value, TIME_LEFT.value, SAVINGS.value];

  render() {
    return (
      <View style={ styles.container }>
      <View style={ styles.row }>
      <View style={ styles.cell }>
      <ModalDropdown
        style={ styles.dropdown_6 }
        textStyle={ styles.dropdown_6_text }
        dropdownStyle={ styles.dropdown_6_dropdown }
        options={ this.constructor.options }
        onSelect={(i, value) => { this.props.sortBy(value) }}
      />
      </View>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 18,
    backgroundColor: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    height: 500,
    paddingVertical: 100,
    paddingLeft: 20,
  },
  textButton: {
    color: 'deepskyblue',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'deepskyblue',
    margin: 2,
  },

  dropdown_1: {
    flex: 1,
    top: 32,
    left: 8,
  },
  dropdown_2: {
    alignSelf: 'flex-end',
    width: 150,
    top: 32,
    right: 8,
    borderWidth: 0,
    borderRadius: 3,
    backgroundColor: 'cornflowerblue',
  },
  dropdown_2_text: {
    height: 40,
    lineHeight: 40,
    marginHorizontal: 6,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 150,
    height: 300,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_2_image: {
    marginLeft: 4,
    width: 30,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
  },
  dropdown_3: {
    width: 150,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_4: {
    margin: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_4_dropdown: {
    width: 100,
  },
  dropdown_5: {
    margin: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_6: {
    flex: 1,
    left: 8,
  },
  dropdown_6_image: {
    width: 40,
    height: 40,
  },
});
