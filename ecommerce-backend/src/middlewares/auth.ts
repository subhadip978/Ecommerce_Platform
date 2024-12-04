import { TryCatch } from "./error.js";
import ErrorHandler from "../utils/utility-class.js";
import { User } from "../models/user.js";
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'


interface CustomRequest extends Request {
    user?: any; 
}

import { JwtPayload } from 'jsonwebtoken';

interface CustomJwtPayload extends JwtPayload {
    _id: string;
}


export const verifyJWT=TryCatch(async(req:Request,res:Response,next:NextFunction):Promise<void>=>{

	const token =req.cookies?.token;
	if(!token){
		throw new ErrorHandler("User is not authenticated",401);
	}

	if (!process.env.SECRET_KEY) {
		throw new Error("SECRET_KEY is not defined in the environment variables");
	  }
	const decode=jwt.verify(token,process.env.SECRET_KEY) as CustomJwtPayload;

	if (!decode || !decode._id) {
		throw new Error('Invalid token or missing _id');
	}
	// const user=await User.findOne(decode._id ).select('-password') ;

	
	(req as CustomRequest).user = decode.id;
		next()

})



export const adminOnly =TryCatch(

	async(req,res,next)=>{
		const id= (req as CustomRequest).user ;
		if(!id){

			throw new ErrorHandler("Please login first",401) ;
		}
		const user =await User.findById(id);
		if(!user){
			throw new ErrorHandler("you are not allowed",401)
		}

		if(user.role !=="admin"){
			throw new ErrorHandler("only for admin ",403)

		}
		next();

	}
)


