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
        <Header style={{ backgroundColor: 'white' }}>
          <Title style={ styles.title }>My Coupons</Title>
        </Header>
        <Content>
          <View style={ styles.container }>
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
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 500,
    width: 410,
    marginLeft: -18,
    alignSelf: 'stretch'
  },
  title: {
    lineHeight: 50,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '300',
    color: '#FF3F4E'
  }
})
