import { TryCatch } from "../middlewares/error.js";
import { Order } from "../models/order.js";
import { NewOrderRequestBody } from "../types/type.js";

import { Request } from "express";
import { reduceStock } from "../utils/feature.js";
import ErrorHandler from "../utils/utility-class.js";


export const newOrder=TryCatch(
	async(req:Request<{},{},NewOrderRequestBody>,res,next)=>{


		const{shippingInfo,orderItems,user,subtotal,tax,shippingCharges}=req.body ;

		if(!shippingInfo || !orderItems ||! user|| !subtotal|| !tax ||!shippingCharges)
		throw new ErrorHandler("please provide the details",401)
		await Order.create({shippingInfo,orderItems,user,subtotal,tax,shippingCharges});

		await reduceStock(orderItems);

		res.status(201).json({success:true,message:"new order created"})
})


export const myOrder =TryCatch(async(req,res,next)=>{

		const {id}=req.query ;

		const orders= await Order.find({user:id})


	res.status(201).json({success:true,message:"my order"})
}
)

export const allOrders=TryCatch(async(req,res,next)=>{

		

	const orders= await Order.find()


res.status(201).json({
	success:true,
	orders
})


})

export const getSingleOrder=TryCatch(async(req,res,next)=>{

		const {id}=req.params ;

	const order= await Order.findById(id).populate("user","product")


res.status(201).json({
	success:true,
	order
})


})

export const processOrder=TryCatch(
	async(req,res,next)=>{


		const {id}=req.params;

		const order=await Order.findById(id);

		if(!order) 
		throw new ErrorHandler("order not found",404);

		if(order.status === "Processing"){
			order.status="shipped";
			


		}

		else if(order.status=="shipped"){
			order.status="Delivered"
		}
		else{
			order.status="Delivered"

		}

		await order.save() ;

		res.status(200).json({
			success:true,
			message:"order successfuly processed"
		})
})



export const deleteOrder=TryCatch(
	async(req,res,next)=>{

		const {id}=req.params;
		const order=await Order.findById(id);

		if(!order) 
		throw new ErrorHandler("order not found",404);
		await order.deleteOne();

		

		res.status(200).json({
			success:true,
			message:"order successfuly deleted"
		})
})


