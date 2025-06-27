import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineAlignRight } from 'react-icons/ai';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className=" w-full z-50 flex justify-between items-center bg-gray-900 text-white px-6 py-4">
      <div className="text-3xl font-bold border-2 border-blue-500 rounded-full px-4 py-1">
        Profile
      </div>


      <nav className="hidden sm:flex text-xl font-semibold gap-x-6 items-center tracking-wide">
        <Link className="hover:text-blue-400 transition" to="/about">About</Link>
        <Link className="hover:text-blue-400 transition" to="/project">Project</Link>
        <Link className="hover:text-blue-400 transition" to="/contact">Contact</Link>
      </nav>

  
      <button
        className="sm:hidden text-3xl"
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Toggle Menu"
      >
        <AiOutlineAlignRight />
      </button>

      {openMenu && (
        <nav className="absolute top-20 right-4 flex flex-col bg-gray-800 p-4 rounded shadow-lg sm:hidden text-lg gap-y-3 z-50">
          <Link className="hover:text-blue-400 transition" to="/home">Home</Link>
          <Link className="hover:text-blue-400 transition" to="/about">About</Link>
          <Link className="hover:text-blue-400 transition" to="/project">Project</Link>
          <Link className="hover:text-blue-400 transition" to="/contact">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
