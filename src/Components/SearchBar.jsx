import { React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton} from '@mui/material'

function SearchBar () {

	const [searchTerm, setSearchTerm] = useState("");

	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if(searchTerm)
		{
			navigate(`/search/${searchTerm}`)
			setSearchTerm('')
		}
	}

  return (
    <>
        <form
        onSubmit={handleSubmit}
        className='flex flex-row w-[50vw] '
		style={{backgroundColor: 'inherit'}}
		>
		<input type="text" placeholder='Search'
		className='w-[calc(50vw-60px)] p-[8px] px-5 text-lg rounded-full rounded-r-none border-solid border-[2px] border-white border-r-0 focus:outline-none text-white '
		style={{backgroundColor: '#101114'}}
		value={searchTerm}
		onChange={(e) => setSearchTerm(e.target.value)}
		/>

		<button className=' w-[60px] rounded-full rounded-l-none border-solid border-[2px] border-white border-l-0 '>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="30px" className='my-auto'>
  			<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" fill="red" />
		</svg>
		</button>
        </form>
    </>
  )
}

export default SearchBar