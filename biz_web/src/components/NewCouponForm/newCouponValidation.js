import memoize from 'lru-memoize';
import {createValidator, required, maxLength} from 'utils/validation';

const newCouponValidation = createValidator({
  title: [required, maxLength(20)],
  item_name: [required],
  description: maxLength(100), // single rules don't have to be in an array
  original_price: [required],
  coupon_savings: [required],
  start_at: [required],
  end_at: [required]
});
export default memoize(10)(newCouponValidation);
