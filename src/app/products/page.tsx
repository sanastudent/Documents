
import { Input } from "@/components/ui/input";
import { TableOfContents } from "lucide-react";
// import Products from "../../components/ui/ImageGallery";
import ImageGallery from "../../components/ui/ImageGallery";
import Footer from "@/components/ui/Footer";
import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Define the Post type
type Post = {
  title: string;
  description: string;
  price:number,
  slug: { current: string };  // Slug is an object with a 'current' field
  image: {
    asset: {
      _ref: string;
    };
  };
};


export const revalidate = 60; // in seconds

export default async function Products() {
  // Sanity GROQ query to fetch posts
  const query = `*[_type == 'pages'] {
    title,slug, image,price   }`;

  // Fetch posts from Sanity
  const posts: Post[] = await client.fetch(query);

    return(
        <>
         <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16 ">
       <div className="font-josefin text-left ml-16">
       <h1 className="text-3xl sm:text-3xl md:text-3xl font-semibold">Shop Grid Default</h1>
        <p className="mt-2 text-xsm sm:text-base md:text-lg">
        Home . Pages <span className="text-[#FB2E86]">Shop Grid Default</span>
      </p>
      </div>
      </div>


{/* ecommerce accessories item area */}
<div className="px-14 py-4 mt-12 mb-11">
  {/* Heading and Result Line */}
  <div className="mb-4 ml-20 flex flex-col sm:flex-row sm:justify-between sm:items-center">
    <div>
      <h1 className="font-josefin text-[#151875] text-[18px] sm:text-[14px] md:text-[16px] font-semibold">
        Ecommerce Accessories & Fashion Items
      </h1>
      <p className="font-josefin text-[#8A8FB9] text-[10px] sm:text-[12px] md:text-[14px]">
        About 9,620 results (0.62 seconds)
      </p>
    </div>

    {/* Inputs and Sort Section */}
    <div className="flex mr-24 sm:justify-end items-center space-x-4 mt-2 sm:mt-0">  {/* Adjusted margin-top */}
      <div className="flex items-center space-x-4">
        <p className="font-josefin text-[#8A8FB9]">Per Page:</p>
        <input className="bg-[#f55f5] rounded p-2 border-2 w-24 h-5" />
        <p className="font-josefin text-[#8A8FB9]">Sort By:</p>
        <input className="bg-[#f55f5] rounded p-2 border-2 w-24 h-5 placeholder:text-sm" placeholder="Best Match" />
        <p className="font-josefin text-[#8A8FB9]">View</p>
        <TableOfContents />
        <input className="bg-[#f55f5] rounded p-2 border-2 w-44 h-5" />
      </div>
    </div>
  </div>
</div>


<section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
  {/* Map over the fetched posts */}
    {posts.map((post) => (
    <ImageGallery post={post} key={post.slug.current} />
  ))}
</section>   
        
        </>
    )
}












































































































































// import Footer from "@/components/ui/Footer"
// import ImageGallery from "@/components/ui/ImageGallery"
// import { ArrowRight } from "lucide-react"
// import Image from "next/image";


// export default function Products(){
//     return(
//           <>
//             <div className="w-full h-[286px] bg-[#F6F5FF] flex justify-start pl-4 sm:pl-8 md:pl-16 ">
//        <div className="font-josefin text-left ml-16">
//        <h1 className="text-3xl mt-10 sm:text-3xl md:text-3xl font-semibold">Product Details</h1>
//         <p className="mt-2 text-xsm sm:text-base md:text-lg">
//         Home . Pages <span className="text-[#FB2E86]">Product Details</span>
//       </p>
//       </div>
//       </div>

//               {/* Page starts from here  */}
            
//   <div className=" ml-20 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">

//     {/* Left Section: Three vertically stacked images */}
//     <div className="flex flex-col w-full md:w-[200px] mb-6 md:mb-0 md:mr-6">
//       <div className="mb-4">
//         <Image src="/hp.png" width={151} height={155} alt="hp" />
//       </div>
//       <div className="mb-4">
//         <Image src="/hp2.png" width={151} height={155} alt="hp2" />
//       </div>
//       <div>
//         <Image src="/hp3.png" width={151} height={155} alt="hp3" />
//       </div>
//     </div>

//     {/* Right Section: One large image */}
//     <div className="w-full md:w-[760px]">
//       <Image src="/mp.png" width={357} height={487} alt="main" />
//     </div>

//   </div>

// <div className="ml-24 mt-20 mb-16 font-josefin text-[#151875]">
//   <div className="flex gap-10">
//   <h1 className=" font-semibold">Description</h1>
//   <h1 className=" font-semibold">Additional Info</h1>
//   <h1 className=" font-semibold">Reviews</h1>
//   <h1 className="font-semibold">Video</h1>
// </div>
// </div>

// <div className="font-josefin ml-20">
//         <h1 className="text-[#151875] font-semibold  ">More details</h1>

//         <div className="space-y-4 mt-4">
//           <p className="flex items-center text-[#A9ACC6] text-sm sm:text-base md:text-lg">
//             <ArrowRight className="text-[#151875] mr-2" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat dolorum sed modi tempora.
//           </p>
//           <p className="flex items-center text-[#A9ACC6] text-sm sm:text-base md:text-lg">
//             <ArrowRight className="text-[#151875] mr-2" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat dolorum sed modi tempora.
//           </p>
//           <p className="flex items-center text-[#A9ACC6] text-sm sm:text-base md:text-lg">
//             <ArrowRight className="text-[#151875] mr-2" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat dolorum sed modi tempora.
//           </p>
//           <p className="flex items-center text-[#A9ACC6] text-sm sm:text-base md:text-lg">
//             <ArrowRight className="text-[#151875] mr-2" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat dolorum sed modi tempora.
//           </p>
//           </div>
//           </div>


// {/* Related products area */}
 
//           <div className=" px-8 sm:px-16 lg:px-44 py-4">
//   {/* Heading */}
//   <div className=" mb-8 ">
//     <h1 className="font-josefin mt-10 mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#151875]">
//       Related Products
//     </h1>
//   </div>

//   {/* Image Grid */}
//   <div className="container mr-24 mx-auto px-4 md:px-8" >
  
//   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
//     {/* Image 1 */}
//     <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
//       <Image
//         src="/man.png"
//         alt="man" width={270} height={361}
//         className="w-full h-auto object-cover rounded-md"
//       />
//     </div>

//     {/* Image 2 */}
//     <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
//       <Image
//         src="/girl.png"
//         alt="girl" width={270} height={361}
//         className="w-full h-auto object-cover rounded-md"
//       />
//     </div>

//     {/* Image 3 */}
//     <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
//       <Image
//         src="/sgirl.png"
//         alt="sgirl" width={270} height={361}
//         className="w-full h-auto object-cover rounded-md"
//       />
//     </div>

//     {/* Image 4 */}
//     <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
//       <Image
//         src="/stgirl.png"
//         alt="stgirl" width={270} height={361}
//         className="w-full h-auto object-cover rounded-md"
//       />
//     </div>
//   </div>
// </div>
// </div>

// <div className="mt-10 flex justify-center items-center">
//   <Image 
//     src="/img.png" 
//     height={904} 
//     width={903} 
//     alt="img" 
//     className="w-full h-auto" 
//   />
// </div>          
//           </>


//     )
// }