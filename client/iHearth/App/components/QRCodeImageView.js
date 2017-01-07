import React, { Component } from 'react';
import { Image } from 'react-native';
// import ListViewEntry from './ListViewEntry';
import { Container, Content, Card, CardItem, Text, Button } from 'native-base';

export default class QRCodeImageView extends Component {
  constructor(props) {
    super(props);
  }

  // Before rendering, get state from server
  componentWillMount() {
    // this.props.fetchCoupons();
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem cardBody>
              <Image style={{width: 200, height: 200, alignSelf: 'center'}} source={require('iHearth/assets/img/QRcode.png')} />
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>QR Code to Scan</Text>
              <Button onPress={ () => { }} block>Use QR Placeholder</Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}