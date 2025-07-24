import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='flex justify-between mx-10'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/cart'>Cart</Link></li>


            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
