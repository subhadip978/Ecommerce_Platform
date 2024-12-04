import { TryCatch } from "../middlewares/error.js";
import { Coupon } from "../models/coupon.js";
import { Product } from "../models/products.js";
import { User } from "../models/user.js";
import { OrderItemTypes, shippingInfoType } from "../types/type.js";
import ErrorHandler from "../utils/utility-class.js";

// he $in operator is useful when you want to retrieve documents that match one of several possible values.

// export const createPayment=TryCatch(async(req,res,next):Promise<void>=>{

// const {id}=req.query ;

// const user= await User.findById(id).select("name");
// if (!user) return next(new ErrorHandler("Please login first", 401));


// 		const {items,shippinginfo,coupon}:{
// 			items:OrderItemTypes[];
// 			shippinginfo:shippingInfoType | undefined;
// 			coupon:string |undefined
// 		}=req.body;

		
// 		if (!items) throw new ErrorHandler("Please send items", 400);

// 		if (!shippinginfo)
// 		  throw new ErrorHandler("Please send shipping info", 400);


// 		  let discountAmount = 0;

// 		  if(coupon){

// 				const discount = await Coupon.findOne({code:coupon});
// 				if(!discount) throw new ErrorHandler("invalid code",401);

// 				discountAmount=discount.amount ;

// 		  }

// 		  const productIDs= items.map((item)=>item.productId);

// 		  const products=await Product.find({
// 			_id:{$in:productIDs},
// 		  })

// 		  const subtotal = products.reduce((prev, curr) => {
// 			const item = items.find((i) => i.productId === curr._id.toString());
// 			if (!item) return prev;
// 			return curr.price * item.quantity + prev;
// 		  }, 0);
		  
// 		  const tax = subtotal * 0.18;

// 		  const shipping = subtotal > 1000 ? 0 : 200;
		
// 		  const total = Math.floor(subtotal + tax + shipping - discountAmount);

// 		  const paymentIntent = await stripe.paymentIntents.create({
// 			amount: total * 100,
// 			currency: "inr",
// 			description: "MERN-Ecommerce",
// 			shipping: {
// 			  name: user.name,
// 			  address: {
// 				line1: shippinginfo.address,
// 				postal_code: shippinginfo.pinCode.toString(),
// 				city: shippinginfo.city,
// 				state: shippinginfo.state,
// 				country: shippinginfo.country,
// 			  },
// 			},
// 		  });

// 		   res.status(201).json({
// 			success: true,
// 			clientSecret: paymentIntent.client_secret,
// 		  });
	  

	
// })

export const newCoupon=TryCatch(async(req,res,next)=>{


			const {code,amount}=req.body ;

			if(!code || !amount){
				throw new ErrorHandler("please enter coupon and amount", 400) ;

			}

			await Coupon.create({code,amount}) ;

			 res.status(201).json({
				success: true,
				message: `Coupon ${code} Created Successfully`,
			  });




})

export const applyDiscount=TryCatch(async(req,res,next)=>{

		const {coupon}=req.query;
		const discount = await Coupon.findOne({ code: coupon });

		if (!discount) return next(new ErrorHandler("Invalid Coupon Code", 400));
	  
		res.status(200).json({
		  success: true,
		  discount: discount.amount,
		});



})


export const allCoupons=TryCatch(async(req,res,next)=>{

	const coupons=await Coupon.find({});

	res.json({
		success:true,
		coupons
	})
})


export const getCoupon=TryCatch(async(req,res,next)=>{

	const {id}=req.params ;
	const coupon= await Coupon.findById(id);
	res.json({
		success:true,
		coupon
	})
})



export const updatedCoupon=TryCatch(async(req,res,next)=>{

	const {id}=req.params ;
	const {code,amount}=req.body ;

	const coupon= await Coupon.findById(id);
	if (!coupon) return next(new ErrorHandler("Invalid Coupon ID", 400));


	if(code) coupon.code=code;
	if(amount) coupon.amount=amount;

	await coupon.save();

	 res.status(200).json({
	  success: true,
	  message: `Coupon ${coupon.code} Updated Successfully`,
	});

})

export const deleteCoupon=TryCatch(async(req,res,next)=>{

		const {id}=req.params;
		const coupon=await Coupon.findByIdAndDelete(id);
		if (!coupon) throw new ErrorHandler("Invalid Coupon ID", 400);

res.status(200).json({
    success: true,
    message: `Coupon ${coupon.code} Deleted Successfully`,
  });
})


