import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../dist/api'

const Weather = () => {
  return (
    <div className='mx-auto max-w-3xl font-body'>
      <div className='mt-20 mx-4 md:mx-8'>
      <div className='grid grid-cols-12'>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </button>
      </div>
        <form className='relative flex items-center justify-end'>
          <input type="text" id='cityInput' className='border-b text-center rounded p-2 w-full absolute' placeholder='Enter Location Here' />
          <button id='btn' onClick={userWeather()} className='p-2 z-50'>
           <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className='grid justify-center text-center py-12'>
            <div id='userLocation' className='text-5xl'>Cavite City</div>
            <div id='date'>August 21, 2023</div>
            <div id='day'>Monday</div>
            <div id='time' className='text-xl'>9:33pm</div>
            <div id='temperature' className='text-6xl'>38°</div>
            <div id='feels'>Feels like:</div>
            <div id='desc'>Description</div>
            <div id='icon'>Weather Icon</div>
        </div>
        <div className='text-xl grid md:grid-cols-2 gap-x-8'>
          <div>
            <div id='humidity' className='flex justify-between border-b border-gray-300'>Humidity:<span className='px-8'>38°</span></div>
            <div id='wind' className='flex justify-between border-b border-gray-300'>Wind:<span className='px-8'>38°</span></div>
          </div>
          <div>
            <div id='pressure' className='flex justify-between border-b border-gray-300'>Pressure:<span className='px-8'>38°</span></div>
            <div id='country' className='flex justify-between border-b border-gray-300'>Country:<span className='px-8'>38°</span></div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Weather