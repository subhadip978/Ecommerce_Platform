import {Request,Response,NextFunction }from 'express'
import ErrorHandler from '../utils/utility-class.js';


import { ControllerType } from '../types/type.js';

export const errorMiddleware=(
	err:ErrorHandler,
	req:Request,
	res:Response,
	next:NextFunction)=>{

		err.message ||= "Internal server error ";
		err.statusCode||=500 ;

		res.status(err.statusCode).json({
			success:false,
			message:err.message,
		
		})
}


  
 export const TryCatch =
 (func: ControllerType) =>{
return  (req: Request, res: Response, next: NextFunction) => {
   return Promise.resolve(func(req, res, next)).catch((err) => next(err));
 }};