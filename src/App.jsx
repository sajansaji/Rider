import React from 'react';
import Header from './components/Header';
import './assets/css/app.css';


const App = () => {

  return (
    <>
      <Header />
      
      <div className="inter flex justify-end px-14 space-x-4 py-20 z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ml-[750px] mt-32 rounded-l-full border-[#fb3939] border-2 shadow-lg ">
        <input type='text' placeholder='Starting point' className=' px-5 rounded-full bg-slate-900 border-2 border-[#ff1818] placeholder-slate-400'></input>
        <input type='text' placeholder='Destination' className=' px-5 rounded-full bg-slate-900 border-2 border-[#ff1818] placeholder-slate-400'></input>
        <button className=' py-2 px-7 rounded-full focus:ring focus:ring-red-400 hover:bg-gradient-to-r from-pink-400 text-slate-400 hover:text-white to-pink-500 bg-slate-900 border-[#ff1818] border-2'>Search</button>
      </div>
      
    </>
  );
};

export default App;