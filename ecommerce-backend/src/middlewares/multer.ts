
import multer from 'multer' ;
import {v4 as uuid} from 'uuid'

const storage=multer.diskStorage({

	destination(req,file,callback){

		callback(null,"uploads");
	},
	filename(req,file,callback){

		const id=uuid();
		const extname=file.originalname.split(".").pop();
		const filename=`${id}.${extname}` ;
		callback(null,filename);
	}
});

export const singleUpload=multer({storage}).single("photo")


// You can  customize the storage configuration, Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files in Node.js applications