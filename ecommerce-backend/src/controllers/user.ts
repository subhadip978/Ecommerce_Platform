// src/controllers/user.ts
import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/type.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "../middlewares/error.js";

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signUp = TryCatch(async (req: Request<{}, {}, NewUserRequestBody>, res: Response, next: NextFunction): Promise<void> => {
  const { name, email, gender, role, _id,password } = req.body;

  if ( !name || !email || !gender)
    throw new ErrorHandler("Please add all fields", 400);

  const existedUser = await User.findOne({
    $or: [{ name }, { email }]
  })
  if (existedUser) {
    throw new ErrorHandler("User with email or username already exists", 409)
  }
   const salt=await bcrypt.genSalt(5);
  const hashedPass= bcrypt.hashSync(password,salt );
  const user = await User.create({
    name,
    email,

    gender,
    role,
  
    password
  });

   res.status(201).json({ success: true, user });

})




export const signin = TryCatch(async (req: Request, res: Response, next: NextFunction):Promise<void> => {

  const { email, name, password } = req.body;
  if (!name && !email) {
    throw new ErrorHandler("username or email is required", 400);
  }
  const user = await User.findOne({
    $or: [{ name }, { email }]
  })

  if (!user) {
    throw new ErrorHandler("User does not exist", 404)
  }

  const matchPassword = await bcrypt.compare(password, user.password);
  const options = {
    httpOnly: true,
  }
  if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in the environment variables");
  }

  const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
console.log("accesstoken");
  if (user && matchPassword) {
    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .json({
        name: user.name,
        email: user.email,

      });

  }
})






export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    const users = await User.find({});
    res.status(200).json({
      success: true,
      users
    })
  } catch (err) {
    next(err);

  }
}


export const getUser = TryCatch(async (req: Request, res: Response, next: NextFunction) => {


  const id = req.params.id;
  const user = await User.findById({ id });

  if (!user) {
    throw new ErrorHandler("invalid id", 400);
  }
  res.status(200).json({
    success: true,
    user
  })


})




export const deleteUser = TryCatch(async (req: Request, res: Response, next: NextFunction) => {


  const id = req.params.id;
  const user = await User.findById({ id });

  if (!user) {
    throw new ErrorHandler("invalid id", 400);
  }
  res.status(200).json({
    success: true,
    user
  })
}
)









