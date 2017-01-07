import React from 'react';
// import QRCodeContainer from '../containers/CouponDescriptionContainer'

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
      <Text>Hello World from QRView</Text>
      {/*<CouponDescriptionContainer />*/}
    </Content>
  </Container>
);

export default QRView;

