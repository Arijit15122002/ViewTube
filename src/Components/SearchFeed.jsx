import { React, useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideNavigation from './SideNavigation'
import '../CSS/SideNavigation.css'
import '../CSS/viewTube.css'
import Videos from './Videos'
import { fetchAPI } from '../Utils/fetchAPI'
import { useParams } from 'react-router-dom' 



function SearchFeed () {
	const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()

	useEffect(() => {
		fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
	}, [searchTerm])

  return (
    <>
	<div className='flex flex-col md:flex-row  md:fixed'>


		<div className='h-[calc(100vh - 4rem)] w-full'>

			<div className='p-3'  id='font'>
				<span className='text-2xl font-semibold text-white mx-3'>Search Results for: </span>
				<span className='text-2xl font-bold' style={{color: 'rgb(235, 8, 8)'}}>{searchTerm}</span>
        <span className='text-2xl font-semibold text-white mx-3'>Videos </span>
			</div>

			<div className='w-full md:w-[calc(100vw - 12rem)] '>

				<Videos videos={videos}/>

			</div>

		</div>
	</div>
    </>
  )
}

export default SearchFeed
