import React from 'react'

const NewArrivals = () => {
  return (
   <>
   <section className="w-[full] h-[1000px] bg-gray-100 mb-15">
    <div className="relative w-full h-full">
      <img src="src/assets/Images/portrait-young-handsome-man-posing-with-hat.jpg" className="w-[full] h-full"/>
      <div className="absolute top-60 p-15">
      <p className="text-4xl mb-8">Men collection 2018</p>
      <h1 className="text-7xl mb-8">NEW ARRIVALS</h1>
      <button className="bg-indigo-400 text-white px-10 py-3 rounded-full hover:bg-black transition trasnform hover:scale-105 duration-400">SHOP NOW</button>
      </div>
    </div>
  </section>
   </>
  )
}

export default NewArrivals