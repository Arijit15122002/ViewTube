import React from 'react'
import {Link} from 'react-router-dom'
import {logo} from '../Utils/Constants'
import SearchBar from './SearchBar'
import '../CSS/viewTube.css'

function Navbar () {

  return (
    <>
    <div className='flex flex-row items-center p-2  justify-between h-[4rem] w-full' style={{backgroundColor: '#101114'}}>
        <Link to="/" className='w-12 my-auto cursor-pointer ml-5 flex flex-row'>
            <img src={logo} alt="" />
            <div className='text-4xl pl-3'>
            <span className='font-semibold' style={{ color:'white' }} id='font'>View</span>
            <span style={{ color:'red' }} id='font'>Tube</span>
            </div>
        </Link>
        <div className=''>
            <SearchBar/>
        </div>
        <div>

        </div>
    </div>
    </>
  )
}

export default Navbar