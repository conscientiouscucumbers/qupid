import bizController from './bizController';
import express from 'express';
let bizRouter = express.Router();

bizRouter.route('/login')
  .post(bizController.bizLogin)

bizRouter.route('/logout')
  .post(bizController.bizLogout)

bizRouter.route('/signup')
  .post(bizController.bizSignup)

bizRouter.route('/:business_id')
  .get(bizController.bizRetrieveCoupons)
  .post(bizController.bizCreateCoupon)

export default bizRouter;
