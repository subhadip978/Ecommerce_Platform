import mongoose,{Schema} from 'mongoose' ;

const schema= new Schema({
	code:{
		type:Number,
		required:true,
	},
	amount:{
		type:Number,
		required:[true,"please eneter the amount "],
	}
})

export const Coupon= mongoose.model("Coupon",schema) ;