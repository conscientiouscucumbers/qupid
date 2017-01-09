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
      <Container>
        <Header style={{ backgroundColor: '#ffbaba' }}>
          <Text></Text>
        </Header>
        <Content>
          <View style={ styles.container }>
            <Text style={ styles.title }>My Coupons</Text>
            <FilterViewContainer />
            <ListViewContainer _handleNavigate={ this.props._handleNavigate } />
          </View>
        </Content>
      </Container>
    );
  }
};

export default HomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: '100'
  }
})

