import mongoose, { Schema } from 'mongoose'

interface IUser extends Document{

	_id:string;
	name:string;
	email:string;
	photo:string;
	role:"admin" |"user";
	gender:"male"|"female";
	password:string
	createdAt:Date;
	updatedAt:Date;

}

const schema=new Schema({

	
	
	 name:{
		type:String,
		required:[true,"please enter Name"]
		},
	email:{
		type:String,
		unique:true,
		required:[true,"please enter Email"]
		},
	photo:{
		type:String,
		// requried:[true,"please enter profile"]
	},

	role:{
		type:String,
		enum:["admin","user"],
		default:"user",
	},
	gender:{
		type:String,
		enum:["male","female"],
		required:true
	},
	password:{
		type:String,
		required:true

	}},
		{
			timestamps:true

		},
	

)

export const User=mongoose.model<IUser>("User",schema)