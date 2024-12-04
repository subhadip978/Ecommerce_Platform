import react from 'react';
import {FaPlus} from 'react-icons/fa' ;
import { Link } from 'react-router-dom';
import { product } from '../types/types';
// Link

type ProductProps={
	productId:number;
	photo:string;
	name:string;
	price:number;
	stock:number;
	handler:(cartItem:product)=>string|undefined;


}

  
const server="hjbcsjewk"

const ProductCard=({productId,photo,name,price,stock,handler}:ProductProps)=>{

	return (

		<div className='flex flex-col justify-between   mt-10 w-[18rem]  shadow-xl rounded-md p-4 flex-shrink-0 '>
			<img src={photo} alt="" className='  object-cover  '  />

			<div className='flex justify-between '>
				<Link to="/product/1">
			<p className='font-semibold'>{name}</p>
				</Link>
			<span className='font-semibold'>{price}</span>
			</div>

			
				<button className='px-4 py-2 text-xs rounded-2xl hover:bg-red-1 hover:text-white ring-2 ring-red-1 w-max mt-3' onClick={()=>handler({productId,price,name,photo,stock,quantity:1})}>
					ADD TO CART
				</button>
			
		</div>

	)

}

export default ProductCard ;