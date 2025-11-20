import React from 'react'

const Navbar = () => {
  return (
   <>
   <header className="bg-neutral-700 flex flex-col">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img src="src/assets/Images/logo.png" className="w-[160px] p-4" />
        <div className="bg-neutral-800 h-full text-center flex items-center">
          <p className="text-l p-5 text-gray-400">+  COZA STORE</p>
        </div>
    </div>
      <div className="flex items-center">
        <div className="border h-full flex items-center p-4 hover:bg-neutral-800 border-gray-600">
         <i className="fa-solid fa-desktop text-2xl text-zinc-400 hover:text-zinc-200"></i>
        </div>
        <div className="border h-full flex items-center p-4 hover:bg-neutral-800 border-gray-600">
         <i className="fa-solid fa-tablet-screen-button text-2xl text-zinc-400 hover:text-zinc-200"></i>
        </div>
        <div className="border h-full flex items-center p-4 hover:bg-neutral-800 border-gray-600">
         <i className="fa-solid fa-mobile-screen-button text-2xl text-zinc-400 hover:text-zinc-200"></i>
        </div>
        <div className="border h-full flex items-center p-4 hover:bg-neutral-800 border-gray-600 bg-green-500">
         <i className="fa-solid fa-cart-shopping text-2xl text-white hover:text-zinc-200"></i>
        </div>
        <div className="border h-full flex items-center p-4 hover:bg-neutral-800 border-gray-600">
         <i className="fa-solid fa-xmark text-2xl text-zinc-400 hover:text-zinc-200"></i>
        </div>
       </div>
    </div>
    <div className="bg-neutral-800  flex justify-between items-center h-[30px] p-5">
      <p className="ml-20 text-gray-400 text-sm">Free shipping for standard order over $100</p>
      <div className="flex items-center">
        <p className="p-2 text-gray-400 text-sm pl-6 pr-6 border-gray-700 border">Help & Faqs</p>
        <p className="p-2 text-gray-400 text-sm border-gray-700">My Account</p>
        <p className="p-2 text-gray-400 text-sm border-gray-700">EN</p>
        <p className="p-2 text-gray-400 text-sm border-gray-700">USD</p>
        <p className="p-2 text-gray-400 text-sm border-gray-700">hfhhjdjdjksdjdjjk</p>
      </div>
    </div>
    <div className="p-6 bg-white flex justify-between">
      <div className="flex space-x-12">
        <img src="src/assets/Images/logo-01.png.webp" className="w-[120px] h-[25px] ml-17" />
        <ul className="flex space-x-8">
          <div className="group relative">
            <li className="hover:text-indigo-400 transition transform transform hover:scale-105 duration-300"><a href="#">Home</a></li>
            <div className="hidden group-hover:block absolute bg-white text-black p-4 space-y-3 shadow-lg border-gray-600 w-[10rem] top-5 z-10">
             <p className="hover:text-indigo-400 transition transform transform hover:scale-100 duration-300">Homepage 1</p>
             <p className="hover:text-indigo-400 transition transform transform hover:scale-100 duration-300">Homepage 2</p>
             <p className="hover:text-indigo-400 transition transform transform hover:scale-100 duration-300">Homepage 3</p>
            </div>
          </div>
          
          <li className="hover:text-indigo-400 transition transform transform hover:scale-105 duration-300"><a href="#">Shop</a></li>
          <li className="hover:text-indigo-400 relative transition transform transform hover:scale-100 duration-300"><a href="#">Features</a>
          <span className="absolute bg-red-500 -top-5 -right-4 rounded-full text-xs text-white px-1.5">HOT</span>
        </li>
          <li className="hover:text-indigo-400 transition transform transform hover:scale-105 duration-300"><a href="#">Blog</a></li>
          <li className="hover:text-indigo-400 transition transform transform hover:scale-105 duration-300"><a href="#">About</a></li>
          <li className="hover:text-indigo-400 transition transform transform hover:scale-105 duration-300"><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="space-x-8 mr-30 text-xl">
        <i className="fa-solid fa-magnifying-glass hover:text-indigo-400 transition transform hover:scale-100 duration-500"></i>
          <i className="fa-solid fa-cart-shopping relative hover:text-indigo-400 transition transform hover:scale-100 duration-500">
            <span className="absolute bg-indigo-400 -top-3 -right-3 text-xs text-white px-1">2</span>
          </i>
          <i className="fa-regular fa-heart relative hover:text-indigo-400 transition transform hover:scale-100 duration-500">
            <span className="absolute bg-indigo-400 -top-3 -right-3 text-xs text-white px-1">0</span>
          </i>
      </div>
    </div>
  </header>
   </>
  )
}

export default Navbar