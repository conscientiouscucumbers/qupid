import React, { Component } from 'react';
import QRCodeImageViewContainer from '../containers/QRCodeImageViewContainer'

import { Container, Header, Button, Icon, Title, Content, Text } from 'native-base';

export default class QRView extends Component {
  constructor(props) {
    super(props);
    _goBack = this.props._goBack;
  }

  // Before rendering, get state from server
  componentWillMount() {
    // this.props.fetchCoupons();
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={ _goBack }>
              <Icon name='ios-arrow-back' />
          </Button>
          <Title>Selected QRCode</Title>
        </Header>
        <Content>
          <Text>QR View</Text>
          <QRCodeImageViewContainer />
        </Content>
      </Container>
    );
  }
}