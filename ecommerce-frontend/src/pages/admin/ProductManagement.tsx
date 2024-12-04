import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// Link
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

const ProductManagement = () => {


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

const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
	if (e.target.files && e.target.files[0]) {
		setPhoto(e.target.files[0]);
	  }
	
}

useEffect(()=>{
	console.log("i am in admin product")
})



  return (
	<div className='flex  w-full  flex-col gap-2'>
		
<div className='w-full text-center'>


<button  className='py-4 px-2 hover:bg-teal-400 rounded-md ring-1 hover:ring-teal-400 '><Link to="/admin/dashboard/newproduct">ADD NEW PRODUCT</Link></button>
</div>


<table className='w-full'>
	<tr className='  w-full'>
		<th className='p-3 text-sm font-semibol text-left '>image</th>
		<th className='p-3 text-sm font-semibol text-left '>name</th>
		<th className='p-3 text-sm font-semibol text-left '>price</th>
		<th className='p-3 text-sm font-semibol text-left '>stock</th>
		<th className='p-3 text-sm font-semibol text-left flex-shrink-1'>category</th>
		<th className='p-3 text-sm font-semibol text-left flex-shrink-1'>Action</th>
	</tr>
	<tr>
		<td className='p-3 text-sm font-semibol text-left '>image</td>
		<td className='p-3 text-sm font-semibol text-left  '>name</td>
		<td className='p-3 text-sm font-semibol text-left '>price</td>
		<td className='p-3 text-sm font-semibol text-left '>stock</td>
		<td className='p-3 text-sm font-semibol text-left '>category</td>
		<td className='p-3 text-sm font-semibol text-left '><button className='py-4 px-2 hover:bg-teal-400 rounded-md ring-1 hover:ring-teal-400 '><Link to="/admin/dashboard/updateproduct/id">Manage
		</Link>
			</button></td>
	</tr>
</table>






	</div>
  )
}

export default ProductManagement