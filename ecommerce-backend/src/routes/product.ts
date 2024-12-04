import express, { Router } from 'express'

import { adminOnly, verifyJWT } from '../middlewares/auth.js';
import { getAllUsers } from '../controllers/user.js';
import { getAdminProducts, getAllCategories,  getLatestProducts,  getSingleProduct,  newProduct, updateProduct } from '../controllers/product.js';
import { singleUpload } from '../middlewares/multer.js';

const router=express.Router()

 router.post("/new",verifyJWT,adminOnly,singleUpload,newProduct);

// router.get("/latest",getLatestProducts);
//  router.get("/all",getAllCategories);
//  router.get("/admin-products",getAdminProducts);
//  router.route("/:id")
//  	.get(getSingleProduct)
// 	.put(updateProduct);

export default router;




