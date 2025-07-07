import React from 'react'
import Navbar from './Navbar'
import headerImg from '../assets/header.jpg'


const Header = () => {
  return (
    <div className='min-h-screen bg-cover bg-center mb-4 flex items-center w-full overflow-hidden' style={{backgroundImage:`url(${headerImg})`}}
    id='header'>
        <Navbar/>
        <div className='container text-center mx-auto py-4 px-6 text-white font-bold'>
            <h2 className='text-3xl'>Hi This is Platform where you can Started to Build your dreams</h2>
            <div className='flex justify-center gap-5 mt-5'>
                <a className='border border-white px-4 py-2 rounded' href="#project">Project</a>
                <a className='bg-blue-400 border border-blue-400 px-4 py-2 rounded' href="#conatct_us">Contact Us</a>
            </div>
        </div>
      
    </div>
  )
}

export default Header
 