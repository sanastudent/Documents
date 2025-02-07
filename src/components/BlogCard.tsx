import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

// Define the Post type
type Post = {
  title: string;
  summary: string;
  slug: { current: string };  // Define slug as an object with a 'current' string field
  image: {
    asset: {
      _ref: string;
    };
  };
};

export default function BlogCard({ post }: { post: Post }) {
  return (
 
    <main className="flex justify-start items-center min-h-screen ml-20 px-4">
  <section className="flex flex-col items-center justify-between bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700 rounded w-full max-w-2xl">
    
    {/* Image Section */}
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px]">
      <Image
        src={urlFor(post.image).url()}  // Ensure .url() is used
        alt={post.title}  // Using post.title for alt text
        layout="fill"
        className="object-cover rounded-t"
      />
    </div>

    {/* Title and Summary Section */}
    <div className="flex flex-col justify-between p-4 w-full">
      <h2 className="text-lg text-[#151875] font-semibold text-dark dark:text-light leading-tight mb-2">
        {post.title}
      </h2>
      <p className="text-[#8A8FB9] line-clamp-3">
        {post.summary}
      </p>

      {/* Read More dynamic Link */}
      <Link
        href={`/blog/${post.slug.current}`}  // Access post.slug.current properly
        className="block text-[#151875] px-4 py-1 text-center bg-accentDarkSecondary rounded text-dark font-semibold mt-4"
      >
        Read More
      </Link>
    </div>

  </section>
</main>

  
  );
}
