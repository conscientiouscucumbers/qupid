import React from 'react';
import QRCodeImageViewContainer from '../containers/QRCodeImageViewContainer'

import { Container, Header, Button, Icon, Title, Content, Text } from 'native-base';

const QRView = ({ _goBack }) => (
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

export default QRView;

