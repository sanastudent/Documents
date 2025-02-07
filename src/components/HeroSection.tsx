

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="w-full bg-[#F2F0FF] py-10">
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-0">

        {/* Bell Image */}
        <div className="w-full md:w-[387px] mb-8 md:mb-0 flex justify-center md:justify-start">
          <Image src="/bell.png" height={387} width={387} alt="bell" />
        </div>

        {/* Header Image and Button */}
        <div className="w-full md:w-auto mt-8 md:mt-0 text-center md:text-left">
          <Image src="/header.png" width={375} height={325} alt="header" className="text-black" />
          
          <Link href="/shop">
            <button className="w-[163px] h-[50px] bg-[#FB2E86] text-white text-sm mt-6 md:mt-11 mx-auto md:mx-0">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Sofa Image */}
        <div className="w-full md:w-[706px] mt-8 md:mt-0 flex justify-center md:justify-end transform -translate-x-8 sm:-translate-x-6 lg:translate-x-4">
          <Image src="/sofa.png" width={600} height={500} alt="sofa" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;


