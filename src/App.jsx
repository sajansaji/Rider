import React from 'react';
import Header from './components/Header';
import { text } from '@fortawesome/fontawesome-svg-core';


const App = () => {

  return (
    <>
      <Header />
      <div className=" flex  ">
        <input type='text' placeholder='Starting point' className=' p-2 rounded-md'></input>
      </div>
    </>
  );
};

export default App;