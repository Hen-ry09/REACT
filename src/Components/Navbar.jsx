import React from 'react'

const Navbar = () => {
  return (
   <>
  <header className="fixed top-0 left-0 w-full bg-blue-900 shadow-md hover:bg-blue-900/30 hover:backdrop-blur-md z-10 transition-all duration-300">
    <nav className="w-[1000px] mx-auto flex justify-between px-4 py-4">
      <div className="text-3xl font-bold text-white tracking-tight">DENTACARE</div>
      <div className="flex items-center">
        <ul className="flex space-x-8">
          <li><a href="#" className="text-white hover:text-blue-200 hover:scale-105">Home</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 hover:scale-105">About</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 hover:scale-105">Services</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 hover:scale-105">Doctors</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 hover:scale-105">Blog</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 hover:scale-105">Content</a></li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 shadow-blue-500/30 ml-8">
          Book appointment
        </button>
      </div>
    </nav>
  </header>
   </>
  )
}

export default Navbar