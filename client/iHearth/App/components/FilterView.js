import React, { Component } from 'react';
import FilterDropdownView from './FilterDropdownView';
import {
  Text,
  View
} from 'react-native'
import {
  Container,
  Content,
} from 'native-base';

export default class FilterView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        
          <Text>Filter View</Text>
          <FilterDropdownView />
        
      </View>
    );
  }
} 