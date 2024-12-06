import React ,{useState} from 'react'
import { useSignupMutation } from '../redux/api/userApi'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';




const SignupPage = () => {
	
	const [inputs,setInputs]=useState({
		name:"",
		email:"",
		gender:"",
		role:"user",
		password:""

	})

	const [signup]=useSignupMutation();


	const registerHandler=async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
		e.preventDefault();
		if (!inputs.name || !inputs.email || !inputs.password || !inputs.gender) {
			toast.error("Please fill in all fields");
			return;
		  }
	  console.log(inputs);
		const res=await signup(inputs);
			console.log(res);
			toast.success("Successfully signed up || now please log in")

	}



	const changeHandler=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
		console.log(e.target.value)
		setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value}))

	}


	
  return (
	<div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
	<form className="flex flex-col gap-8">
	  <h1 className="text-2xl font-semibold"></h1>
	
		<div className="flex flex-col gap-2">
		  <label className="text-sm text-gray-700">Username</label>
		  <input
			type="text"
			name="name"
			value={inputs.name}
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
			value={inputs.email}
			placeholder="john@gmail.com"
			className="ring-2 ring-gray-300 rounded-md p-4"
			onChange={(e) => changeHandler(e)}
		  />
		</div>

		<div className='flex flex-col gap-2'>
			<label htmlFor="" className='text-sm text-gray-700'>GENDER</label>
			<select
			name="gender"
			value={inputs.gender}
			onChange={(e) => changeHandler(e)}
			>

			<option value=""> SELECT GENDER</option>
			<option value="male">male</option>
			<option value="female">female</option>
			</select>
		</div>


	  
	  
		<div className="flex flex-col gap-2">
		  <label className="text-sm text-gray-700">Password</label>
		  <input
			type="password"
			name="password"
			value={inputs.password}
			placeholder="Enter your password"
			className="ring-2 ring-gray-300 rounded-md p-4"
			onChange={(e) => changeHandler(e)}
		  />
		</div>
	
	

	 
	  
	 <button onClick={(e)=>(registerHandler(e))}>SIGN UP</button>
	 <p><Link to="/login">Login</Link></p>
	
	</form>
	</div>
  )
}

export default SignupPage