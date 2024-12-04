import React,{useState,useEffect} from 'react'
import { TbFaceIdError } from "react-icons/tb";
import CartItems from '../components/CartItems';
import Image from '../assets/images/amz.jpg'
import '../styles/cart.scss'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addToCart, removeCartItem ,calculatePrice} from '../redux/cartRedux';

import {  product} from "../types/types";

const cartItems=[

{
  productId:"agghd",
  photo:Image,
  name:"macbook",
  price:3000,
  quantity:40,
  stock:20
},

{
  productId:"agghd",
  photo:Image,
  name:"macbook",
  price:3000,
  quantity:40,
  stock:20
},

{
  productId:"agghd",
  photo:Image,
  name:"macbook",
  price:3000,
  quantity:40,
  stock:20
},

{
  productId:"agghd",
  photo:Image,
  name:"macbook",
  price:3000,
  quantity:40,
  stock:20
}


];
const subtotal=2000;
const tax=subtotal *.18 ;
const shippingcharges=200;
const total= subtotal+tax+ shippingcharges ;
const discount=400;



const Cart = () => {


  const {products,subtotal,shippingCharges,tax,total}=useSelector((state:RootState)=>state.cartReducer);
  const dispatch= useDispatch();

  const [couponCode,setCouponCode]=useState<string>();
  const [isValidCouponCode,setIsValidCouponCode]=useState<boolean>(true);



const incrementHandler=(product:product)=>{
  dispatch(addToCart({...product,quantity:product.quantity+1}))
}

const decrementHandler=(product:product)=>{
  dispatch(addToCart({...product,quantity:product.quantity -1}));
}

const removeItemHandler=(productId:string)=>{
  dispatch(removeCartItem(productId));
}

// const calculatedPrice=()=>{
//   dispatch(calculatePrice());
// }





 useEffect(()=>{
  dispatch(calculatePrice());

 })

  return (
	<div className='cart'>
    <main>
     <h1>
     cart items
      </h1> 
     {cartItems.length >0 ?( cartItems.map((c,index)=>
     <CartItems key={index} cartItem={c}/>

      )):(<h1>not item</h1>)
    }

    </main>
    <div>
      <h1 className='text-lg font-semibold text-center'>ORDER SUMMERY</h1>
      {/* <div> */}


      <h1 className='border-t border-black w-full'> </h1>
      <div className='flex justify-between w-2/3 '>

      <span>SUBTOTOTAL:</span>
      <span>{subtotal}</span>

      </div>
      <div className='flex justify-between w-2/3'>
      <span>Shipping Charges:</span>
      <span>{shippingCharges}</span>

      </div>

      <div className='flex justify-between w-2/3'>
     
      <span>Tax :</span>
      <span>{tax}</span>

      </div>
      <div className='flex justify-between w-2/3'>
        <span>Total:</span>
        <span>{total}</span>

     
      </div>

      <div  className='flex justify-between w-2/3'>
        <span>Discount: </span>
        <span><em> {discount}</em></span>
      </div>
    

      <input type=""
      value={couponCode}
      onChange={((e)=>{setCouponCode(e.target.value)})}
       />
 {couponCode &&( isValidCouponCode ? (
  <span>{discount} off using the {couponCode}</span>
) : (
  <span>invalid coupon <TbFaceIdError /></span>
))}

{
  cartItems.length>0 &&
 <Link className="an" to="/shipping">Checkout</Link>

  
}

{/* </div> */}
    </div>
  </div>
  )
}

export default Cart