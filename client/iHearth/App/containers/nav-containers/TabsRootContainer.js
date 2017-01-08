import { connect } from 'react-redux';
import TabsRoot from '../../components/nav-components/TabsRoot';
import { changeTab, listenBeacon } from '../../actions/nav-actions/tabsRootActions';

function mapStateToProps(state) {
  return {
    index: state.tabReducer.index,
    tabs: state.tabReducer.tabs,
    region: state.tabReducer.region,
    beacons: state.tabReducer.beacons
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (route) => dispatch(changeTab(route)),
    listenBeacon: (beacons) => dispatch(listenBeacon(beacons))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsRoot);