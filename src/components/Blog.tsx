
"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { useEffect,useState } from 'react';
import { client } from '@/sanity/lib/client';




const getProductData = async () => {
  const res = await client.fetch(`
   *[_type == "blog"]{
  title,
  image {
    asset -> {
      url
    }
  },

}
  `);
  return res;
};


interface IImageData {
  title: string;
  slug: {
    current: string; 
  };
  _id:string,
  author:string,
  publishDate:string,
  description:string,
  image: {
    asset: {
      _ref: string;
    };
  };
}

const Blog = () => {

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
        Latest Blog
       </h1>
        
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12 lg:px-24">
  {data.map((item) => (
    <div
      key={item._id}
      className="bg-white p-4 border border-gray-200 rounded-md shadow-md flex flex-col items-center" // Centering the content using flex
    >
         
        
      <Link href={`/blog/${item.slug}`}>
       
       {/* Image with hover effect */}
       <div className="overflow-hidden relative w-full flex justify-center">
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
      <h3 className="font-bold font-josefin text-[#151875] text-center mt-2">{item.title}</h3>
    </div>
  ))}
</div>

 

    </>
  );
};

export default Blog;





        {/* Read More dynamic Link
           <Link
            href={`/blog`}  
            className="block text-[#151875] px-4 py-1 text-center bg-accentDarkSecondary rounded text-dark font-semibold mt-4">
           Read More
           </Link> */}

























