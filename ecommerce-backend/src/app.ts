import express from 'express'
import dotenv from "dotenv";
import userRoute from "./routes/user.js"
import productRouter from './routes/product.js'
import { errorMiddleware } from './middlewares/error.js';
import { connectDB } from './utils/feature.js';
import cors from 'cors';

const app= express();
const port =3000;
app.use(express.json())

dotenv.config();

app.use(cors({
	origin: 'http://localhost:5173/', // Replace with your frontend URL
	credentials: true,
  }));

connectDB()
app.get("/product",(req,res)=>{

	res.send("hello world")
})

app.use("/api/v1/user",userRoute) ;
app.use("/api/v1/product",productRouter) ;

app.use(errorMiddleware);



app.listen(port,()=>{
	console.log(`server is running at :${port}`)
})