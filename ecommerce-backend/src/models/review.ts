import mongoose ,{Schema} from 'mongoose' ;

const schema =new Schema({
	comment:{
		type:String,
		maxlength:[200,"plase eneter the comment"]
	},
	ratings:{
		type:Number,
		min:[5,"ratign must be at least one "],
		max:[10,"rating should  not be more than 10"]

	},

	user:{
		type:String,
		ref:"User",
		required:[true,"please eneter user name"]
	},
	product:
	{
		typr:mongoose.Types.ObjectId,
		ref:"Product",
		required:true



	}
})


const Review= mongoose.model("Review",schema);