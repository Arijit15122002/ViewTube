import React from 'react'
import { categories } from '../Utils/Constants'
import '../CSS/SideNavigation.css'
import '../CSS/viewTube.css'

function SideNavigation ( { selectedCategory, setSelectedCategory} ) {
  return (
    <>
    <div className=' md:w-[10rem] md:my-auto flex flex-row overflow-x-auto py-5 md:flex-col md:overflow-y-auto gap-3 md:mr-5 ' id='font'>
        {
            categories.map((category) => (
                <button key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                id='items'
                className='w-[15rem] md:w-[12rem] h-[3rem] rounded-full transition-all duration-200 ease-in-out px-5 py-2  md:px-3'
                style={{
                  backgroundColor: category.name === selectedCategory && 'rgb(235, 8, 8)'
                }}>
                    <div className='sm:inline-flex md:flex md:flex-row'>
                    <span>
                    {category.icon}</span>
                    <span className='mt-[1px] ml-2'>{category.name}</span>
                    </div>
                </button>
            ))
        }
    </div>
    </>
  )
}

export default SideNavigation