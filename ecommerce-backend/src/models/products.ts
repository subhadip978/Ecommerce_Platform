import mongoose,{Schema} from 'mongoose'

// interface iphoto{
// 	public_id:string;
// 	url:string;

// }

// interface productI extends Document{
// 	name:string;
// 	photos:{string};
// 	price:number;
// 	stock:number;
// 	category:string;
// 	description:string;
// 	ratings:number;
// 	numofreviews:Number;
// 	createdAt:Date;
// 	updatedAt:Date;

// }

const schema= new Schema({

	name:{
		type:String,
		required:[true,"please enter name"],
	},
	photos: {
        public_id: {
          type: String,
          required: [true, "Please enter Public ID"],
        },
        url: {
          type: String,
          required: [true, "Please enter URL"],
        },
      },
		
	price:{
		type:Number,
		required:[true,"please enter price "],

	},
	stock:{
		type:Number,
		required:[true,'please enter stock']
	},

	category:{
		type:String,
		required:[true,"please enter category"]

	},
		
		description:{
			type:String,
			required:[true,"please enter description"]

		},


	ratings:{
		type:Number,
		default:0
},
	numofreviews:{
		type:Number,
		default:0
	}
},{
	timestamps:true
})

export const Product= mongoose.model("Product",schema) ;