var couponModel = require('./coupon.js');

////////////////////////////////////////////////////////////
// FAKE DATA
////////////////////////////////////////////////////////////
var data = [
  {
    coupon_id: 1,
    title: '$20 off socks',
    image: '../../assets/img/socks.png',
    item_name: 'Socks',
    original_price: 10,
    coupon_price: 5,
    coupon_savings: 5,
    start_at: 'start_date',
    end_at: 'end_date',
    created_at: 'created_at_date',
  },
  {
    coupon_id: 2,
    title: '$5 off socks',
    image: '../../assets/img/socks.png',
    item_name: 'Socks',
    original_price: 10,
    coupon_price: 5,
    coupon_savings: 5,
    start_at: 'start_date',
    end_at: 'end_date',
    created_at: 'created_at_date',
  },
  {
    coupon_id: 3,
    title: '$5 off socks',
    image: '../../assets/img/socks.png',
    item_name: 'Socks',
    original_price: 10,
    coupon_price: 5,
    coupon_savings: 5,
    start_at: 'start_date',
    end_at: 'end_date',
    created_at: 'created_at_date',
  }
];

var fakeCouponInfo = {
  id: 2,
  title: 'React Native %99 OFF!',
  // image:'iHearth/App/lib/img/jacket.jpeg',
  // image:'../lib/img/jacket.jpeg',
  image:'jacket.jpeg',
  item_name: 'Warm and Cozy React Native',
  description: 'For extra coverage during chilly days in the city, layer with this smooth-face fleece jacket that\'s lightly insulated through the core and sleeves.',
  original_price: '$149.00',
  coupon_price: '$129.00',
  coupon_savings: '$20',
  start_at: '2pm',
  end_at: '4pm',
  created_at: '01/02/2017',
  id_business: '001',
  storeName: 'Hack Reactor', // include store name when fetching from server
}

// GET request for /coupon
// retrieve all coupons in coupon table
exports.retrieveCoupons = (req, res) => {
  couponModel.retrieveCouponsAsync()
  .then(coupons => {
    res.status(200).json({ coupons: coupons });
  })
  .catch((err) => {
    res.status(400).send({ coupons: [ { item_name: 'Server-side error' } ] });
  })
};

// POST request for /coupon
// create new coupon in coupon table
exports.createCoupon = (req, res) => {
  // var params = [req.body.title, req.body.image, req.body.item_name, req.body.description, req.body.original_price, req.body.coupon_price, req.body.coupon_savings, req.body.start_at, req.body.end_at];
  var params = {
    title: req.body.title,
    image: req.body.image,
    item_name: req.body.item_name,
    description: req.body.description,
    original_price: req.body.original_price,
    coupon_price: req.body.coupon_price,
    coupon_savings: req.body.coupon_savings,
    start_at: req.body.start_at,
    end_at: req.body.end_at
  };
  couponModel.createCouponAsync(params)
  .then(coupon => {
    res.status(201).json(coupon);
  })
  .catch((err) => {
    res.status(400).send('create post error from server');
  })
};

// GET request for /coupon/:coupon_id
// retrieve all coupons with a specific coupon_id
exports.retrieveOneCoupon = (req, res) => {
  couponModel.retrieveOneCouponAsync()
  .then(couponInfo => {
    res.status(200).json({ couponInfo: couponInfo });
  })
  .catch((err) => {
    res.status(400).send({ couponInfo: { title: 'Server-side error'} });
  });
};