import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
  const [ nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  return (<>
    <div className='text-white flex items-center justify-between h-14'>
        <h1 className='text-3xl w-full font-bold text-[#00df9a] ml-4'>REACT.</h1>
        <ul className='hidden md:flex'>
          <li className='m-4'>
            Home   
          </li>
          <li className='m-4'>
            Company
          </li>
          <li className='m-4'>
            Resources
          </li>
          <li className='m-4'>
            About
          </li>
          <li className='m-4'>
            Contact
          </li>
        </ul>
      <div onClick={handleNav} className='block md:hidden pr-4' >
      {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} /> }
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='text-3xl w-full font-bold text-[#00df9a] m-4'>REACT.</h1>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>
              Home 
            </li>
            <li className='p-4 border-b border-gray-600'>    
              Company
            </li>
            <li className='p-4 border-b border-gray-600'>
              Resources
            </li>
            <li className='p-4 border-b border-gray-600'>
              About
            </li>
            <li className='p-4'>
              Contact
            </li>
          </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar