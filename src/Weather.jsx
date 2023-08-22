import React from 'react'

const Weather = () => {
  return (
    <div class='mt-20 mx-4 md:mx-8'>
      <div class="grid grid-cols-12">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </button>
      </div>
        <form class="grid">
          <input type="text" class="border rounded p-2 col-span-3 md:col-span-2" placeholder='Enter Location Here' />
        </form>
        <div class="grid justify-center text-center py-12">
            <div class="text-4xl">Cavite City</div>
            <div>August 21, 2023</div>
            <div>Monday 9:33pm</div>
            <div class="text-6xl">38°</div>
            <div>Feels like:</div>
            <div>Description</div>
            <div>Weather logo</div>
        </div>
        <div class="text-xl grid md:grid-cols-2 gap-x-8">
          <div>
            <div class="flex justify-between border-b border-gray-300">Humidity:<span class="px-8">38°</span></div>
            <div class="flex justify-between border-b border-gray-300">Wind:<span class="px-8">38°</span></div>
          </div>
          <div>
            <div class="flex justify-between border-b border-gray-300">Pressure:<span class="px-8">38°</span></div>
            <div class="flex justify-between border-b border-gray-300">Country:<span class="px-8">38°</span></div>
          </div>
        </div>
    </div>
  )
}

export default Weather