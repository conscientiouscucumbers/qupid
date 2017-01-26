import React, { Component } from 'react';
// import FilterDropdownView from './FilterDropdownView';
import SortByFilterViewContainer from '../containers/SortByFilterViewContainer';
import {
  Text,
  View
} from 'react-native'
import {
  Content,
} from 'native-base';

export default class FilterView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
          <View>
            <SortByFilterViewContainer />
          </View>
      </View>
    );
  }
}
