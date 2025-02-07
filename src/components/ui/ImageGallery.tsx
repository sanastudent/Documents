
// import Image from 'next/image'
// import React from 'react'


// const images = [
//   { src: "/grey.png", alt: "Image 1" },
//   { src: "/ligthtsofa.png", alt: "Image 2" },
//   { src: "/dark.png", alt: "Image 3" },
//   { src: "/bag.png", alt: "Image 4" },
//   { src: "/watch.png", alt: "Image 5" },
//   { src: "/watch2.png", alt: "Image 6" },
//   { src: "/camera.png", alt: "Image 7" },
//   { src: "/hphone.png", alt: "Image 8" },
//   { src: "/watch3.png", alt: "Image 9" },
//   { src: "/redchair.png", alt: "Image 10" },
//   { src: "/pinksofa.png", alt: "Image 11" },
//   { src: "/blphone.png", alt: "Image 12" }
// ];

// function ImageGallery() {
//   return (
//     <div className="px-4 sm:px-8 lg:px-24 xl:px-40 py-4">
//     {/* Image Grid */}
//     <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//       {images.map((image, index) => (
//         <div key={index} className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
//           <Image
//             src={image.src}
//             alt={image.alt} width={270} height={363}
//             className="  w-full h-auto object-cover rounded-md"
//           />
//         </div>
//       ))}


//     </div>
//     <div className="mt-10 flex justify-center items-center">
//   <Image 
//     src="/img.png" 
//     height={904} 
//     width={903} 
//     alt="img" 
//     className="w-full h-auto" 
//   />
// </div>
//   </div>
  
//       )}
// export default ImageGallery;






import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

// Define the Post type
type Post = {
  title: string;
  description: string;
  price:number,
  slug: { current: string };  // Define slug as an object with a 'current' string field
  image: {
    asset: {
      _ref: string;
    };
  };
};

export default function ImageGallery({ post }: { post: Post }) {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 sm:px-8 md:px-16">

      {/* Image Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px]">
        {/* <Image
          src={urlFor(post.image).url()} // Ensure .url() is used
          alt={post.title} // Using post.title for alt text
          layout="fill"
          className="object-cover rounded-md"
        /> */}
        {post.image ? (
  <Image
    src={urlFor(post.image).url()} // Ensure .url() is used
    alt={post.title}
    layout="fill"
    className="object-cover rounded-md"
  />
) : (
  <div>No image available</div> // Show placeholder or fallback if image is missing
)}

      </div>

      {/* Title and Summary Section */}
      <div className="w-full sm:w-2/3 p-4 text-center">
        <h2 className="text-lg sm:text-xl text-[#151875] font-semibold text-dark dark:text-light leading-tight mb-2">
          {post.title}
        </h2>
        <h4 className="font-semibold text-[#151875] text-center mt-3 ">{`$ ${post.price}`}</h4>


        <p className="text-[#8A8FB9] line-clamp-3 mb-4">
          {post.description}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/products/${post.slug.current}`} // Access post.slug.current properly
          className="block text-[#151875] px-4 py-1 text-center bg-accentDarkSecondary rounded text-dark font-semibold mt-4"
        >
          View Details
        </Link>
      </div>

    </main>
  );
}
