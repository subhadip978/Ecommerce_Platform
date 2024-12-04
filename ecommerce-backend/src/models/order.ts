import mongoose ,{Schema} from 'mongoose' ;


const schema= new Schema({
	shippingInfo:{
		address:{
			type:String,
			required:true,
		},
		city:{
			type:String,
			required:true,
		},
		state:{
			type:String,
			required:true,
		},
		pincode:{
			type:Number,
			required:true,
		},
		country:{
			type:String,
			required:true
		}

	},
tax:{
	type:Number,
	required:true
},
shippingcharges:{
	type:Number,
	required:true,
},
discount:{
	type:Number,
	required:true,
},
total:{
	type:Number,
	required:true,
},
status:{
	type:String,
	enum:["Processing","shipped","Delivered"],
	default:"Proecssing"
},

orderItems:[
	{
		name:String,
		photo:String,
		price:Number,
		quantity:Number,
		
			productId:{
				type:mongoose.Types.ObjectId,
				ref:"Product",
			},
		},
]


})



export const Order=mongoose.model("Order",schema);
