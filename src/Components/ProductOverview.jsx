import React from 'react'

const ProductOverview = () => {
  return (
    <>
     <section class="w-full bg-gray-100 h-[2000px] p-10">
   <h1 class="font-bold text-4xl ml-22 mb-10">PRODUCT OVERVIEW</h1>
   <div class="flex justify-between items-center mb-10">
    <div class="flex space-x-8 ml-22 text-gray-600">
      <p class="hover:underline hover:text-black transition duration-500">All products</p>
      <p class="hover:underline hover:text-black transition duration-500">Women</p>
      <p class="hover:underline hover:text-black transition duration-500">Men</p>
      <p class="hover:underline hover:text-black transition duration-500">Bag</p>
      <p class="hover:underline hover:text-black transition duration-500">Shoes</p>
      <p class="hover:underline hover:text-black transition duration-500">Watches</p>
      </div>
      <div class="space-x-2">
        <button class="bg-gray-100 px-5 py-2 border border-gray-200 hover:bg-gray-200"><i class="fa-solid fa-sort"></i> Filter</button>
        <button class="bg-gray-100 px-5 py-2 border border-gray-200 hover:bg-gray-200"><i class="fa-solid fa-magnifying-glass"></i> search</button>
      </div>
   </div>
   <div class="grid grid-cols-4 gap-5 p-10 space-y-20">
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-01.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Esprit Ruffle Shirt</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$16.64</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-02.jpg.webp" class="h-full object-cover" />
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Herschel supply</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$35.31</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-03.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Only Check Trouser</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$25.50</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-04.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Classic Trench Coat</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$75.00</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-05.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Front Pocket Jumper</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$34.75</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-06.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Vintage Inspired Classic</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$93.20</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-07.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Shirt in Stretch Cotton</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$52.66</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-08.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Pieces Metallic Printed</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$18.96</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-09.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Converse All Star Hi Plimsolls</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$75.00</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-10.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Femme T-Shirt In Stripe</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$25.85</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-11.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Herschel supply</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$63.16</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-12.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Herschel supply</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$63.15</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-13.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">T-Shirt with Sleeve</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$18.49</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-14.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Pretty Little Thing</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$54.79</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-15.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Mini Silver Mesh Watch</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">
        $86.85</p>
    </div>
    <div class="relative group transition duration-600 translate hover:translate-y-2 duration-600">
      <img src="src/assets/Images/product-16.jpg.webp" class="h-full object-cover"/>
      <div class="flex justify-between mt-5">
        <p class="text-gray-400">Square Neck Back</p>
        <div>
          <i class="fa-regular fa-heart text-gray-400 hover:bg-blue-500"></i>
        </div>
        <button class="absolute group-hover:block transition duration-300 bottom-7 right-18 bg-white hidden px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white">QUICK VIEW</button>
      </div>
      <p class="text-gray-400">$29.64</p>
    </div>
    </div>
    <div class="flex justify-center">
      <button class="bg-gray-300 px-8 py-3 rounded-full hover:bg-black hover:text-white transition duration-400">LOAD MORE</button>
    </div>
  </section>
   
    </>
  )
}

export default ProductOverview