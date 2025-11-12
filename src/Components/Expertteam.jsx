import React from 'react'

const Expertteam = () => {
  return (
    <>
    <section className="py-6 bg-white">
    <div className="w-[1000px] mx-auto px-6">
      <div className="text-center flex space-x-6">
        <div className="w-[250px] bg-gradient-to-b from bg-gray-50 to-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 shadow-md">
          <i className="fas fa-tooth text-4xl text-indigo-600 mb-4"></i>
          <p className="text-xl font-semibold tracking-tight">Teeth Whitening</p>
        </div>
        <div className="w-[250px] bg-gradient-to-b from bg-gray-50 to-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 shadow-md">
          <i className="fas fa-teeth-open text-4xl text-indigo-600 mb-4"></i>
          <p className="text-xl font-semibold tracking-tight">Teeth Cleaning</p>
        </div>
        <div className="w-[250px] bg-gradient-to-b from bg-gray-50 to-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 shadow-md">
          <i className="fas fa-ruler-combined text-4xl text-indigo-600 mb-4"></i>
          <p className="text-xl font-semibold tracking-tight">Quality Brackets</p>
        </div>
        <div className="w-[250px] bg-gradient-to-b from bg-gray-50 to-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 shadow-md">
          <i className="fas fa-tooth text-4xl text-indigo-600 mb-4"></i>
          <p className="text-xl font-semibold tracking-tight">Dental Implants</p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
     <div className="w-[1000px] mx-auto px-6">
        <h2 className="text-center text-4xl tracking-tight font-extrabold mb-12">Meet Our Expert Team</h2>
     </div>
     <div className="flex space-x-6 justify-center">
      <div className="w-[220px] bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
        <img src="src/assets/Images/image3.jpg" alt="doctor 1" className="w-full h-48 object-cover" />
        <div className="p-4">
         <h3 className="text-xl font-bold text-gray-800 mb-2">Patrick Johnson</h3>
         <p className="text-gray-600">Dentist</p>
        </div>
      </div>
      <div className="w-[220px] bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
        <img src="src/assets/Images/image4.jpg" alt="doctor 2" className="w-full h-48 object-cover" />
        <div className="p-4">
         <h3 className="text-xl font-bold text-gray-800 mb-2">Patrick Jacobson</h3>
         <p className="text-gray-600">Dentist</p>
        </div>
      </div>
      <div className="w-[220px] bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
       <img src="src/assets/Images/image5.jpg" alt="doctor 3" className="w-full h-48 object-cover" />
       <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Henry Schandorf</h3>
        <p className="text-gray-600">Dentist</p>
       </div>
      </div>
      <div className="w-[220px] bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
       <img src="src/assets/Images/image6.jpg" alt="doctor 4" className="w-full h-48 object-cover" />
       <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Joshua</h3>
        <p className="text-gray-600">Dentist</p>
       </div>
      </div>
     </div>
  </section>
    </>
  )
}

export default Expertteam