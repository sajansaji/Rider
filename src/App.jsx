import React from 'react';
import Header from './components/Header';
import './assets/css/app.css';

const App = () => {

  return (
    <>
      <Header />
      <div className=" flex justify-end px-36 space-x-4 pt-64  ">
        <input type='text' placeholder='Starting point' className=' p-2 rounded-md bg-[#00ed64] border-2 border-[#1e508c]'></input>
        <input type='text' placeholder='Destination' className=' p-2 rounded-md bg-[#00ed64] border-2 border-[#1e508c]'></input>
        <button className=' py-2 px-7 rounded-md hover:bg-[#00ed00] bg-[#00ed64] border-[#1e508c] border-2'>Search</button>
      </div>
    </>
  );
};

export default App;