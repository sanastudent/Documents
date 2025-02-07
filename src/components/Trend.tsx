

// "use client";

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';

// const getProductData = async () => {
//   const res = await client.fetch(`
//    *[_type == "trend"]{
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

// const Trends = () => {
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
//       <section id='Trend'>
//       <h1 className="text-3xl sm:text-4xl font-semibold text-[#151875] mt-20 mb-6 text-center">
//         Trending Products
//        </h1>

   
        
//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 lg:px-24"> 
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
// </section>

//     </>
//   );
// };

// export default Trends;


"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { useShoppingCart } from 'use-shopping-cart'; 

const getProductData = async () => {
  const res = await client.fetch(`
   *[_type == "trend"]{
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

const Trend = () => {
  const { cartCount, addItem } = useShoppingCart();  // Access the addItem function from the hook
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
      <section id='Trend'>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#151875] mt-20 mb-6 text-center">
          Trending Products
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
              <h4 className="font-semibold text-[#151875] text-center mt-3">{`$${item.price}`}</h4>

              {/* Add to Cart Button */}
              <div className="flex justify-center mt-4">
                <button
                  className="bg-[#FB2E86] text-white py-2 px-6 rounded-md hover:bg-[#F8709B] transition-all duration-300"
                  onClick={() => addItem({
                    sku: item.slug,  // Unique identifier for the product
                    name: item.title, // Name of the product
                    price: item.price, // Price of the product
                    image: item.image ? urlFor(item.image).url() : '', // Image URL of the product
                    quantity: 1,  // Default quantity
                    currency: 'USD', // Currency in which the product is priced
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Trend;
















































































