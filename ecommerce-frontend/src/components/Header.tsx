import React, { useState } from 'react'

import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

import '../styles/app.scss'
import '../index.css'
import Menu from './Menu';
const user = { id: "2", role: "admin" }

const Header = () => {

	const [isOpen, setIsopen] = useState<boolean>(false);
	const cart= useSelector((state:RootState)=>state.cartReducer)
	console.log(cart);
	return (



		<div className='sticky top-0 h-20 px-4 md:px-8 lg:px-16   bg-purple-800'>

			<div className='h-full flex  justify-between items-center  md:hidden '>

				<Link to="/" className='font-bold'>SHOPIPLACE</Link>
				<Menu />

			</div>

			{/* bigger screen */}
			<div className=' items-center justify-between gap-8 h-full hidden md:flex'>
				<div>

					<Link to="/" className='font-bold'>SHOPIPLACE</Link>
				</div>


				<div className='flex gap-16'>


					<Link to="/"><AiFillHome />
					</Link>
					<Link to="/search" className=' '><FaSearch />
					</Link>
					<div className='relative'>

					<Link to="/cart" className=''><AiOutlineShoppingCart /></Link>
					<div className='absolute  text-white text-sm bg-red-1 -top-5 -right-2 rounded-full w-6 h-6 flex justify-center'>2</div>
					</div>
					{
						user?.id ? (
							<>
								<button onClick={() => setIsopen((prev) => !prev)}><FaUser /></button>
								<dialog open={isOpen}>
									<div>
										{user.role === "admin" && (
											<Link to="/admin/dashboard">Admin</Link>
										)}
										<button>signout</button>
									</div>
								</dialog>

							</>

						) : (<Link to="/login">Login</Link>)
					}
				</div>
			</div>





		</div>

	)
}

export default Header