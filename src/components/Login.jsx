import React from 'react'
import '../assets/css/login.css'
import Goog from '../assets/ico/Goog'
import Face from '../assets/ico/Face'
import { Mail, Lock} from 'lucide-react';
const Login = () => {
  return (
    <>
      <section className='border-2 border-[#00BDD6FF] p-5 rounded-md mx-8 mt-32 shadow-sm shadow-black bg-[#EBFDFFFF] '>

        {/* google and Facebook */}
        <a href="" >
          <section className=' p-2 mx-3 rounded-md border-2 border-[#DB4437FF] text-[#DB4437FF] my-4 text-center gap-2 flex items-center justify-center' >
            <Goog />
            Continue with Google
          </section>
        </a>
        <a href="">
          <section className=' p-2 mx-3 rounded-md border-2 text-center border-[#4267B2FF] text-[#4267B2FF] my-4 gap-2 flex items-center justify-center'>
            <Face /> Continue with Facebook
          </section>
        </a>
        <p className='text-center'>

          OR LOG IN WITH
        </p>

        <div className=''>
          Email Phone number
        </div>
       

        <div className='mx-4'>
          <div className=' my-2'>
          
            <label htmlFor="">Email</label><br /> <Mail /> 
            <input type="text" name="name" id="name" placeholder='      Enter email' className='bg-[#f3f4f6] py-3 w-[276px] rounded-md ' />
          </div>
          <div className=' my-2'>
            <label htmlFor="">Password</label> <br /> <Lock />
            <input type="password" name="pass" id="pass" placeholder='       Enter password' className='bg-[#f3f4f6] h-[52px] w-[276px] rounded-md ' />
            <section className='flex'><p className='text-[#00BDD6FF] '>Forgot Password? </p>
            <input type="checkbox" name="rem" id="rem" />  Remember me</section>

          </div>
        </div>


      </section>

    </>
  )
}

export default Login