import React from 'react'
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-2' src={Laptop} alt='/'/>
          <div className='flex flex-col'>
          <p className='py-2 text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='py-3 font-semibold text-black'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam similique eius soluta dolore molestiae, odit delectus ratione corrupti beatae possimus unde quo accusantium dicta asperiores mollitia quia, enim deserunt hic.</p>
          <button className='text-[#00df9a] bg-black font-bold my-6 py-3 rounded mx-auto md:mx-0 w-[200px] '>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Analytics;