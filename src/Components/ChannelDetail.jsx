import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchAPI } from '../Utils/fetchAPI';
import '../CSS/channelDetail.css'

function ChannelDetail () {
	const { id } = useParams();
	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
	.then((data) => setVideos(data?.items))
  }, [id])

  return (
    <>
    <div className='w-full'>
		<div className='w-full h-[40vh] -mb-28' style={{background: 'linear-gradient(0deg, rgba(16,17,20,1) 4%, rgba(17,122,68,1) 54%, rgba(0,205,93,1) 100%)', zIndex: '10'}}>
		</div>
		<div className=' text-zinc-300 text-sm w-[400px] mx-auto -mt-30 bg-inherit shadow-xl p-4 shadow-black rounded-3xl'>
			<div className='h-60 w-60 mx-auto'>
			<img src={channelDetail?.snippet?.thumbnails?.high?.url} alt="" className='rounded-full cursor-pointer' />
			</div>
			<div className='text-center flex flex-col gap-1'>
				<div className='text-white text-xl font-semibold' id='glow'>{channelDetail?.snippet?.title}</div>
				<div className=''>{channelDetail?.statistics?.subscriberCount} <span className='ml-1'>Subscribers</span> </div>
				</div>
			</div>
		</div>
		<Videos videos={videos} />
    </>
  )
}

export default ChannelDetail