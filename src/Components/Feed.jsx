import { React, useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideNavigation from './SideNavigation'
import '../CSS/SideNavigation.css'
import '../CSS/viewTube.css'
import Videos from './Videos'
import { fetchAPI } from '../Utils/fetchAPI'



function Feed () {

	const [selectedCategory, setSelectedCategory] = useState('New');

	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
	}, [selectedCategory])

  return (
    <>
	<div className='flex flex-col md:flex-row  md:fixed'>
		<div className='h-auto md:h-[90vh] px-3 overflow-x-auto overflow-y-clip md:overflow-y-auto md:overflow-x-clip' id='scroll' style={{backgroundColor: '#101114'}}>
			<SideNavigation
				selectedCategory = {selectedCategory}
				setSelectedCategory = {setSelectedCategory}
			/>
		</div>


		<div className='h-[calc(100vh - 4rem)] flex flex-col'>

			<div className='p-3'  id='font'>
				<span className='text-2xl font-semibold text-white mx-3'>{selectedCategory}</span>
				<span className='text-2xl font-bold' style={{color: 'rgb(235, 8, 8)'}}>Videos</span>
			</div>

			<div className='w-full md:w-[calc(100vw - 12rem)] '>

				<Videos videos={videos}/>

			</div>

		</div>
	</div>
    </>
  )
}

export default Feed
