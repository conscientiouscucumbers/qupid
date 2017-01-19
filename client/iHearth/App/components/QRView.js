import React, { Component } from 'react';
import QRCodeImageViewContainer from '../containers/QRCodeImageViewContainer'
import { StyleSheet } from 'react-native';
import { Container, Header, Icon, Title, Content, Text, Button } from 'native-base';

export default class QRView extends Component {
  constructor(props) {
    super(props);
    _goBack = this.props._goBack;
    _handleNavigate = this.props._handleNavigate;
  }

  // Before rendering, get state from server
  componentWillMount() {
    // this.props.fetchCoupons();
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#ffffff' }}>
          <Button transparent onPress={ () => { _goBack(); this.props.clearQRState(); } }>
            <Icon style={styles.arrow} name='ios-arrow-back' />
          </Button>
          <Title style={styles.title}>Selected QR Code</Title>
        </Header>
        <Content>
          <QRCodeImageViewContainer _handleNavigate={ _handleNavigate } _goBack={ _goBack }/>
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    lineHeight: 50,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '300',
    color: '#484848'
  },
  arrow: {
    color: '#FF3F4E'
  }
});
