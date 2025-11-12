import React from 'react'

const patients = () => {
  return (
    <>
    <section className="py-20 bg-gray-100">
    <div className="w-[1000px] mx-auto px-6">
      <h2 className="text-center text-4xl font-extrabold mb-4 text-gray-800 tracking-tight">What Our Patients Say</h2>
      <p className="text-gray-600 text-center mb-12 mx-auto">A small river named Duden flows by their place, offering a serene dental experience.</p>
    </div>
    <div className="flex justify-center space-x-6">
      <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transform hover:-translate-y-2 transition-all durantion-300">
       <p className="text-gray-600 mb-4">"The best dental experience! The staff is friendly and the environment is so calming."</p>
       <p className="font-semibold text-gray-800">John Doe</p>
      </div>
      <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transform hover:-translate-y-2 transition-all durantion-300">
        <p className="text-gray-600 mb-4">"I was nervous, but the team made me feel so comfortable. Highly recommend!"</p>
        <p className="font-semibold text-gray-800">Jane Smith</p>
       </div>
       <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transform hover:-translate-y-2 transition-all durantion-300">
        <p className="text-gray-600 mb-4">"Professional and efficient. My teeth have never looked better!</p>
        <p className="font-semibold text-gray-800">Emily Johnson</p>
       </div>
    </div>
  </section>
    </>
  )
}

export default patients