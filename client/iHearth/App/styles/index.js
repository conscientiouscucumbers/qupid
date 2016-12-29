import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  coupon: {
    height: 70,
    width: 340,
    backgroundColor: '#22a3ed',
    justifyContent: 'center',
    alignItems: 'center'
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
    textAlign: 'center'
  },
  container: {
    paddingTop: 60,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default styles;