import React from 'react'
import { Link } from 'react-router-dom'

import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle  } from '../Utils/Constants'



function VideoCard ({video : { id : { videoId }, snippet }}) {
  return (
    <>
	<div className='bg-inherit flex flex-col shadow-xl shadow-neutral-950 mt-7 md:mx-10 sm:mx-auto rounded-xl h-[67vh] w-[86vw] md:h-[50vh] md:w-[35vw] xl:h-[50vh] xl:w-[26vw]'>
		<Link to={videoId ? `http://localhost:5173/video/${videoId}` : demoVideoUrl} className='rounded-xl sm:h-[50vh] md:h-[30vh] xl:h-[14rem]'>
			<img src={snippet?.thumbnails?.high?.url} alt="" className='rounded-xl object-cover h-full w-full '/>
		</Link>
		<div className='flex flex-col'>
			<Link to={videoId ? `video/${videoId}` : demoVideoUrl} className='text-white font-semibold text-[17px] px-5 pt-3'>{snippet?.title || demoVideoTitle}</Link>
			<Link to={snippet.channelId ? `channel/${snippet.channelId}` : demoChannelUrl} className='text-neutral-400 px-5 hover:text-white duration-200 ease-out hover:underline '>{snippet?.channelTitle || demoChannelTitle}</Link>
		</div>
	</div>

    </>
  )
}

export default VideoCard