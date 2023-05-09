import React from 'react'
// import {data} from '../data/data'
const Header = (props) => {
  return (
  
    <div className='flex justify-between my-6 py-14' >
      
      <h1 className='text-3xl font-semibold' >{props.heading}</h1>
      <button   className=" text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{props.btn}</button>
    </div>

  
  
  ) 
}

export default Header
