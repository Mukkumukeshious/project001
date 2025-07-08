import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMobileMenu, setMobileMenu]= useState(false)

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow='hidden'
    }
    else{
      document.body.style.overflow='auto'
    }
    return ()=>{
      document.body.style.overflow='auto'
    }
  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg-px-32 bg-transparent'>
        <img className='h-20' src={logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white font-semibold'>
          <a className='cursor-pointer hover:text-[#dfdf6a]' href="#header">Home</a>
          <a className='cursor-pointer hover:text-[#ff5100]' href="#about">About</a>
          <a className='cursor-pointer hover:text-[#FFD700]' href="#project">Project</a>
          <a className='cursor-pointer hover:text-[#FFD700]' href="#testimonials">Testimonilas</a>
        </ul>
        <button className='hidden md:block bg-[#FFF8E1] px-8 py-2 rounded-full'>Sign up</button>
        <IoMenu 
          onClick={()=>setMobileMenu(true)} 
          className='md:hidden w-10 text-3xl cursor-pointer' 
        />
      </div>
      <div className={`md:hidden ${showMobileMenu?"fixed w-full" : "h-0 w-0"}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 text-3xl cursor-pointer'>
          <RxCross2 onClick={()=>setMobileMenu(false)} />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-semibold'>
          <a onClick={()=>setMobileMenu(false)}  className='px-4 py-2 inline-block rounded-full' href="#header">Home</a>
          <a onClick={()=>setMobileMenu(false)} className='px-4 py-2 inline-block rounded-full' href="#about">About</a>
          <a onClick={()=>setMobileMenu(false)} className='px-4 py-2 inline-block rounded-full' href="#project">Project</a>
          <a onClick={()=>setMobileMenu(false)} className='px-4 py-2 inline-block rounded-full' href="#testimonials">Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
