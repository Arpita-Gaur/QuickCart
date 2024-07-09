import express from 'express';
import { loginData, signupData } from '../controller/user_controller.js';

import { getProducts , getProductById} from '../controller/product_controller.js';
const router = express.Router();

router.post('/signup',signupData);

router.post('/login',loginData);

router.get('/products',getProducts); 

router.get('/product/:id', getProductById)
export default router;