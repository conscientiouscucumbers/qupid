const initialState = {
  // States related to user
  userInfo: {}, // { email: , password:, ..., totalSavings: }

  // States used in home view
  storeList: [],  // array of store objs
  currStores: [], // array of store objs
  currFilter: '', // 'date' OR 'timeLeft' OR 'savings'
  currList: [],

  // State related to coupons
  couponInfo: {},

  // State related to beacons
  beaconInfo: {},
}

const iHearth = (state=initialState, action) => {
  switch (action.type){
    case '':
      return {

      }
  }
}