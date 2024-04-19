import express from 'express';
import { PaymentController } from '../controller/payment.controller';
export const router = express.Router();

router.post('/', PaymentController.createPayment);

export default router;