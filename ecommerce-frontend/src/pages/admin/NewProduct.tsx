import React, { useState } from 'react'


type Product = {
	name: string;
	price: string;
	stock: string;
	category: string;
  };

const sample=[
	{
	name: "string",
	price: "string",
	stock: "string",
	category: "string",

	},
	{		
			name: "string",
			price: "string",
			stock: 3,
			category: "string",
		
			}
	
]
const NewProduct = () => {


const [product,setProduct]=useState<Product>({
	name:"",
	price:"",
	stock:"",
	category:""
})

const [products,setProducts]=useState<Product[]>([]);
const [photo, setPhoto] = useState<File | null>(null);


	const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
		setProduct((prev)=>({...prev,[e.target.name]:e.target.value}))
	}

	const handleFileChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
		if (e.target.files && e.target.files[0]) {
			setPhoto(e.target.files[0]);
		  }
	}
	
	const submitHandler=()=>{
		try{
	
			const formData= new FormData();
	
			formData.append("name", product.name);
			formData.append("price", product.price);
			formData.append("stock", product.stock);
			formData.append("category", product.category);
			if (photo) formData.append("photo", photo);
	
			
			setProducts(products);
	
		}catch(err){
			console.log(err);
		}
	}
  return (
	<div className='flex  justify-center'>


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

<button onSubmit={submitHandler} className='text-white font-bold mt-3 bg-gradient-to-br
          from-pink-500 to-pink-500 hover:from-pink-600 hover:to-pink-600 px-4 py-2 rounded-md'>SUBMIT</button>
</form>
	</div>
  )
}

export default NewProduct

