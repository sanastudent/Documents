


"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { useShoppingCart } from 'use-shopping-cart';

const getProductData = async () => {
  const res = await client.fetch(`
   *[_type == "latest"]{
  title,
  image,
  regularPrice,
  discountedPrice
}

  `);
  return res;
};

interface IImageData {
  title:  string,
  slug: { current: string },
  _id:string,
  regularPrice: number,
  discountedPrice:number,
  image: {
    asset: {
      _ref: string;
    };
  };
}

const Latest = () => {
  const { cartCount,addItem } = useShoppingCart();  

  const [data, setData] = useState<IImageData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProductData();
      setData(productData);  // Set the fetched data into state
    };

    fetchData();
  }, []);

  return (
    <>
      
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#151875] mt-20 mb-6 text-center">
        Latest Products
       </h1>

       {/* Words below heading */}
        <div className="flex justify-center space-x-6 mb-8">
        <a href="#Sofa" className="text-sm sm:text-base font-medium text-[#151875] cursor-pointer hover:text-[#FB2E86] hover:underline">New Arrival</a>
        <a href="#Trend" className="text-sm sm:text-base font-medium text-[#151875] cursor-pointer hover:text-[#FB2E86] hover:underline">Best Seller</a>
        <a href="#featured" className="text-sm sm:text-base font-medium text-[#151875] cursor-pointer hover:text-[#FB2E86] hover:underline">Featured</a>
        <a href="#Special" className="text-sm sm:text-base font-medium text-[#151875] cursor-pointer hover:text-[#FB2E86] hover:underline">Special Offer</a>
       </div>

<div className="grid grid-cols-3 gap-6 px-4 sm:px-6 md:px-12 lg:px-24">
   {data.map((item) => (
    <div key={item._id} className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
      <Link href={`/product/${item.slug?.current}`}>
         {/* Image with hover effect  */}
         <div className="overflow-hidden relative">
          {item.image ? (
            <Image
              src={urlFor(item.image).url()}
              alt={item.title}
              width={370}
              height={460}
              className="w-full h-auto object-cover object-top rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          ) : (
            <p className="text-center text-gray-500">No image available</p>
          )}
        </div>
      </Link> 
       

      {/* Product Title */}
      <h3 className="font-bold font-josefin text-[#FB2E86] text-center mt-2">{item.title}</h3>
      
      {/* Product Price */}
      <h4 className="font-semibold text-[#151875] text-center mt-3 line-through">{`Rs.${item.regularPrice}`}</h4>
      <h4 className="font-semibold text-[#FB2E86] text-center mt-3">{`Rs.${item.discountedPrice}`}</h4>

      
      {/* Add to Cart Button (Optional) */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-[#FB2E86] text-white py-2 px-6 rounded-md hover:bg-[#F8709B] transition-all duration-300"
          onClick={() => {
            addItem({
              sku: item.slug.current, // Replace `id` with `sku`
              name: item.title,
              price: item.discountedPrice,
              image: item.image ? urlFor(item.image).url() : '', // Image URL
              quantity: 1, 
              currency: 'Pak',
            })
            console.log("Cart Count:", cartCount); // Check cart count after item added

          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default Latest;



