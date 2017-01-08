import { connect } from 'react-redux';
import TabsRoot from '../../components/nav-components/TabsRoot';
import { changeTab, listenBeacon, fetchBeaconCoupons } from '../../actions/nav-actions/tabsRootActions';

function mapStateToProps(state) {
  return {
    index: state.tabReducer.index,
    tabs: state.tabReducer.tabs,
    region: state.tabReducer.region,
    beacons: state.tabReducer.beacons,
    // pushedCoupons: state.tabReducer.pushedCoupons
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (route) => dispatch(changeTab(route)),
    listenBeacon: (beacons) => dispatch(listenBeacon(beacons)),
    fetchBeaconCoupons: (user_id, beacon_uuid) => dispatch(fetchBeaconCoupons(user_id, beacon_uuid))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsRoot);