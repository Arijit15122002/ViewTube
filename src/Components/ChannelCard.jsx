import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../Utils/Constants'

function ChannelCard ({ channelDetail }) {
  return (
    <>
	<div className='bg-inherit flex flex-col shadow-md shadow-neutral-950 mt-7 md:mx-10 sm:mx-auto rounded-xl h-[63vw] w-[86vw] md:h-[30vw] md:w-[35vw] xl:h-[21.5vw] xl:w-[26vw]'>
		<Link to={`/channel/${channelDetail?.id?.channelId}`} className='rounded-xl sm:h-[50vh] md:h-[30vh] xl:h-[14rem]'>
		<img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt="" className=' my-auto mx-auto rounded-full object-cover h-full'/>
		</Link>
		<div className='flex flex-col'>
			<div className='mx-auto text-white font-semibold text-lg px-5 pt-3'>
				{channelDetail?.snippet?.title}
			</div>
			<div>
				{
					channelDetail?.statistics?.subscriberCount && (
						<div>
							parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()
						</div>
					)
				}
			</div>
		</div>
	</div>
    </>
  )
}

export default ChannelCard