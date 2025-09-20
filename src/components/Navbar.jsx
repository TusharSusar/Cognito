import React from 'react'
import Menu from './UI/Menu'
import { FaAngleDown } from 'react-icons/fa6'

function Navbar() {
  return (
    <div className='flex items-center justify-between px-2 md:px-4 mb-8 md:mb-4'>
        <div className='flex items-center space-x-2'>
            <div className='p-2 hover:bg-item-hover rounded-full cursor-pointer md:hidden'>
            <Menu width={25} height={25} color="#fff"/>
        </div>
        <span className='text-text text-md font-semibold hover:bg-item-hover px-2 py-2 md:px-4 flex items-center justify-center gap-2 rounded-full cursor-pointer'>Cognito<span><FaAngleDown /></span></span>
        </div>
      <h1 className="upgrade inline text-sm md:text-md border border-white border-dashed text-text px-6 py-2 font-semibold rounded-full bg-user-bubble cursor-pointer">Upgrade</h1>
    </div>
  )
}

export default Navbar
