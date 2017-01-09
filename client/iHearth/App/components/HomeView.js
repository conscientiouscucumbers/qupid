import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import ListViewContainer from '../containers/ListViewContainer';
import FilterViewContainer from '../containers/FilterViewContainer';
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
          <Text>My Coupons</Text>
          <FilterViewContainer />
          <ListViewContainer _handleNavigate={ this.props._handleNavigate } />
        </Content>
      </Container>
    );
  }
};

export default HomeView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
})

