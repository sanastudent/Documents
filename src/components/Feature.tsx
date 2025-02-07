

import { Ambulance } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Footer from './ui/Footer';

const Feature = () => {
  return (
    <>
 <div className="flex flex-wrap justify-center mt-36 space-x-0 md:space-x-8">
  {/* Free Delivery */}
  <div className="flex flex-col items-center mb-8 md:mb-0">
    <Image src="/van.png" width={65} height={65} alt="v" className="m-0 p-0" />
    <div className="w-[217px] h-[127px] text-center">
      <h6 className="text-[#151875] text-sm mt-8">Free Delivery</h6>
      <p className="text-sm text-[#8A8FB9] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam.</p>
    </div>
  </div>

  {/* 100% Cashback */}
  <div className="flex flex-col items-center mb-8 md:mb-0">
    <Image src="/cash.png" width={65} height={65} alt="cash" className="m-0 p-0" />
    <div className="w-[217px] h-[127px] text-center">
      <h6 className="text-[#151875] text-sm mt-8">100% Cashback</h6>
      <p className="text-sm text-[#8A8FB9] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam.</p>
    </div>
  </div>

  {/* Quality Product */}
  <div className="flex flex-col items-center mb-8 md:mb-0">
    <Image src="/medl.png" width={65} height={65} alt="medl" className="m-0 p-0" />
    <div className="w-[217px] h-[127px] text-center">
      <h6 className="text-[#151875] text-sm mt-8">Quality Product</h6>
      <p className="text-sm text-[#8A8FB9] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam.</p>
    </div>
  </div>

  {/* 24/7 Support */}
  <div className="flex flex-col items-center mb-8 md:mb-0">
    <Image src="/hour.png" width={65} height={65} alt="hour" className="m-0 p-0" />
    <div className="w-[217px] h-[127px] text-center">
      <h6 className="text-[#151875] text-sm mt-8">24/7 Support</h6>
      <p className="text-sm text-[#8A8FB9] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam.</p>
    </div>
  </div>
</div>

{/* Client Section */}
<div className="flex flex-col justify-center items-center mt-28">
  <h1 className="font-josefin font-bold text-2xl text-center">Our Client Say</h1>
  <div className="mt-4">
    <Image src="/comment.png" width={689} height={265} alt="comment section" />
  </div>
</div>




    </>
  )
}

export default Feature
