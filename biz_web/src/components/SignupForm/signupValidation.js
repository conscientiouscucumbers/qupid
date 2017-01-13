import memoize from 'lru-memoize';
import {createValidator, required, maxLength, email} from 'utils/validation';

const signupValidation = createValidator({
  company_name: [required, maxLength(50)],
  email: [required, email],
  password: [required, maxLength(50)],
  address: [required, maxLength(50)],
  city: [required, maxLength(20)],
  state: [required, maxLength(20)],
  zipcode: [required, maxLength(10)]
});
export default memoize(10)(signupValidation);
