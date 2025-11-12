import React from 'react'

const Footer2 = () => {
  return (
    <>
     <footer class="bg-blue-900 text-white relative">
    <div class="absolute top-0 left-0 w-full h-[48px] overflow-hidden">
      <svg class="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113.64,31.08,1200,56.86V0Z" fill="#F3F4F6"></path>
    </svg>
    </div>
    <div class="w-[1000px] mx-auto px-6 py-12">
      <div class="flex space-x-4">
        <div class="w-[250px]">
          <h3 class="text-lg font-semibold mb-4 text-indigo-300">DentaCare</h3>
          <p class="text-gray-300 text-sm">A small river named Duden flows by, offering a serene dental experience.</p>
        </div>
        <div class="w-[250px]">
         <h3 class="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h3>
         <ul class="space-y-2 text-sm">
          <li><a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">Home</a></li>
          <li><a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">About</a></li>
          <li><a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">services</a></li>
          <li><a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">Doctors</a></li>
          <li><a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">Blog</a></li>
          <li><a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">Contact</a></li>
         </ul>
        </div>
        <div class="w-[250px]">
         <h3 class="text-lg font-semibold mb-4 text-indigo-300">Services</h3>
         <ul class="space-y-2 text-sm">
          <li><a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">Teeth Whitening</a></li>
          <li><a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">Teeth Cleaning</a></li>
          <li><a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">Quality Brackets</a></li>
          <li><a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">Dental Implants</a></li>
         </ul>
        </div>
        <div class="w-[250px]">
         <h3 class="text-lg font-semibold mb-4 text-indigo-300">Contact Us</h3>
         <p class="mb-4 flex items-center text-gray-300"><i class="fas fa-map-marker-alt mr-2 text-indigo-300"></i>123 Duden Road, Dental City, DC 12345</p>
         <p class="mb-4 flex items-center text-gray-300"><i class="fas fa-phone mr-2 text-indigo-300"></i> <a href="tel:+1234567890" class="hover:text-indigo-300 transition">+ (123) 456 7890</a></p>
         <p class="mb-4 flex items-center text-gray-300"><i class="fas fa-envelope mr-2 text-indigo-300"></i><a href="mailto:info@dentacare.com" class="hover:text-indigo-300 transition">info@dentacare.com</a></p>
         <div class="flex space-x-4 mt-4">
          <a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300">
            <i class="fab fa-instagram"></i>
          </a>
         </div>
        </div>
      </div>
      <div class="text-center mt-8 text-gray-300 text-sm">
        <p>© 2025 DentaCare. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer2