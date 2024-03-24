import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { activeButtonAtom } from '../store/atoms/activeButton';

function Slider() {
  const [activeButton, setActiveButton] = useRecoilState(activeButtonAtom);
  

  const handleClick = (id) => {
    setActiveButton(id);
    
  };

  return (
    <>
      <div className='flex flex-row justify-center border-2 text-sm mt-10 text-gray-400 bg-white border-gray-50 rounded-md'>
        <button
          id="5"
          className={` pl-3 mr-2 rounded-md ${activeButton === '5' ? ' bg-blue-600 text-white ml-0 p-1 pl-4 pr-4 ' : ''}`}
          onClick={() => handleClick('5')}
        >
          {activeButton === '5' ? "5 Minutes" : "5 min"}
        </button>

        <button
          id="10"
          className={` ml-2 mr-2 rounded-md  ${activeButton === '10' ? 'bg-blue-600 text-white ml-0 p-1 pl-4 pr-4' : ''}`}
          onClick={() => handleClick('10')}
        >
          {activeButton === '10' ? "10 Minutes" : "10 min"}
        </button>

        <button
          id="15"
          className={`  ml-2 mr-2 rounded-md  ${activeButton === '15' ? 'bg-blue-600 text-white p-1 pl-4 pr-4' : ''}`}
          onClick={() => handleClick('15')}
        >
          {activeButton === '15' ? "15 Minutes" : "15 min"}
        </button>

        <button
          id="30"
          className={` ml-2 mr-2 rounded-md  ${activeButton === '30' ? 'bg-blue-600 text-white p-1 pl-4 pr-4' : ''}`}
          onClick={() => handleClick('30')}
        >
          {activeButton === '30' ? "30 Minutes" : "30 min"}
        </button>

        <button
          id="1hr"
          className={` ml-2 mr-2 rounded-md  ${activeButton === '1hr' ? 'bg-blue-600 text-white p-1 pl-4 pr-4' : ''}`}
          onClick={() => handleClick('1hr')}
        >
          {activeButton === '1hr' ? "1 Hour" : "hour"}
        </button>

        <button
          id="1day"
          className={` ml-2 pr-3 rounded-md  ${activeButton === '1day' ? 'bg-blue-600 text-white mr-0 p-1 pl-4 pr-4' : ''}`}
          onClick={() => handleClick('1day')}
        >
          {activeButton === '1day' ? "1 Day" : "day"}
        </button>
      </div>
    </>
  );
}

export default Slider;
