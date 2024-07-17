// import React from 'react'
import { LogIn } from 'lucide-react';

const Header = () => {
  return (
    <>

    <div className='w-full h-16 shadow-md sticky inter text-center flex gap-3 justify-end pr-14 items-center content-center bg-white'>
        {/* space for logo */}
        <ol className=" flex gap-3  " >
          <li className='bg-[#f6f6f7] hover:bg-[#c8c8c9] shadow-md border-1  rounded-md p-1'>Explore</li>
          <li className='bg-[#f6f6f7] hover:bg-[#c8c8c9] shadow-md border-1  rounded-md p-1'>Plan</li>
        </ol>
        <a href="/auth" className=' bg-[#f6f6f7] hover:bg-[#c8c8c9] shadow-md border-1  rounded-md p-1'><LogIn/></a> 
    </div>
    <div></div>
    </>
  )
}

export default Header