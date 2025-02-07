

// import Image from "next/image";
// import Link from "next/link";
// import { urlFor } from "@/sanity/lib/image";

// // Define the Post type
// type Post = {
//   title: string;
//   description: string;
//   price:number,
//   slug: { current: string };  // Define slug as an object with a 'current' string field
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
// };

// export default function ShopGallery({ post }: { post: Post }) {
//   return (
//     <main className="flex flex-col items-center min-h-screen px-4 sm:px-8 md:px-16">

//       {/* Image Section */}
//       <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px]">
//         {post.image ? (
//   <Image
//     src={urlFor(post.image).url()} // Ensure .url() is used
//     alt={post.title}
//     layout="fill"
//     className="object-cover rounded-md"
//   />
// ) : (
//   <div>No image available</div> // Show placeholder or fallback if image is missing
// )}

//       </div>

//       {/* Title and Summary Section */}
//       <div className="w-full sm:w-2/3 p-4 text-center">
//         <h2 className="text-lg sm:text-xl text-[#151875] font-semibold text-dark dark:text-light leading-tight mb-2">
//           {post.title}
//         </h2>
//         <h4 className="font-semibold text-[#151875] text-center mt-3 ">{`$ ${post.price}`}</h4>


//         <p className="text-[#8A8FB9] line-clamp-3 mb-4">
//           {post.description}
//         </p>

//         {/* Read More dynamic Link */}
//         <Link
//           href={`/shop/${post.slug.current}`} // Access post.slug.current properly
//           className="block text-[#151875] px-4 py-1 text-center bg-accentDarkSecondary rounded text-dark font-semibold mt-4"
//         >
//           View Details
//         </Link>
//       </div>

//     </main>
//   );
// }


import { Post } from "@/type";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; 
import Link from "next/link";

export default function ShopGallery({ post }: { post: Post }) {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 sm:px-8 md:px-16">
      {/* Image Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px]">
        {post.image ? (
          <Image
            src={urlFor(post.image).url()}  // Generate URL using urlFor
            alt={post.title}
            layout="fill"
            className="object-cover rounded-md"
          />
        ) : (
          <div>No image available</div>  // Fallback in case image is missing
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
          href={`/shop/${post.slug.current}`} // Access post.slug.current properly
          className="block text-[#151875] px-4 py-1 text-center bg-accentDarkSecondary rounded text-dark font-semibold mt-4"
        >
          View Details
        </Link>
      </div>
    </main>
  );
}
