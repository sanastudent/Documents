
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from '@portabletext/react';

type PageParams = {
  slug: string;
};

type PageProps = {
  params: PageParams;
};

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  // Ensure slug is defined
  if (!slug) {
    return <div>Slug is undefined, unable to fetch post.</div>;
  }

  // Query to fetch the post based on the slug
  const query = `*[_type == 'post' && slug.current == $slug]{
    title, summary, image, content
  }[0]`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex justify-center mt-12">
      {/* Box Style */}
      <article className="w-full max-w-3xl p-8 bg-light/90 dark:bg-dark/40 rounded-lg shadow-md shadow-gray-300 dark:shadow-black/80">
        <h1 className="text-xl text-[#151875] xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {post.title}
        </h1>

        <div className="my-6">
          <Image
            src={urlFor(post.image).url()}
            alt={post.title}
            width={800}
            height={500}
            className="rounded-lg"
          />
        </div>

        <section>
          <h2 className="text-xl text-[#151875] xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            Summary
          </h2>
          <p className="text-[#8A8FB9] text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {post.summary}
          </p>
        </section>

        {/* Main Body */}
        <section className="mt-8">
          <PortableText value={post.content} />
        </section>
      </article>
    </div>
  );
}
