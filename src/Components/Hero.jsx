import React from 'react'

const Hero = () => {
  return (
    <>
    <section className="bg-[url('/src/assets/Images/photo-1600170311833-c2cf5280ce49.jpeg')] pt-20 bg-cover bg-no-repeat relative pb-20">
    <div className="bg-gradient-to-b from-blue-900/60 to to-black/50 absolute inset-0"></div>
    <div className="w-[1000px] mx-auto px-6 relative z-10">
      <div className="text-white w-[700px]">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md">Modern Dentistry in a Calm Environment</h1>
        <p className="text-lg text-gray-200">A small river named Duden flows by their place, providing a serene backdrop for your dental care.</p>
        <button className="mt-8 bg-gradient-to-r from-indigo-600 to to-blue-600 text-white px-8 py-3 rounded-full shadow-lg">Make an Appointment</button>
      </div>
    </div>
  </section>
    </>
  )
}

export default Hero