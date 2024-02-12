import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle  } from '../Utils/Constants'

function SideVideoCard ({video: {id: {videoId}, snippet}}) {
  return (
    <div className='flex flex-row w-[34vw] h-[9rem] bg-inherit rounded-3xl shadow-md shadow-black'>
        <Link to={videoId ? `http://localhost:5173/video/${videoId}` : demoVideoUrl} className='w-[12rem] h-[7rem] rounded-2xl my-auto'>
            <img src={snippet?.thumbnails?.high?.url} alt="" className='w-full h-full rounded-2xl object-cover'/>
        </Link>
        <div className='flex flex-col w-64 h-full px-2 py-2 gap-2 '>
            <Link to={videoId ? `video/${videoId}` : demoVideoUrl} className='text-white text-md font-semibold'>{snippet?.title || demoVideoTitle}</Link>
            <Link to={snippet.channelId ? `channel/${snippet.channelId}` : demoChannelUrl} className='text-stone-300 hover:underline'>{snippet?.channelTitle || demoChannelTitle}</Link>
        </div>
    </div>
  )
}

export default SideVideoCard