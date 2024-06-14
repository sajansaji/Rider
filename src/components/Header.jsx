// import React from 'react'
import { LogIn } from 'lucide-react';

const Header = () => {
  return (
    <>

    <div className='w-full h-16 shadow-md sticky top-0 inter text-center flex gap-3 justify-center items-center content-center'>
        {/* space for logo */}
        <ol className=" flex gap-3 " >
          <li className='hover:text-blue-600'>Explore</li>
          <li className='hover:text-blue-600'>Plan</li>
        </ol>
        <a href="/auth" className=' bg-[#f6f6f7] hover:bg-[#c8c8c9] shadow-md border-1 border-[#000] rounded-md p-1'><LogIn/></a> 
    </div>
    <div></div>
    </>
  )
}

export default Header