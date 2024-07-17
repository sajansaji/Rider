import React from 'react';
import Header from './components/Header';
import './assets/css/app.css';


const App = () => {

  return (
    <>
      <Header />
      <div className="inter bg flex justify-end px-14 space-x-4 py-20 z-10 bg-[#3ae97d] ml-[750px] mt-32 rounded-l-full border-[#fb3939] border-2 shadow-lg ">
        <input type='text' placeholder='Starting point' className=' px-5 rounded-full bg-[#dbe9e1] border-2 border-[#fb3939]'></input>
        <input type='text' placeholder='Destination' className=' px-5 rounded-full bg-[#dbe9e1] border-2 border-[#fb3939]'></input>
        <button className=' py-2 px-7 rounded-full hover:bg-[#00ed00] bg-[#dbe9e1] border-[#fb3939] border-2'>Search</button>
      </div>
    </>
  );
};

export default App;