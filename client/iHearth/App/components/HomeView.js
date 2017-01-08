import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import ListViewContainer from '../containers/ListViewContainer';
import FilterViewContainer from '../containers/FilterViewContainer';
import styles from './../styles';
import { Container, Header, Title, Content } from 'native-base';

class HomeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#f48989' }}>
        <Header style={{ backgroundColor: '#ffbaba' }}>
          <Text></Text>
        </Header>
        <Content>
          <FilterViewContainer />
          <Text style={ styles.title }>Coupons</Text>

          <ListViewContainer _handleNavigate={ this.props._handleNavigate } />
        </Content>
      </Container>
    );
  }
};

export default HomeView;
