import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';






const UpdateProduct = () => {
	const params = useParams();

	const[product,setProduct]=useState({
		name:"",
		price:"",
		stock:"",
		category:""

	});
	const[photo,setPhoto]=useState<File |null>(null);


	const updateHandler=()=>{
		
	}

	const changeHandler=(e: React.ChangeEvent<HTMLInputElement>)=>{
		setProduct((prevState)=>({...product,[e.target.name]:e.target.value}))

	}

	const handleFileChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
		if(e.target.files && e.target.files[0]){

			setPhoto(e.target.files[0]);
		}
	}

	// make apicall(params.id);


	useEffect(()=>{
		// make request
	})
  return (
	<div className='flex flex-col justify-center items-center'>

		<p className='font-semibold'>UPDATE PRODUCT</p>
		
<form action="" className='flex flex-col gap-2 md:gap-5 md:text-md  text-sm font-semibold' >


<label htmlFor="">NAME</label>
<input className=' outline-none border-0 border-b border-b-[#a7bcff]' type="text" name="" id=""   value={product.name} onChange={(e)=>changeHandler(e)}/>

<label htmlFor="">PHOTO</label>
<input className='outline-none border-0   border-b border-b-[#a7bcff]' type="file" name="" id=""   onChange={(e)=>handleFileChange(e)} />

<label htmlFor="">PRICE</label>
<input className='border-0 border-b border-b-[#a7bcff]' type="text" name="" id="" value={product.price} onChange={(e)=>changeHandler(e)}/>

<label htmlFor="">STOCK</label>
<input className='border-0 border-b border-b-[#a7bcff]' type="text" name="" id="" value={product.stock} onChange={(e)=>changeHandler(e)}/>

<label htmlFor="">category</label>
<input className='border-0 border-b border-b-[#a7bcff]' type="text" name="" id="" value={product.category} onChange={(e)=>changeHandler(e)}/>

<button onSubmit={()=>(updateHandler())}
 className='text-white font-bold mt-3 bg-gradient-to-br
          from-pink-500 to-pink-500 hover:from-pink-600 hover:to-pink-600 px-4 py-2 rounded-md'>UPDATE</button>
</form>
	</div>
  )
}

export default UpdateProduct