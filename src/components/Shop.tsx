
// import Image from "next/image";

import Image from "next/image";
import Link from "next/link";



// const MyComponent = () => {
//   // Array containing the image paths
//   const images = [
//     "/gr1.png", 
//     "/g2.png", 
//     "/g3.png", 
//     "/g4.png", 
//     "/g5.png", 
//     "/g6.png"
//   ];

//   return (
//     <div className="flex flex-col items-center space-y-6"> {/* Adjusting the vertical space between images */}
//       {images.map((image, index) => (
//         <div key={index} className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
//           {/* Tailwind classes for responsive width */}
//           <Image 
//             src={image} 
//             width={1145} 
//             height={254} 
//             alt={`Image ${index + 1}`} 
//             className="w-full h-auto rounded-lg" 
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyComponent;

  

// src/components/Shop.tsx

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


// Sanity client setup
const sanityClient = createClient({
  projectId: 'your-project-id', // Your Sanity project ID
  dataset: 'your-dataset', // Your dataset name
  useCdn: true, // Use CDN for fast fetching
});

// Set up the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to construct the image URL from Sanity asset
function urlFor(source) {
  if (source?.asset?._ref) {
    return builder.image(source);
  }
  return null; // Return null if the image reference is not valid
}

const MyComponent = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        console.log(product.image); // Debugging the image field
        return (
          <div key={product.slug.current} className="product-card">
            <Link href={`/shop/${product.slug.current}`}>
    
                {/* Check if the image URL exists before rendering */}
                {product.image && product.image.asset ? (
                  <Image
                    src={urlFor(product.image)?.width(500).url() || '/default-image.jpg'} // Fallback image if URL is undefined
                    alt={product.name}
                    width={500}
                    height={500}
                  />
                ) : (
                  <div>No image available</div> // Fallback UI if no image
                )}
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              

            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MyComponent;


