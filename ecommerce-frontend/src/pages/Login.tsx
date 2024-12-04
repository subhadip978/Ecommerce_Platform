import React,{useState} from 'react'
import { FcGoogle } from 'react-icons/fc';

import '../styles/login.scss'

const Login = () => {

	const [gender,setGender]=useState();

	const handleChange=()=>{
		try{

		}catch(err){
			console.log(err);
		}
	}
	

  return (
	<div className="login">

		<main>
			<h1>LOG IN</h1>
			<div>
				<label htmlFor="">Gender</label>
				<select 
				name="gender" 
				value={gender} 
				onChange={handleChange}>
					<option value="">Select Gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			</div>
			<div>
				<label htmlFor="">Date</label>
				<input type="date" name="date" id="" />
			</div>

			<div>
				<p>Already Signed In</p>
				<button>
					<FcGoogle/><span>Sign in with google</span>
				</button>
			</div>
		</main>

	</div>
  )
}


export default Login