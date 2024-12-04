import { NextFunction, Request, Response } from "express";

export interface NewUserRequestBody{


	name:string;
	email:string;
	photo:string;
	gender:string;
	role:string;
	_id:string;
	password:string;

}

 export type ControllerType = (
 	req: Request,
 	res: Response,
 	next: NextFunction
   ) =>Promise<void >;
  
export interface BaseQuery {
	name?:{
		$regex:string;
		$options:string;
	};
	price?:{
		$lte:number;
	};
	category?:string;
}

export type shippingInfoType={
	address:string;
	city:string;
	state:string;
	country:string;
	pinCode:number;

}


export type OrderItemTypes={
	name:string;
	photo:string;
	price:number;
	quantity:number;
	productId:string;
}

export interface NewOrderRequestBody{

	shippingInfo:shippingInfoType;
	user:string;
	subtotal:number;
	tax:number;
	shippingCharges:number;
	discount:number;
	total:number;
	orderItems:OrderItemTypes[];


}


export interface NewProductRequestBody{

			name:string;
			category:string;
			price:number;
			stock:number;
			description:string;
}

export interface SearchRequestQuery{
	search?:string;
	price?:string;
	category?:string;
	sort?:string;
	page?:string;

}