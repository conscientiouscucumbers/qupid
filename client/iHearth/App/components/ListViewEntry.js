import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import {
  Badge,
  ListItem,
  Thumbnail,
  Card
} from 'native-base';
import { formatDollars, formatSQLTime, formatSQLDate, timeLeft, timeLeftInterval } from '../lib/utils/formatUtils.js';

var {
  width: deviceWidth,
  height: deviceHeight
} = Dimensions.get('window');



export default class ListViewEntry extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      countdown: '',
      interval: 30000,
      timeUnit: ''
    };
  }

  updateInterval() {
    if (this.state.timeUnit === 'sec') { this.setState({ interval: 500 }); }
    else if (this.state.timeUnit === 'min') { this.setState({ interval: 1000 }); }
    else { this.setState({ interval: 30000 }); }
    this.setState({ countdown: timeLeft(this.props.coupon.end_at) });
    if (this.state.countdown === 'expired') {
      this.setState({ interval: 1000 * 60 * 5 });
      clearInterval(this.interval);
    }
  }

  componentWillMount() {
    this.setState({ countdown: timeLeft(this.props.coupon.end_at) });
    this.setState({ timeUnit: timeLeftInterval(this.props.coupon.end_at) });
    this.interval = setInterval(() => this.updateInterval(), this.state.interval);
  }

  componentWillUpdate() {
    this.interval = setInterval(() => this.updateInterval(), this.state.interval);
  }
  // Image must be defined statically per docs
  // image = 'https://facebook.github.io/react/img/logo_og.png';
  render() {
    return (
      <ListItem button style={ styles.listItem } onPress={ (event) => { this.props.onPress() }} >
        <View style={ styles.card }>
          <View style={ styles.topContainer }>
            <Image style={ styles.image } source={{ uri: this.props.coupon.image }} />
            <View style={ styles.descriptionContainer }>
              <View style={ styles.splitContainer }>
                <View>
                  <Text style={ styles.listItemTitle }> { this.props.coupon.title } </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={ styles.newPrice }>{ formatDollars(this.props.coupon.coupon_price) + '  ' }</Text>
                  <Text style={ styles.originalPrice }>{ formatDollars(this.props.coupon.original_price) }</Text>
                </View>
              </View>
              <View>
                <Text style={ styles.listItemName }>{ this.props.coupon.item_name }</Text>
              </View>
              <View>
                <Text style={ styles.listItemBusiness }>{ this.props.coupon.company_name }</Text>
              </View>
              <View>
                <View style={ styles.splitContainer }>
                  <View>
                  <Text style={ styles.listItemDescription }>
                  {
                    'Starts ' + formatSQLTime(this.props.coupon.start_at) + ' ' + formatSQLDate(this.props.coupon.start_at)
                  }
                  </Text>
                  <Text style={ styles.listItemDescription }>
                  {
                    'Expires ' + formatSQLTime(this.props.coupon.end_at) + ' ' + formatSQLDate(this.props.coupon.end_at)
                  }
                  </Text>
                  </View>
                  <Text style={{ color: '#FF3F4E', height: 20 }}>{ this.state.countdown }</Text>
                </View>
                <View style={ styles.container }>
                </View>
              </View>
              <View>
              </View>
            </View>
          </View>
        </View>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
  },
  splitContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth * (.70),
    height: deviceHeight * (.06)
  },
  descriptionContainer: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  listItem: {
    // flex: 1,
    borderBottomWidth: 1,
    paddingBottom: -8,
    marginTop: 2,
    marginBottom: -8,
    height: 115
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#484848',
    fontSize: 12,
  },
  newPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00A699'
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '100',
  },
  listItemName: {
    fontSize: 16,
    color: '#484848',
    fontWeight: '100',
    top: -20
  },
  listItemBusiness: {
    fontSize: 12,
    color: '#484848',
    fontWeight: '100',
    top: -20
  },
  listItemDescription: {
    fontSize: 12,
    color: '#484848',
    top: -10
  },
  image: {
    width: 95,
    height: 95,
    alignSelf: 'flex-start',
    marginTop: 3
    // borderRadius: 47.5
  },
  card: {
    borderWidth: 0,
    // borderRadius: 10,
    borderColor: '#dddddd',
    backgroundColor: 'white'
  },
})
