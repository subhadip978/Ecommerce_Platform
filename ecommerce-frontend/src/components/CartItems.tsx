import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/cart.scss'

type cartItemProps={
	cartItem:any;

}
const CartItems = ({cartItem}:cartItemProps) => {

	const {photo,productId,name,price,quantity,stock}=cartItem ;

  return (
	<div className="cartitem">
		<div className="carts">

		<img src={photo} alt={name} />
		<Link to={`/product/${productId}`}>{name}</Link>
		<span>{price}</span>
		
		</div>

		<div className=' flex flex-row justify-center items-center ring-red-1 ring-2 h-max space-x-4 rounded-lg p-2'
		
		>
			<button>
				-
			</button>
			<p>{quantity}</p>
			<button>+</button>
		<button>		
			<FaTrash/>
		</button>
		</div>

	</div>
  )
}

export default CartItems