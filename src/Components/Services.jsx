import React from 'react'

const Services = () => {
  return (
   <>
   <section className="py-20 bg-gradient-to-b from white to to-blue-50">
    <div className="w-[1000px] mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">Our Services Keep You Smiling</h2>
      <p className="text-gray-600 text-center mb-12 w-[700px] mx-auto">Discover professional dental services crafted to enhance your smile’s health and beauty.</p>
      <div>
        <div className="flex space-x-6">
          
          <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all durantion-300">
            <div className="text-blue-500 text-5xl mb-4">
              <i className="fa fa-ambulance" aria-hidden="true"></i>
            </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Emergency Cases</h3>
              <p className="text-gray-600 mb-4 ">Swift, compassionate care for dental emergencies.</p>
              <p className="font-bold text-indigo-600">+ (123) 456 7890</p>
            </div>
           
            <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all durantion-300">
              <div className="text-blue-500 text-5xl mb-4">
                <i className="fa fa-clock" aria-hidden="true"></i>
              </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Opening Hours</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Mon- Fri: 8:00 - 19:00</li>
                  <li>Saturday: 10:00 - 17:00</li>
                  <li>Sunday: 10:00 - 16:00</li>
                </ul>
              </div>
            
              <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-blue-500 text-5xl mb-4">
                  <i className="fas fa-calendar-check"></i>
                </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Emergency Cases</h3>
                  <form className="space-y-3">
                    <select className="w-full p-2 rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                      <option value="">select department</option>
                      <option value="">General department</option>
                      <option value="">Orthodonicst</option>
                      <option value="">Dental Implants</option>
                    </select>

                    <input type="text" placeholder="Your Name" className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
                    <input type="email" placeholder="Email" className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
                    <input type="tel" placeholder="Phone" className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition mb-3" />

                    <button type="submit" className="w-full bg-gradient-to-r from from-indigo-600 to-blue-600 rounded-lg p-2 mb-2 text-white">Book Now</button>
                  </form>
                  <div className="flex gap-2">
                    <input type="date" className="w-[162px] p-2 rounded-lg border border-gray-300 bg-gray-50" />
                    <input type="time" className="w-[162px] p-2 rounded-lg border border-gray-300 bg-gray-50" />
                  </div>
                </div>
          </div>
        </div>
      </div>
  </section>
   </>
  )
}

export default Services