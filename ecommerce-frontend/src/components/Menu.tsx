import React ,{useState}from 'react'
// Link
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';




const Menu = () => {

	const [open,setOpen]=useState(false);
  return (
	<div>
	
		 	<IoMenu className='cursor-pointer' onClick={()=>setOpen((prevState)=>(!prevState))}/>
			{
			open &&(
				<div className='absolute  bg-black text-white left-0 top-20 flex flex-col justify-center items-center space-y-4 w-[100%] h-screen text-xl mr-0'>

				<Link to="/">Home</Link>
				<Link to="/">Shop</Link>
				<Link to="/">Contact</Link>
				<Link to="/">Logout</Link>
				<Link to="/">Cart</Link>
				
				</div>
			)
			}

	</div>
  )
}

export default Menu
