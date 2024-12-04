import React from 'react'
import ProductCard from '../components/ProductCard'
import pic from '../assets/images/amz.jpg'
import CategoryList from '../components/CategoryList'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartRedux'
import { product } from '../types/types'
import toast, { Toaster } from "react-hot-toast";


const sampleProducts = [
	{
	  productId: 1,
	  photo: pic,
	  name: 'Product A',
	  price: 29.99,
	  stock: 10,
	//   handler: () => alert('Product A added to cart'),
	},
	{
	  productId: 2,
	  photo: pic,
	  name: 'Product B',
	  price: 49.99,
	  stock: 0,
	//   handler: () => alert('Product B added to cart'),
	},
	{
	  productId: 2,
	  photo: pic,
	  name: 'Product C',
	  price: 19.99,
	  stock: 5,
	//   handler: () => alert('Product C added to cart'),
	},
	{
		productId: 3,
		photo: pic,
		name: 'Product C',
		price: 19.99,
		stock: 5,
		// handler: () => alert('Product C added to cart'),
	  },
	  {
		productId: 4,
		photo: pic,
		name: 'Product C',
		price: 19.99,
		stock: 5,
		// handler: () => alert('Product C added to cart'),
	  },
  ];

const HomePage = () => {
	const dispatch= useDispatch()

	const addToCartHandler=(cartItem: product)=>{

		if (cartItem.stock < 1) return toast.error("Out of Stock");
		dispatch(addToCart(cartItem))


	}
	return (
	<div className='px-4'>
		<div><Toaster/></div>
		<div className='bg-pink-300 p-4 flex justify-between items-center  h-64 rounded-lg'>
			<div className='flex flex-col w-2/3 justify-center items-center space-y-4'>
				<h1 className='text-4xl text-balance font-semibold'>Grap up to 50% off on <br/>selected products</h1>
				<button className='rounded-3xl bg-red-1 px-3  py-2 text-sm w-max'>Buy Now</button>
			</div>

			<div>

			</div>

		</div>
		<div className='mt-20 px-4 md:px-8     '>
			<h1 className='text-2xl font-semibold'>Featured Products</h1>
			<div className='flex overflow-x-scroll space-x-5'>

			{sampleProducts.map((product) => (
				<ProductCard productId={product.productId} photo={product.photo} name='macbook' price={1230} stock={20} handler={addToCartHandler }/>
				))}
				</div>
		</div>

		<div className='mt-20 px-4 md:px-8 flex overflow-x-scroll  '>
			<h1 className='text-2xl'>Categories</h1>
			{sampleProducts.map((product)=>(

			<CategoryList productId='ygfns' photo={product.photo} />
			))}
		</div>



	</div>
  )
}

export default HomePage