import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'


import {fetchAPI} from '../Utils/fetchAPI'
import SideVideoNav from './SideVideoNav';

function VideoDetail () {

	const [videoDetail, setVideoDetail] = useState(null);

	const { id } = useParams()

	const [videos, setVideos] = useState([])

	useEffect(() => {
		fetchAPI(`videos?part=snippet,statistics&id=${id}`)
		.then((data) => setVideoDetail(data.items[0]))

		fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))

		console.log(videos);
	}, [id]);

	if(!videoDetail?.snippet) return 'Loading...'

	const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <>
	<div className='min-h-[90vh] flex xl:flex-row sm:flex-col'>
		<div className='flex flex-col'>
			<div className='w-[60vw] h-[77vh] overflow-hidden rounded-3xl ml-10 mt-5'>
				<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
			</div>
			<div className='text-white text-lg font-semibold px-4 pt-2 ml-10'>
			{title}
			</div>
			<Link to={`/channel/${channelId}`} className='text-neutral-400 text-md px-4 pt-2 ml-10 hover:text-white hover:underline'>
				{channelTitle}
			</Link>
		</div>
		<div className=''>
			<SideVideoNav videos={videos}/>
		</div>
	</div>
    </>
  )
}

export default VideoDetail