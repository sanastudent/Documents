 

import BlogCard from "@/components/BlogCard";
import Footer from "@/components/ui/Footer";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Define the Post type
type Post = {
  title: string;
  summary: string;
  slug: { current: string };  // Slug is an object with a 'current' field
  image: {
    asset: {
      _ref: string;
    };
  };
};


export const revalidate = 60; // in seconds

export default async function Blog() {
  // Sanity GROQ query to fetch posts
  const query = `*[_type == 'post'] {
    title,slug, summary, image, content
  }`;

  // Fetch posts from Sanity
  const posts: Post[] = await client.fetch(query);

  return (
    <>

  {/* Header Section */}
    
  <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16">
        <div className="font-josefin text-left ml-4 sm:ml-8 md:ml-16">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold">Blog Page</h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Home . Pages <span className="text-[#FB2E86]">Blog Page</span>
          </p>
        </div>
      </div>


          <main className="flex flex-col lg:flex-row px-4 mt-14 gap-12">   
  <section className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-12">
    {/* Map over the fetched posts */}
    {posts.map((post) => (
      <BlogCard post={post} key={post.slug.current} />
    ))}
  </section>


 {/* Right section */}
 <div className="lg:w-[300px] w-full mt-10 lg:mt-0 lg:ml-7 space-y-8">
          <div>
            <Image src="/search.png" width={270} height={77} alt="search" />
          </div>

          <div>
            <Image src="/categories.png" width={254} height={161} alt="categories" />
          </div>

          <div>
            <Image src="/recent.png" width={120} height={22} alt="recent" />
          </div>

          <div>
            <Image src="/tour1.png" width={250} height={201} alt="tour" />
          </div>

          <div>
            <Image src="/sale.png" width={129} height={22} alt="sale" />
          </div>

          <div>
            <Image src="/tour2.png" width={250} height={201} alt="tour" />
          </div>

          <div>
            <Image src="/offer.png" width={129} height={22} alt="sale" />
          </div>

          <div>
            <Image src="/item.png" width={250} height={201} alt="tour" />
          </div>

          <div>
            <Image src="/follow.png" width={126} height={78} alt="follow" />
          </div>

          <div>
            <Image src="/tags.png" width={47} height={22} alt="tags" />
          </div>

          <div>
            <Image src="/tagn.png" width={228} height={64} alt="tags" />
          </div>
        </div>


</main>

{/* <Footer/> */}
</>
  );
}





















