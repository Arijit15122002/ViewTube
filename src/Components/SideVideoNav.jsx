import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../Utils/fetchAPI'
import SideVideoCard from './SideVideoCard'
import '../CSS/SideNavigation.css'

const array = [
  { title: 'Wahh Shweta Ji😂😂', img:'https://wallpapers.com/images/featured/bgmi-53iv6fl796p3l763.jpg',dp:'https://yt3.ggpht.com/3mfjGsPvSNnZlfTKAU5hmzMzA7ESzrXVMVNJ1NFTON_OnM7lvQF_X7pBrL8KUwvSC-mpOy0O2w=s68-c-k-c0x00ffffff-no-rj' , channelName: 'AntarYami Shorts', views: '1.7k views', time: '13 hours ago' }, 
  {title: 'I solved open source PR problem for community', img:'https://c4.wallpaperflare.com/wallpaper/631/564/936/web-development-desk-flatdesign-wallpaper-preview.jpg', dp:'https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s68-c-k-c0x00ffffff-no-rj', channelName: 'Chai aur Code', views:'11k views', time:'13 hours ago'},
  {title:'"Dirtier Jokes"', img:'https://wallpapercave.com/wp/wp7585212.jpg', dp:'https://us.123rf.com/450wm/microone/microone1802/microone180200444/95547266-stand-up-comedy-neon-sign-with-microphone-and-red-curtain-vector-background.jpg?ver=6', channelName:'Standup Comedy', views:'3.6M views', time: '1 year ago'},
  {title:"Sunday Suspense | Durgeshnandini | Mirchi Bangla", img:'https://i.ytimg.com/vi/5Y3GCOYTzpY/maxresdefault.jpg', dp:'https://yt3.ggpht.com/os420spHqh9Svv_Ijfat-zgCeaBa7nE2s6m67otRbSSBMiYssiu1w4rn9Sq26rNN0s_Y1tfS-fM=s68-c-k-c0x00ffffff-no-rj', channelName:'Mirchi Bangla', views:'3.6M views', time:'1 week ago'}

]

function SideVideoNav ( {videos} ) {

  return (
    <>
      <div className=' ml-1 flex flex-col overflow-y-auto h-[85vh] my-5 px-6 py-4 rounded-2xl' id='scroll'>
	  {
        videos.map((item, id) => (
        <div className=' my-2' key={id}>
			{item.id.videoId && <SideVideoCard video={item}/> }
		</div>
        ))
      }
	  </div>
    </>
  )
}

export default SideVideoNav