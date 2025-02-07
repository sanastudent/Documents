// "use client"
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect,useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';




// const getProductData = async () => {
//   const res = await client.fetch(`
//    *[_type == "categories"]{
//   title,
//   image,
//   price
// }

//   `);
//   return res;
// };

// interface IImageData {
//   title: string;
//   slug:string,
//   _id:string,
//   price:number,
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
// }



// const Categories = () => {

//   const [data, setData] = useState<IImageData[]>([]);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         const productData = await getProductData();
//         setData(productData);  // Set the fetched data into state
//       };
  
//       fetchData();
//     }, []);
  
//   return (
//     <div className="flex flex-col items-center justify-center px-4 mt-2">
//       {/* Heading */}
//       <h1 className="font-josefin text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#151875]">
//         Top Categories
//       </h1>

        
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 lg:px-24"> 
//   {data.map((item) => (
//     <div key={item._id} className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
//       <Link href={`/product/${item.slug}`}>
//         {/* Image with hover effect */}
//         <div className="overflow-hidden relative">
//           {item.image ? (
//             <Image
//               src={urlFor(item.image).url()}
//               alt={item.title}
//               width={370}
//               height={460}
//               className="w-full h-auto object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
//             />
//           ) : (
//             <p className="text-center text-gray-500">No image available</p>
//           )}
//         </div>
//       </Link>
      
//       {/* Product Title */}
//       <h3 className="font-bold font-josefin text-[#FB2E86] text-center mt-2">{item.title}</h3>
      
//       {/* Product Price */}
//       <h4 className="font-semibold text-[#151875] text-center mt-3">{`$.${item.price}`}</h4>
      
//       {/* Add to Cart Button (Optional) */}
//       <div className="flex justify-center mt-4">
//         <button
//           className="bg-[#FB2E86] text-white py-2 px-6 rounded-md hover:bg-[#F8709B] transition-all duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   ))}
// </div>















//       {/* Decorative Dot */}
//       <div className="mt-12 flex justify-center">
//         <Image src="/dot.png" width={66} height={15} alt="dot" className="w-full max-w-[66px]" />
//       </div>


//       {/* Background Image */}
//        <div className="mt-8 relative w-full h-[450px]">
//         <Image 
//           src="/pic.png" 
//           alt="pic" 
//           layout="fill" 
//           objectFit="cover" 
//           className="absolute top-0 left-0" 
//         />
//       </div> 
  




//       {/* Full-width Image */}
//       <div className="mt-10 max-w-full overflow-hidden">
//         <Image src="/img.png" height={904} width={903} alt="img" className="w-full h-auto" />
//       </div>
//     </div>
//   );
// };

// export default Categories;



"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { useShoppingCart } from 'use-shopping-cart'; 

const getProductData = async () => {
  const res = await client.fetch(`
   *[_type == "categories"]{
    title,
    image,
    price,
    slug
  }
  `);
  return res;
};

interface IImageData {
  title: string;
  slug: string;
  _id: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const Categories = () => {
  const { addItem } = useShoppingCart(); // Access addItem to add items to the cart
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
    <div className="flex flex-col items-center justify-center px-4 mt-2">
      {/* Heading */}
      <h1 className="font-josefin text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#151875]">
        Top Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 lg:px-24">
        {data.map((item) => (
          <div key={item._id} className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
            <Link href={`/product/${item.slug}`}>
              {/* Image with hover effect */}
              <div className="overflow-hidden relative">
                {item.image ? (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={370}
                    height={460}
                    className="w-full h-auto object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                ) : (
                  <p className="text-center text-gray-500">No image available</p>
                )}
              </div>
            </Link>

            {/* Product Title */}
            <h3 className="font-bold font-josefin text-[#FB2E86] text-center mt-2">{item.title}</h3>

            {/* Product Price */}
            <h4 className="font-semibold text-[#151875] text-center mt-3">{`₹${item.price}`}</h4>

            {/* Add to Cart Button */}
            <div className="flex justify-center mt-4">
              <button
                className="bg-[#FB2E86] text-white py-2 px-6 rounded-md hover:bg-[#F8709B] transition-all duration-300"
                onClick={() =>
                  addItem({
                    sku: item.slug, // Unique identifier for the item
                    name: item.title,
                    price: item.price,
                    image: item.image ? urlFor(item.image).url() : '', // Image URL
                    quantity: 1, // Default quantity
                    currency: 'INR', // Currency type
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Dot */}
      <div className="mt-12 flex justify-center">
        <Image src="/dot.png" width={66} height={15} alt="dot" className="w-full max-w-[66px]" />
      </div>

      {/* Background Image */}
      <div className="mt-8 relative w-full h-[450px]">
        <Image
          src="/pic.png"
          alt="pic"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
      </div>

      {/* Full-width Image */}
      <div className="mt-10 max-w-full overflow-hidden">
        <Image src="/img.png" height={904} width={903} alt="img" className="w-full h-auto" />
      </div>
    </div>
    </>
  );
};

export default Categories;
