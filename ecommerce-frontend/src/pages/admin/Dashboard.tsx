import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

const Dashboard = () => {
  return (
	<div className='flex w-full flex-col'>	


	<Header/>	
	
<div className='flex'>
	
<Sidebar/>

		<section className='flex-1'>


		<Outlet/>
		</section>
	</div>	



		
	</div>
  )
}

export default Dashboard