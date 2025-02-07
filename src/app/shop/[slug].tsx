

// pages/shop/[slug].tsx
import { useRouter } from 'next/router';
import { SanityClient } from 'sanity';
import Image from 'next/image';
import { createClient } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const ProductDetailPage = ({ product }) => {
  const router = useRouter();

  // Handle loading state for SSR or fallback pages
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.image.asset.url} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch all products to create dynamic paths
  const products = await client.fetch('*[_type == "product"]');
  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Fetch product data based on the slug
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  return {
    props: { product },
    revalidate: 10, // Optional: Revalidate after 10 seconds for dynamic updates
  };
}

export default ProductDetailPage;
