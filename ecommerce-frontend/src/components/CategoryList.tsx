import React from 'react'

type CategoryListProps = {
	productId: string;
	photo: string;
  };


const CategoryList: React.FC<CategoryListProps> = ({productId,photo}) => {
  return (
	<div className='p-4  shadow-xl rounded-md  flex  flex-shrink-0 '>
		
		<div className='  '>
			<div className='bg-slate-100 w-full   '>
				<img src={photo} alt="" srcSet="" className='w-[18em] object-cover' />
			</div>
			<h1 className='font-semibold mt-8'>Category name</h1>
			</div>


	</div>
  )
}

export default CategoryList