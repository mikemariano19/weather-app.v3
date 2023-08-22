import React from 'react'

const Weather = () => {
  return (
    <div class='mt-20 mx-2'>
      <div class="flex justify-between">
        <h1 class="font-bold">Weather app</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </div>
      <div class="">
        <div class="grid grid-cols-3 gap-1">
          <input type="text" class="border rounded p-2 col-span-3 md:col-span-2" placeholder='Enter Location Here' />
          <button class="bg-blue-300 rounded p-2 col-span-3 md:col-span-1">Search</button>
        </div>
        <div class="flex justify-center">
          <div>
            <div>Cavite City</div>
            <div>August 21, 2023</div>
            <div>Monday 9:33pm</div>
          </div>
        </div>
        <div class="text-xl">
          <div>
            <div class="flex justify-between">Temperatures: <span>--</span></div>
            <div>Feels like</div>
            <div>Description</div>
            <div>Weather logo</div>
          </div>
          <div>
            <div>Humidity</div>
            <div>Wind</div>
            <div>Pressure</div>
            <div>Country</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather