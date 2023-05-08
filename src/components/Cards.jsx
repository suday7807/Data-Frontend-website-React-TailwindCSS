import React from 'react'
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"


const Cards = () => {
  return (
    <div className=' w-full bg-white py-[10rem] px-4'>
        <div className='max-w-[1204px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" />
                <h2 className='text-center text-2xl font-bold py-8'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='border-b py-2 mx-8 mt-8'>500 GB Storage</p>
                    <p className='border-b py-2 mx-8'>1 Grand User</p>
                    <p className='border-b py-2 mx-8'>send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black font-medium my-6 mx-auto py-3 rounded-md w-[200px]' >Start Trial</button>
            </div>
            <div className='bg-gray-100 w-full shadow-xl flex flex-col p-4 my-8 md:my-0  rounded-lg hover:scale-105 duration-100'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="" />
                <h2 className='text-center text-2xl font-bold py-8'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='border-b py-2 mx-8 mt-8'>500 GB Storage</p>
                    <p className='border-b py-2 mx-8'>1 Grand User</p>
                    <p className='border-b py-2 mx-8'>send up to 2 GB</p>
                </div>
                <button className='text-[#00df9a] bg-black font-medium my-6 mx-auto py-3 rounded-md w-[200px]' >Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
                <h2 className='text-center text-2xl font-bold py-8'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='border-b py-2 mx-8 mt-8'>500 GB Storage</p>
                    <p className='border-b py-2 mx-8'>1 Grand User</p>
                    <p className='border-b py-2 mx-8'>send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black font-medium my-6 mx-auto py-3 rounded-md w-[200px]' >Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards