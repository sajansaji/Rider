import React from 'react'

import Goog from '../assets/ico/Goog'
import Face from '../assets/ico/Face'
import { Mail, Lock} from 'lucide-react';

const Login = () => {
  return (
    <>
      <section className='border-2 border-[#00BDD6FF] p-5 rounded-md mx-8 mt-32 shadow-sm shadow-black bg-[#EBFDFFFF] lg:mx-96 '>

        {/* google and Facebook */}
        <a href="" >
          <section className=' p-2 py-3 mx-3 inter rounded-md border-2 border-[#DB4437FF] text-[#DB4437FF] my-4 text-center gap-2 flex items-center justify-center hover:text-[#8a3434] hover:border-[#8a3434] ' >
            <Goog />
            Continue with Google
          </section>
        </a>
        <a href="">
          <section className=' p-2 py-3 mx-3 inter rounded-md border-2 text-center border-[#4267B2FF] text-[#4267B2FF] my-4 gap-2 flex items-center justify-center hover:border-[#1b4394] hover:text-[#1b4394]'>
            <Face /> Continue with Facebook
          </section>
        </a>
        <p className='text-center epilogue'>

          OR LOG IN WITH
        </p>

        <div className='inter'>
          Email Phone number
        </div>
       

        <div className='mx-4 inter'>
          <div className=' my-2'>
          
            <label htmlFor=""><b>Email</b></label><br /> <Mail /> 
            <input type="text" name="name" id="name" placeholder='  Enter your email' className='bg-[#f3f4f6] py-3 w-[276px] lg:w-[350px] rounded-md ' />
          </div>
          <div className=' my-2 '>
            <label htmlFor=""><b>Password</b></label> <br /> <Lock />
            <input type="password" name="pass" id="pass" placeholder='     Enter password' className='bg-[#f3f4f6]  w-[276px] lg:w-[350px] rounded-md  py-3 ' />
            <section className='flex mt-2'><p className='text-[#00BDD6FF] justify-between '>Forgot Password?  </p>
            <input type="checkbox" name="rem" id="rem" value="rem"  />  Remember me</section>

          </div>
          <section className='justify-center text-center bg-[#00BDD6FF] rounded-md py-3 mt-4 text-white mb-3 inter' >
            <input type="submit" value="Continue" /> </section>
        </div>


      </section>
      <div></div>

    </>
  )
}

export default Login