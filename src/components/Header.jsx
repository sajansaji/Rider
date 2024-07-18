// import React from 'react'
import { LogIn } from 'lucide-react';

const Header = () => {
  return (
    <>

      <div className='w-full h-16 shadow-md sticky fredoka text-center flex gap-3 justify-end pr-14 items-center content-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 backdrop-blur-sm'>
        {/* space for logo */}
        <ol className=" flex gap-3 text-white" >
          <li className=' hover:bg-[#dbe9e1] hover:text-slate-900 hover:shadow-md border-1 px-2 rounded-full p-1'>Explore</li>
          <li className='hover:bg-[#dbe9e1] hover:text-slate-900 hover:shadow-md border-1 px-2 rounded-full p-1'>Plan</li>
        </ol>
        <a href="/auth" className=' hover:bg-[#dbe9e1] hover:shadow-md border-1 px-2 rounded-full p-1'><LogIn className='text-white hover:text-slate-900' /></a>
      </div>
      <div></div>
    </>
  )
}

export default Header