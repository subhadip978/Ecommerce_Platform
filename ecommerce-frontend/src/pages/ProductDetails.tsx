import React from 'react'

import  Img from '../assets/images/amz.jpg'



const ProductDetails = () => {
  return (
	<div className='flex justify-center  space-x-10'>
		<div className='mt-14 md:mt-6 ml-6'>
			<img src={Img} alt="" srcSet="" className='ring-1 ring-black h-5/6'/>
		</div>

			<div className=' flex  flex-col space-y-10 mt-5 '>
				<span className='text-4xl font-bold'>
					product title
				</span>
				<span className='w-9/12'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloremque assumenda repellat Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, pariatur?
				</span>
				<span className='font-bold'>product price</span>


			<div>
				<button className=' hover:bg-red-1 hover:text-white rounded-xl ring-1 ring-bg-red-1  py-2 px-4 text-xs'>Add to Cart</button>
			</div>
			</div>




	</div>
  )
}

export default ProductDetails