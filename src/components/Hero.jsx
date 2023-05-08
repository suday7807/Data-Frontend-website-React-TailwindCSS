import React from 'react'


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='mt-[-96px] w-full h-screen text-center flex flex-col justify-center'>
        <p className='text-[#00df9a]  font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for BTB, BTC, SASS</p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] text-black font-bold my-6 mx-auto py-3 rounded w-[200px] '>Get Started</button>
      </div>
    </div>

  )
}

export default Hero;