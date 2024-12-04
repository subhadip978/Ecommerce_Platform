
import {Request,Response,NextFunction} from 'express';
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";
import { Product } from "../models/products.js";
import { rm } from "fs";
import { BaseQuery } from "../types/type.js";
import { NewProductRequestBody ,SearchRequestQuery} from "../types/type.js";
import { uploadToCloudinary } from '../utils/feature.js';



export const newProduct=TryCatch(async(req: Request<{}, {}, NewProductRequestBody>,res,next):Promise<void>=>{


		const {name,price,stock,category}=req.body;
		const photo=req.file ;
		if(!photo){
			throw new ErrorHandler("please add photo",400);
		}

		if(!name || !price ||!stock ||!category){
			rm(photo.path,()=>{
				console.log("Deleted")
			})
			throw new ErrorHandler("please enter all field",400);
		}

			const photoUrl= await uploadToCloudinary(photo);
		const product=await Product.create({
			name,			
				price,
				stock,
				category:category.toLowerCase(),
				photo:photo?.path,
	

		})
		res.status(200).json({
			success:true,
			message:"new product created successfully",
		product})

})




export const getAllCategories=TryCatch(async(req,res,next)=>{


const categories= await Product.distinct("category")
	res.status(201).json({
		success:true,
		categories
	})


})



export const getAdminProducts=TryCatch(async(req,res,next)=>{

	const products=await Product.find({});
	res.status(200).json({
		success:true,
		products
	})


})

export const getLatestProducts=TryCatch(async(req,res,next)=>{

	const products= await Product.find({}).sort({createdAt:-1}).limit(5)


	res.json({success:true,products})

})

export const getSingleProduct=TryCatch(async(req,res,next)=>{

	
	const product=await Product.findById(req.params.id);
	res.status(200).json({
		success:true,
		product
	})
})



export const updateProduct =TryCatch(
	async(req,res,next)=>{
	const {id}=req.params ;

	const {name,price,stock,category}=req.body;
	const photo=req.file ;
	const product= await Product.findById(id);
	if(!product){
		throw new ErrorHandler("invalid product id",400);
	}
	if(photo){
		rm(product.photos!,()=>{
			console.log("old photot deleted");
		})
		product.photos=photo.path ;
	}
	if(!photo){
		throw new ErrorHandler("please add photo",400);
	}
	if(!name || !price ||!stock ||!category){
		rm(photo.path,()=>{
			console.log("Deleted")
		})
		throw new ErrorHandler("please enter all field",400);
	}

	await Product.create({
		
			price,
			stock,
			category:category.toLowerCase(),
			photo:photo?.path,


	})
	res.json({})

})


export const getAllProducts=TryCatch(async(req:Request<{},{},SearchRequestQuery>,res,next)=>{

				const {search}=req.query ;
				const {price,category,sort}=req.query ;
				const page = Number(req.query.page || 8) ;

				const limit= Number(process.env.PRODCUT_PER_PAGE)|| 10 ;

				const skip= limit *(page -1) ;

			const baseQuery : BaseQuery={};

			if(search){
				baseQuery.name={
					$regex:search as string,
					$options:"i"
				}
			}

			if(price){
				baseQuery.price={
					$lte:Number(price)
				}
			}

			if(category) {
				baseQuery.category=category as string
			} 


				const products= await Product.find(baseQuery)
				.sort(sort && {price: sort ==="asc" ?1:-1}) 
				.skip(skip)
				.limit(limit) ;


				res.status(200).json({
					success:true,

				})
})



