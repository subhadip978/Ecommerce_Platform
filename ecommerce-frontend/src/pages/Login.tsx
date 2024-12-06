import React,{useState} from 'react'


import '../styles/login.scss'
import { useLoginMutation } from '../redux/api/userApi';
import { useDispatch } from 'react-redux';
import { userExist } from '../redux/reducer/userRedux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Login = () => {
	const navigate=useNavigate()

	const dispatch = useDispatch();
	const [login]=useLoginMutation();

	const [inputs,setInputs]=useState({
		name:"",
		email:"",
		
		password:""

	})

	const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
		setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value}))

	}


	const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		console.log(inputs);
		const {data}=await login(inputs);
		console.log(data);
		toast.success("Successfully logged in ")
		if(data?.user){


			dispatch(userExist(data?.user));
			navigate("/")
		}

	}


	

  return (
	<div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
	<form  onSubmit={handleSubmit} className="flex flex-col gap-8">
	  <h1 className="text-2xl font-semibold"></h1>
	
		<div className="flex flex-col gap-2">
		  <label className="text-sm text-gray-700">Username</label>
		  <input
			type="text"
			name="name"
			placeholder="john"
			className="ring-2 ring-gray-300 rounded-md p-4"
			onChange={(e) => changeHandler(e)}
		  />
		</div>
	
	  
		<div className="flex flex-col gap-2">
		  <label className="text-sm text-gray-700">E-mail</label>
		  <input
			type="email"
			name="email"
			placeholder="john@gmail.com"
			className="ring-2 ring-gray-300 rounded-md p-4"
			onChange={(e) => changeHandler(e)}
		  />
		</div>
	  
	  
		<div className="flex flex-col gap-2">
		  <label className="text-sm text-gray-700">Password</label>
		  <input
			type="password"
			name="password"
			placeholder="Enter your password"
			className="ring-2 ring-gray-300 rounded-md p-4"
			onChange={(e) => changeHandler(e)}
		  />
		</div>
	
	

	 
	  
	 <button >LOG IN</button>
	
	</form>
	</div>
  )
}


export default Login