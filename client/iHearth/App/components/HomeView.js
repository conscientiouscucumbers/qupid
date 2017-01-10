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
        <Content>
        <Header style={{ backgroundColor: '#ffffff' }}>
          <Title style={ styles.title }>My Coupons</Title>
        </Header>
          <FilterViewContainer />
          <View style={ styles.container }>
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
    paddingBottom: 7,

    marginLeft: -15,
    marginRight: -15
  },
  title: {
    lineHeight: 50,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '300',
    color: '#484848'
  }
})
