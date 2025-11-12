import React from 'react'

const Footer1 = () => {
  return (
    <>
    <section class="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative">
    <div class="w-[1000px] mx-auto px-6">
     <div class="absolute top-0 left-0 w-full h-[48px] overflow-hidden">
      <svg class="relative block w-full h-12" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139
        ,768,149,864,160C960,171,1056,181,1152,176C1248,171,
        1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,
        320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
     </div>
     <h2 class="text-4xl font-extrabold text-center text-gray-800 mb-4 pt-12 tracking-tight">Get in Touch</h2>
     <p class="text-gray-600 text-center mb-12 w-[700px] mx-auto">A small river named Duden flows by, creating a serene setting for your inquiries.</p>
    </div>
    <div class="flex justify-center space-x-4">
    <div class="w-[500px]">
      <div class="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all duration-300">
        <form>
          <select class="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
            <option value>Select Inquiry Type</option>
            <option value="appointment">Appointment</option>
            <option value="billing">Billing</option>
            <option value="general">General Inquiry</option>
          </select>
          <input type="text" class="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="First Name" />
          <input type="email" class="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="Email" />
          <textarea placeholder="message" class="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"></textarea>
          <button type="submit" class="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-3 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-md">Send message</button>
        </form>
      </div>
    </div>
    <div class="w-[500px]">
     <div class="bg-blue-900 text-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all duration-300">
        <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
        <p class="mb-4 flex items-center"><i class="fas fa-map-marker-alt mr-2 text-indigo-300"></i>123 Duden Road, Dental City, DC 12345</p>
        <p class="mb-4 flex items-center"><i class="fas fa-phone mr-2 text-indigo-300"></i> <a href="tel:+1234567890" class="hover:text-indigo-300 transition">+ (123) 456 7890</a></p>
        <p class="mb-4 flex items-center"><i class="fas fa-envelope mr-2 text-indigo-300"></i><a href="mailto:info@dentacare.com" class="hover:text-indigo-300 transition">info@dentacare.com</a></p>
        <p class="mb-4 flex items-center"><i class="fas fa-clock mr-2 text-indigo-300"></i>Mon-Fri 9 AM - 5 PM</p>
     </div>
    </div>
    </div>
  </section>
    </>
  )
}

export default Footer1