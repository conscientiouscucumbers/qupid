import { connect } from 'react-redux';
import TabsRoot from '../../components/nav-components/TabsRoot';
import { changeTab, listenBeacon, fetchBeaconCoupons } from '../../actions/nav-actions/tabsRootActions';
import { sortCouponsBySavings, sortCouponsByDate } from '../../actions/listViewActions.js';

function mapStateToProps(state) {
  return {
    index: state.tabReducer.index,
    tabs: state.tabReducer.tabs,
    region: state.tabReducer.region,
    beacons: state.tabReducer.beacons,
    userInfo: state.loginReducer.userInfo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (route) => dispatch(changeTab(route)),
    listenBeacon: (beacons) => dispatch(listenBeacon(beacons)),
    fetchBeaconCoupons: (user_id, beacon_uuid) => dispatch(fetchBeaconCoupons(user_id, beacon_uuid)),
    sortCouponsBySavings: () => dispatch(sortCouponsBySavings()),
    sortCouponsByDate: () => dispatch(sortCouponsByDate()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsRoot);