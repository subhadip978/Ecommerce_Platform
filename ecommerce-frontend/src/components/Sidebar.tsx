import React from 'react'
const menuItem=[
	{name:"product"},
	{name:"user"},
		
]

const Sidebar = () => {
  return (
	<div className='flex flex-col bg-[#384256] h-screen p-4 space-y-4'>
		
		{/* Sidebar */}

		{menuItem.map((i)=>{
						return(			
			
			<div className='text-md font-semibold text-white p-2 hover:bg-pink-600 hover:rounded-md key={}'>
				{i.name}
			
			
			</div>
				)

		})}
	</div>
  )
}

export default Sidebar