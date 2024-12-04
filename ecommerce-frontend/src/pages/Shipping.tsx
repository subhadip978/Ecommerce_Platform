import React, { ChangeEvent, useState } from 'react'

import '../styles/shipping.scss'


const Shipping = () => {

const [shippingInfo,setShippingInfo]=useState({
	address:"",
	city:"",
	state:"",
	country:"",
	pin:""

});


const handleChange=(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
 	e.preventDefault();
 	setShippingInfo((prev)=>({...prev,[e.target.name]:e.target.value}))
}


const shippingHandler=()=>{
	
}


  return (
	<div className='shipping'>
		
		<form>			
			<h1>SHIPPING ADDRESS</h1>

			<input type="text" name="address" value={shippingInfo.address} id=""  onChange={handleChange} />

			<input type="text" name="city" id=""     value={shippingInfo.city} onChange={handleChange}/>

			<input type="text" name="state" id=""    value={shippingInfo.state} onChange={handleChange}/>

			<select 
			name="country"
			id=""			
			onChange={handleChange}
			value={shippingInfo.country}
			>
				<option value="">Choose Country</option>
				<option value=""> INDIA</option>
				<option value=""> U.S</option>
				<option value=""> U.K</option>

			</select>

			<input type="text" name="pin" id=""      value={shippingInfo.pin} onChange={handleChange}/>
			
			<button type="submit">Pay now</button>
		</form>
	</div>
  )
}

export default Shipping
