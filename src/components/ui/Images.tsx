

"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { useShoppingCart } from 'use-shopping-cart';  // Import the use-shopping-cart hook

const getProductData = async () => {
  const res = await client.fetch(`
    *[_type == 'images'] | order(_createdAt desc)[0..3] {
      title,
      image,
      slug,
      price,
      description
    }
  `);
  return res;
};

interface IImageData {
  slug: { current: string };
  title: string;
  description: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const Images = () => {
  const { cartCount,addItem } = useShoppingCart();  // Access addItem from use-shopping-cart
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
      <section id='featured'>
        <div className="text-center mb-8">
          <h1 className="font-josefin mt-10 mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#151875]">
            Featured Products    
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 lg:px-24">
          {data.map((item) => (
            <div key={item.slug.current} className="bg-white p-4 border border-gray-200 rounded-md shadow-md">

              <Link href={`/${item.slug.current}`}>
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
              <h4 className="font-semibold text-[#151875] text-center mt-3">{`Rs.${item.price}`}</h4>
              
              {/* Add to Cart Button with functionality */}
              <div className="flex justify-center mt-4">

              <Link href={`/${item.slug.current}`}>

                <button
                  className="bg-[#FB2E86] text-white py-2 px-6 rounded-md hover:bg-[#F8709B] transition-all duration-300">
                 
                
                View Details
                </button>
                    </Link>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
};
  
export default Images;









// "use client";

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';


// const getProductData = async () => {

//   const res = await client.fetch(`
//     *[_type == 'images'] | order(_createdAt desc)[0..3] {
//       title,
//       image,
//       slug,
//       price,
//       description
//     }
//   `);
//   return res;
// };

// interface IImageData {
//   slug: { current: string };
//   title: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
// }

// const Images = () => {

//   const [data, setData] = useState<IImageData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const productData = await getProductData();
//       setData(productData);  // Set the fetched data into state
//     };

//     fetchData();
//   }, []);
    
//   return (
//     <>
//     <section id='featured'>
//       <div className="text-center mb-8">
//         <h1 className="font-josefin mt-10 mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#151875]">
//           Featured Products    
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 lg:px-24">
//         {data.map((item) => (
//           <div key={item.slug.current} className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
//             <Link href={`/components/images/${item.slug.current}`}>
//               {/* Image with hover effect */}
//               <div className="overflow-hidden relative">
//                 {item.image ? (
//                   <Image
//                     src={urlFor(item.image).url()}
//                     alt={item.title}
//                     width={370}
//                     height={460}
//                     className="w-full h-auto object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
//                   />
//                 ) : (
//                   <p className="text-center text-gray-500">No image available</p>
//                 )}
//               </div>
//             </Link>
             
//             {/* Product Title */}
//             <h3 className="font-bold font-josefin text-[#FB2E86] text-center mt-2">{item.title}</h3>
            
//             {/* Product Price */}
//             <h4 className="font-semibold text-[#151875] text-center mt-3">{`Rs.${item.price}`}</h4>
            
//             {/* Add to Cart Button (Optional) */}
//             <div className="flex justify-center mt-4">
//               <button
//                 className="bg-[#FB2E86] text-white py-2 px-6 rounded-md hover:bg-[#F8709B] transition-all duration-300"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       </section>
//     </>
//   );
// };
  
// export default Images;

