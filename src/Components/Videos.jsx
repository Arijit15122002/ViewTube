import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import { Link } from 'react-router-dom'
import '../CSS/SideNavigation.css'

function Videos ({ videos }) {
    return (
    <>
        <div className=' w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)] px-10 overflow-y-auto overflow-x-clip' id='scroll'>
        {
            videos.map((item, id) => (
            <div key={id}>

                {item.id.videoId && <VideoCard video={item}/> }
                {item.id.channelId && <ChannelCard channelDetail={item}/> }
            </div>
            ))
        }
        
        </div>
    </>
  )
}

export default Videos