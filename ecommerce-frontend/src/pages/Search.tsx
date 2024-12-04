import React,{useState} from 'react'

import pic from "../assets/images/amz.jpg";
const sampleProducts = [
	{
	  productId: '1',
	  photo: pic,
	  name: 'Product A',
	  price: 29.99,
	  stock: 10,
	  handler: () => alert('Product A added to cart'),
	},
	{
	  productId: '2',
	  photo: pic,
	  name: 'Product B',
	  price: 49.99,
	  stock: 0,
	  handler: () => alert('Product B added to cart'),
	},
	{
	  productId: '3',
	  photo: pic,
	  name: 'Product C',
	  price: 19.99,
	  stock: 5,
	  handler: () => alert('Product C added to cart'),
	},
	{
		productId: '3',
		photo: pic,
		name: 'Product C',
		price: 19.99,
		stock: 5,
		handler: () => alert('Product C added to cart'),
	  },
	  {
		productId: '3',
		photo: pic,
		name: 'Product C',
		price: 19.99,
		stock: 5,
		handler: () => alert('Product C added to cart'),
	  },
  ];


  const categories = ["electronics", "fashion", "home"];



const Search = () => {

const[search,setSearch]=useState("");
const [sort,setSort]=useState("");
const [maxPrice,setMaxPrice]=useState(10000);
const [category,setCategory]=useState("");
const [page,setPage]=useState(1);


  return (

	<div className='flex mt-12 flex-col space-y-6'>
    <div className='flex space-x-4 space-y-4 justify-center items-center flex-wrap '>

   
  
    <div className=''>
      
      <select 
      name="" 
      id=""
      className=' bg-[#EBEDED] rounded-2xl py-2 px-4 w-[10em] text-xs'
      
      >
        <option value="">SORT BY</option>

        <option value="">None</option>
        <option value="asc">Price(Low to high)</option>
        <option value="desc">Price(High to low)</option>
      </select>

    </div>

    <div  className='py-2 px-4 rounded-2xl  bg-[#EBEDED]'>
    <h4>Max Price:{maxPrice || ""}</h4>
    <input
       type="range" 
       value={maxPrice}
       min={10}
       max={10000}
      
       onChange={(e)=>{setMaxPrice(Number(e.target.value))}}
      
      />
      

      </div>
      <div>

   

      <select 
      name="" 
      id=""
      className='py-2 px-4 rounded-2xl bg-[#EBEDED]'
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
      
      >
        <option value="">CATEGORY</option>
        {
          categories.map((i)=>(
            <option key={i} value="">
              {i.toUpperCase()}

            </option>
          ))
        }

      </select>
      </div>
      <div className=''>   

      <input type="text" 
      value={search}
      placeholder='Search by name ....'
      className='	border-2
      border-gray-400 rounded-2xl px-4 py-2  '
      onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    </div>


<div>
  <h3>
    PRODUCTS
  </h3>

    {sampleProducts.map((i) => {
  return (
    <div key={i.productId}>
    
      <h2>{i.name}</h2>
      <img src={pic} alt="" srcSet="" />
      <p>Price: {i.price}</p>
    </div>
  );
})}
</div>

    </div>

  )
}

export default Search