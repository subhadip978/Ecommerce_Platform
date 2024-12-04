import express from "express";
import { allOrders, deleteOrder, getSingleOrder, myOrder, newOrder, processOrder } from "../controllers/order.js";
import { adminOnly } from "../middlewares/auth.js";



const router= express.Router();


router.post("/new",newOrder);
router.get("/my",myOrder) ;
router.get("/my",adminOnly,allOrders) ;
router.route("/:id")
		.get(getSingleOrder)
		.put(adminOnly,processOrder)
		.delete(adminOnly,deleteOrder);	

export default router ;


