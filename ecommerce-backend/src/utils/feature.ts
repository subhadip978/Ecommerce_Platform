import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import { OrderItemTypes } from "../types/type.js";
import { Product } from "../models/products.js";
import ErrorHandler from "./utility-class.js";
import { v2 as cloudinary } from 'cloudinary';

export const connectDB= async()=>{
	console.log(`${process.env.MONGODB_URI}`);
	try{

		const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
		console.log(`\n MONGODB connected !!  DB HOST ${connectionInstance}.connection.host`)
	}catch(error){	
		
		console.log("ERROR: ",error);
		process.exit(1)
	}
}


export const reduceStock=async(orderItems:OrderItemTypes[])=>{


	for(let i=0;i<orderItems.length;i++){
		const order=orderItems[i];
		const product=await Product.findById(order.productId);
		if(!product) throw new Error("product not found");
		product.stock-= order.quantity ;
		await product.save();


	}
}

export const uploadToCloudinary=(file:Express.Multer.File )=>{

	
		return new Promise((resolve,reject)=>{
			
					if (!file || !file.path) {
						reject(new Error("File is required and must have a path."));
					}
					
			cloudinary.uploader.upload((file.path),(err,result)=>{
				if(err) return reject(err);

				resolve(reject);
			})

	})
}

