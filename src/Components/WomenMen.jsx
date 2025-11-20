import React from 'react'

const WomenMen = () => {
  return (
    <>
     <section className="w-full h-[350px] mb-10">
<div className="flex space-x-8 justify-center h-[310px] p-8">
  <div className="w-[330px] relative hover:bg-indigo-400 transition duration-600 hover:text-white group border border-gray-300">
    <img src="src/assets/Images/banner-01.jpg.webp" className="h-full object-cover opacity-105 hover:opacity-30" />
    <div className="absolute top-5 left-3 p-3">
      <h1 className="text-3xl font-bold">Women</h1>
      <p className="text-gray-600 group-hover:text-white transition duration-600">spring 2018</p>
      <div className="absolute top-35 hidden group-hover:block transition duration-600">
      <p className="font-bold underline text-white">SHOP NOW</p>
      </div>
    </div>
  </div>
  <div className="w-[330px] relative hover:bg-indigo-400 transition duration-600 hover:text-white group border border-gray-300">
    <img src="src/assets/Images/banner-02.jpg.webp" className="h-full object-cover opacity-105 hover:opacity-30" />
    <div className="absolute top-5 left-3 p-3">
      <h1 className="text-3xl font-bold">Men</h1>
      <p className="text-gray-600 group-hover:text-white transition duration-600">spring 2018</p>
      <div className="absolute top-35 hidden group-hover:block transition duration-600">
      <p className="font-bold underline text-white">SHOP NOW</p>
      </div>
    </div>
  </div>
  <div className="w-[330px] relative hover:bg-indigo-400 transition duration-600 hover:text-white group border border-gray-300">
    <img src="src/assets/Images/banner-03.jpg.webp" className="h-full object-cover opacity-105 hover:opacity-30" />
    <div className="absolute top-5 left-3 p-3">
      <h1 className="text-3xl font-bold">Accessories</h1>
      <p className="text-gray-600 group-hover:text-white transition duration-600">New Trend</p>
      <div className="absolute top-35 hidden group-hover:block transition duration-600">
      <p className="font-bold underline text-white">SHOP NOW</p>
      </div>
    </div>
  </div>
</div>
  </section>
    </>
  )
}

export default WomenMen