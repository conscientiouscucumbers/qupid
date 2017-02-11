import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  coupon: {
    height: 70,
    width: 340,
    backgroundColor: '#22a3ed',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#f80046'
  },
  button: {
    height: 70,
    width: 100,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'white'
  },
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center',
    color: '#f80046'
  },
  container: {
    paddingTop: 60,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f48989'
  },
  containerSettings: {
    flex: 1,
    backgroundColor: '#f48989',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    marginTop: 100,
    fontSize: 24,
    textAlign: 'center',
    color: '#f80046'
  },
  login: {
    paddingTop: 60,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  listViewText: {
    fontSize: 12,
    color: '#f80046'
  },
  listViewTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 6,
    paddingLeft: 12,
    color: '#f80046',
    textShadowColor: '#ffffff',
    textShadowRadius: 1
  },
  listViewDiscountPriceText: {
    textDecorationLine: 'line-through'
  },
  listViewCard: {
    flexDirection: 'row',
  },
  titleTwo: {
    paddingTop: 60,
    fontSize: 22,
    textAlign: 'center',
    color: '#f80046'
  },
});

export default styles;
