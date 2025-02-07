

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Discount = () => {
  return (
    <section id='Special'>
    <div className="px-4 sm:px-8 lg:px-16 py-8">
    {/* Heading */}
    <h1 className="text-2xl mt-10 sm:text-3xl md:text-4xl font-semibold text-[#151875]  text-center">
      Discount Item
    </h1>
  
    {/* Words below heading */}
    <div className="flex flex-wrap justify-center space-x-6 mt-8">
      <p  className="text-sm font-medium text-[#151875] cursor-pointer hover:text-[#FB2E86] hover:underline mb-4 sm:mb-0">Wood Chair</p>
      <p className="text-sm font-medium text-[#151875] cursor-pointer hover:text-[#FB2E86] hover:underline mb-4 sm:mb-0">Plastic Chair</p>
      <p className="text-sm font-medium text-[#151875] cursor-pointer hover:text-[#FB2E86] hover:underline mb-4 sm:mb-0">Sofa Collection</p>
    </div>
  
    <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-8">
  {/* Left Side: Content */}
  <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
    <h2 className="text-[#151875] font-josefin text-2xl sm:text-3xl font-semibold mb-4">
      30% Discount On All Products
    </h2>
    <p className="mb-4 text-[#B7BACB]">Enjoy exclusive savings with a 30% discount on all our premium products, offering you both quality and affordability.</p>

    {/* 4 Points with Checkmark Symbol */}
    <div className="space-y-4">
      <div className="flex items-center">
        <span className="text-[#2D80F1] mr-2">✓</span>
        <p className='text-[#B7BACB]'>High-Quality Materials Used</p>
      </div>
      <div className="flex items-center">
        <span className="text-[#2D80F1] mr-2">✓</span>
        <p className='text-[#B7BACB]'>Materials Expose Like Materials</p>
      </div>
      <div className="flex items-center">
        <span className="text-[#2D80F1] mr-2">✓</span>
        <p className='text-[#B7BACB]'>Simple Neutral Colors</p>
      </div>
      <div className="flex items-center">
        <span className="text-[#2D80F1] mr-2">✓</span>
        <p className='text-[#B7BACB]'>Clear Lines and Geometric Figures</p>
      </div>
    </div>

    {/* Shop Now Button */}
    <Link href="/shop">
      <button className="w-[163px] h-[50px] bg-[#FB2E86] text-white text-sm mt-6 md:mt-11 mx-auto md:mx-0">
        Shop Now
      </button>
    </Link>
  </div>

  {/* Right Side: Image */}
  <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
    <Image src="/chair.png" width={550} height={400} alt="sofa" className="w-full max-w-[1214px]" />
  </div>
</div>

   
  </div>
  </section>
  )
}

export default Discount
